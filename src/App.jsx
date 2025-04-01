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

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" replace />} />
          
          {/* Protected routes */}
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/auth" replace />}
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
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App; 