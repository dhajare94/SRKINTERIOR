import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-neutral-900" : "";
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-8 bg-[#f5f2ef]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-[0.2em] text-neutral-800">
            SRK INTERIOR
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 uppercase text-sm">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Portfolio
            </Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>
              Projects
            </Link>
            <Link to="/designs" className={`nav-link ${isActive('/designs')}`}>
              Services
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neutral-800" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#f5f2ef] border-t border-neutral-200 px-6 py-8">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/projects" 
                className={`nav-link ${isActive('/projects')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/designs" 
                className={`nav-link ${isActive('/designs')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;