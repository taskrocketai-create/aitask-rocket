import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function RealtorPage() {
  const services = [
    'Property listing descriptions',
    'Client communication letters',
    'Market analysis summaries',
    'Open house announcements',
    'Buyer and seller guides',
    'Neighborhood descriptions',
    'Email newsletters',
    'Social media content',
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
                to="/"
                className="inline-flex items-center text-white/90 hover:text-white font-paragraph text-base mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                Real Estate
              </h1>
              <p className="font-paragraph text-xl text-white/90">
                Compelling content that helps you sell properties faster
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg border-2 border-cool-gray300 mb-12"
              >
                <h2 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  Stand out in a competitive market
                </h2>
                <p className="font-paragraph text-base text-cool-gray700 mb-4">
                  In real estate, presentation is everything. Your listings need to capture attention and communicate value quickly. Professional, polished content makes the difference between a scroll-past and a showing.
                </p>
                <p className="font-paragraph text-base text-cool-gray700">
                  Send us property details and key features. We'll create descriptions that highlight what makes each property special.
                </p>
              </motion.div>

              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg border-2 border-cool-gray300 mb-12"
              >
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-6">
                  What we can prepare for you
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-base text-cool-gray700">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-primary/10 p-8 rounded-lg border-2 border-primary/30 mb-12"
              >
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  How it works
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-paragraph text-base font-semibold text-deep-navy mb-2">
                      You send:
                    </p>
                    <p className="font-paragraph text-base text-cool-gray700 italic">
                      "3 bed 2 bath ranch, 1800 sq ft, updated kitchen, hardwood floors, big backyard, quiet neighborhood, close to schools. $325k."
                    </p>
                  </div>
                  <div>
                    <p className="font-paragraph text-base font-semibold text-deep-navy mb-2">
                      We deliver:
                    </p>
                    <p className="font-paragraph text-base text-cool-gray700">
                      A polished listing description that emphasizes the home's best features, appeals to your target buyers, and includes all essential details formatted for MLS and marketing materials.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  Ready to elevate your listings?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700 mb-6">
                  Choose a plan and start submitting tasks today
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
                >
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
