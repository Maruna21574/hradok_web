import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-white pt-18 px-6">
      {/* Top section: navigation and legal links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8  border-white/10 pb-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-6">
          {/* Left: Logo + popis */}
          <div className="flex flex-col items-center md:items-start gap-2 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-forest-400" />
              <span className="text-2xl font-serif font-bold">Hotel Hrádok</span>
            </div>
            <span className="text-base text-white/70 mt-1 max-w-xs text-center md:text-left">
              Súkromný horský rezort pre vaše akcie, svadby a firemné pobyty v Malej Fatre.
            </span>
            <div className="flex flex-col gap-1 mt-2 text-white/80 text-sm">
              <a href="tel:+421905123456" className="hover:text-white transition-colors">+421 905 123 456</a>
              <a href="mailto:info@hotelhradok.eu" className="hover:text-white transition-colors">info@hotelhradok.eu</a>
            </div>
          </div>
          {/* Center: Menu */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/" className="hover:text-white transition-colors text-sm font-medium">Domov</Link>
              <Link to="/vybavenie" className="hover:text-white transition-colors text-sm font-medium">Vybavenie</Link>
              <Link to="/sluzby" className="hover:text-white transition-colors text-sm font-medium">Služby</Link>
              <Link to="/lokalita" className="hover:text-white transition-colors text-sm font-medium">Lokalita</Link>
              <Link to="/kontakt" className="hover:text-white transition-colors text-sm font-medium">Kontakt</Link>
            </div>
          </div>
          {/* Right: Rezervovať objekt */}
          <div className="flex justify-center md:justify-end">
            <Link to="/rezervacia" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg shadow-forest-900/20 w-full md:w-auto text-center">
              Rezervovať objekt
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom section: copyright and info */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/40 text-center md:text-left">
          © {new Date().getFullYear()} Horský Hotel Hrádok. Všetky práva vyhradené.
        </p>
        <p className="text-sm text-white/40 text-center md:text-right">
          <Link to="/gdpr" className="underline hover:text-white">GDPR</Link> | <Link to="/cookies" className="underline hover:text-white">Cookies</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
