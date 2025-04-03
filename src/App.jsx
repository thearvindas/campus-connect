import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

// Pages
import Landing from '@/pages/Landing';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import ProfileSetup from '@/pages/ProfileSetup';
import ProfileView from '@/pages/ProfileView';
import ProfileEdit from '@/pages/ProfileEdit';
import FindPartners from '@/pages/FindPartners';
import Connections from '@/pages/Connections';
import StudyGroups from '@/pages/StudyGroups';
import Schedule from '@/pages/Schedule';

// Components
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/auth/PrivateRoute';

const App = () => {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark">
        <AuthProvider>
          <div className="min-h-screen bg-background">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Protected routes */}
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <Home />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile-setup"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <ProfileSetup />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <ProfileView />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/edit"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <ProfileEdit />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/find-partners"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <FindPartners />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/connections"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <Connections />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/study-groups"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <StudyGroups />
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/schedule"
                element={
                  <PrivateRoute>
                    <>
                      <Navbar />
                      <Schedule />
                    </>
                  </PrivateRoute>
                }
              />
            </Routes>
            <Toaster />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App; 