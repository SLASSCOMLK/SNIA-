import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 font-body relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand column */}
        <div className="space-y-4">
          <div className="text-white font-heading font-black text-2xl tracking-wide">SLASSCOM</div>
          <div className="text-snia-gold font-semibold text-xs tracking-wider uppercase">Ingenuity Awards</div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            Celebrating innovation and excellence in Sri Lanka's ICT industry since 2018.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.facebook.com/SLASSCOMLK" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-snia-gold hover:text-snia-gold flex items-center justify-center transition-colors">
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a href="https://www.instagram.com/slasscom/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-snia-gold hover:text-snia-gold flex items-center justify-center transition-colors">
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a href="https://www.linkedin.com/company/slasscom/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-snia-gold hover:text-snia-gold flex items-center justify-center transition-colors">
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>
          </div>
        </div>

        {/* Quick Links column */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/#about" className="hover:text-snia-gold transition-colors">About</Link></li>
            <li><Link to="/#categories" className="hover:text-snia-gold transition-colors">Categories</Link></li>
            <li><Link to="/winners" className="hover:text-snia-gold transition-colors">Winners Showcase</Link></li>
            <li><Link to="/sponsorship" className="hover:text-snia-gold transition-colors">Sponsorship</Link></li>
          </ul>
        </div>

        {/* Contact details column */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact Us</h4>
          <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
            Reach out to our support team for inquiries regarding the Ingenuity Awards programs.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <span className="text-snia-gold pt-1"><i className="fas fa-map-marker-alt"></i></span>
              <span className="text-slate-400 leading-normal text-xs sm:text-sm">
                SLASSCOM Corporate Office<br />
                C/O Elegance, No. 31, Queens Road,<br />
                Colombo 00300, Sri Lanka
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-snia-gold"><i className="fas fa-envelope"></i></span>
              <a href="mailto:corpoffice@slasscom.lk" className="hover:text-snia-gold transition-colors">corpoffice@slasscom.lk</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-10 pt-6 text-center text-xs text-slate-650">
        <p>&copy; {new Date().getFullYear()} SLASSCOM National Ingenuity Awards. All rights reserved.</p>
      </div>
    </footer>
  );
};
