import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProfileSetup from './pages/ProfileSetup';
import ProfileView from './pages/ProfileView';
import ProfileEdit from './pages/ProfileEdit';
import FindPartners from './pages/FindPartners';
import Connections from './pages/Connections';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import StudyGroups from '@/pages/StudyGroups';
import Schedule from '@/pages/Schedule';
import Landing from '@/pages/Landing';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {user && <Navbar />}
      <main className={user ? "container mx-auto py-6 px-4 space-y-8" : ""}>
        <Routes>
          {/* Public routes */}
          <Route 
            path="/auth" 
            element={!user ? <Auth /> : <Navigate to="/home" replace />} 
          />
          <Route
            path="/"
            element={user ? <Navigate to="/home" replace /> : <Landing />}
          />
          
          {/* Protected routes */}
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/" replace />}
          />
          <Route
            path="/profile-setup"
            element={user ? <ProfileSetup /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/profile/:id"
            element={user ? <ProfileView /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/profile/edit"
            element={user ? <ProfileEdit /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/find-partners"
            element={user ? <FindPartners /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/connections"
            element={user ? <Connections /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/study-groups"
            element={user ? <StudyGroups /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/schedule"
            element={user ? <Schedule /> : <Navigate to="/auth" replace />}
          />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 