import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Send, ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BaseCrudService } from '@/integrations';
import { TaskRequests } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RehabScopeSubmitPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    deliveryEmail: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    squareFootage: '',
    estimatedBudget: '',
    rehabScopePackage: '',
    notes: '',
    industry: 'Real Estate Investment',
    taskType: 'RehabScope Review',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const rehabScopePackages = [
    'RehabScope™ Review',
    'RehabScope™ Pro',
    'RehabScope™ Elite',
  ];

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setFormData(prev => ({
        ...prev,
        rehabScopePackage: packageParam,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.contactName || !formData.deliveryEmail || !formData.phone || !formData.propertyAddress || !formData.propertyType || !formData.estimatedBudget || !formData.rehabScopePackage) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const notesContent = `Package: ${formData.rehabScopePackage}\n\nProperty Address: ${formData.propertyAddress}\nProperty Type: ${formData.propertyType}\nSquare Footage: ${formData.squareFootage}\nEstimated Budget: ${formData.estimatedBudget}\n\nAdditional Notes:\n${formData.notes}`;

      const newRequest: TaskRequests = {
        _id: crypto.randomUUID(),
        title: `RehabScope Submission - ${formData.contactName}`,
        businessName: formData.businessName || 'Not provided',
        contactName: formData.contactName,
        deliveryEmail: formData.deliveryEmail,
        industry: formData.industry,
        taskType: formData.taskType,
        notes: notesContent,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };

      // Save to database
      await BaseCrudService.create('TaskRequests', newRequest);

      // Show success message
      setShowSuccess(true);
      
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/rehabscope-landing');
      }, 3000);
    } catch (error) {
      console.error('Error submitting RehabScope request:', error);
      alert('Error submitting form. Please try again.');
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
    setFormData((prev) => ({
      ...prev,
      rehabScopePackage: value,
    }));
  };

  return (
    <div className="min-h-screen bg-cool-gray100">
      <Header />

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <Card className="p-6 bg-green-50 border-2 border-green-400 shadow-lg max-w-md">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold text-green-900">Submission Sent!</p>
                <p className="font-paragraph text-sm text-green-800">Your RehabScope submission has been sent. Check your email to complete the process.</p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="max-w-[100rem] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-deep-navy">R</span>
            </div>
            <h1 className="font-heading text-5xl font-bold text-deep-navy">
              RehabScope™ Submission
            </h1>
          </div>
          <p className="font-paragraph text-xl text-cool-gray700 max-w-3xl">
            Submit your property details and documentation for an independent rehab scope and budget review. Our experts will identify gaps and risks before construction begins.
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
                  {/* RehabScope Package Selection */}
                  <div>
                    <label
                      htmlFor="rehabScopePackage"
                      className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                    >
                      RehabScope Package *
                    </label>
                    <Select
                      value={formData.rehabScopePackage}
                      onValueChange={handlePackageChange}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        {rehabScopePackages.map((pkg) => (
                          <SelectItem key={pkg} value={pkg}>
                            {pkg}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-cool-gray200 pt-6">
                    <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contactName"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Your Name *
                        </label>
                        <Input
                          id="contactName"
                          name="contactName"
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="deliveryEmail"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="deliveryEmail"
                          name="deliveryEmail"
                          type="email"
                          required
                          value={formData.deliveryEmail}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Business Name (Optional)
                        </label>
                        <Input
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Information */}
                  <div className="border-t border-cool-gray200 pt-6">
                    <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">
                      Property Information
                    </h3>
                    <div>
                      <label
                        htmlFor="propertyAddress"
                        className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                      >
                        Property Address *
                      </label>
                      <Input
                        id="propertyAddress"
                        name="propertyAddress"
                        type="text"
                        required
                        value={formData.propertyAddress}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="123 Main St, City, State, ZIP"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Property Type *
                        </label>
                        <Input
                          id="propertyType"
                          name="propertyType"
                          type="text"
                          required
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="e.g., Single Family, Duplex, Multi-Unit"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="squareFootage"
                          className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                        >
                          Square Footage
                        </label>
                        <Input
                          id="squareFootage"
                          name="squareFootage"
                          type="text"
                          value={formData.squareFootage}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="e.g., 2,500 sq ft"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="estimatedBudget"
                        className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                      >
                        Estimated Rehab Budget *
                      </label>
                      <Input
                        id="estimatedBudget"
                        name="estimatedBudget"
                        type="text"
                        required
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="e.g., $50,000"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="border-t border-cool-gray200 pt-6">
                    <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">
                      Additional Information
                    </h3>
                    <div>
                      <label
                        htmlFor="notes"
                        className="block font-paragraph text-sm font-medium text-cool-gray700 mb-2"
                      >
                        Project Details & Notes
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us about your project, specific concerns, contractor information, or any other details that would help us provide a thorough review..."
                      />
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-6">
                      <p className="font-paragraph text-sm text-cool-gray900 mb-3">
                        <span className="font-bold">📎 Documentation to Prepare:</span>
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Contractor Scope of Work',
                          'Contractor Estimate/Bid',
                          'Property Photos (if available)',
                          'Floor Plans or Measurements',
                          'Renovation Budget/List',
                        ].map((doc, idx) => (
                          <li key={idx} className="flex items-center gap-2 font-paragraph text-cool-gray900">
                            <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                      <p className="font-paragraph text-xs text-cool-gray700 mt-4">
                        You'll be able to upload or share these files after submitting this form.
                      </p>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-cool-gray200">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-deep-navy font-heading font-bold text-lg py-7 h-auto"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit for Review <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('/rehabscope-landing')}
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
              <Card className="p-8 bg-gradient-to-br from-deep-navy to-blue-gray-gradient-end border-none shadow-lg text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  What Happens Next
                </h3>
                <ul className="space-y-4 font-paragraph text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">1</span>
                    <span>We review your submission within 1-2 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">2</span>
                    <span>We contact you to discuss your project and gather any additional details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">3</span>
                    <span>Our experts conduct a comprehensive RehabScope review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">4</span>
                    <span>You receive a detailed report with findings and recommendations</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  Package Details
                </h3>
                <div className="space-y-4 font-paragraph text-sm text-cool-gray700">
                  <div>
                    <p className="font-bold text-deep-navy mb-1">Review</p>
                    <p>Starting at $1,500</p>
                  </div>
                  <div className="border-t border-cool-gray200 pt-4">
                    <p className="font-bold text-deep-navy mb-1">Pro</p>
                    <p>Starting at $2,500</p>
                  </div>
                  <div className="border-t border-cool-gray200 pt-4">
                    <p className="font-bold text-deep-navy mb-1">Elite</p>
                    <p>Starting at $4,500</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-cool-gray100 border-none shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Upload className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-heading font-bold text-deep-navy">
                    File Uploads
                  </h3>
                </div>
                <p className="font-paragraph text-sm text-cool-gray700">
                  After submission, you'll receive instructions to upload your documentation via secure cloud storage.
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
