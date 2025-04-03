import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1f0b3f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,0,255,0.1),rgba(120,0,255,0)_70%)]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.05
      }}></div>
      <div className="relative">
        <div className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">CampusConnect</h3>
              <p className="text-white/70 text-sm">
                Transforming the way students collaborate and learn together.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-medium">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/study-groups" className="text-white/70 hover:text-white text-sm transition-colors">
                    Study Groups
                  </Link>
                </li>
                <li>
                  <Link to="/schedule" className="text-white/70 hover:text-white text-sm transition-colors">
                    Schedule Sessions
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-medium">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-white/50 text-sm">
              © {new Date().getFullYear()} CampusConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 