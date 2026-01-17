import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-deep-navy to-blue-gray-gradient-end">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl md:text-2xl text-cool-gray100 max-w-4xl mx-auto"
          >
            Have questions? We're here to help you launch your productivity to new heights.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-deep-navy mb-6">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-paragraph text-base text-green-800">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading text-lg py-7 h-auto"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-4xl font-bold text-deep-navy mb-6">
                  Contact Information
                </h2>
                <p className="font-paragraph text-lg text-cool-gray700 mb-8">
                  Reach out to us directly or visit our office in Wilson, NC.
                </p>
              </div>

              <Card className="p-8 bg-cool-gray100 border-none">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-rocket-orange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                      Office Location
                    </h3>
                    <p className="font-paragraph text-base text-cool-gray700">
                      Wilson, NC<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rocket-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@taskreocket.com"
                      className="font-paragraph text-base text-rocket-orange hover:underline"
                    >
                      info@taskreocket.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-deep-navy border-none">
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 font-paragraph text-base text-cool-gray100">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-rocket-orange border-none">
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="font-paragraph text-base text-white mb-6">
                  Sign up for a plan and start submitting tasks today. No setup fees, cancel anytime.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white hover:bg-cool-gray100 text-rocket-orange font-heading text-lg py-6 h-auto"
                >
                  <a href="/pricing">View Pricing Plans</a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
