
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LogoProcessor from "./LogoProcessor";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="bg-white rounded p-1">
            <LogoProcessor 
              originalSrc="/Rommit_fondo.png"
              className="h-12 w-auto"
              alt="Roomit Logo"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                ¿Qué es Roomit?
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                Ventajas
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                Cómo funciona
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('waitlist')} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-all duration-200">
                Lista de espera
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-primary-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                ¿Qué es Roomit?
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                Ventajas
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                Cómo funciona
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                FAQ
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('waitlist')} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  Lista de espera
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>
  );
};

export default Navbar;
