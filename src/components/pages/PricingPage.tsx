import { motion } from 'framer-motion';
import { Check, Zap, Brain, CheckCircle2, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const navigate = useNavigate();

  const handlePlanClick = (planName: string) => {
    if (planName === 'AI Workflow') {
      // Send email for AI Workflow quote request
      const mailtoLink = `mailto:taskrocketAI@gmail.com?subject=AI Workflow Quote Request&body=I am interested in a custom AI workflow solution. Please contact me to discuss my requirements.`;
      window.location.href = mailtoLink;
    } else {
      navigate(`/submit-task?package=${encodeURIComponent(planName)}`);
    }
  };

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
                Flexible Pricing for Workflows and Tasks
              </h1>
              <p className="font-paragraph text-xl text-white/90">
                Choose custom AI workflows for automation or individual tasks for one-off needs. Both options deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Workflow Pricing Section - FIRST */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 border-b-4 border-primary">
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
                Custom pricing per project. Build intelligent automation tailored to your business. Get a personalized quote based on your specific AI workflow requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pt-24 px-6 md:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 bg-white rounded-xl p-8 shadow-xl border-t-8 border-primary relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-8 relative z-10">What's Included in Your AI Workflow</h3>
                <ul className="space-y-6 relative z-10">
                  {[ "Custom AI workflow design tailored to your needs", "Integration with your existing systems", "Automated task processing and generation", "Quality assurance and human review", "Ongoing optimization and refinement", "Dedicated support and maintenance", "Scalable infrastructure for growth", "Monthly performance analytics" ].map((feature) => (
                    <li key={feature} className="flex items-start gap-4 p-4 bg-cool-gray100 rounded-lg shadow-sm">
                      <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="font-paragraph text-lg text-cool-gray700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="lg:col-span-1 flex flex-col space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 shadow-2xl text-white flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-paragraph text-lg mb-2 opacity-90">Pricing Model</p>
                    <h4 className="font-heading text-4xl font-bold mb-6">Per Project</h4>
                    <div className="space-y-4 mb-8 pb-6 border-b border-white/30">
                      <div>
                        <p className="font-paragraph text-sm mb-1 opacity-80">Project Complexity</p>
                        <p className="font-heading text-xl font-semibold">Determines Your Price</p>
                      </div>
                      <div>
                        <p className="font-paragraph text-sm mb-1 opacity-80">Factors Considered</p>
                        <ul className="space-y-2 font-paragraph text-base">
                          <li>• Workflow complexity and scope</li>
                          <li>• Integration requirements</li>
                          <li>• Volume of tasks processed</li>
                          <li>• Customization level needed</li>
                        </ul>
                      </div>
                    </div>
                    <p className="font-paragraph text-base mb-8 opacity-90">
                      Each AI workflow project is unique. We'll work with you to understand your requirements and provide a custom quote that fits your budget and needs.
                    </p>
                  </div>
                  <Button 
                    className="w-full h-14 text-lg bg-white text-primary hover:bg-cool-gray100 transition-all duration-300 shadow-md"
                    onClick={() => handlePlanClick('AI Workflow')}
                  >
                    Request a Custom Quote
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-cool-gray100 rounded-xl p-6 border border-cool-gray300 shadow-sm">
                  <p className="font-paragraph text-base text-cool-gray700">
                    <span className="font-semibold text-deep-navy">Ready to get started?</span> Contact our team to discuss your AI workflow needs and receive a personalized proposal.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Task Pricing Cards - SECOND */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12 pt-24 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cool-gray100 to-white opacity-70"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Task-Based Pricing
              </h2>
              <p className="font-paragraph text-xl text-cool-gray700 max-w-3xl mx-auto">
                Pay per task or save with a monthly plan. Perfect for one-off projects or ongoing needs.
              </p>
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 max-w-7xl mx-auto items-end">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className={`relative bg-white rounded-2xl p-8 shadow-2xl flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'border-4 border-primary ring-8 ring-primary/20' // Added ring for more emphasis
                      : 'border-2 border-cool-gray300'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-center py-2 px-6 rounded-full font-paragraph text-sm font-semibold shadow-lg whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="font-heading text-3xl font-bold text-deep-navy mb-3 mt-4">
                    {plan.name}
                  </h3>
                  
                  <p className="font-paragraph text-base text-cool-gray700 mb-6 flex-grow">
                    {plan.description}
                  </p>

                  <div className="mb-8 flex items-baseline justify-center lg:justify-start">
                    <span className="font-heading text-6xl font-bold text-deep-navy">
                      ${plan.price}
                    </span>
                    <span className="font-paragraph text-xl text-cool-gray700 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-base text-cool-gray700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-14 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-secondary hover:bg-secondary/90 text-white'
                    }`}
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-20 max-w-3xl mx-auto relative z-10"
            >
              <p className="font-paragraph text-lg text-cool-gray700 bg-white p-8 rounded-xl border-2 border-cool-gray300 shadow-lg">
                This is a service. Every task is prepared and reviewed before delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is AI Workflow Section */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                What is an AI Workflow?
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-3xl mx-auto">
                AI Workflows, in simple terms, are like having a super-efficient assistant that automates repetitive tasks. Instead of doing everything manually, you use AI to handle parts of the process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
              {/* Left - Simple Explanation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg p-8 border-2 border-primary">
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                    The Simple Version
                  </h3>
                  <p className="font-paragraph text-base text-cool-gray700 mb-4">
                    An AI workflow is like having a tireless employee who:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Learns what you need done',
                      'Does the work automatically and consistently',
                      'Handles the same task over and over without getting tired',
                      'Scales up or down based on your needs',
                      'Works 24/7 without breaks',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-cool-gray700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right - Real Examples */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg p-8 border-2 border-secondary">
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                    Real-World Examples
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Email Generation',
                        desc: 'Automatically create personalized emails to hundreds of customers',
                      },
                      {
                        title: 'Document Processing',
                        desc: 'Extract data from forms and organize it into reports automatically',
                      },
                      {
                        title: 'Content Creation',
                        desc: 'Generate product descriptions, social posts, or blog content at scale',
                      },
                      {
                        title: 'Data Analysis',
                        desc: 'Process large datasets and create insights without manual work',
                      },
                    ].map((example) => (
                      <div key={example.title} className="pb-4 border-b border-cool-gray300 last:border-b-0">
                        <p className="font-heading text-base font-semibold text-deep-navy mb-1">
                          {example.title}
                        </p>
                        <p className="font-paragraph text-sm text-cool-gray700">
                          {example.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 max-w-5xl mx-auto"
            >
              <h3 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">
                Why Businesses Use AI Workflows
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: 'Save Time',
                    desc: 'Hours of manual work completed in minutes',
                  },
                  {
                    icon: Brain,
                    title: 'Reduce Costs',
                    desc: 'Automate repetitive tasks instead of hiring more staff',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Improve Quality',
                    desc: 'Consistent, error-free results every single time',
                  },
                ].map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="font-heading text-lg font-bold text-deep-navy mb-2">
                        {benefit.title}
                      </h4>
                      <p className="font-paragraph text-base text-cool-gray700">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Our AI Workflow Works Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Send,
                  title: 'Submit Your Task',
                  description: 'You tell the system what you need.',
                },
                {
                  icon: Brain,
                  title: 'AI Analysis',
                  description: 'The AI looks at your request and starts creating content.',
                },
                {
                  icon: CheckCircle,
                  title: 'Expert Review',
                  description: 'A real person checks the AI\'s work to make sure it\'s high quality.',
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
