import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full max-w-[100rem] mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl font-bold mb-4 text-deep-navy">Privacy Policy</h1>
          
          <p className="text-cool-gray700 mb-8">
            <strong>Last updated: May 10, 2026</strong>
          </p>

          <p className="text-cool-gray700 mb-8">
            TaskRocket ("we," "us," or "our") operates as a business automation and property management service. This Privacy Policy explains how we collect, use, and protect your information when you interact with our SMS-based property management system.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Information We Collect</h2>
          <p className="text-cool-gray700 mb-8">
            We collect your mobile phone number and any information you provide when you text our maintenance line, including descriptions of maintenance issues, your name, and your unit or property address. We may also collect call records, message timestamps, and device information associated with your communications.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">How We Use Your Information</h2>
          <p className="text-cool-gray700 mb-8">
            We use your information to respond to maintenance requests, dispatch vendors, update you on the status of your request, and maintain records of property-related communications. We do not use your information for marketing purposes.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">SMS Communications and Consent</h2>
          <p className="text-cool-gray700 mb-8">
            By texting our maintenance line or responding to an automated text following a missed call, you consent to receive SMS messages related to your maintenance request. Message frequency varies based on the status of your request. Message and data rates may apply. Reply STOP at any time to opt out of further messages. Reply HELP for assistance. Opting out will not affect your ability to submit maintenance requests through other channels.
          </p>
          <p className="text-cool-gray700 mb-8">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Mobile opt-in data and consent will not be shared with any third party.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Sharing Your Information</h2>
          <p className="text-cool-gray700 mb-8">
            We do not sell or share your mobile phone number or personal information with third parties except as necessary to fulfill your maintenance request, such as providing your contact information to a dispatched vendor. Any vendor receiving your information is bound to use it solely for the purpose of completing your maintenance request.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Data Security</h2>
          <p className="text-cool-gray700 mb-8">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Data Retention</h2>
          <p className="text-cool-gray700 mb-8">
            We retain maintenance records for a period of up to 3 years for property management and compliance purposes. You may request deletion of your information by contacting us directly.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Your Rights</h2>
          <p className="text-cool-gray700 mb-8">
            You have the right to request access to the personal information we hold about you, request correction of inaccurate information, request deletion of your information, and opt out of SMS communications at any time by replying STOP.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Third Party Services</h2>
          <p className="text-cool-gray700 mb-8">
            Our system uses third-party platforms including Twilio for SMS delivery, Airtable for record keeping, and Make for workflow automation. These services have their own privacy policies governing the use of your data.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Changes to This Policy</h2>
          <p className="text-cool-gray700 mb-8">
            We may update this Privacy Policy from time to time. Changes will be posted at taskrocket.org/privacy-policy with an updated effective date.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-deep-navy">Contact Us</h2>
          <p className="text-cool-gray700 mb-8">
            If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at info@taskrocket.org or 217 Goldsboro St, Unit 216, Wilson, NC 27893.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
