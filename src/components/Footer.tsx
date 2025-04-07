
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="sf-footer py-8">
      <div className="sf-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SaveFrom Mirror</h3>
            <p className="text-gray-600">
              This is a mirror of the SaveFrom.net service that helps you download videos from various platforms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/youtube" className="text-gray-600 hover:text-blue-600 transition-colors">
                  YouTube Downloader
                </Link>
              </li>
              <li>
                <Link to="/instagram" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Instagram Downloader
                </Link>
              </li>
              <li>
                <Link to="/facebook" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Facebook Downloader
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} SaveFrom Mirror. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
