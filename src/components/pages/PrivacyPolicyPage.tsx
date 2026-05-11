import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full max-w-[100rem] mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-4xl">
          <h1 className="font-heading text-5xl font-bold mb-4 text-deep-navy">Privacy Policy</h1>
          <p className="text-steel-gray mb-8">Last updated: May 10, 2026</p>

          <p className="text-foreground mb-8">
            TaskRocket ("we," "us," or "our") operates as a business automation and property management service. This Privacy Policy explains how we collect, use, and protect your information when you interact with our SMS-based property management system.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">Information We Collect</h2>
          <p className="text-foreground mb-8">
            We collect your mobile phone number and any information you provide when you text our maintenance line, including descriptions of maintenance issues, your name, and your unit or property address.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">How We Use Your Information</h2>
          <p className="text-foreground mb-8">
            We use your information to respond to maintenance requests, dispatch vendors, update you on the status of your request, and maintain records of property-related communications. We do not use your information for marketing purposes.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">SMS Communications</h2>
          <p className="text-foreground mb-8">
            By texting our maintenance line, you consent to receive SMS messages related to your maintenance request. Message frequency varies based on the status of your request. Message and data rates may apply. Reply STOP at any time to opt out. Reply HELP for assistance.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">Sharing Your Information</h2>
          <p className="text-foreground mb-8">
            We do not sell or share your mobile phone number or personal information with third parties except as necessary to fulfill your maintenance request (such as providing your contact information to a dispatched vendor).
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">Data Retention</h2>
          <p className="text-foreground mb-8">
            We retain maintenance records for a period of up to 3 years for property management and compliance purposes.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-deep-navy">Contact Us</h2>
          <p className="text-foreground">
            If you have questions about this Privacy Policy, contact us at info@taskrocket.org or 217 Goldsboro St, Unit 216, Wilson, NC 27893.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
