import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMember } from '@/integrations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, actions } = useMember();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-cool-gray200">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-rocket-orange" />
            <span className="font-heading text-xl font-bold text-deep-navy">
              Task Rocket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-rocket-orange'
                    : 'text-cool-gray700 hover:text-rocket-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/portal"
                  className={`font-paragraph text-sm transition-colors ${
                    isActive('/portal')
                      ? 'text-rocket-orange'
                      : 'text-cool-gray700 hover:text-rocket-orange'
                  }`}
                >
                  Portal
                </Link>
                <Button
                  onClick={actions.logout}
                  variant="outline"
                  size="sm"
                  className="border-cool-gray300 text-deep-navy hover:bg-cool-gray100"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                asChild
                size="sm"
                className="bg-rocket-orange hover:bg-rocket-orange/90 text-white"
              >
                <Link to="/portal">Login</Link>
              </Button>
            )}
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
          <nav className="md:hidden mt-4 pb-4 border-t border-cool-gray200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-paragraph text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-rocket-orange'
                      : 'text-cool-gray700 hover:text-rocket-orange'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-paragraph text-sm transition-colors ${
                      isActive('/portal')
                        ? 'text-rocket-orange'
                        : 'text-cool-gray700 hover:text-rocket-orange'
                    }`}
                  >
                    Portal
                  </Link>
                  <Button
                    onClick={() => {
                      actions.logout();
                      setMobileMenuOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="border-cool-gray300 text-deep-navy hover:bg-cool-gray100 w-full"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  asChild
                  size="sm"
                  className="bg-rocket-orange hover:bg-rocket-orange/90 text-white w-full"
                >
                  <Link to="/portal" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
