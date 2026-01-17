import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-deep-navy text-white py-16">
      <div className="max-w-[100rem] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <Rocket className="w-8 h-8 text-rocket-orange group-hover:scale-110 transition-transform" />
              <span className="font-heading text-2xl font-bold text-white">
                Task Rocket
              </span>
            </Link>
            <p className="font-paragraph text-base text-cool-gray100 mb-4">
              AI-powered task management for contractors. Launch your productivity to new heights.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rocket-orange/20 flex items-center justify-center hover:bg-rocket-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rocket-orange/20 flex items-center justify-center hover:bg-rocket-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rocket-orange/20 flex items-center justify-center hover:bg-rocket-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rocket-orange/20 flex items-center justify-center hover:bg-rocket-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/portal"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="font-paragraph text-base text-cool-gray100">AI Proposals</li>
              <li className="font-paragraph text-base text-cool-gray100">Takeoffs</li>
              <li className="font-paragraph text-base text-cool-gray100">Social Media</li>
              <li className="font-paragraph text-base text-cool-gray100">Market Analysis</li>
              <li className="font-paragraph text-base text-cool-gray100">Branding</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-1" />
                <span className="font-paragraph text-base text-cool-gray100">
                  Wilson, NC<br />United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rocket-orange flex-shrink-0" />
                <a
                  href="mailto:info@taskreocket.com"
                  className="font-paragraph text-base text-cool-gray100 hover:text-rocket-orange transition-colors"
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
            <p className="font-paragraph text-sm text-cool-gray100">
              © {new Date().getFullYear()} Task Rocket. All rights reserved. North Carolina Built.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="font-paragraph text-sm text-cool-gray100 hover:text-rocket-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-paragraph text-sm text-cool-gray100 hover:text-rocket-orange transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
