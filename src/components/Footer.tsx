import { Link } from 'react-router-dom';

export default function Footer() {
  const handleNavClick = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cool-gray900 text-white py-12">
      <div className="max-w-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">TaskRocket</h3>
            <p className="font-paragraph text-sm text-cool-gray300">
              AI consulting and business automation for busy local businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('pricing')}
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors text-left"
              >
                Pricing
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy-policy"
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/sms-terms"
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors"
              >
                SMS Terms & Conditions
              </Link>
              <Link
                to="/messaging-compliance"
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors"
              >
                Messaging Compliance
              </Link>
              <Link
                to="/sms-opt-in"
                className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors"
              >
                SMS Opt-In
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cool-gray700 mt-8 pt-8 text-center">
          <p className="font-paragraph text-sm text-cool-gray300">
            © {new Date().getFullYear()} TaskRocket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
