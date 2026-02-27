import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Brain } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const industries = [
    {
      title: 'Contractor & Estimator',
      path: '/contractor',
      description: 'Proposals, estimates, and project documentation',
    },
    {
      title: 'Real Estate',
      path: '/realtor',
      description: 'Listings, property descriptions, and client communications',
    },
    {
      title: 'Restaurant',
      path: '/restaurant',
      description: 'Menus, specials, and promotional content',
    },
    {
      title: 'Retail',
      path: '/retail',
      description: 'Product descriptions, inventory lists, and marketing materials',
    },
    {
      title: 'Bars & Nightlife',
      path: '/bar',
      description: 'Drink menus, event promotions, and social media content',
    },
  ];

  const howItWorksSteps = [
    {
      number: '1',
      title: 'Choose your industry',
      description: 'Select the industry that matches your business needs',
    },
    {
      number: '2',
      title: 'Submit one task',
      description: 'Send us your notes and requirements',
    },
    {
      number: '3',
      title: 'Draft is prepared and reviewed before delivery',
      description: 'Receive professional, ready-to-use documents',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-deep-navy to-primary py-24 md:py-32">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                Office Work, Done Faster
              </h1>
              <p className="font-paragraph text-xl md:text-2xl text-white/90 mb-8">
                Send notes. Get finished paperwork and content back.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 h-auto"
              >
                <Link to="/pricing">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Choose Your Industry
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                We specialize in creating professional documents tailored to your industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={industry.path}
                    className="block bg-white p-8 rounded-lg border-2 border-cool-gray300 hover:border-primary hover:shadow-lg transition-all group h-full"
                  >
                    <h3 className="font-heading text-2xl font-bold text-deep-navy mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="font-paragraph text-base text-cool-gray700 mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-primary font-paragraph text-base font-medium">
                      Learn more
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Workflow Featured Section */}
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

        {/* How It Works Section */}
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
                How It Works
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                Three simple steps to get your work done
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-heading text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-base text-cool-gray700">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
