import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (email, password, name) => {
    try {
      // Create a unique user ID
      const userId = `user_${Date.now()}`;
      
      // Create user object
      const userData = {
        id: userId,
        name,
        email,
        createdAt: new Date().toISOString()
      };

      // Store user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      
      return userData;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Failed to create account');
    }
  };

  const login = async (email, password) => {
    try {
      // For demo purposes, we'll just create a new user
      const userId = `user_${Date.now()}`;
      const userData = {
        id: userId,
        name: email.split('@')[0], // Use email prefix as name for demo
        email,
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('currentUser', JSON.stringify(userData));
      setUser(userData);
      
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 