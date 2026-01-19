import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BaseCrudService } from '@/integrations';
import { PricingTiers } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [pricingTiers, setPricingTiers] = useState<PricingTiers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPricing();
  }, []);

  const loadPricing = async () => {
    setIsLoading(true);
    try {
      const { items } = await BaseCrudService.getAll<PricingTiers>('pricingtiers');
      // Sort: Basic (pay-per-task) first, then by monthly price
      setPricingTiers(items.sort((a, b) => {
        // If one has pricePerTask and the other doesn't, pricePerTask comes first
        if (a.pricePerTask && !b.pricePerTask) return -1;
        if (!a.pricePerTask && b.pricePerTask) return 1;
        // Otherwise sort by monthly price
        return (a.monthlyPrice || 0) - (b.monthlyPrice || 0);
      }));
    } catch (error) {
      console.error('Error loading pricing:', error);
    } finally {
      setIsLoading(false);
    }
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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl md:text-2xl text-cool-gray100 max-w-4xl mx-auto"
          >
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : pricingTiers.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                {pricingTiers.map((tier, index) => {
                  const isPayPerTask = tier.pricePerTask && tier.pricePerTask > 0;
                  const isMostPopular = tier.isMostPopular;
                  
                  return (
                    <motion.div
                      key={tier._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Card
                        className={`p-10 h-full ${
                          isMostPopular
                            ? 'border-2 border-rocket-orange shadow-2xl relative'
                            : 'border border-cool-gray300'
                        } bg-white`}
                      >
                        {isMostPopular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rocket-orange text-white px-6 py-2 rounded-full font-heading text-sm font-bold">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-rocket-orange" />
                            <h3 className="font-heading text-3xl font-bold text-deep-navy">
                              {tier.planName}
                            </h3>
                          </div>
                          <div className="mb-6">
                            {isPayPerTask ? (
                              <>
                                <span className="font-heading text-6xl font-bold text-deep-navy">
                                  ${tier.pricePerTask}
                                </span>
                                <span className="font-paragraph text-xl text-cool-gray700">/task</span>
                              </>
                            ) : (
                              <>
                                <span className="font-heading text-6xl font-bold text-deep-navy">
                                  ${tier.monthlyPrice}
                                </span>
                                <span className="font-paragraph text-xl text-cool-gray700">/month</span>
                              </>
                            )}
                          </div>
                          <p className="font-paragraph text-lg text-cool-gray700 mb-8">
                            {tier.description}
                          </p>
                          <div className="space-y-4 mb-8 flex-grow">
                            {!isPayPerTask && tier.maxTasks && (
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                                <span className="font-paragraph text-base text-cool-gray700">
                                  <strong>{tier.maxTasks} tasks per month</strong> – Use them for any service
                                </span>
                              </div>
                            )}
                            {isPayPerTask && (
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                                <span className="font-paragraph text-base text-cool-gray700">
                                  <strong>Pay only for what you need</strong> – No subscription required
                                </span>
                              </div>
                            )}
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                              <span className="font-paragraph text-base text-cool-gray700">
                                {tier.unlimitedRevisions
                                  ? 'Unlimited revisions (reasonable)'
                                  : 'Standard revisions included'}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                              <span className="font-paragraph text-base text-cool-gray700">
                                {tier.priorityTurnaround ? 'Priority 24-48 hour turnaround' : '48-72 hour turnaround'}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                              <span className="font-paragraph text-base text-cool-gray700">
                                Secure client portal access
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-rocket-orange flex-shrink-0 mt-1" />
                              <span className="font-paragraph text-base text-cool-gray700">
                                File upload & deliverable downloads
                              </span>
                            </div>
                            {!isPayPerTask && tier.overageCostPerTask && tier.overageCostPerTask > 0 && (
                              <div className="flex items-start gap-3 pt-4 border-t border-cool-gray300">
                                <Clock className="w-6 h-6 text-cool-gray700 flex-shrink-0 mt-1" />
                                <span className="font-paragraph text-base text-cool-gray700">
                                  Additional tasks: <strong>${tier.overageCostPerTask}/task</strong>
                                </span>
                              </div>
                            )}
                          </div>
                          <Button
                            asChild
                            size="lg"
                            className={`w-full font-heading text-lg py-7 h-auto ${
                              isMostPopular
                                ? 'bg-rocket-orange hover:bg-rocket-orange/90 text-white shadow-lg hover:shadow-rocket-orange/50'
                                : 'bg-deep-navy hover:bg-deep-navy/90 text-white'
                            }`}
                          >
                            <Link to={tier.ctaButtonLink || '/portal'}>
                              {tier.ctaButtonText || 'Get Started'}
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-cool-gray700">No pricing tiers available</p>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="font-paragraph text-sm text-cool-gray700 mb-2">
              * Subscription tasks don't roll over – use it or lose it each month
            </p>
            <p className="font-paragraph text-sm text-cool-gray700">
              * All plans include secure portal access and unlimited reasonable revisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-cool-gray100">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold text-deep-navy mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                  What counts as a task?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700">
                  A task is any single deliverable: one proposal, one takeoff, one social media batch (5-10 posts), one market analysis report, or one branding package.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                  How fast is the turnaround?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700">
                  Standard turnaround is 48-72 hours. Growth plan subscribers get priority processing for faster delivery when needed.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700">
                  Yes! No long-term contracts. Cancel anytime from your portal. You'll retain access until the end of your billing period.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-3">
                  What if I need more tasks?
                </h3>
                <p className="font-paragraph text-base text-cool-gray700">
                  You can purchase additional tasks at the overage rate, or upgrade to the Growth plan for more monthly tasks and priority service.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
