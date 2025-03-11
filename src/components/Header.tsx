import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Film, MapPin, Calendar, User, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8" />
            <span className="font-bold text-xl">CinemaWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/theaters" className="hover:text-blue-300 transition-colors">Theaters</Link>
            <Link to="/events" className="hover:text-blue-300 transition-colors">Events</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-blue-800 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="p-2 rounded-full hover:bg-blue-800 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-blue-800 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-blue-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-blue-800">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for movies, theaters..."
                className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <Film className="h-5 w-5" />
                <span>Movies</span>
              </Link>
              <Link to="/theaters" className="py-2 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Theaters</span>
              </Link>
              <Link to="/events" className="py-2 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Events</span>
              </Link>
              <Link to="/account" className="py-2 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>My Account</span>
              </Link>
              <Link to="/cart" className="py-2 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;