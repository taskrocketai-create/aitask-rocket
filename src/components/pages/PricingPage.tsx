import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'One-Off Task',
      price: 75,
      period: 'per task',
      description: 'Perfect for occasional needs',
      features: [
        'Single task submission',
        'Professional preparation',
        'Reviewed before delivery',
        'No commitment required',
      ],
      buttonText: 'Buy One-Off Task',
      highlighted: false,
    },
    {
      name: 'Basic',
      price: 240,
      period: 'per month',
      description: 'Great for regular users',
      features: [
        '4 tasks per month',
        'Professional preparation',
        'Reviewed before delivery',
        'Priority support',
        'Rollover unused tasks',
      ],
      buttonText: 'Start Basic',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 500,
      period: 'per month',
      description: 'Best value for busy professionals',
      features: [
        '10 tasks per month',
        'Professional preparation',
        'Reviewed before delivery',
        'Priority support',
        'Rollover unused tasks',
        'Faster turnaround time',
      ],
      buttonText: 'Start Premium',
      highlighted: true,
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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                Simple pricing. Pay per task or save with a monthly plan.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-cool-gray100">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-lg p-8 ${
                    plan.highlighted
                      ? 'border-4 border-primary shadow-xl scale-105'
                      : 'border-2 border-cool-gray300'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-primary text-white text-center py-2 px-4 rounded-lg mb-4 font-paragraph text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="font-heading text-5xl font-bold text-deep-navy">
                      ${plan.price}
                    </span>
                    <span className="font-paragraph text-lg text-cool-gray700 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <p className="font-paragraph text-base text-cool-gray700 mb-6">
                    {plan.description}
                  </p>

                  <Button
                    className={`w-full mb-6 h-12 text-base ${
                      plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'bg-secondary hover:bg-secondary/90 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-base text-cool-gray700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16 max-w-3xl mx-auto"
            >
              <p className="font-paragraph text-lg text-cool-gray700 bg-white p-6 rounded-lg border-2 border-cool-gray300">
                This is a service. Every task is prepared and reviewed before delivery.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
