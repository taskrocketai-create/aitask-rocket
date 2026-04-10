import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhatIsATaskPage() {
  const taskExamples = [
    {
      industry: 'Contractor & Estimator',
      examples: [
        'One project proposal or estimate',
        'One change order document',
        'One safety plan or site report',
        'One invoice or payment schedule',
      ],
    },
    {
      industry: 'Real Estate',
      examples: [
        'One property listing description',
        'One client communication letter',
        'One market analysis summary',
        'One open house announcement',
      ],
    },
    {
      industry: 'Restaurant',
      examples: [
        'One complete menu (all sections)',
        'One daily specials board',
        'One promotional flyer or email',
        'One catering package description',
      ],
    },
    {
      industry: 'Retail',
      examples: [
        'Up to 10 product descriptions',
        'One promotional email or newsletter',
        'One sale announcement',
        'One inventory list (up to 50 items)',
      ],
    },
    {
      industry: 'Bars & Nightlife',
      examples: [
        'One complete drink menu',
        'One event promotion',
        'One social media post series (3-5 posts)',
        'One happy hour announcement',
      ],
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
              className="max-w-4xl mx-auto"
            >
              <Link
                to="/help"
                className="inline-flex items-center text-white/90 hover:text-white font-paragraph text-base mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Help
              </Link>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                What Counts as One Task
              </h1>
              <p className="font-paragraph text-xl text-white/90">
                Clear examples of what qualifies as a single task in our service
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg border-2 border-cool-gray300 mb-12"
              >
                <h2 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  Understanding Tasks
                </h2>
                <p className="font-paragraph text-base text-cool-gray700 mb-4">
                  A task is one complete piece of work that requires preparation and review. Each task is handled individually and delivered as a finished, professional document ready for your use.
                </p>
                <p className="font-paragraph text-base text-cool-gray700">
                  Below are examples of what counts as one task in different industries:
                </p>
              </motion.div>

              {/* Industry Examples */}
              <div className="space-y-8">
                {taskExamples.map((category, index) => (
                  <motion.div
                    key={category.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg border-2 border-cool-gray300"
                  >
                    <h3 className="font-heading text-xl font-bold text-deep-navy mb-6">
                      {category.industry}
                    </h3>
                    <ul className="space-y-4">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-paragraph text-base text-cool-gray700">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Important Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-primary/10 p-8 rounded-lg border-2 border-primary/30 mt-12"
              >
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-paragraph text-base text-cool-gray700">
                      • Each task is prepared by professionals and reviewed for quality before delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-paragraph text-base text-cool-gray700">
                      • Complex projects may count as multiple tasks - we'll let you know upfront
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-paragraph text-base text-cool-gray700">
                      • Revisions to completed tasks are included at no extra charge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-paragraph text-base text-cool-gray700">
                      • Monthly plan tasks roll over if unused (up to 2 months)
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-12"
              >
                <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  Ready to get started?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700 mb-6">
                  Choose a plan that works for you
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-paragraph text-lg font-medium rounded-lg transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
