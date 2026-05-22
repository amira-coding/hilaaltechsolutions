import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-poppins font-bold text-lg">
                H
              </div>
              <span className="font-poppins font-bold text-xl tracking-tight text-white">
                Hilaal <span className="text-accent">Tech</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering modern businesses with smart, scalable, and secure digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-3">
              {[{name: 'Home', path: '/'}, {name: 'About Us', path: '/about'}, {name: 'Services', path: '/services'}, {name: 'Projects', path: '/projects'}].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Web Development', 'Mobile Applications', 'UI/UX Design', 'IT Consulting'].map(link => (
                <li key={link}>
                  <Link to="/services" className="text-gray-400 hover:text-accent transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Tech Boulevard, Suite 500<br/>Innovation City, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-400">+254722688458</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-400">info@hilaaltechsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hilaal Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
