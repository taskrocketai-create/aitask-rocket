import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Brain } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const workflowUseCases = [
    {
      title: 'Email Generation',
      description: 'Automatically create personalized emails to hundreds of customers',
      icon: '✉️',
    },
    {
      title: 'Document Processing',
      description: 'Extract data from forms and organize it into reports automatically',
      icon: '📄',
    },
    {
      title: 'Content Creation',
      description: 'Generate product descriptions, social posts, or blog content at scale',
      icon: '✍️',
    },
    {
      title: 'Data Analysis',
      description: 'Process large datasets and create insights without manual work',
      icon: '📊',
    },
  ];

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - AI Workflow Focus */}
        <section className="w-full bg-gradient-to-br from-deep-navy via-primary to-primary py-28 md:py-40">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/40">
                <p className="font-paragraph text-sm font-semibold text-secondary">
                  Automate Your Business
                </p>
              </div>
              <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6">
                AI Workflows That Work
              </h1>
              <p className="font-paragraph text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                Automate repetitive tasks, scale your operations, and focus on what matters. Build custom AI workflows tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 h-auto"
                >
                  <Link to="/pricing">Start Your Workflow</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                >
                  <Link to="/what-is-a-task">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Workflow Use Cases Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                What Can AI Workflows Do?
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-3xl mx-auto">
                From email generation to data analysis, AI workflows handle the repetitive work so your team can focus on strategy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowUseCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                    {useCase.title}
                  </h3>
                  <p className="font-paragraph text-base text-cool-gray700">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Why Choose AI Workflows?
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                Transform how your business operates with intelligent automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: 'Save Time',
                  desc: 'Hours of manual work completed in minutes. Your team works smarter, not harder.',
                },
                {
                  icon: Brain,
                  title: 'Reduce Costs',
                  desc: 'Automate repetitive tasks instead of hiring more staff. Scale without overhead.',
                },
                {
                  icon: CheckCircle,
                  title: 'Improve Quality',
                  desc: 'Consistent, error-free results every single time. No human mistakes.',
                },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg p-8 border-2 border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-deep-navy mb-2 text-center">
                      {benefit.title}
                    </h4>
                    <p className="font-paragraph text-base text-cool-gray700 text-center">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Using Workflows Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Built for Your Industry
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                Explore how AI workflows transform operations across different sectors
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
                      Explore
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Get Started in 3 Steps
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700 max-w-2xl mx-auto">
                From setup to automation, it's simple and straightforward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: '1',
                  title: 'Define Your Workflow',
                  description: 'Tell us what task you want to automate and how it should work',
                },
                {
                  number: '2',
                  title: 'We Build & Test',
                  description: 'Our team creates and tests your custom AI workflow',
                },
                {
                  number: '3',
                  title: 'Deploy & Scale',
                  description: 'Launch your workflow and watch it automate your business',
                },
              ].map((step, index) => (
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
              className="text-center mt-16"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
              >
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
