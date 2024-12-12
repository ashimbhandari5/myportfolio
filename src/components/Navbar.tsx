import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Home, User, GraduationCap, Settings, Mail } from "lucide-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'works', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'about', icon: User },
    { id: 'works', icon: GraduationCap },
    { id: 'services', icon: Settings },
    { id: 'contact', icon: Mail }
  ];

  return (
    <nav className={cn(
      "fixed top-0 right-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : ""
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
        <div className="hidden md:flex gap-8 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "nav-link capitalize flex flex-col items-center gap-1 transition-all duration-300",
                activeSection === id ? "text-white" : "text-gray-400"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{id}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};