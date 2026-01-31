
import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import { ViewType } from '../App';

interface HeaderProps {
  activeTab: ViewType;
  onTabChange: (tab: ViewType) => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, isLoggedIn, isAdmin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: {name: string, id: ViewType}[] = isLoggedIn ? [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ] : [];

  if (isLoggedIn && isAdmin) {
    navLinks.push({ name: 'Add Price', id: 'addPrice' });
  }

  const handleLinkClick = (id: ViewType) => {
    onTabChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeTab !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => isLoggedIn ? handleLinkClick('home') : handleLinkClick('login')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            N
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            NPM Tech <span className="text-blue-600">Solutions</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-bold transition-all relative py-1 flex items-center gap-1.5 ${
                activeTab === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.id === 'addPrice' && <Settings size={14} />}
              {link.name}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
          
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-red-500 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          ) : (
            <button 
              onClick={() => handleLinkClick('login')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              className={`text-lg font-bold text-left flex items-center gap-2 ${
                activeTab === link.id ? 'text-blue-600' : 'text-slate-600'
              }`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.id === 'addPrice' && <Settings size={18} />}
              {link.name}
            </button>
          ))}
          {isLoggedIn ? (
            <button 
              onClick={() => {
                setIsOpen(false);
                onLogout();
              }}
              className="flex items-center gap-2 text-red-500 font-bold text-lg mt-2 pt-4 border-t border-slate-50"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          ) : (
            <button 
              onClick={() => handleLinkClick('login')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold w-full mt-2"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
