import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Download, Clock, CheckCircle, AlertCircle, Plus, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BaseCrudService } from '@/integrations';
import { ClientTasks } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MyTasksPage() {
  const [tasks, setTasks] = useState<ClientTasks[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const { items } = await BaseCrudService.getAll<ClientTasks>('clienttasks');
      setTasks(items.sort((a, b) => {
        const dateA = new Date(a.submissionDateTime || 0).getTime();
        const dateB = new Date(b.submissionDateTime || 0).getTime();
        return dateB - dateA;
      }));
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'in progress':
        return 'text-rocket-orange bg-orange-50 border-orange-200';
      case 'pending':
        return 'text-cool-gray700 bg-cool-gray100 border-cool-gray300';
      default:
        return 'text-cool-gray700 bg-cool-gray100 border-cool-gray300';
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.taskStatus?.toLowerCase() === filter.toLowerCase();
  });

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="font-heading text-5xl font-bold text-deep-navy mb-4">
                My Tasks
              </h1>
              <p className="font-paragraph text-xl text-cool-gray700">
                Track and manage all your submitted tasks
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading"
            >
              <Link to="/submit-task">
                <Plus className="w-5 h-5 mr-2" />
                Submit New Task
              </Link>
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {['all', 'pending', 'in progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-3 rounded-lg font-paragraph text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-rocket-orange text-white'
                    : 'bg-white text-cool-gray700 hover:bg-cool-gray100 border border-cool-gray300'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[500px]">
          {isLoading ? null : filteredTasks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredTasks.map((task, index) => {
                const StatusIcon = getStatusIcon(task.taskStatus);
                return (
                  <motion.div
                    key={task._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Card className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Task Info */}
                        <div className="flex-grow">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-rocket-orange/10 flex items-center justify-center flex-shrink-0">
                              <FileText className="w-6 h-6 text-rocket-orange" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                                {task.taskTitle}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="font-paragraph text-sm text-cool-gray700 bg-cool-gray100 px-3 py-1 rounded-full">
                                  {task.taskType}
                                </span>
                                <div className="flex items-center gap-2">
                                  <StatusIcon className="w-4 h-4" />
                                  <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                      task.taskStatus
                                    )}`}
                                  >
                                    {task.taskStatus}
                                  </span>
                                </div>
                              </div>
                              {task.taskDescription && (
                                <p className="font-paragraph text-base text-cool-gray700 mb-4">
                                  {task.taskDescription}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-4 text-sm text-cool-gray700">
                                {task.submissionDateTime && (
                                  <div>
                                    <span className="font-medium">Submitted:</span>{' '}
                                    {new Date(task.submissionDateTime).toLocaleDateString()}
                                  </div>
                                )}
                                {task.completionDateTime && (
                                  <div>
                                    <span className="font-medium">Completed:</span>{' '}
                                    {new Date(task.completionDateTime).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 lg:w-64">
                          {task.taskDeliverables && (
                            <Button
                              asChild
                              size="lg"
                              className="bg-green-600 hover:bg-green-700 text-white font-heading"
                            >
                              <a href={task.taskDeliverables} target="_blank" rel="noopener noreferrer">
                                <Download className="w-5 h-5 mr-2" />
                                Download Files
                              </a>
                            </Button>
                          )}
                          {task.clientUploadedFiles && (
                            <Button
                              asChild
                              variant="outline"
                              size="lg"
                              className="border-cool-gray300 text-cool-gray700 hover:bg-cool-gray100 font-heading"
                            >
                              <a href={task.clientUploadedFiles} target="_blank" rel="noopener noreferrer">
                                View Uploaded Files
                              </a>
                            </Button>
                          )}
                          {task.taskStatus?.toLowerCase() === 'completed' && (
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-rocket-orange text-rocket-orange hover:bg-rocket-orange hover:text-white font-heading"
                            >
                              <RefreshCw className="w-5 h-5 mr-2" />
                              Request Revision
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-16 bg-white border-none shadow-lg text-center">
                <FileText className="w-20 h-20 text-cool-gray300 mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  {filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
                </h3>
                <p className="font-paragraph text-lg text-cool-gray700 mb-8">
                  {filter === 'all'
                    ? 'Submit your first task to get started'
                    : `You don't have any ${filter} tasks at the moment`}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading"
                >
                  <Link to="/submit-task">
                    <Plus className="w-5 h-5 mr-2" />
                    Submit New Task
                  </Link>
                </Button>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
