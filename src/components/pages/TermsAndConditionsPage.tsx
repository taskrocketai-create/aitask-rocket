import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-[820px] mx-auto px-10 py-16">
          {/* Header Section */}
          <div className="border-b-4 border-rocket-orange pb-6 mb-10">
            <div className="text-2xl font-bold text-cool-gray900 mb-2">TaskRocket</div>
            <h1 className="text-4xl font-bold text-cool-gray900 mb-2 font-heading">Terms and Conditions</h1>
            <div className="text-sm text-steel-gray">Last updated: May 13, 2026</div>
          </div>

          {/* Introduction */}
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of TaskRocket's services, website located at taskrocket.org, and any AI-powered communication systems operated by TaskRocket ("we," "us," or "our") on behalf of local businesses. By using our services or receiving communications through our system, you agree to these Terms.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">1. Services</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            TaskRocket provides AI-powered communication and automation services to local service businesses. Our systems may send automated text messages and notifications on behalf of businesses you have contacted or interacted with. All messages sent through our system identify the sending business by name.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">2. SMS Messaging Terms</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            By providing your mobile phone number to a business that uses TaskRocket's services, or by contacting a business that uses our system, you may receive automated text messages from or on behalf of that business. The following terms apply to all SMS communications:
          </p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700"><strong>Message frequency:</strong> Message frequency varies based on your interactions with the business. You may receive messages in response to calls, voicemails, or texts you initiate.</li>
            <li className="text-cool-gray700"><strong>Message and data rates:</strong> Message and data rates may apply. Check with your mobile carrier for details on your plan.</li>
            <li className="text-cool-gray700"><strong>Opt-out:</strong> You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message. You will receive one confirmation message and no further messages will be sent.</li>
            <li className="text-cool-gray700"><strong>Help:</strong> Reply <strong>HELP</strong> to any message for assistance. You may also contact us directly at info@taskrocket.org.</li>
            <li className="text-cool-gray700"><strong>Supported carriers:</strong> Our messaging service is available on all major US carriers including AT&T, Verizon, T-Mobile, and Sprint. Carrier support may vary.</li>
          </ul>

          {/* Highlight Box */}
          <div className="bg-cool-gray100 border-l-4 border-rocket-orange px-5 py-4 my-6 font-semibold text-cool-gray900">
            Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Mobile numbers are not shared with third parties for marketing purposes.
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">3. Acceptable Use</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            You agree not to use our services or communications systems to:
          </p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700">Violate any applicable federal, state, or local laws or regulations</li>
            <li className="text-cool-gray700">Send spam, unsolicited messages, or harassing communications</li>
            <li className="text-cool-gray700">Impersonate any person or business</li>
            <li className="text-cool-gray700">Transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
            <li className="text-cool-gray700">Interfere with or disrupt the integrity or performance of our services</li>
            <li className="text-cool-gray700">Attempt to gain unauthorized access to any part of our systems</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">4. Intellectual Property</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            All content on taskrocket.org including text, graphics, logos, and software is the property of TaskRocket and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">5. Third-Party Services</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            Our services are built on third-party platforms including Twilio, Make, and Anthropic. Use of our services is also subject to the terms of these third-party providers. We are not responsible for the availability, accuracy, or content of third-party services.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">6. Disclaimer of Warranties</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure. We do not warrant the accuracy or completeness of any AI-generated content.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">7. Limitation of Liability</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            To the fullest extent permitted by law, TaskRocket shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim shall not exceed the total fees paid by you to TaskRocket in the three months preceding the claim.
          </p>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            We are not responsible for message delivery failures, carrier filtering, or delays caused by third-party telecommunications providers.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">8. Indemnification</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            You agree to indemnify and hold harmless TaskRocket and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of our services in violation of these Terms or applicable law.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">9. Privacy</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            Your use of our services is also governed by our Privacy Policy, available at <a href="/privacy-policy" className="text-rocket-orange hover:underline">taskrocket.org/privacy</a>. By using our services, you consent to the collection and use of information as described in that policy.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">10. Governing Law</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            These Terms are governed by the laws of the State of North Carolina without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in Wilson County, North Carolina.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">11. Changes to These Terms</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-bold text-cool-gray900 mt-9 mb-3 font-heading">12. Contact Us</h2>
          <p className="mb-4 text-cool-gray700 leading-relaxed">
            If you have questions about these Terms, please contact us:
          </p>
          <ul className="pl-6 mb-4 space-y-2">
            <li className="text-cool-gray700"><strong>Email:</strong> info@taskrocket.org</li>
            <li className="text-cool-gray700"><strong>Address:</strong> TaskRocket, 2513 Womble St., Wilson, NC 27893</li>
            <li className="text-cool-gray700"><strong>Website:</strong> <a href="https://taskrocket.org" className="text-rocket-orange hover:underline">taskrocket.org</a></li>
          </ul>

          {/* Footer */}
          <div className="mt-16 pt-6 border-t border-cool-gray300 text-sm text-steel-gray">
            &copy; 2026 TaskRocket &bull; 2513 Womble St., Wilson, NC 27893 &bull; <a href="https://taskrocket.org" className="text-rocket-orange hover:underline">taskrocket.org</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
