
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-purple">Doe<span className="text-brand-purple-dark">&</span>Ajude</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-brand-purple px-3 py-2 rounded-md font-medium">
              Início
            </Link>
            <Link to="/map" className="text-gray-600 hover:text-brand-purple px-3 py-2 rounded-md font-medium">
              Locais
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-brand-purple px-3 py-2 rounded-md font-medium">
              Categorias
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-purple px-3 py-2 rounded-md font-medium">
              Sobre
            </Link>
            <Button asChild className="button-primary ml-4">
              <Link to="/login">Entrar</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-purple hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-10 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/map" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Locais
            </Link>
            <Link 
              to="/categories" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-purple text-white hover:bg-brand-purple-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
