import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/what-is-a-task' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Help', path: '/help' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-cool-gray300">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Image
              src="https://static.wixstatic.com/media/18d7f4_e1c01261b5144af59eded5e0940606a8~mv2.png"
              alt="Task Rocket Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-heading text-xl font-bold text-deep-navy">
              Office Work, Done Faster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base transition-colors ${
                  isActive(link.path)
                    ? 'text-deep-navy font-medium'
                    : 'text-cool-gray700 hover:text-deep-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-deep-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cool-gray300 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-paragraph text-base transition-colors ${
                    isActive(link.path)
                      ? 'text-deep-navy font-medium'
                      : 'text-cool-gray700 hover:text-deep-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
