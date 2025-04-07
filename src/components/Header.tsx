
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sf-header py-4">
      <div className="sf-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">SaveFrom</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">وێنە</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                سەرەکی
              </Link>
            </li>
            <li>
              <Link to="/youtube" className="text-gray-600 hover:text-blue-600 transition-colors">
                یوتوب
              </Link>
            </li>
            <li>
              <Link to="/instagram" className="text-gray-600 hover:text-blue-600 transition-colors">
                ئینستاگرام
              </Link>
            </li>
            <li>
              <Link to="/facebook" className="text-gray-600 hover:text-blue-600 transition-colors">
                فەیسبووک
              </Link>
            </li>
            <li>
              <Link to="/tiktok" className="text-gray-600 hover:text-blue-600 transition-colors">
                تیک تۆک
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
