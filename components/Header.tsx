import { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { LanguageToggle } from './LanguageToggle';
import { useTheme } from '../lib/useTheme';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Impact', href: '#impact' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center py-3 xs:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-foreground shadow-lg transition-all duration-300">
              <Globe className="w-5 h-5 text-background" />
            </div>
            <span className="text-foreground font-bold text-xl transition-colors duration-300">DEH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-foreground transition-all duration-300 relative group hover:shadow-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-all duration-300 hover:shadow-lg"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <a href="https://deh-admin-dashboard-64jnjo44j-mawlid1431s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-lg"
              >
                Join Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg mb-4 bg-background/90 backdrop-blur-md border border-border transition-all duration-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-foreground/80 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center justify-between">
                  <LanguageToggle />
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-all duration-300"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-foreground" />
                    ) : (
                      <Moon className="w-4 h-4 text-foreground" />
                    )}
                  </button>
                </div>
                <a href="https://canon-suds-76896907.figma.site/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Join Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
