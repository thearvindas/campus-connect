import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const register = async (email, password, name) => {
    try {
      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      // Wait a moment for the session to be established
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create the profile using the service role key
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert([
          {
            id: authData.user.id,
            email: email,
            full_name: name,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ], {
          onConflict: 'id'
        });

      if (profileError) {
        console.error('Profile creation error:', profileError);
        throw new Error('Failed to create profile. Please try again.');
      }

      return { user: authData.user, session: authData.session };
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  const getUserProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  };

  const updateUserProfile = async (userId, updates) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);

    if (error) throw error;
    return data;
  };

  const isEmailConfirmed = () => {
    return user?.email_confirmed_at || user?.confirmed_at;
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    getUserProfile,
    updateUserProfile,
    isEmailConfirmed
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 