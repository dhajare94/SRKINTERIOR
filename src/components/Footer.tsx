import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f2ef] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-light text-neutral-800 mb-4">About</h3>
            <p className="text-neutral-600">
              SRK Interior creates timeless spaces that inspire and elevate everyday living through thoughtful design and attention to detail.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-light text-neutral-800 mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-600">
              <li><Link to="/designs" className="hover:text-neutral-800">Interior Design</Link></li>
              <li><Link to="/designs" className="hover:text-neutral-800">Space Planning</Link></li>
              <li><Link to="/designs" className="hover:text-neutral-800">Renovation</Link></li>
              <li><Link to="/designs" className="hover:text-neutral-800">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light text-neutral-800 mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>123 Design Street</li>
              <li>Creative City, ST 12345</li>
              <li>info@srkinterior.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light text-neutral-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-neutral-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@srkinterior.com" className="text-neutral-600 hover:text-neutral-800">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} SRK Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;