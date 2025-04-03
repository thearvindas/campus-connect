import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-white">
            CampusConnect
          </Link>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <Link to="/auth?mode=login">
                Sign In
              </Link>
            </Button>
            <Button
              asChild
              className="bg-white text-[#2a1052] hover:bg-white/90"
            >
              <Link to="/auth?mode=signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 