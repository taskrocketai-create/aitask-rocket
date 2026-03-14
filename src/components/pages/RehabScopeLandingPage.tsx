import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Upload, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RehabScopeLandingPage() {
  const [formData, setFormData] = useState({
    investorName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    squareFootage: '',
    estimatedBudget: '',
    notes: '',
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('intake-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="w-full">
        {/* HERO SECTION */}
        <section className="w-full bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-blue-gray-gradient-end py-24 px-6">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6">
                RehabScope™ Review
              </h1>
              <p className="font-heading text-2xl md:text-3xl text-blue-100 mb-4 font-semibold">
                Independent Rehab Scope & Budget Review for Real Estate Investors
              </p>
              <p className="font-paragraph text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Before you swing the first hammer, know the real numbers.
              </p>
              <p className="font-paragraph text-base text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                Upload your contractor scope and rehab estimate to receive an independent review before construction begins.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToForm}
                  className="bg-rocket-orange hover:bg-orange-600 text-white font-heading font-bold text-lg px-8 py-6 h-auto rounded-lg"
                >
                  Submit Deal for Review
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                Why Investors Use RehabScope
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-3xl mx-auto">
                Renovation budgets often fail because contractor scopes are incomplete, items are missing, or costs are underestimated. These gaps can derail projects and destroy profitability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: AlertCircle, title: 'Missing Scope Items', description: 'Critical work not included in contractor estimates' },
                  { icon: AlertCircle, title: 'Underestimated Materials', description: 'Quantities and costs significantly below reality' },
                  { icon: AlertCircle, title: 'Unrealistic Pricing', description: 'Contractor bids that don\'t reflect actual market rates' },
                  { icon: AlertCircle, title: 'Incomplete Trade Coverage', description: 'Entire trades or specialties overlooked' },
                  { icon: AlertCircle, title: 'Sequencing Issues', description: 'Work order problems that increase costs and delays' },
                  { icon: AlertCircle, title: 'Hidden Conditions', description: 'Unforeseen problems discovered during demolition' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border border-cool-gray300 hover:shadow-lg transition-shadow">
                      <item.icon className="w-8 h-8 text-rocket-orange mb-4" />
                      <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="font-paragraph text-cool-gray700">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT REHABSCOPE REVIEWS */}
        <section className="w-full py-20 px-6 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                What RehabScope Reviews
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-3xl mx-auto">
                Our comprehensive analysis identifies gaps and risks before construction begins, ensuring you have a realistic understanding of your renovation scope.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Contractor Scopes of Work',
                  'Contractor Estimates & Bids',
                  'Investor Rehab Lists',
                  'Property Photos & Listing Details',
                  'Renovation Budgets',
                  'Floor Plans & Measurements',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg border border-cool-gray300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-cool-gray900 font-medium">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING PACKAGES */}
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                Pricing Packages
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-3xl mx-auto">
                Choose the RehabScope package that fits your investment needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Review Package */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 border-2 border-cool-gray300 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                      RehabScope™ Review
                    </h3>
                    <p className="font-paragraph text-rocket-orange text-3xl font-bold mb-6">
                      Starting at $1,500
                    </p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[
                        'Review of renovation scope',
                        'Contractor estimate review',
                        'Identification of missing or underestimated items',
                        'Written RehabScope Review Report',
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
                          <span className="font-paragraph text-cool-gray900">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-blue-700 text-white font-heading font-bold">
                      Get Started
                    </Button>
                  </Card>
                </motion.div>

                {/* Pro Package - Most Popular */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 border-2 border-rocket-orange shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col relative">
                    <Badge className="absolute -top-3 left-6 bg-rocket-orange text-white font-heading font-bold">
                      Most Popular
                    </Badge>
                    <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2 mt-4">
                      RehabScope™ Pro
                    </h3>
                    <p className="font-paragraph text-rocket-orange text-3xl font-bold mb-6">
                      Starting at $2,500
                    </p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[
                        'Everything in Review, plus:',
                        'Material quantity review',
                        'Rehab budget analysis',
                        'Renovation sequencing recommendations',
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
                          <span className={`font-paragraph ${idx === 0 ? 'font-bold text-deep-navy' : 'text-cool-gray900'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-rocket-orange hover:bg-orange-600 text-white font-heading font-bold">
                      Get Started
                    </Button>
                  </Card>
                </motion.div>

                {/* Elite Package */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 border-2 border-cool-gray300 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                      RehabScope™ Elite
                    </h3>
                    <p className="font-paragraph text-rocket-orange text-3xl font-bold mb-6">
                      Starting at $4,500
                    </p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[
                        'Everything in Pro, plus:',
                        'Project timeline review',
                        'Contractor estimate comparison',
                        'Follow-up support during early project stages',
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
                          <span className={`font-paragraph ${idx === 0 ? 'font-bold text-deep-navy' : 'text-cool-gray900'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-blue-700 text-white font-heading font-bold">
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OPTIONAL INVESTOR TOOLS */}
        <section className="w-full py-20 px-6 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                Optional Investor Tools
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-3xl mx-auto">
                Enhance your RehabScope package with specialized services tailored to your project needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Scope of Work Creation', price: '$1,200 – $2,000', description: 'Professional scope development from scratch' },
                  { title: 'Material Takeoff Review', price: '$600 – $1,200', description: 'Detailed material quantity and cost analysis' },
                  { title: 'Site Visit & LiDAR Property Scan', price: 'Starting at $500 + travel', description: 'On-site assessment with advanced scanning technology' },
                  { title: 'Ongoing Project Review Support', price: '$1,000 per month', description: 'Continuous support throughout your project lifecycle' },
                ].map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border border-cool-gray300 hover:shadow-lg transition-shadow">
                      <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                        {tool.title}
                      </h3>
                      <p className="font-paragraph text-rocket-orange text-lg font-bold mb-3">
                        {tool.price}
                      </p>
                      <p className="font-paragraph text-cool-gray700">
                        {tool.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMMON REHAB BUDGET MISTAKES */}
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                Common Rehab Budget Mistakes
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-3xl mx-auto">
                These are the issues we identify and help you avoid before construction begins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Electrical upgrades missing from scope',
                  'Flooring quantities underestimated',
                  'Trim and finish work missing',
                  'HVAC or mechanical repairs overlooked',
                  'Exterior repairs not included',
                  'Demolition revealing additional problems',
                ].map((mistake, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-cool-gray100 rounded-lg border border-cool-gray300"
                  >
                    <AlertCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-cool-gray900">
                      {mistake}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXAMPLE REVIEW FINDING */}
        <section className="w-full py-20 px-6 bg-gradient-to-r from-deep-navy to-blue-gray-gradient-end">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-12 shadow-xl"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-8 text-center">
                Example Review Finding
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-6">
                    Case Study: Durham, NC Flip
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-paragraph text-sm text-cool-gray700 uppercase tracking-wide font-bold mb-2">
                        Initial Contractor Estimate
                      </p>
                      <p className="font-heading text-4xl font-bold text-deep-navy">
                        $32,000
                      </p>
                    </div>
                    <div className="border-t border-cool-gray300 pt-6">
                      <p className="font-paragraph text-cool-gray900 mb-4">
                        RehabScope review identified missing scope items including:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Electrical upgrades',
                          'Flooring quantity errors',
                          'Trim carpentry',
                          'Exterior repairs',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 font-paragraph text-cool-gray900">
                            <CheckCircle2 className="w-4 h-4 text-rocket-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-cool-gray300 pt-6">
                      <p className="font-paragraph text-sm text-cool-gray700 uppercase tracking-wide font-bold mb-2">
                        Revised Realistic Budget
                      </p>
                      <p className="font-heading text-4xl font-bold text-rocket-orange">
                        ~$50,000
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cool-gray100 p-8 rounded-lg border border-cool-gray300">
                  <h4 className="font-heading text-xl font-bold text-deep-navy mb-4">
                    The RehabScope Difference
                  </h4>
                  <p className="font-paragraph text-cool-gray900 leading-relaxed mb-4">
                    Our goal is not to criticize contractors, but to help investors understand the real renovation scope before construction begins.
                  </p>
                  <p className="font-paragraph text-cool-gray900 leading-relaxed">
                    By identifying gaps and underestimated costs upfront, we help you make informed decisions, negotiate better pricing, and avoid budget overruns that destroy project profitability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECT INTAKE FORM */}
        <section id="intake-form" className="w-full py-20 px-6 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4 text-center">
                Request a RehabScope Review
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 text-center mb-12 max-w-3xl mx-auto">
                Submit your deal details and documentation for a comprehensive RehabScope review.
              </p>

              <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-white border-2 border-cool-gray300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Investor Name *
                      </label>
                      <Input
                        type="text"
                        name="investorName"
                        value={formData.investorName}
                        onChange={handleFormChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="(555) 123-4567"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Property Address *
                      </label>
                      <Input
                        type="text"
                        name="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={handleFormChange}
                        placeholder="123 Main St, City, State"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Property Type *
                      </label>
                      <Input
                        type="text"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleFormChange}
                        placeholder="e.g., Single Family, Duplex, Multi-Unit"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                        Square Footage
                      </label>
                      <Input
                        type="text"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleFormChange}
                        placeholder="e.g., 2,500 sq ft"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                      Estimated Rehab Budget *
                    </label>
                    <Input
                      type="text"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleFormChange}
                      placeholder="e.g., $50,000"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="font-paragraph font-bold text-cool-gray900 block mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      placeholder="Tell us about your project, specific concerns, or questions..."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div className="bg-cool-gray100 p-6 rounded-lg border border-cool-gray300">
                    <p className="font-paragraph text-sm text-cool-gray700 mb-4">
                      <span className="font-bold">Upload Documentation:</span> Please prepare the following files to attach (you'll be able to upload after submitting this form):
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Contractor Scope of Work',
                        'Contractor Estimate/Bid',
                        'Property Photos (if available)',
                      ].map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-paragraph text-cool-gray900">
                          <Upload className="w-4 h-4 text-rocket-orange" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-rocket-orange hover:bg-orange-600 text-white font-heading font-bold text-lg py-6 h-auto rounded-lg"
                    >
                      Submit Deal for Review
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>

                  <p className="font-paragraph text-xs text-cool-gray700 text-center">
                    We'll review your submission and contact you within 1-2 business days to discuss your project.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
