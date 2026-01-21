import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HelpPage() {
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
                How Can We Help?
              </h1>
              <p className="font-paragraph text-xl text-white/90">
                Find answers to common questions about our service
              </p>
            </motion.div>
          </div>
        </section>

        {/* Help Content */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/what-is-a-task"
                  className="block bg-white p-8 rounded-lg border-2 border-cool-gray300 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <HelpCircle className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-bold text-deep-navy mb-3 group-hover:text-primary transition-colors">
                        What counts as one task
                      </h2>
                      <p className="font-paragraph text-base text-cool-gray700 mb-4">
                        Learn about what qualifies as a single task and see examples for different industries
                      </p>
                      <div className="flex items-center text-primary font-paragraph text-base font-medium">
                        Read more
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Additional Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 bg-white p-8 rounded-lg border-2 border-cool-gray300"
              >
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  Still have questions?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700 mb-6">
                  We're here to help. Reach out to our team and we'll get back to you as soon as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-paragraph text-base font-medium rounded-lg transition-colors"
                  >
                    View Pricing
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-cool-gray100 text-deep-navy font-paragraph text-base font-medium rounded-lg border-2 border-cool-gray300 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
