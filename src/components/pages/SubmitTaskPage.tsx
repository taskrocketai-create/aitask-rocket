import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BaseCrudService } from '@/integrations';
import { ClientTasks } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SubmitTaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskType: '',
    taskDescription: '',
    clientUploadedFiles: '',
    selectedPackage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    'RehabScope™ Review',
    'RehabScope™ Pro',
    'RehabScope™ Elite',
  ];

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setFormData(prev => ({
        ...prev,
        selectedPackage: packageParam,
      }));
    }
  }, [searchParams]);

  const taskTypes = [
    'Proposal',
    'Takeoff',
    'Social Media Batch',
    'Market Analysis',
    'Branding Package',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newTask: ClientTasks = {
        _id: crypto.randomUUID(),
        taskTitle: formData.taskTitle,
        taskType: formData.taskType,
        taskDescription: formData.taskDescription,
        clientUploadedFiles: formData.clientUploadedFiles,
        taskStatus: 'Pending',
        submissionDateTime: new Date().toISOString(),
      };
      
      // Store selected package in the task description or as a separate field if available
      const taskDescriptionWithPackage = `Package: ${formData.selectedPackage}\n\n${formData.taskDescription}`;

      await BaseCrudService.create('clienttasks', {
        ...newTask,
        taskDescription: taskDescriptionWithPackage,
      });
      
      // Send email notification
      const emailBody = `
New Task Submission:

Package: ${formData.selectedPackage}
Title: ${formData.taskTitle}
Type: ${formData.taskType}
Description: ${formData.taskDescription}
Files: ${formData.clientUploadedFiles || 'None'}
Submitted: ${new Date().toLocaleString()}
      `.trim();

      const mailtoLink = `mailto:taskrocketAI@gmail.com?subject=New Task Submission: ${encodeURIComponent(formData.taskTitle)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      navigate('/portal/tasks');
    } catch (error) {
      console.error('Error submitting task:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePackageChange = (value: string) => {
    // If clicking the same value, toggle it off
    if (formData.selectedPackage === value) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: '',
        taskType: '',
      }));
    } else {
      // If selecting a different value, set it and clear taskType
      setFormData((prev) => ({
        ...prev,
        selectedPackage: value,
        taskType: '',
      }));
    }
  };

  const handleTaskTypeChange = (value: string) => {
    // If clicking the same value, toggle it off
    if (formData.taskType === value) {
      setFormData((prev) => ({
        ...prev,
        taskType: '',
        selectedPackage: '',
      }));
    } else {
      // If selecting a different value, set it and clear selectedPackage
      setFormData((prev) => ({
        ...prev,
        taskType: value,
        selectedPackage: '',
      }));
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
            Submit New Task
          </h1>
          <p className="font-paragraph text-xl text-cool-gray700">
            Fill out the form below to submit a new task. We'll get started within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="taskTitle"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      Task Title *
                    </label>
                    <Input
                      id="taskTitle"
                      name="taskTitle"
                      type="text"
                      required
                      value={formData.taskTitle}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="e.g., Kitchen Remodel Proposal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="selectedPackage"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      RehabScope Package *
                    </label>
                    <Select
                      value={formData.selectedPackage}
                      onValueChange={handlePackageChange}
                      disabled={!!formData.taskType}
                      required
                    >
                      <SelectTrigger className={`w-full ${formData.taskType ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg} value={pkg}>
                            {pkg}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="taskType"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      Task Type *
                    </label>
                    <Select
                      value={formData.taskType}
                      onValueChange={handleTaskTypeChange}
                      disabled={!!formData.selectedPackage}
                      required
                    >
                      <SelectTrigger className={`w-full ${formData.selectedPackage ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <SelectValue placeholder="Select task type" />
                      </SelectTrigger>
                      <SelectContent>
                        {taskTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="taskDescription"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      Task Description *
                    </label>
                    <Textarea
                      id="taskDescription"
                      name="taskDescription"
                      required
                      value={formData.taskDescription}
                      onChange={handleChange}
                      className="w-full min-h-[200px]"
                      placeholder="Provide detailed information about your task, including any specific requirements, deadlines, or preferences..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="clientUploadedFiles"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      File Upload URL (Optional)
                    </label>
                    <Input
                      id="clientUploadedFiles"
                      name="clientUploadedFiles"
                      type="url"
                      value={formData.clientUploadedFiles}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="https://example.com/your-files"
                    />
                    <p className="font-paragraph text-xs text-cool-gray700 mt-2">
                      Upload files to your preferred cloud storage and paste the share link here
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading text-lg py-7 h-auto"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit Task <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('/')}
                      className="border-cool-gray300 text-cool-gray700 hover:bg-cool-gray100 font-heading text-lg py-7 h-auto"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Info Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-deep-navy border-none shadow-lg text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  What to Include
                </h3>
                <ul className="space-y-3 font-paragraph text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-rocket-orange">•</span>
                    <span>Clear description of what you need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rocket-orange">•</span>
                    <span>Any relevant files (plans, photos, documents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rocket-orange">•</span>
                    <span>Specific requirements or preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rocket-orange">•</span>
                    <span>Deadline or urgency level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rocket-orange">•</span>
                    <span>Target audience or purpose</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-none shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Upload className="w-6 h-6 text-rocket-orange" />
                  <h3 className="font-heading text-xl font-bold text-deep-navy">
                    File Uploads
                  </h3>
                </div>
                <p className="font-paragraph text-sm text-cool-gray700 mb-4">
                  Upload your files to Google Drive, Dropbox, or any cloud storage service, then paste the share link in the form.
                </p>
                <p className="font-paragraph text-sm text-cool-gray700">
                  Supported file types: PDF, JPG, PNG, DOC, XLS, DWG, and more.
                </p>
              </Card>

              <Card className="p-8 bg-cool-gray100 border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  Turnaround Time
                </h3>
                <p className="font-paragraph text-sm text-cool-gray700 mb-3">
                  Standard: 48-72 hours
                </p>
                <p className="font-paragraph text-sm text-cool-gray700">
                  Growth plan subscribers receive priority processing for faster delivery.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
