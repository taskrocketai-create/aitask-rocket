import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thanks! We'll be in touch soon.");
        setFormData({ name: '', businessName: '', phone: '', email: '', problem: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-cool-gray900 text-white py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-rocket-orange opacity-10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-rocket-orange to-primary mb-8 rounded-full"
              />

              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <motion.span
                  initial={{ y: 40, scale: 0.9 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="block"
                >
                  Run Your Business
                </motion.span>
                <motion.span
                  initial={{ y: 40, scale: 0.9 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="block bg-gradient-to-r from-rocket-orange via-primary to-rocket-orange bg-clip-text text-transparent"
                >
                  Without the Chaos
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-paragraph text-xl sm:text-2xl text-cool-gray300 mb-8 leading-relaxed"
              >
                Scheduling, estimates, follow-ups—we fix the bottlenecks slowing you down with systems that work for you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Fix My Workflow
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-10 py-7 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book a 15-Min Call
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary bg-opacity-20">
                    <span className="text-rocket-orange text-xl">✓</span>
                  </div>
                </div>
                <p className="font-paragraph text-sm text-cool-gray300">
                  <span className="font-semibold text-white">Flexible, scalable solutions</span> that grow with your business.
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="hidden lg:block relative h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-rocket-orange opacity-20 rounded-2xl blur-2xl" />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary via-blue-gray-gradient-end to-rocket-orange rounded-2xl opacity-30 border border-white border-opacity-10"
              />
              <div className="absolute inset-4 bg-gradient-to-br from-deep-navy to-cool-gray900 rounded-xl border border-primary border-opacity-30 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-32 h-32 border-4 border-transparent border-t-rocket-orange border-r-primary rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
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
                If You're Doing This Manually, You're Losing Time and Money
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Scheduling jobs by hand',
                'Chasing down leads',
                'Sending quotes late',
                'Working nights just to stay caught up',
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
                It doesn't have to run like that. Let's build a better system for you.
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
              We Install Systems That Run Your Business
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scheduling & Dispatch',
                description: 'Automatically assign jobs and keep your team moving efficiently',
                icon: '📅',
              },
              {
                title: 'Estimates & Quotes',
                description: 'Create fast, consistent, professional estimates',
                icon: '📊',
              },
              {
                title: 'Lead Follow-Up',
                description: 'Respond to leads quickly and stop missing opportunities',
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
            Simple Pricing. Built Around Your Business
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
            Built for Real Businesses
          </motion.h2>
          <div className="space-y-6">
            {[
              'Designed for service-based businesses',
              'Focused on saving time and improving efficiency',
              'Systems built to work in real-world operations',
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold mb-12"
          >
            Stop Running Your Business the Hard Way
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg px-8 py-6 rounded-lg"
            >
              Fix My Workflow
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-6 rounded-lg"
            >
              Book a 15-Min Call
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
