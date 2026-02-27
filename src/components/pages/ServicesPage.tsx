import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Ruler, Share2, TrendingUp, Palette, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setIsLoading(true);
    try {
      const { items } = await BaseCrudService.getAll<Services>('services');
      setServices(items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase();
    if (name.includes('proposal')) return FileText;
    if (name.includes('takeoff')) return Ruler;
    if (name.includes('social')) return Share2;
    if (name.includes('market') || name.includes('analysis')) return TrendingUp;
    if (name.includes('brand')) return Palette;
    return FileText;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-deep-navy to-blue-gray-gradient-end">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl font-bold text-white mb-6"
          >
            AI-Powered Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl md:text-2xl text-cool-gray100 max-w-4xl mx-auto"
          >
            From proposals to takeoffs, social media to branding—we handle the tasks that take time away from your business.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = getServiceIcon(service.serviceName || '');
                  return (
                    <motion.div
                      key={service._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-8 h-full bg-white border border-cool-gray300 hover:border-rocket-orange hover:shadow-xl transition-all">
                        <div className="flex flex-col h-full">
                          {service.serviceImage && (
                            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-cool-gray100">
                              <Image
                                src={service.serviceImage}
                                alt={service.serviceName || 'Service'}
                                width={400}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-lg bg-rocket-orange/10 flex items-center justify-center">
                              <IconComponent className="w-7 h-7 text-rocket-orange" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-deep-navy">
                              {service.serviceName}
                            </h3>
                          </div>
                          {service.tagline && (
                            <p className="font-paragraph text-lg font-medium text-rocket-orange mb-4">
                              {service.tagline}
                            </p>
                          )}
                          <p className="font-paragraph text-base text-cool-gray700 mb-6 flex-grow">
                            {service.description}
                          </p>
                          {service.deliveryTime && (
                            <div className="flex items-center gap-2 text-cool-gray700 mb-4">
                              <Clock className="w-5 h-5" />
                              <span className="font-paragraph text-sm">
                                Delivery: {service.deliveryTime}
                              </span>
                            </div>
                          )}
                          {service.callToActionText && (
                            <div className="pt-4 border-t border-cool-gray300">
                              <p className="font-paragraph text-base font-medium text-deep-navy">
                                {service.callToActionText}
                              </p>
                            </div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-cool-gray700">No services available</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Services by Business Type */}
      <section className="w-full py-24 bg-cool-gray100">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold text-deep-navy mb-6 text-center"
          >
            Additional Services by Business Type
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-paragraph text-xl text-cool-gray700 max-w-4xl mx-auto mb-16 text-center"
          >
            These are common tasks we handle for different types of businesses. If it's writing, research, paperwork, or communication-related, it can usually be handled.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contractors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg border border-cool-gray300"
            >
              <h3 className="font-heading text-3xl font-bold text-deep-navy mb-6">
                Contractors
              </h3>
              <ul className="space-y-3">
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Estimates and proposal writing</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Scope of work documents</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Change order write-ups</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Bid comparisons and summaries</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Pre-construction scoping reports</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Takeoff assistance</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Client emails and project explanations</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Internal checklists and SOPs</span>
                </li>
              </ul>
            </motion.div>

            {/* Realtors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg border border-cool-gray300"
            >
              <h3 className="font-heading text-3xl font-bold text-deep-navy mb-6">
                Realtors
              </h3>
              <ul className="space-y-3">
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>MLS listing descriptions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Property marketing descriptions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Social media captions for listings</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Open house flyer text</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Buyer and seller email campaigns</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Listing summaries for clients</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Market research and pricing support</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Buyer and seller guides</span>
                </li>
              </ul>
            </motion.div>

            {/* Restaurants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg border border-cool-gray300"
            >
              <h3 className="font-heading text-3xl font-bold text-deep-navy mb-6">
                Restaurants
              </h3>
              <ul className="space-y-3">
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Social media posts and promotions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Menu descriptions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Loyalty program content</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Email and SMS promotions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Google review responses</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Hiring posts and job descriptions</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Internal staff checklists</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Customer communication templates</span>
                </li>
              </ul>
            </motion.div>

            {/* General Small Businesses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg border border-cool-gray300"
            >
              <h3 className="font-heading text-3xl font-bold text-deep-navy mb-6">
                General Small Businesses
              </h3>
              <ul className="space-y-3">
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Website copy cleanup</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Google Business profile content</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Customer email and text templates</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Review responses</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Flyers and ad copy</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Job descriptions and hiring posts</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Internal documentation and SOPs</span>
                </li>
                <li className="font-paragraph text-base text-cool-gray700 flex items-start">
                  <span className="text-rocket-orange mr-3 mt-1">•</span>
                  <span>Voice notes converted into written documents</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Research & Decision Support - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-deep-navy to-blue-gray-gradient-end p-10 rounded-lg border-2 border-rocket-orange"
          >
            <h3 className="font-heading text-3xl font-bold text-white mb-6">
              Research & Decision Support
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Market research and competitor analysis</span>
              </li>
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Product or service idea validation</span>
              </li>
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Pricing and positioning research</span>
              </li>
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Build vs buy recommendations</span>
              </li>
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Feasibility and cost analysis</span>
              </li>
              <li className="font-paragraph text-base text-cool-gray100 flex items-start">
                <span className="text-rocket-orange mr-3 mt-1">•</span>
                <span>Clear go / no-go decision reports</span>
              </li>
            </ul>
            <p className="font-paragraph text-lg text-white border-t border-white/20 pt-6">
              Before you spend time or money building something, we research it and give you a clear recommendation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold text-deep-navy mb-6"
          >
            Ready to Launch Your Productivity?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-paragraph text-xl text-cool-gray700 max-w-3xl mx-auto mb-8"
          >
            Choose a plan that fits your business and start getting AI-powered results in 48-72 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:taskrocketAI@gmail.com?subject=Pricing Inquiry"
              className="inline-flex items-center justify-center bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading text-lg px-10 py-7 rounded-md transition-colors"
            >
              View Pricing Plans
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
