import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  CheckCircle,
  Rocket,
  Shield,
  Zap,
  Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { HowItWorks, Benefits, PricingTiers, Testimonials } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// HPI 1.7-G

export default function HomePage() {
  // --------------------------------------------------------------------------
  // 1. DATA FIDELITY PROTOCOL & STATE MANAGEMENT
  // --------------------------------------------------------------------------
  const [howItWorksSteps, setHowItWorksSteps] = useState<HowItWorks[]>([]);
  const [benefits, setBenefits] = useState<Benefits[]>([]);
  const [pricingTiers, setPricingTiers] = useState<PricingTiers[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [howItWorksData, benefitsData, pricingData, testimonialsData] = await Promise.all([
        BaseCrudService.getAll<HowItWorks>('howitworks'),
        BaseCrudService.getAll<Benefits>('benefits'),
        BaseCrudService.getAll<PricingTiers>('pricingtiers'),
        BaseCrudService.getAll<Testimonials>('testimonials')
      ]);

      setHowItWorksSteps(howItWorksData.items.sort((a, b) => (a.order || 0) - (b.order || 0)));
      setBenefits(benefitsData.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      setPricingTiers(pricingData.items.sort((a, b) => (a.monthlyPrice || 0) - (b.monthlyPrice || 0)));
      setTestimonials(testimonialsData.items);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // --------------------------------------------------------------------------
  // 2. ANIMATION HOOKS & REFS (CRASH PREVENTION: ALWAYS RENDERED)
  // --------------------------------------------------------------------------
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll.scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll.scrollYProgress, [0, 0.8], [1, 0]);

  // Smooth spring for progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --------------------------------------------------------------------------
  // 3. RENDER HELPERS & STYLES
  // --------------------------------------------------------------------------

  return (
    <div ref={containerRef} className="min-h-screen bg-cool-gray100 font-paragraph selection:bg-rocket-orange selection:text-white overflow-clip">
      <style>{`
        .text-stroke-1 {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-path-chevron {
          clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
        }
      `}</style>
      {/* Global Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rocket-orange z-50 origin-left"
        style={{ scaleX }}
      />
      <Header />
      {/* --------------------------------------------------------------------------
          HERO SECTION: THE LAUNCHPAD
          -------------------------------------------------------------------------- */}
      <section ref={heroRef} className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden text-white bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-blue-gray-gradient-end">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-rocket-orange/20 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-rocket-orange" />
              <span className="font-mono text-rocket-orange text-sm tracking-widest uppercase">AI-Powered Construction Ops</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              Task Rocket: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cool-gray300 to-cool-gray700">
                Your AI Boost
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-paragraph text-lg md:text-2xl text-cool-gray300 max-w-2xl leading-relaxed border-l-2 border-rocket-orange/30 pl-6"
            >
              Tasks Done, Time Saved. AI handles proposals, takeoffs, social posts, market analysis, branding & more so you win more jobs.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading text-lg px-8 py-8 h-auto shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] group relative overflow-hidden"
              >
                <Link to="/pricing">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started – $500/mo Core <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-cool-gray700 bg-deep-navy/50 backdrop-blur-sm text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-8 h-auto transition-all"
              >
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-8 border-t border-white/10 mt-8"
            >
              <div className="flex items-center gap-2 text-cool-gray300">
                <Shield className="w-4 h-4 text-rocket-orange" />
                <span className="text-sm font-mono">Secure Client Portal</span>
              </div>
              <div className="flex items-center gap-2 text-cool-gray300">
                <Zap className="w-4 h-4 text-rocket-orange" />
                <span className="text-sm font-mono">Leading AI Tools</span>
              </div>
              <div className="flex items-center gap-2 text-cool-gray300">
                <Terminal className="w-4 h-4 text-rocket-orange" />
                <span className="text-sm font-mono">NC Built</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual - The Rocket */}
          <motion.div 
            className="lg:col-span-5 relative hidden lg:block h-full min-h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
             {/* Abstract Tech Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             
             {/* Floating Rocket Concept */}
             <motion.div 
               animate={{ y: [-20, 20, -20] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 flex items-center justify-center"
             >
                <div className="relative w-full h-full max-h-[600px] flex items-center justify-center">
                   {/* Task Rocket Logo */}
                   <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                      <div className="absolute inset-0 bg-rocket-orange/20 blur-3xl rounded-full" />
                      <Image 
                        src="https://static.wixstatic.com/media/18d7f4_dff2299c625a489aa1eb4de84420491c~mv2.png" 
                        alt="Task Rocket Logo"
                        width={500}
                        className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.5)]"
                      />
                   </div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          HOW IT WORKS: THE ASSEMBLY LINE (Sticky Scroll)
          -------------------------------------------------------------------------- */}
      <section className="relative w-full bg-cool-gray100 py-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-deep-navy mb-6">
              Operational Blueprint
            </h2>
            <p className="font-paragraph text-xl text-cool-gray700">
              No coding, no hassle—just results that help you bid smarter and market stronger.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-cool-gray300 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24 md:space-y-48">
              {isLoading ? (
                 <div className="text-center py-20 text-cool-gray700 font-mono">Initializing Sequence...</div>
              ) : howItWorksSteps.length > 0 ? (
                howItWorksSteps.map((step, index) => (
                  <StepCard key={step._id} step={step} index={index} />
                ))
              ) : (
                <div className="text-center py-20 text-cool-gray700 font-mono">No steps configured.</div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          PRICING: MISSION COSTS (Industrial Cards)
          -------------------------------------------------------------------------- */}
      <section className="w-full py-32 bg-cool-gray100">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Pricing
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700">
              Simple, transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {isLoading ? null : pricingTiers.length > 0 ? (
              pricingTiers.map((tier, index) => (
                <PricingCard key={tier._id} tier={tier} index={index} />
              ))
            ) : null}
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          BENEFITS: THE PAYLOAD (Grid Reveal)
          -------------------------------------------------------------------------- */}
      <section className="w-full py-32 bg-white border-t border-cool-gray200">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Why Choose Us
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700">
              AI-powered efficiency for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? null : benefits.length > 0 ? (
              benefits.map((benefit, index) => (
                <BenefitCard key={benefit._id} benefit={benefit} index={index} />
              ))
            ) : null}
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          PORTAL TEASER: THE COCKPIT (3D Perspective)
          -------------------------------------------------------------------------- */}
      <section className="w-full py-32 bg-cool-gray100">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Client Portal
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 mb-8">
              Submit tasks, track progress, download deliverables.
            </p>
            
            <ul className="space-y-3 mb-10">
              {[
                "Easy task submission",
                "Real-time tracking",
                "Instant downloads",
                "Subscription management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rocket-orange" />
                  <span className="text-cool-gray900">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-rocket-orange hover:bg-rocket-orange/90 text-white font-heading text-base px-8 py-6 h-auto"
            >
              <Link to="/portal">
                Access Portal
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          TESTIMONIALS: FLIGHT LOGS
          -------------------------------------------------------------------------- */}
      {testimonials.length > 0 && (
        <section className="w-full py-32 bg-white border-t border-cool-gray200">
          <div className="max-w-[120rem] mx-auto px-6 md:px-12">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Testimonials
              </h2>
              <p className="font-paragraph text-lg text-cool-gray700">
                What our clients say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-8 bg-white border border-cool-gray200">
                    <div className="flex items-center gap-4 mb-6">
                      {testimonial.clientImage ? (
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName || 'Client'}
                          width={60}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-cool-gray200 flex items-center justify-center text-xl font-bold text-cool-gray700">
                          {testimonial.clientName?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-heading text-base font-bold text-deep-navy">
                          {testimonial.clientName}
                        </h4>
                        <p className="font-paragraph text-sm text-cool-gray500">
                          {testimonial.clientCompanyRole}
                        </p>
                      </div>
                    </div>
                    
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-sm ${i < testimonial.rating! ? 'text-rocket-orange' : 'text-cool-gray300'}`}>★</span>
                        ))}
                      </div>
                    )}

                    <p className="font-paragraph text-base text-cool-gray700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

// --------------------------------------------------------------------------
// SUB-COMPONENTS (For cleaner render logic)
// --------------------------------------------------------------------------

function StepCard({ step, index }: { step: HowItWorks; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-rocket-orange font-mono text-sm">Step {index + 1}</div>
        <h3 className="font-heading text-2xl font-bold text-deep-navy">{step.title}</h3>
        <p className="font-paragraph text-base text-cool-gray700 leading-relaxed">{step.description}</p>
      </motion.div>

      {step.stepImage && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={step.stepImage}
            alt={step.title || 'Step'}
            width={400}
            className="w-full h-auto"
          />
        </motion.div>
      )}
    </div>
  );
}

function PricingCard({ tier, index }: { tier: PricingTiers; index: number }) {
  const isFeatured = index === 1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className={`relative h-full flex flex-col p-8 bg-white border-2 ${isFeatured ? 'border-rocket-orange' : 'border-cool-gray200'}`}>
        {isFeatured && (
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-rocket-orange text-white px-3 py-1 text-xs font-bold uppercase">
            Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">{tier.planName}</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold text-deep-navy">${tier.monthlyPrice}</span>
            <span className="text-cool-gray500">/mo</span>
          </div>
          <p className="text-cool-gray700 text-sm leading-relaxed">{tier.description}</p>
        </div>

        <div className="flex-grow space-y-3 mb-8">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-rocket-orange flex-shrink-0 mt-0.5" />
            <span className="text-cool-gray700 text-sm">{tier.maxTasks} tasks/month</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-rocket-orange flex-shrink-0 mt-0.5" />
            <span className="text-cool-gray700 text-sm">{tier.unlimitedRevisions ? 'Unlimited revisions' : 'Standard revisions'}</span>
          </div>
          {tier.priorityTurnaround && (
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-rocket-orange flex-shrink-0 mt-0.5" />
              <span className="text-cool-gray700 text-sm">Priority turnaround</span>
            </div>
          )}
        </div>

        <Button
          asChild
          size="lg"
          className={`w-full py-6 text-base font-heading h-auto ${isFeatured ? 'bg-rocket-orange hover:bg-rocket-orange/90 text-white' : 'bg-white hover:bg-cool-gray100 text-deep-navy border-2 border-deep-navy'}`}
        >
          <Link to={tier.ctaButtonLink || '/portal'}>
            {tier.ctaButtonText || 'Get Started'}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

function BenefitCard({ benefit, index }: { benefit: Benefits; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 border border-cool-gray200 bg-white"
    >
      {benefit.visualAsset && (
        <div className="mb-4">
          <Image src={benefit.visualAsset} alt="" width={40} className="w-10 h-10 object-contain" />
        </div>
      )}
      <h3 className="font-heading text-lg font-bold text-deep-navy mb-2">{benefit.title}</h3>
      <p className="font-paragraph text-cool-gray700 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}