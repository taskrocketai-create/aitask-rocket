import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
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
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <Image 
                  src="https://static.wixstatic.com/media/18d7f4_1218cbaee33546058e12caec11b31c0c~mv2.png" 
                  alt="Task Rocket - Launch Your Productivity" 
                  width={400}
                  className="w-full max-w-md h-auto"
                />
              </motion.div>
            </div>
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
