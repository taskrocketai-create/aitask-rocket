import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-cool-gray900 text-white py-16 border-t border-cool-gray700">
      <div className="max-w-[100rem] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-rocket-orange" />
              <span className="font-heading text-xl font-bold text-white">
                Task Rocket
              </span>
            </Link>
            <p className="font-paragraph text-sm text-cool-gray300 mb-4">
              AI-powered task management for contractors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-paragraph text-sm text-cool-gray300 hover:text-rocket-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-paragraph text-sm text-cool-gray300 hover:text-rocket-orange transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="font-paragraph text-sm text-cool-gray300 hover:text-rocket-orange transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-paragraph text-sm text-cool-gray300 hover:text-rocket-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-base font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="font-paragraph text-sm text-cool-gray300">AI Proposals</li>
              <li className="font-paragraph text-sm text-cool-gray300">Takeoffs</li>
              <li className="font-paragraph text-sm text-cool-gray300">Social Media</li>
              <li className="font-paragraph text-sm text-cool-gray300">Market Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-base font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rocket-orange flex-shrink-0" />
                <span className="font-paragraph text-sm text-cool-gray300">
                  Wilson, NC
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rocket-orange flex-shrink-0" />
                <a
                  href="mailto:info@taskreocket.com"
                  className="font-paragraph text-sm text-cool-gray300 hover:text-rocket-orange transition-colors"
                >
                  info@taskreocket.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-cool-gray300">
              © {new Date().getFullYear()} Task Rocket. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="font-paragraph text-xs text-cool-gray300 hover:text-rocket-orange transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="font-paragraph text-xs text-cool-gray300 hover:text-rocket-orange transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
