import { motion } from 'framer-motion';
import { Check, Zap, Brain, CheckCircle, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'One-Off Task',
      price: 75,
      period: 'per task',
      description: 'Perfect for occasional needs',
      features: [
        'Single task submission',
        'Professional preparation',
        'Reviewed before delivery',
        'No commitment required',
      ],
      buttonText: 'Buy One-Off Task',
      highlighted: false,
    },
    {
      name: 'Basic',
      price: 240,
      period: 'per month',
      description: 'Great for regular users',
      features: [
        '4 tasks per month',
        'Professional preparation',
        'Reviewed before delivery',
        'Priority support',
        'Rollover unused tasks',
      ],
      buttonText: 'Start Basic',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 500,
      period: 'per month',
      description: 'Best value for busy professionals',
      features: [
        '10 tasks per month',
        'Professional preparation',
        'Reviewed before delivery',
        'Priority support',
        'Rollover unused tasks',
        'Faster turnaround time',
      ],
      buttonText: 'Start Premium',
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-deep-navy to-primary">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                Simple pricing. Pay per task or save with a monthly plan.
              </h1>
              <p className="font-paragraph text-xl text-white/90">
                All pricing is per project. Choose the plan that works best for your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-lg p-8 ${
                    plan.highlighted
                      ? 'border-4 border-primary shadow-xl scale-105'
                      : 'border-2 border-cool-gray300'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-primary text-white text-center py-2 px-4 rounded-lg mb-4 font-paragraph text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="font-heading text-5xl font-bold text-deep-navy">
                      ${plan.price}
                    </span>
                    <span className="font-paragraph text-lg text-cool-gray700 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <p className="font-paragraph text-base text-cool-gray700 mb-6">
                    {plan.description}
                  </p>

                  <Button
                    className={`w-full mb-6 h-12 text-base ${
                      plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'bg-secondary hover:bg-secondary/90 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-base text-cool-gray700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16 max-w-3xl mx-auto"
            >
              <p className="font-paragraph text-lg text-cool-gray700 bg-white p-6 rounded-lg border-2 border-cool-gray300">
                This is a service. Every task is prepared and reviewed before delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Workflow Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 border-t-4 border-primary">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                AI Workflow Pricing
              </h2>
              <p className="font-paragraph text-xl text-cool-gray700 max-w-3xl mx-auto">
                Custom pricing per project. Get a personalized quote based on your specific AI workflow requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Left Side - Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-lg p-8 border-2 border-primary">
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Custom AI workflow design tailored to your needs',
                      'Integration with your existing systems',
                      'Automated task processing and generation',
                      'Quality assurance and human review',
                      'Ongoing optimization and refinement',
                      'Dedicated support and maintenance',
                      'Scalable infrastructure for growth',
                      'Monthly performance analytics',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-cool-gray700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Side - Pricing Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg p-8 border-4 border-primary shadow-lg">
                  <div className="mb-6">
                    <p className="font-paragraph text-lg text-cool-gray700 mb-2">
                      Pricing Model
                    </p>
                    <h4 className="font-heading text-3xl font-bold text-deep-navy">
                      Per Project
                    </h4>
                  </div>

                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-cool-gray300">
                    <div>
                      <p className="font-paragraph text-sm text-cool-gray700 mb-1">
                        Project Complexity
                      </p>
                      <p className="font-heading text-lg font-semibold text-deep-navy">
                        Determines Your Price
                      </p>
                    </div>
                    <div>
                      <p className="font-paragraph text-sm text-cool-gray700 mb-1">
                        Factors Considered
                      </p>
                      <ul className="space-y-2 font-paragraph text-base text-cool-gray700">
                        <li>• Workflow complexity and scope</li>
                        <li>• Integration requirements</li>
                        <li>• Volume of tasks processed</li>
                        <li>• Customization level needed</li>
                      </ul>
                    </div>
                  </div>

                  <p className="font-paragraph text-base text-cool-gray700 mb-6">
                    Each AI workflow project is unique. We'll work with you to understand your requirements and provide a custom quote that fits your budget and needs.
                  </p>

                  <Button className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-white">
                    Request a Custom Quote
                  </Button>
                </div>

                <div className="bg-cool-gray100 rounded-lg p-6 border-2 border-cool-gray300">
                  <p className="font-paragraph text-sm text-cool-gray700">
                    <span className="font-semibold text-deep-navy">Ready to get started?</span> Contact our team to discuss your AI workflow needs and receive a personalized proposal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Workflow Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                How Our AI Workflow Works
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                We combine intelligent automation with human expertise to deliver exceptional results quickly and efficiently.
              </p>
            </motion.div>

            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Send,
                  title: 'Submit Your Task',
                  description: 'Provide details about what you need prepared or reviewed.',
                },
                {
                  icon: Brain,
                  title: 'AI Analysis',
                  description: 'Our AI analyzes your requirements and generates initial content.',
                },
                {
                  icon: CheckCircle,
                  title: 'Expert Review',
                  description: 'Our team reviews and refines the AI output for quality.',
                },
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: 'Receive polished, professional results ready to use.',
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-cool-gray100 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="font-paragraph text-base text-cool-gray700">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 md:p-12"
            >
              <h3 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">
                Why Choose Our AI-Powered Approach?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Faster turnaround times with AI acceleration',
                  'Consistent quality through expert review',
                  'Cost-effective automation combined with human touch',
                  'Scalable solutions for any volume of tasks',
                  'Intelligent learning from your preferences',
                  'Professional results every single time',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="font-paragraph text-base text-cool-gray700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
