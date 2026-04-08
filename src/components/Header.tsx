import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import FilloutForm from '@/components/FilloutForm';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', anchor: false },
    { name: 'How It Works', path: '/', anchor: 'how-it-works' },
    { name: 'Services', path: '/', anchor: 'services' },
    { name: 'Pricing', path: '/', anchor: 'pricing' },
    { name: 'Contact', path: '/', anchor: 'contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (anchor?: string) => {
    setMobileMenuOpen(false);
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <>
      <FilloutForm />
      <header className="sticky top-0 z-50 w-full bg-white border-b border-cool-gray300">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Image
              src="https://static.wixstatic.com/media/18d7f4_37430035763444e693fcdd9f76b78c72~mv2.png"
              width={40}
              height={40}
              className="h-10 w-auto"
              originWidth={1024}
              originHeight={1024}
              alt="TaskRocket Logo"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-2xl font-bold">
                <span className="text-rocket-orange">Task</span><span className="text-primary">Rocket</span>
              </span>
              <span className="font-heading text-xs font-bold text-deep-navy hidden sm:block">
                Business Systems, Done Right
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.anchor ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.anchor)}
                  className="font-paragraph text-base px-3 py-2 rounded transition-colors text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-paragraph text-base px-3 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? 'text-deep-navy font-medium bg-cool-gray100'
                      : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-deep-navy flex-shrink-0"
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.anchor ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.anchor)}
                    className="font-paragraph text-base px-3 py-2 rounded transition-colors text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100 text-left w-full"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-paragraph text-base px-3 py-2 rounded transition-colors ${
                      isActive(link.path)
                        ? 'text-deep-navy font-medium bg-cool-gray100'
                        : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}
