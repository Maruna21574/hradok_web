import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
        <div className="flex items-center gap-2">
          <Mountain className="w-6 h-6 text-forest-400" />
          <span className="text-xl font-serif font-bold">Hotel Hrádok</span>
        </div>
        
        <div className="flex gap-8 text-sm text-white/60">
          <Link to="/o-nas" className="hover:text-white transition-colors">O nás</Link>
          <Link to="/sluzby" className="hover:text-white transition-colors">Služby</Link>
          <Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
        </div>

        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Horský Hotel Hrádok. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
