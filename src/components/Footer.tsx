
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="sf-footer py-8">
      <div className="sf-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">دەربارەی xara.gamming وێنە</h3>
            <p className="text-gray-600">
              ئەمە وێنەیەکی خزمەتگوزاری xara.gamming.net ـە کە یارمەتیت دەدات بۆ داگرتنی ڤیدیۆ لە پلاتفۆرمە جیاجیاکان.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">بەستەری خێرا</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  سەرەکی
                </Link>
              </li>
              <li>
                <Link to="/youtube" className="text-gray-600 hover:text-blue-600 transition-colors">
                  داگری یوتوب
                </Link>
              </li>
              <li>
                <Link to="/instagram" className="text-gray-600 hover:text-blue-600 transition-colors">
                  داگری ئینستاگرام
                </Link>
              </li>
              <li>
                <Link to="/facebook" className="text-gray-600 hover:text-blue-600 transition-colors">
                  داگری فەیسبووک
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">پشتگیری</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  پەیوەندیمان پێوە بکە
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                  پرسیاری دووبارەکراو
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  مەرجەکانی بەکارهێنان
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  سیاسەتی تایبەتمەندی
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} xara.gamming وێنە. هەموو مافەکان پارێزراون.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
