import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
    <footer className="bg-cool-gray900 text-white py-12">
      <div className="max-w-[100rem] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src="https://static.wixstatic.com/media/18d7f4_d354b14c0c60408d82a5330e108d4583~mv2.jpg" 
              alt="Task Rocket Logo" 
              width={160}
              className="h-10 w-auto mb-4"
            />
            <p className="font-paragraph text-sm text-cool-gray300">
              Send notes. Get finished paperwork and content back.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/pricing" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/help" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Help
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Industries</h4>
            <div className="flex flex-col gap-2">
              <Link to="/contractor" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Contractor & Estimator
              </Link>
              <Link to="/realtor" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Real Estate
              </Link>
              <Link to="/restaurant" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Restaurant
              </Link>
              <Link to="/retail" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Retail
              </Link>
              <Link to="/bar" className="font-paragraph text-sm text-cool-gray300 hover:text-white transition-colors">
                Bars & Nightlife
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cool-gray700 mt-8 pt-8 text-center">
          <p className="font-paragraph text-sm text-cool-gray300">
            © {new Date().getFullYear()} Task Rocket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
