import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, AlertCircle, TrendingUp, Zap, FileText, Layers } from 'lucide-react';

export default function RehabScopePage() {
  const [formData, setFormData] = useState({
    investorName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    estimatedBudget: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({
      investorName: '',
      email: '',
      phone: '',
      propertyAddress: '',
      propertyType: '',
      estimatedBudget: '',
      notes: '',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-blue-gray-gradient-end py-20 px-4 md:py-32">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
              RehabScope Review
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-cool-gray100 mb-8 max-w-3xl mx-auto">
              Independent rehab scope and budget review for real estate investors. Catch costly mistakes before construction begins.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg px-8 py-6 rounded-lg"
              >
                Submit Deal for Review
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="w-full py-20 px-4 md:py-32 bg-cool-gray100">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Common Rehab Budget Mistakes
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
              Protect your investment by identifying scope gaps and budget overruns early
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: AlertCircle,
                title: 'Incomplete Scope Definition',
                description: 'Contractors miss critical items, leading to change orders and budget overruns mid-project.',
              },
              {
                icon: TrendingUp,
                title: 'Unrealistic Budget Estimates',
                description: 'Estimates lack detail or fail to account for regional material costs and labor rates.',
              },
              {
                icon: Zap,
                title: 'Hidden Structural Issues',
                description: 'Unforeseen problems discovered during construction that weren\'t identified in initial estimates.',
              },
              {
                icon: FileText,
                title: 'Poor Documentation',
                description: 'Vague scope documents create confusion and disputes between investors and contractors.',
              },
              {
                icon: Layers,
                title: 'Missed Code Compliance',
                description: 'Estimates don\'t account for local building codes, permits, or required upgrades.',
              },
              {
                icon: CheckCircle2,
                title: 'No Independent Review',
                description: 'Relying solely on contractor estimates without third-party validation of accuracy.',
              },
            ].map((mistake, index) => {
              const Icon = mistake.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="w-12 h-12 text-rocket-orange mb-4" />
                    <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                      {mistake.title}
                    </h3>
                    <p className="font-paragraph text-cool-gray700">
                      {mistake.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 px-4 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              RehabScope Pricing
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
              Choose the package that fits your investment needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'RehabScope Review',
                price: '$299',
                description: 'Perfect for single properties',
                features: [
                  'Scope document review',
                  'Budget estimate analysis',
                  'Detailed findings report',
                  'Email support',
                  '5-7 business day turnaround',
                ],
              },
              {
                name: 'RehabScope Pro',
                price: '$599',
                description: 'For active investors',
                features: [
                  'Everything in Review',
                  'Contractor estimate comparison',
                  'Line-item budget breakdown',
                  'Phone consultation (30 min)',
                  '3-5 business day turnaround',
                  'Quarterly updates',
                ],
                highlighted: true,
              },
              {
                name: 'RehabScope Elite',
                price: '$999',
                description: 'For portfolio investors',
                features: [
                  'Everything in Pro',
                  'Multiple property reviews',
                  'Custom scope templates',
                  'Unlimited phone support',
                  '24-48 hour turnaround',
                  'Annual strategy session',
                  'Priority access to tools',
                ],
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`p-8 h-full flex flex-col border-2 transition-all ${
                    plan.highlighted
                      ? 'border-rocket-orange shadow-lg scale-105'
                      : 'border-cool-gray300 shadow-sm'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-rocket-orange text-white px-4 py-2 rounded-full text-sm font-heading font-bold mb-4 w-fit">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-paragraph text-cool-gray700 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="font-heading text-4xl font-bold text-rocket-orange">
                      {plan.price}
                    </span>
                    <span className="font-paragraph text-cool-gray700 ml-2">per review</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-cool-gray700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-6 font-heading text-lg rounded-lg ${
                      plan.highlighted
                        ? 'bg-rocket-orange hover:bg-orange-600 text-white'
                        : 'bg-cool-gray100 hover:bg-cool-gray300 text-deep-navy'
                    }`}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optional Investor Tools Section */}
      <section className="w-full py-20 px-4 md:py-32 bg-cool-gray100">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Optional Investor Tools
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
              Enhance your RehabScope review with specialized analysis tools
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'LiDAR Scanning Analysis',
                price: '+$199',
                description: 'Advanced 3D property mapping to identify structural issues and precise measurements.',
                features: ['3D property model', 'Structural anomaly detection', 'Precise measurements', 'Digital floor plan'],
              },
              {
                title: 'Material Takeoffs',
                price: '+$149',
                description: 'Detailed material quantity calculations based on scope and local pricing.',
                features: ['Quantity calculations', 'Material specifications', 'Regional pricing', 'Supplier recommendations'],
              },
              {
                title: 'Scope Creation',
                price: '+$249',
                description: 'Professional scope document creation from scratch if contractor scope is inadequate.',
                features: ['Custom scope writing', 'Line-item detail', 'Contractor-ready format', 'Revision support'],
              },
            ].map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                    {tool.title}
                  </h3>
                  <p className="font-paragraph text-rocket-orange font-bold text-lg mb-3">
                    {tool.price}
                  </p>
                  <p className="font-paragraph text-cool-gray700 mb-6">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rocket-orange rounded-full" />
                        <span className="font-paragraph text-cool-gray700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-20 px-4 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://static.wixstatic.com/media/18d7f4_7611bd355b604dbbb7402464b9fedbd1~mv2.png?originWidth=448&originHeight=384"
                alt="Durham property renovation case study"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                Durham Flip Case Study
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 mb-6">
                A Durham-based investor submitted a contractor estimate of $32,000 for a complete kitchen and bathroom renovation. Our RehabScope Pro review identified several critical issues:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Incomplete electrical work scope (estimated $4,500 additional)',
                  'Missing HVAC system upgrades required by code ($3,200)',
                  'Underestimated plumbing complexity ($2,800)',
                  'Structural repairs not included in original estimate ($5,000)',
                  'Permit and inspection fees omitted ($1,500)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-cool-gray700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-cool-gray100 p-6 rounded-lg mb-6">
                <p className="font-paragraph text-cool-gray700 mb-2">
                  <span className="font-bold">Original Estimate:</span> $32,000
                </p>
                <p className="font-paragraph text-rocket-orange text-xl font-bold">
                  <span className="text-cool-gray700">Realistic Budget:</span> ~$50,000
                </p>
              </div>
              <p className="font-paragraph text-cool-gray700">
                By catching these issues early, the investor avoided mid-project surprises and was able to secure proper financing and contractor commitments upfront.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section className="w-full py-20 px-4 md:py-32 bg-cool-gray100">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Submit Your Deal for Review
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
              Provide your property details and upload your contractor scope and estimates
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 border-0 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-heading font-bold text-deep-navy block mb-2">
                      Investor Name *
                    </label>
                    <Input
                      type="text"
                      name="investorName"
                      value={formData.investorName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange"
                    />
                  </div>
                  <div>
                    <label className="font-heading font-bold text-deep-navy block mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-heading font-bold text-deep-navy block mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                      className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange"
                    />
                  </div>
                  <div>
                    <label className="font-heading font-bold text-deep-navy block mb-2">
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange font-paragraph"
                    >
                      <option value="">Select property type</option>
                      <option value="single-family">Single Family Home</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="commercial">Commercial</option>
                      <option value="mixed-use">Mixed Use</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-heading font-bold text-deep-navy block mb-2">
                    Property Address *
                  </label>
                  <Input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Durham, NC 27701"
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange"
                  />
                </div>

                <div>
                  <label className="font-heading font-bold text-deep-navy block mb-2">
                    Estimated Budget *
                  </label>
                  <Input
                    type="text"
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleInputChange}
                    placeholder="$50,000"
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange"
                  />
                </div>

                <div>
                  <label className="font-heading font-bold text-deep-navy block mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, and any specific concerns..."
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rocket-orange font-paragraph min-h-32"
                  />
                </div>

                <div className="bg-cool-gray100 p-4 rounded-lg border border-cool-gray300">
                  <p className="font-paragraph text-sm text-cool-gray700 mb-3">
                    <span className="font-bold">Upload Documents:</span> Please prepare your contractor scope and estimate documents. You'll receive upload instructions after submitting this form.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg py-6 rounded-lg"
                >
                  Submit Deal for Review
                </Button>

                <p className="font-paragraph text-xs text-cool-gray700 text-center">
                  We'll review your submission and contact you within 24 hours to confirm receipt and next steps.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 px-4 md:py-24 bg-gradient-to-r from-deep-navy to-blue-gray-gradient-end">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Protect Your Investment Today
            </h2>
            <p className="font-paragraph text-xl text-cool-gray100 mb-8 max-w-2xl mx-auto">
              Don't let budget surprises derail your real estate deals. Get an independent expert review.
            </p>
            <Button
              size="lg"
              className="bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg px-8 py-6 rounded-lg"
            >
              Submit Deal for Review
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
