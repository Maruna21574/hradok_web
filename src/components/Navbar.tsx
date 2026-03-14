import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mountain, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Domov', href: '/' },
    { name: 'O nás', href: '/o-nas' },
    { name: 'Vybavenie', href: '/vybavenie' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Lokalita', href: '/lokalita' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className={cn("w-8 h-8", isScrolled || !isHome ? "text-forest-600" : "text-white")} />
          <span className={cn(
            "text-xl font-serif font-bold tracking-tight",
            isScrolled || !isHome ? "text-forest-900" : "text-white"
          )}>
            Hotel Hrádok
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-forest-500",
                isScrolled || !isHome ? "text-forest-800" : "text-white/90",
                location.pathname === link.href && "text-forest-500 font-bold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/rezervacia" className="bg-forest-600 hover:bg-forest-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-forest-900/20">
            Rezervovať objekt
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled || !isHome ? "text-forest-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled || !isHome ? "text-forest-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-forest-900 text-lg font-medium border-b border-forest-100 pb-2",
                  location.pathname === link.href && "text-forest-600 font-bold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/rezervacia" className="bg-forest-600 text-white py-3 rounded-xl font-bold mt-2 text-center">
              Rezervovať pobyt
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
