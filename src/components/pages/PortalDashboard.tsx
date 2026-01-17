import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BaseCrudService, useMember } from '@/integrations';
import { ClientTasks, ClientSubscriptions } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PortalDashboard() {
  const { member } = useMember();
  const [tasks, setTasks] = useState<ClientTasks[]>([]);
  const [subscription, setSubscription] = useState<ClientSubscriptions | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const [tasksData, subscriptionData] = await Promise.all([
        BaseCrudService.getAll<ClientTasks>('clienttasks', {}, { limit: 5 }),
        BaseCrudService.getAll<ClientSubscriptions>('clientsubscriptions', {}, { limit: 1 })
      ]);

      setTasks(tasksData.items);
      if (subscriptionData.items.length > 0) {
        setSubscription(subscriptionData.items[0]);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'in progress':
        return 'text-rocket-orange bg-orange-50';
      case 'pending':
        return 'text-cool-gray700 bg-cool-gray100';
      default:
        return 'text-cool-gray700 bg-cool-gray100';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return CheckCircle;
      case 'in progress':
        return Clock;
      case 'pending':
        return AlertCircle;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-cool-gray100">
      <Header />

      <div className="max-w-[100rem] mx-auto px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-5xl font-bold text-deep-navy mb-4">
            Welcome back, {member?.profile?.nickname || member?.contact?.firstName || 'there'}!
          </h1>
          <p className="font-paragraph text-xl text-cool-gray700">
            Here's what's happening with your tasks and subscription.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 bg-white border-none shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-rocket-orange/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-rocket-orange" />
                </div>
                <span className="font-heading text-3xl font-bold text-deep-navy">
                  {tasks.length}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-deep-navy mb-1">
                Recent Tasks
              </h3>
              <p className="font-paragraph text-sm text-cool-gray700">
                Active and completed
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-white border-none shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-heading text-3xl font-bold text-deep-navy">
                  {subscription?.tasksRemaining || 0}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-deep-navy mb-1">
                Tasks Remaining
              </h3>
              <p className="font-paragraph text-sm text-cool-gray700">
                This billing period
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-white border-none shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-deep-navy/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-deep-navy" />
                </div>
                <span className="font-heading text-3xl font-bold text-deep-navy">
                  {subscription?.planName || 'N/A'}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-deep-navy mb-1">
                Current Plan
              </h3>
              <p className="font-paragraph text-sm text-cool-gray700">
                {subscription?.subscriptionStatus || 'Active'}
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Tasks */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-deep-navy">
                    Recent Tasks
                  </h2>
                  <Button asChild variant="outline" className="border-rocket-orange text-rocket-orange hover:bg-rocket-orange hover:text-white">
                    <Link to="/portal/tasks">View All</Link>
                  </Button>
                </div>

                <div className="min-h-[300px]">
                  {isLoading ? null : tasks.length > 0 ? (
                    <div className="space-y-4">
                      {tasks.map((task) => {
                        const StatusIcon = getStatusIcon(task.taskStatus);
                        return (
                          <div
                            key={task._id}
                            className="p-4 rounded-lg border border-cool-gray300 hover:border-rocket-orange transition-colors"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-grow">
                                <h3 className="font-heading text-lg font-bold text-deep-navy mb-1">
                                  {task.taskTitle}
                                </h3>
                                <p className="font-paragraph text-sm text-cool-gray700 mb-2">
                                  {task.taskType}
                                </p>
                                {task.taskDescription && (
                                  <p className="font-paragraph text-sm text-cool-gray700 line-clamp-2">
                                    {task.taskDescription}
                                  </p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <StatusIcon className="w-5 h-5" />
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                    task.taskStatus
                                  )}`}
                                >
                                  {task.taskStatus}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <FileText className="w-16 h-16 text-cool-gray300 mx-auto mb-4" />
                      <p className="font-paragraph text-lg text-cool-gray700 mb-4">
                        No tasks yet
                      </p>
                      <Button asChild className="bg-rocket-orange hover:bg-rocket-orange/90 text-white">
                        <Link to="/portal/submit">Submit Your First Task</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-rocket-orange to-orange-600 border-none shadow-lg text-white">
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white hover:bg-cool-gray100 text-rocket-orange font-heading"
                  >
                    <Link to="/portal/submit">
                      <Plus className="w-5 h-5 mr-2" />
                      Submit New Task
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-rocket-orange font-heading"
                  >
                    <Link to="/portal/tasks">View All Tasks</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-rocket-orange font-heading"
                  >
                    <Link to="/portal/billing">Manage Billing</Link>
                  </Button>
                </div>
              </Card>

              {subscription && (
                <Card className="p-8 bg-white border-none shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                    Subscription Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-paragraph text-sm text-cool-gray700">Plan</p>
                      <p className="font-heading text-lg font-bold text-deep-navy">
                        {subscription.planName}
                      </p>
                    </div>
                    <div>
                      <p className="font-paragraph text-sm text-cool-gray700">Status</p>
                      <p className="font-heading text-lg font-bold text-green-600">
                        {subscription.subscriptionStatus}
                      </p>
                    </div>
                    {subscription.nextBillingDate && (
                      <div>
                        <p className="font-paragraph text-sm text-cool-gray700">Next Billing</p>
                        <p className="font-heading text-lg font-bold text-deep-navy">
                          {new Date(subscription.nextBillingDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                    {subscription.monthlyCost && (
                      <div>
                        <p className="font-paragraph text-sm text-cool-gray700">Monthly Cost</p>
                        <p className="font-heading text-lg font-bold text-deep-navy">
                          ${subscription.monthlyCost}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
