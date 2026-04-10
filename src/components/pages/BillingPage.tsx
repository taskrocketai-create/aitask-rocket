import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BaseCrudService } from '@/integrations';
import { ClientSubscriptions } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BillingPage() {
  const [subscription, setSubscription] = useState<ClientSubscriptions | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSubscription();
  }, []);

  const loadSubscription = async () => {
    setIsLoading(true);
    try {
      const { items } = await BaseCrudService.getAll<ClientSubscriptions>('clientsubscriptions', {}, { limit: 1 });
      if (items.length > 0) {
        setSubscription(items[0]);
      }
    } catch (error) {
      console.error('Error loading subscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cool-gray100">
      <Header />

      <div className="max-w-[100rem] mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-5xl font-bold text-deep-navy mb-4">
            Billing & Subscription
          </h1>
          <p className="font-paragraph text-xl text-cool-gray700">
            Manage your subscription and view billing information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-deep-navy mb-6">
                  Current Subscription
                </h2>

                <div className="min-h-[200px]">
                  {isLoading ? null : subscription ? (
                    <div className="space-y-6">
                      <div className="flex items-start justify-between pb-6 border-b border-cool-gray300">
                        <div>
                          <h3 className="font-heading text-3xl font-bold text-deep-navy mb-2">
                            {subscription.planName}
                          </h3>
                          <div className="flex items-center gap-2">
                            {subscription.subscriptionStatus?.toLowerCase() === 'active' ? (
                              <>
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="font-paragraph text-base text-green-600 font-medium">
                                  {subscription.subscriptionStatus}
                                </span>
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-5 h-5 text-rocket-orange" />
                                <span className="font-paragraph text-base text-rocket-orange font-medium">
                                  {subscription.subscriptionStatus}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        {subscription.monthlyCost && (
                          <div className="text-right">
                            <p className="font-heading text-4xl font-bold text-deep-navy">
                              ${subscription.monthlyCost}
                            </p>
                            <p className="font-paragraph text-sm text-cool-gray700">per month</p>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {subscription.subscriptionStartDate && (
                          <div>
                            <p className="font-paragraph text-sm text-cool-gray700 mb-1">
                              Subscription Started
                            </p>
                            <p className="font-heading text-lg font-bold text-deep-navy">
                              {new Date(subscription.subscriptionStartDate).toLocaleDateString()}
                            </p>
                          </div>
                        )}
                        {subscription.nextBillingDate && (
                          <div>
                            <p className="font-paragraph text-sm text-cool-gray700 mb-1">
                              Next Billing Date
                            </p>
                            <p className="font-heading text-lg font-bold text-deep-navy">
                              {new Date(subscription.nextBillingDate).toLocaleDateString()}
                            </p>
                          </div>
                        )}
                        <div>
                          <p className="font-paragraph text-sm text-cool-gray700 mb-1">
                            Tasks Remaining
                          </p>
                          <p className="font-heading text-lg font-bold text-rocket-orange">
                            {subscription.tasksRemaining || 0} tasks
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-6 border-t border-cool-gray300">
                        <Button
                          asChild
                          size="lg"
                          className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading"
                        >
                          <Link to="/pricing">Change Plan</Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-cool-gray300 text-cool-gray700 hover:bg-cool-gray100 font-heading"
                        >
                          Update Payment Method
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="w-16 h-16 text-cool-gray300 mx-auto mb-4" />
                      <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">
                        No Active Subscription
                      </h3>
                      <p className="font-paragraph text-base text-cool-gray700 mb-6">
                        Choose a plan to get started with Task Rocket
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading"
                      >
                        <Link to="/pricing">View Pricing Plans</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Billing History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-deep-navy mb-6">
                  Billing History
                </h2>

                <div className="space-y-4">
                  {subscription && subscription.monthlyCost && (
                    <>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-cool-gray300">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-heading text-base font-bold text-deep-navy">
                              {subscription.planName} - Monthly Payment
                            </p>
                            <p className="font-paragraph text-sm text-cool-gray700">
                              {subscription.nextBillingDate
                                ? new Date(new Date(subscription.nextBillingDate).setMonth(new Date(subscription.nextBillingDate).getMonth() - 1)).toLocaleDateString()
                                : 'Recent'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-lg font-bold text-deep-navy">
                            ${subscription.monthlyCost}
                          </p>
                          <Button variant="ghost" size="sm" className="text-rocket-orange hover:text-rocket-orange/80">
                            Download
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                  {!subscription && (
                    <div className="text-center py-12">
                      <p className="font-paragraph text-base text-cool-gray700">
                        No billing history available
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-deep-navy to-blue-gray-gradient-end border-none shadow-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-rocket-orange" />
                  <h3 className="font-heading text-xl font-bold">Payment Info</h3>
                </div>
                <p className="font-paragraph text-sm text-cool-gray100 mb-4">
                  Your payment method is securely stored and automatically charged on your billing date.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading"
                >
                  Update Payment
                </Button>
              </Card>

              <Card className="p-8 bg-white border-none shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-rocket-orange" />
                  <h3 className="font-heading text-xl font-bold text-deep-navy">
                    Billing Cycle
                  </h3>
                </div>
                <p className="font-paragraph text-sm text-cool-gray700 mb-4">
                  Your subscription renews monthly. Tasks don't roll over - use them or lose them each billing period.
                </p>
                {subscription?.nextBillingDate && (
                  <div className="p-4 bg-cool-gray100 rounded-lg">
                    <p className="font-paragraph text-xs text-cool-gray700 mb-1">Next Charge</p>
                    <p className="font-heading text-lg font-bold text-deep-navy">
                      {new Date(subscription.nextBillingDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </Card>

              <Card className="p-8 bg-cool-gray100 border-none shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-rocket-orange" />
                  <h3 className="font-heading text-xl font-bold text-deep-navy">
                    Need More Tasks?
                  </h3>
                </div>
                <p className="font-paragraph text-sm text-cool-gray700 mb-4">
                  Upgrade to the Growth plan for more monthly tasks and priority turnaround.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading"
                >
                  <Link to="/pricing">View Plans</Link>
                </Button>
              </Card>

              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">
                  Cancel Subscription
                </h3>
                <p className="font-paragraph text-sm text-cool-gray700 mb-4">
                  You can cancel anytime. You'll retain access until the end of your billing period.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50 font-heading"
                >
                  Cancel Plan
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
