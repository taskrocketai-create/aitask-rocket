import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Rocket, 
  FileText, 
  Ruler, 
  Share2, 
  TrendingUp, 
  Palette, 
  CheckCircle, 
  Clock, 
  Shield, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  BarChart3, 
  Layers,
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
  
  // Custom Grid Background
  const GridBackground = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy opacity-80" />
    </div>
  );

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
      <section ref={heroRef} className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden text-white bg-color-16">
        <GridBackground />
        
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
      <section className="w-full py-32 bg-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-deep-navy mb-4">
                Mission Costs
              </h2>
              <p className="font-paragraph text-xl text-cool-gray700 max-w-xl">
                Simple, transparent pricing. Choose the plan that fits your trajectory.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="flex items-center gap-2 text-rocket-orange font-mono text-sm">
                  <div className="w-2 h-2 bg-rocket-orange rounded-full animate-pulse" />
                  LIVE PRICING DATA
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {isLoading ? (
               <div className="col-span-2 h-96 bg-cool-gray100 animate-pulse rounded-lg" />
            ) : pricingTiers.length > 0 ? (
              pricingTiers.map((tier, index) => (
                <PricingCard key={tier._id} tier={tier} index={index} />
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-cool-gray700">Pricing data unavailable.</div>
            )}
          </div>
          
          <div className="mt-12 text-center">
             <p className="font-mono text-sm text-cool-gray700 bg-cool-gray100 inline-block px-4 py-2 rounded">
                * NOTE: Use it or lose it - tasks don't roll over to the next month
             </p>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          BENEFITS: THE PAYLOAD (Grid Reveal)
          -------------------------------------------------------------------------- */}
      <section className="w-full py-32 bg-deep-navy text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rocket-orange to-transparent opacity-50" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 sticky top-32 self-start">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Why Launch <br /> With Us?
              </h2>
              <p className="font-paragraph text-xl text-cool-gray300 mb-8">
                Accelerate your business with AI-powered efficiency. We handle the grind so you can focus on the build.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
                <Link to="/pricing">Start Your Mission</Link>
              </Button>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading ? (
                   [1,2,3,4].map(i => <div key={i} className="h-64 bg-white/5 animate-pulse rounded-lg" />)
                ) : benefits.length > 0 ? (
                  benefits.map((benefit, index) => (
                    <BenefitCard key={benefit._id} benefit={benefit} index={index} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-cool-gray300">Benefits data unavailable.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          PORTAL TEASER: THE COCKPIT (3D Perspective)
          -------------------------------------------------------------------------- */}
      <section className="w-full py-32 bg-cool-gray100 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 z-10">
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-deep-navy mb-6">
                Command Center
              </h2>
              <p className="font-paragraph text-xl text-cool-gray700 mb-8">
                Secure Client Portal. Submit tasks, upload files, download finished work anytime. Your data stays secure.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Easy task submission with file uploads",
                  "Real-time status tracking",
                  "Instant deliverable downloads",
                  "Subscription management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rocket-orange/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-rocket-orange" />
                    </div>
                    <span className="text-cool-gray900 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-deep-navy hover:bg-deep-navy/90 text-white font-heading text-lg px-10 py-6 h-auto shadow-xl"
              >
                <Link to="/portal">
                  Access Portal <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 relative perspective-1000">
              {/* Abstract Dashboard UI Representation */}
              <motion.div 
                initial={{ rotateY: -15, rotateX: 5, opacity: 0 }}
                whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative bg-white rounded-xl shadow-2xl border border-cool-gray300 overflow-hidden"
              >
                {/* Fake Browser Header */}
                <div className="bg-cool-gray900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 bg-cool-gray700 rounded px-3 py-1 text-xs text-cool-gray300 font-mono flex-1 text-center">
                    portal.taskrocket.ai/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-cool-gray100 min-h-[400px]">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-deep-navy">Welcome, Alan's Remodeling</h3>
                      <p className="text-sm text-cool-gray700">Plan: Growth Tier</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded shadow-sm border border-cool-gray200">
                      <span className="text-sm font-bold text-rocket-orange">8 Tasks Remaining</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "Active Tasks", val: "3", color: "text-blue-600" },
                      { label: "Completed", val: "12", color: "text-green-600" },
                      { label: "Pending Review", val: "1", color: "text-orange-600" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-cool-gray200">
                        <p className="text-xs text-cool-gray500 uppercase tracking-wider">{stat.label}</p>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-bold text-cool-gray700 mb-2">Recent Activity</p>
                    {[
                      { title: "Proposal - Kitchen Remodel", status: "In Progress", color: "bg-blue-500" },
                      { title: "Social Media Batch #4", status: "Ready for Review", color: "bg-green-500" },
                      { title: "Takeoff - Commercial Build", status: "Pending", color: "bg-gray-400" }
                    ].map((task, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-cool-gray200 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${task.color}`} />
                          <span className="font-medium text-deep-navy text-sm">{task.title}</span>
                        </div>
                        <span className="text-xs bg-cool-gray100 px-2 py-1 rounded text-cool-gray700">{task.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Elements behind */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-rocket-orange/10 rounded-xl transform rotate-3" />
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------
          TESTIMONIALS: FLIGHT LOGS
          -------------------------------------------------------------------------- */}
      {testimonials.length > 0 && (
        <section className="w-full py-32 bg-white border-t border-cool-gray200">
          <div className="max-w-[120rem] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-deep-navy mb-4">
                Flight Logs
              </h2>
              <p className="font-paragraph text-xl text-cool-gray700">
                What our partners are saying about their mission success.
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
                  <Card className="h-full p-8 bg-cool-gray100 border-none rounded-none relative group hover:bg-deep-navy hover:text-white transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-rocket-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      {testimonial.clientImage ? (
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName || 'Client'}
                          width={60}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-cool-gray300 flex items-center justify-center text-xl font-bold text-cool-gray700">
                          {testimonial.clientName?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-heading text-lg font-bold group-hover:text-white text-deep-navy">
                          {testimonial.clientName}
                        </h4>
                        <p className="font-paragraph text-sm text-cool-gray500 group-hover:text-cool-gray300">
                          {testimonial.clientCompanyRole}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      {testimonial.rating && (
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`text-sm ${i < testimonial.rating! ? 'text-rocket-orange' : 'text-cool-gray300'}`}>★</span>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="font-paragraph text-base italic leading-relaxed opacity-90">
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
    <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
      {/* Text Side */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block mb-4">
          <span className="font-mono text-6xl font-bold text-cool-gray300/50 block leading-none">0{index + 1}</span>
        </div>
        <h3 className="font-heading text-3xl font-bold text-deep-navy mb-4">{step.title}</h3>
        <p className="font-paragraph text-lg text-cool-gray700 mb-6">{step.description}</p>
        {step.ctaText && step.ctaUrl && (
          <Button asChild variant="link" className="text-rocket-orange p-0 h-auto font-bold hover:no-underline group">
            <Link to={step.ctaUrl} className="flex items-center gap-2">
              {step.ctaText} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-cool-gray200 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cool-gray100 to-white opacity-50" />
          
          {/* Decorative Grid inside card */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          {step.stepImage ? (
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <Image
                 src={step.stepImage}
                 alt={step.title || 'Step'}
                 width={400}
                 className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
               />
            </div>
          ) : (
            <div className="relative z-10 w-32 h-32 bg-rocket-orange/10 rounded-full flex items-center justify-center">
               <Layers className="w-16 h-16 text-rocket-orange" />
            </div>
          )}
          
          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-deep-navy" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-deep-navy" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-deep-navy" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-deep-navy" />
        </div>
      </motion.div>
    </div>
  );
}

function PricingCard({ tier, index }: { tier: PricingTiers; index: number }) {
  const isFeatured = index === 1; // Assuming 2nd item is 'Growth' or featured
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <div className={`relative h-full flex flex-col p-8 md:p-12 bg-white border transition-all duration-300 ${isFeatured ? 'border-rocket-orange shadow-2xl scale-105 z-10' : 'border-cool-gray300 hover:border-deep-navy/50'}`}>
        {isFeatured && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rocket-orange text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
            Most Popular
          </div>
        )}

        <div className="mb-8">
          <h3 className="font-heading text-2xl font-bold text-deep-navy mb-2">{tier.planName}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-deep-navy">${tier.monthlyPrice}</span>
            <span className="text-cool-gray500">/mo</span>
          </div>
          <p className="mt-4 text-cool-gray700 leading-relaxed">{tier.description}</p>
        </div>

        <div className="flex-grow space-y-4 mb-10">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
            <span className="text-cool-gray700 font-medium">{tier.maxTasks} tasks per month</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
            <span className="text-cool-gray700">{tier.unlimitedRevisions ? 'Unlimited revisions' : 'Standard revisions'}</span>
          </div>
          {tier.priorityTurnaround && (
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-rocket-orange flex-shrink-0 mt-0.5" />
              <span className="text-cool-gray700">Priority turnaround</span>
            </div>
          )}
          {tier.overageCostPerTask && tier.overageCostPerTask > 0 && (
            <div className="flex items-start gap-3 pt-4 border-t border-dashed border-cool-gray200">
              <Clock className="w-5 h-5 text-cool-gray400 flex-shrink-0 mt-0.5" />
              <span className="text-cool-gray500 text-sm">Overages: ${tier.overageCostPerTask}/task</span>
            </div>
          )}
        </div>

        <Button
          asChild
          size="lg"
          className={`w-full py-6 text-lg font-heading h-auto ${isFeatured ? 'bg-rocket-orange hover:bg-rocket-orange/90 text-white' : 'bg-deep-navy hover:bg-deep-navy/90 text-white'}`}
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
      className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="mb-4 w-12 h-12 rounded-lg bg-rocket-orange/20 flex items-center justify-center text-rocket-orange group-hover:scale-110 transition-transform duration-300">
        {benefit.visualAsset ? (
           <Image src={benefit.visualAsset} alt="" width={32} className="w-8 h-8 object-contain" />
        ) : (
           <BarChart3 className="w-6 h-6" />
        )}
      </div>
      <h3 className="font-heading text-xl font-bold text-white mb-2">{benefit.title}</h3>
      <p className="font-paragraph text-cool-gray300 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}