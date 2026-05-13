import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    problem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission with a brief delay
    setTimeout(() => {
      setSubmitMessage("Thanks! We'll be in touch soon.");
      setFormData({ name: '', businessName: '', phone: '', email: '', problem: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* HERO SECTION */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-cool-gray900 text-white py-20 min-h-screen flex flex-col items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary opacity-15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rocket-orange opacity-15 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-gray-gradient-start opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Top Image - Positioned above content */}
        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Business Should Work <span className="text-rocket-orange">Without You</span>
            </h1>
            <p className="font-paragraph text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop being trapped by manual work. We build automated systems that run your business 24/7—so you can focus on growth, not admin tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-6 rounded-lg"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-8 pt-8"
        >
          <Image
            src="https://static.wixstatic.com/media/18d7f4_50df62e985c24c20bf1cc1f5ddf9efb4~mv2.png?originWidth=384&originHeight=256"
            alt="Task Rocket Logo"
            width={400}
            height={300}
            className="object-contain w-full max-w-md h-auto opacity-[1] border border-none mix-blend-normal"
          />
        </motion.div>

        </section>
      {/* PROBLEM SECTION */}
      <section id="problem" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cool-gray100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
                Reclaim Your Time: Stop Losing Hours to Manual Work
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Spending hours scheduling jobs manually',
                'Chasing down leads instead of closing deals',
                'Sending quotes late and losing opportunities',
                'Working nights just to keep up with admin tasks',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white p-6 rounded-lg border-l-4 border-rocket-orange shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-3 h-3 bg-rocket-orange rounded-full flex-shrink-0"></div>
                  <p className="font-paragraph text-lg text-cool-gray700">{item}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20"
            >
              <p className="font-paragraph text-xl text-deep-navy font-semibold">
                Every hour saved is an hour you get back. Let's build a system that gives you your time back.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Automate Your Business. Reclaim Your Time.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scheduling & Dispatch',
                description: 'Automatically assign jobs and keep your team moving—save hours every week',
                icon: '📅',
              },
              {
                title: 'Estimates & Quotes',
                description: 'Create fast, consistent quotes and close deals faster',
                icon: '📊',
              },
              {
                title: 'Lead Follow-Up',
                description: 'Never miss a lead again—automated follow-ups that convert',
                icon: '🎯',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cool-gray100 to-white p-8 rounded-xl border-2 border-cool-gray300 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  {service.title}
                </h3>
                <p className="font-paragraph text-lg text-cool-gray700">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cool-gray100 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'We Find the Bottleneck',
                description: 'We identify what\'s slowing your business down',
              },
              {
                step: '2',
                title: 'We Build the System',
                description: 'We install a solution that fixes it',
              },
              {
                step: '3',
                title: 'We Manage It Monthly',
                description: 'We keep everything running and improving over time',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl border-2 border-primary shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-2xl mb-6 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-lg text-cool-gray700">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING SECTION */}
      <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold text-deep-navy mb-4 text-center"
          >
            Pricing That Gives You More Time, Not Less
          </motion.h2>
          <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-2xl mx-auto">
            We offer flexible pricing that scales with your business needs.
          </p>

          {/* System Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 bg-cool-gray100 p-8 rounded-lg"
          >
            <h3 className="font-heading text-3xl font-bold text-deep-navy mb-4">
              System Setup
            </h3>
            <p className="font-heading text-2xl font-bold text-rocket-orange mb-4">
              Starting at $1,500
            </p>
            <p className="font-paragraph text-lg text-cool-gray700 mb-4">
              One-time, per workflow
            </p>
            <p className="font-paragraph text-base text-cool-gray700 mb-4">
              We build and install a custom system designed to fix a specific problem in your business.
            </p>
            <p className="font-paragraph text-base text-cool-gray700">
              Most systems fall between <span className="font-bold">$1,500 – $3,500</span> depending on complexity and level of automation.
            </p>
          </motion.div>

          {/* Ongoing Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-heading text-3xl font-bold text-deep-navy mb-2">
              Ongoing Management
            </h3>
            <p className="font-paragraph text-base text-cool-gray700 mb-8 italic">
              Per Workflow — Each workflow is maintained individually to ensure reliability and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Core Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-cool-gray300 p-8 rounded-lg"
              >
                <h4 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                  Core Plan
                </h4>
                <p className="font-heading text-3xl font-bold text-primary mb-6">
                  $500<span className="text-lg text-cool-gray700">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Monitoring & upkeep', 'Minor updates', 'Basic improvements', 'Email support'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base text-cool-gray700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Growth Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary text-white p-8 rounded-lg border-2 border-primary relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rocket-orange text-white px-4 py-1 rounded-full font-heading font-bold text-sm">
                  Most Popular
                </div>
                <h4 className="font-heading text-2xl font-bold mb-2">
                  Growth Plan
                </h4>
                <p className="font-heading text-3xl font-bold mb-6">
                  $750<span className="text-lg">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Everything in Core', 'Priority updates', 'Workflow improvements', 'Monthly performance review'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Scale Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-cool-gray300 p-8 rounded-lg"
              >
                <h4 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                  Scale Plan
                </h4>
                <p className="font-heading text-3xl font-bold text-primary mb-6">
                  $1,000<span className="text-lg text-cool-gray700">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Everything in Growth', 'Priority turnaround', 'Advanced optimizations', 'New workflow builds (within scope)'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base text-cool-gray700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Pricing Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-cool-gray100 p-6 rounded-lg text-center"
          >
            <p className="font-paragraph text-base text-cool-gray700 mb-2">
              <span className="font-bold">Managing multiple workflows?</span> We offer discounted pricing for bundled systems.
            </p>
            <p className="font-paragraph text-base text-cool-gray700">
              <span className="font-bold">Flexible and scalable.</span> Grow at your own pace.
            </p>
          </motion.div>
        </div>
      </section>
      {/* TRUST SECTION */}
      <section id="trust" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-cool-gray100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold text-deep-navy mb-12"
          >
            Built for Busy Business Owners
          </motion.h2>
          <div className="space-y-6">
            {[
              'Designed for service-based businesses that value their time',
              'Focused on saving hours every week through smart automation',
              'Systems built to work in real-world operations so you can focus on growth',
            ].map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="font-paragraph text-xl text-cool-gray700"
              >
                ✓ {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA SECTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-navy to-cool-gray900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 bg-rocket-orange/20 border-2 border-rocket-orange p-6 rounded-lg"
          >
            <p className="font-heading text-lg sm:text-xl font-bold text-rocket-orange">
              👇 Ready to transform your business? Fill out the intake form below to get started!
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold mb-12"
          >
            Ready to Get Your Time Back?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('how-it-works')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-6 rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* CONTACT FORM SECTION */}
      <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-deep-navy mb-2 text-center">
              Let's Fix Your Workflow
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 text-center mb-12">
              Tell us what's slowing you down. We'll be in touch within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Business Name
                  </label>
                  <Input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                  What's slowing your business down?
                </label>
                <Textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-paragraph"
                  placeholder="Tell us about the biggest bottleneck in your business..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg py-3 rounded-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-paragraph ${
                    submitMessage.includes('Thanks') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
