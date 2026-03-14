import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/what-is-a-task' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Help', path: '/help' },
    { name: 'RehabScope', path: '/rehabscope-landing' },
  ];

  const industryPages = [
    { name: 'Contractor', path: '/contractor' },
    { name: 'Realtor', path: '/realtor' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Retail', path: '/retail' },
    { name: 'Bar', path: '/bar' },
  ];

  const appPages = [
    { name: 'Submit Task', path: '/submit-task' },
    { name: 'My Tasks', path: '/my-tasks' },
    { name: 'Portal', path: '/portal-dashboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-cool-gray300">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Image
              src="https://static.wixstatic.com/media/18d7f4_37430035763444e693fcdd9f76b78c72~mv2.png"
              width={40}
              height={40}
              className="h-10 w-auto"
              originWidth={1024}
              originHeight={1024} />
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold">
                <span className="text-rocket-orange">Task</span><span className="text-primary">Rocket</span>
              </span>
              <span className="font-heading text-xs font-bold text-deep-navy">
                Office Work, Done Faster
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
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
            ))}

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className={`font-paragraph text-base px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                  industryPages.some(p => isActive(p.path))
                    ? 'text-deep-navy font-medium bg-cool-gray100'
                    : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                }`}
              >
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-cool-gray300 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {industryPages.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 font-paragraph text-sm transition-colors ${
                      isActive(link.path)
                        ? 'text-deep-navy font-medium bg-cool-gray100'
                        : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Apps Dropdown */}
            <div className="relative group">
              <button
                className={`font-paragraph text-base px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                  appPages.some(p => isActive(p.path))
                    ? 'text-deep-navy font-medium bg-cool-gray100'
                    : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                }`}
              >
                Apps
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-cool-gray300 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {appPages.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 font-paragraph text-sm transition-colors ${
                      isActive(link.path)
                        ? 'text-deep-navy font-medium bg-cool-gray100'
                        : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
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
              ))}

              {/* Mobile Industries */}
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="font-paragraph text-base px-3 py-2 rounded flex items-center gap-1 text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100 transition-colors text-left w-full"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {industryPages.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setIndustriesOpen(false);
                      }}
                      className={`font-paragraph text-sm px-3 py-2 rounded transition-colors ${
                        isActive(link.path)
                          ? 'text-deep-navy font-medium bg-cool-gray100'
                          : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Apps */}
              <button
                onClick={() => setAppsOpen(!appsOpen)}
                className="font-paragraph text-base px-3 py-2 rounded flex items-center gap-1 text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100 transition-colors text-left w-full"
              >
                Apps
                <ChevronDown className={`w-4 h-4 transition-transform ${appsOpen ? 'rotate-180' : ''}`} />
              </button>
              {appsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {appPages.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setAppsOpen(false);
                      }}
                      className={`font-paragraph text-sm px-3 py-2 rounded transition-colors ${
                        isActive(link.path)
                          ? 'text-deep-navy font-medium bg-cool-gray100'
                          : 'text-cool-gray700 hover:text-deep-navy hover:bg-cool-gray100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
