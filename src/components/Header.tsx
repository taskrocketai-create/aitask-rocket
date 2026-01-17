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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-cool-gray300 shadow-sm">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Rocket className="w-8 h-8 text-rocket-orange group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading text-2xl font-bold text-[#758fdbff]">
              Task Rocket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base font-medium transition-colors ${
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
                  className={`font-paragraph text-base font-medium transition-colors ${
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
                  className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                asChild
                className="bg-rocket-orange hover:bg-rocket-orange/90 text-white"
              >
                <Link to="/portal">Portal Login</Link>
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
          <nav className="md:hidden mt-4 pb-4 border-t border-cool-gray300 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-paragraph text-base font-medium transition-colors ${
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
                    className={`font-paragraph text-base font-medium transition-colors ${
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
                    className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white w-full"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  asChild
                  className="bg-rocket-orange hover:bg-rocket-orange/90 text-white w-full"
                >
                  <Link to="/portal" onClick={() => setMobileMenuOpen(false)}>
                    Portal Login
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
