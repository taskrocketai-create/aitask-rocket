import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-[820px] mx-auto px-10 py-16">
          <div className="border-b-4 border-rocket-orange pb-6 mb-10">
            <div className="text-2xl font-bold text-cool-gray900 mb-2">TaskRocket</div>
            <h1 className="text-4xl font-bold text-cool-gray900 mb-2 font-heading">Privacy Policy</h1>
            <div className="text-sm text-steel-gray">Last updated: May 13, 2026</div>
          </div>

          <p className="mb-4 text-cool-gray700 leading-relaxed">
            TaskRocket ("we," "us," or "our") operates at taskrocket.org and provides AI-powered communication and automation services to local businesses. This Privacy Policy explains how we collect, use, and protect information in connection with our services.
          </p>

          <div className="bg-cool-gray100 border-l-4 border-rocket-orange px-5 py-4 my-6 font-semibold text-cool-gray900">
            We do not sell, rent, share, or trade mobile phone numbers or personal information with third parties for marketing purposes. Ever.
          </div>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">1. Information We Collect</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We collect information in the following ways:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700"><strong>Business contact information</strong> — name, business name, phone number, and email address provided when you sign up for our services or contact us.</li>
            <li className="text-cool-gray700"><strong>Customer phone numbers</strong> — phone numbers of end users who contact our clients' businesses through our automated communication system. These are collected only for the purpose of delivering the service.</li>
            <li className="text-cool-gray700"><strong>Message content</strong> — the content of text messages and voicemails processed through our system in order to generate automated responses and notifications.</li>
            <li className="text-cool-gray700"><strong>Website usage data</strong> — standard web analytics including pages visited, time on site, and device type, collected through cookies and similar technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">2. How We Use Information</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We use the information we collect to:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700">Provide, operate, and improve our AI communication services</li>
            <li className="text-cool-gray700">Send automated text messages and notifications on behalf of our clients' businesses</li>
            <li className="text-cool-gray700">Transcribe voicemails and generate AI-powered responses</li>
            <li className="text-cool-gray700">Alert business owners and managers to customer inquiries</li>
            <li className="text-cool-gray700">Respond to support requests and service inquiries</li>
            <li className="text-cool-gray700">Comply with legal obligations and carrier regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">3. Text Messaging and SMS</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">TaskRocket operates SMS communication systems on behalf of local businesses. When you receive a text message through our system:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700">The message is sent on behalf of the business you contacted or interacted with</li>
            <li className="text-cool-gray700">Message frequency varies depending on your interactions with the business</li>
            <li className="text-cool-gray700">Message and data rates may apply depending on your mobile carrier plan</li>
            <li className="text-cool-gray700">You may opt out at any time by replying STOP to any message</li>
            <li className="text-cool-gray700">Reply HELP to any message for assistance</li>
          </ul>
          <p className="mb-4 text-cool-gray700 leading-relaxed"><strong>Mobile phone numbers collected through our SMS system are never shared with third parties for marketing or promotional purposes.</strong> Numbers are used solely to deliver the requested service communications.</p>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">4. Information Sharing</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We do not sell or rent your personal information. We may share information only in the following limited circumstances:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700"><strong>Service providers</strong> — we use third-party platforms including Twilio (telephony and SMS delivery), Make (automation), and Anthropic (AI processing) to operate our services. These providers receive only the information necessary to perform their functions and are bound by their own privacy policies.</li>
            <li className="text-cool-gray700"><strong>Business clients</strong> — message content and customer phone numbers are shared with the specific business on whose behalf we are operating.</li>
            <li className="text-cool-gray700"><strong>Legal compliance</strong> — we may disclose information if required by law, court order, or to protect the rights and safety of our users or the public.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">5. Data Retention</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We retain customer contact information and message logs for as long as necessary to provide the service and comply with legal obligations. Clients may request deletion of their data at any time by contacting us at info@taskrocket.org. We will respond to deletion requests within 30 days.</p>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">6. Security</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We implement reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction. All message traffic is transmitted over encrypted connections. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">7. Children's Privacy</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at info@taskrocket.org.</p>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">8. Your Rights</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">You have the right to:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700">Request access to the personal information we hold about you</li>
            <li className="text-cool-gray700">Request correction of inaccurate information</li>
            <li className="text-cool-gray700">Request deletion of your information</li>
            <li className="text-cool-gray700">Opt out of SMS communications at any time by replying STOP</li>
            <li className="text-cool-gray700">Contact us with any privacy-related concerns</li>
          </ul>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">9. Changes to This Policy</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">We may update this Privacy Policy from time to time. We will post any changes on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.</p>

          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">10. Contact Us</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700"><strong>Email:</strong> info@taskrocket.org</li>
            <li className="text-cool-gray700"><strong>Address:</strong> TaskRocket, 2513 Womble St., Wilson, NC 27893</li>
            <li className="text-cool-gray700"><strong>Website:</strong> <a href="https://taskrocket.org" className="text-rocket-orange hover:underline">taskrocket.org</a></li>
          </ul>

          <div className="mt-16 pt-6 border-t border-cool-gray300 text-sm text-steel-gray">
            &copy; 2026 TaskRocket &bull; 2513 Womble St., Wilson, NC 27893 &bull; <a href="https://taskrocket.org" className="text-rocket-orange hover:underline">taskrocket.org</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
