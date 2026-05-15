import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/ui/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BellRing,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  DollarSign,
  MessageSquareMore,
  PhoneMissed,
  Settings2,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';

const demoNavItems = [
  { id: 'demo-overview', label: 'Overview', icon: Sparkles },
  { id: 'demo-missed-calls', label: 'Missed Calls', icon: PhoneMissed },
  { id: 'demo-auto-text', label: 'Auto-Text', icon: BellRing },
  { id: 'demo-ai-conversation', label: 'AI Conversation', icon: MessageSquareMore },
  { id: 'demo-booked-jobs', label: 'Booked Jobs', icon: CalendarCheck2 },
  { id: 'demo-revenue-recovered', label: 'Revenue', icon: DollarSign },
  { id: 'demo-settings', label: 'Automation', icon: Settings2 },
];

const riversideStats = [
  {
    label: 'Missed calls recovered',
    value: '18',
    detail: '+6 vs last week',
    icon: PhoneMissed,
    accent: 'bg-rocket-orange/10 text-rocket-orange',
  },
  {
    label: 'Auto-text response rate',
    value: '94%',
    detail: 'Average first reply in 47 sec',
    icon: BellRing,
    accent: 'bg-primary/10 text-primary',
  },
  {
    label: 'Booked jobs',
    value: '11',
    detail: '4 emergency calls this week',
    icon: CalendarCheck2,
    accent: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    label: 'Revenue recovered',
    value: '$7,840',
    detail: 'From after-hours + overflow calls',
    icon: DollarSign,
    accent: 'bg-secondary/10 text-secondary',
  },
];

const riversideLeads = [
  {
    id: 'lead-maria',
    name: 'Maria Thompson',
    service: 'Water heater replacement',
    location: 'Canyon Crest',
    missedAt: '6:42 PM',
    autoTextAt: '6:43 PM',
    status: 'Booked',
    priority: 'Urgent',
    estimate: '$1,480',
    property: 'Single-family home',
    issue: 'No hot water since lunch. Family of five needs same-week replacement.',
    nextStep: 'Tech assigned for Friday 8:00 AM arrival window',
    threadPreview: 'Perfect, Friday between 8–10 works. Please send confirmation.',
  },
  {
    id: 'lead-david',
    name: 'David Kim',
    service: 'Drain clearing',
    location: 'Mission Grove',
    missedAt: '12:18 PM',
    autoTextAt: '12:19 PM',
    status: 'Qualified',
    priority: 'High',
    estimate: '$325',
    property: 'Townhome',
    issue: 'Kitchen sink backing up before evening dinner rush at home.',
    nextStep: 'Waiting on photo of cleanout access',
    threadPreview: 'I can be home after 4:30 PM if you have an opening.',
  },
  {
    id: 'lead-sarah',
    name: 'Sarah Patel',
    service: 'Leak diagnosis',
    location: 'Orangecrest',
    missedAt: '8:11 AM',
    autoTextAt: '8:12 AM',
    status: 'Booked',
    priority: 'Medium',
    estimate: '$690',
    property: 'Duplex',
    issue: 'Ceiling stain growing under upstairs bathroom. Wants early inspection.',
    nextStep: 'Leak detection scheduled for Thursday 1:30 PM',
    threadPreview: 'Tomorrow afternoon is great. Please text when the plumber is en route.',
  },
  {
    id: 'lead-jason',
    name: 'Jason Rivera',
    service: 'Sewer camera inspection',
    location: 'Wood Streets',
    missedAt: '7:54 PM',
    autoTextAt: '7:55 PM',
    status: 'Nurture',
    priority: 'Medium',
    estimate: '$410',
    property: '1920s bungalow',
    issue: 'Recurring backups in guest bath. Comparing options for next week.',
    nextStep: 'Aitha following up tomorrow morning with pricing summary',
    threadPreview: 'Can you text me the price range before I commit?',
  },
];

const conversationThreads = {
  'lead-maria': [
    { id: 'm1', sender: 'system', body: 'Missed call captured from Google Ads • 6:42 PM', time: '6:42 PM' },
    { id: 'm2', sender: 'ai', body: 'Hi Maria — this is Aitha with Riverside Plumbing. Sorry we missed your call. Are you dealing with no hot water, a leak, or something else?', time: '6:43 PM' },
    { id: 'm3', sender: 'customer', body: 'No hot water at all. Our water heater is 12 years old and just quit.', time: '6:44 PM' },
    { id: 'm4', sender: 'ai', body: 'Thanks for the details. We can usually replace those same week. Is your home in Riverside and do mornings or afternoons work better for a visit?', time: '6:45 PM' },
    { id: 'm5', sender: 'customer', body: 'Yes, Canyon Crest. Friday morning is best if possible.', time: '6:47 PM' },
    { id: 'm6', sender: 'ai', body: 'Perfect — I found an 8–10 AM slot Friday. I have you down for a standard tank replacement consultation and quote. Want me to reserve it?', time: '6:48 PM' },
    { id: 'm7', sender: 'customer', body: 'Yes please. Send whatever I need to confirm.', time: '6:49 PM' },
    { id: 'm8', sender: 'system', body: 'Booked automatically in ServiceTitan • Est. value $1,480', time: '6:49 PM' },
  ],
  'lead-david': [
    { id: 'd1', sender: 'system', body: 'Overflow call from website click-to-call • 12:18 PM', time: '12:18 PM' },
    { id: 'd2', sender: 'ai', body: 'Hi David — Aitha here with Riverside Plumbing. Sorry we missed you. Is this a clogged sink, toilet, or main line issue?', time: '12:19 PM' },
    { id: 'd3', sender: 'customer', body: 'Kitchen sink. It is draining super slowly and gurgling.', time: '12:20 PM' },
    { id: 'd4', sender: 'ai', body: 'Got it. That usually falls into our drain clearing service. If you send a quick photo of under the sink or the cleanout area, I can quote the right visit and find an opening.', time: '12:21 PM' },
    { id: 'd5', sender: 'customer', body: 'I can send that in a bit. Do you have anything after 4:30?', time: '12:23 PM' },
    { id: 'd6', sender: 'ai', body: 'Yes — I can hold a 5–7 PM arrival window today while you send the photo. No pressure, I will keep it warm for 45 minutes.', time: '12:23 PM' },
  ],
  'lead-sarah': [
    { id: 's1', sender: 'system', body: 'Missed call from repeat customer • 8:11 AM', time: '8:11 AM' },
    { id: 's2', sender: 'ai', body: 'Good morning Sarah — this is Aitha at Riverside Plumbing. We missed your call. Is the ceiling stain actively dripping or just expanding?', time: '8:12 AM' },
    { id: 's3', sender: 'customer', body: 'Not dripping, but it definitely got bigger overnight.', time: '8:13 AM' },
    { id: 's4', sender: 'ai', body: 'Thanks. That sounds like a hidden supply or drain leak. We have a leak detection opening tomorrow at 1:30 PM. Should I reserve it?', time: '8:14 AM' },
    { id: 's5', sender: 'customer', body: 'Tomorrow afternoon is perfect.', time: '8:15 AM' },
    { id: 's6', sender: 'system', body: 'Leak diagnosis appointment booked • Est. value $690', time: '8:15 AM' },
  ],
  'lead-jason': [
    { id: 'j1', sender: 'system', body: 'After-hours call from Google Business Profile • 7:54 PM', time: '7:54 PM' },
    { id: 'j2', sender: 'ai', body: 'Hi Jason — Aitha with Riverside Plumbing here. We missed your call. Are you seeing backups in one fixture or multiple?', time: '7:55 PM' },
    { id: 'j3', sender: 'customer', body: 'Two bathrooms, but not all the time. House is older.', time: '7:57 PM' },
    { id: 'j4', sender: 'ai', body: 'Understood. A sewer camera inspection is likely the best first step. Most homes like yours fall in the $375–$450 range. Want me to send exact availability for next week?', time: '7:58 PM' },
    { id: 'j5', sender: 'customer', body: 'Yes, and text me the price range too please.', time: '7:59 PM' },
  ],
} as Record<string, Array<{ id: string; sender: string; body: string; time: string }>>;

const bookedJobs = [
  {
    id: 'job-maria',
    leadId: 'lead-maria',
    customer: 'Maria Thompson',
    job: 'Water heater replacement consult',
    arrival: 'Fri • 8:00–10:00 AM',
    tech: 'Luis M.',
    status: 'Confirmed',
    revenue: '$1,480',
    notes: 'Aitha collected gate code, heater age, and photo request before booking.',
  },
  {
    id: 'job-sarah',
    leadId: 'lead-sarah',
    customer: 'Sarah Patel',
    job: 'Leak diagnosis',
    arrival: 'Thu • 1:30–3:30 PM',
    tech: 'Nina R.',
    status: 'Confirmed',
    revenue: '$690',
    notes: 'Returning customer. Prior notes pushed into the technician packet automatically.',
  },
  {
    id: 'job-michael',
    leadId: 'lead-maria',
    customer: 'Michael Brooks',
    job: 'Main line hydro jetting',
    arrival: 'Wed • 3:00–5:00 PM',
    tech: 'Alex T.',
    status: 'En Route',
    revenue: '$1,150',
    notes: 'Booked from an evening voicemail sequence and upsold a camera inspection.',
  },
];

const revenueMoments = [
  { label: 'Mon', value: 920 },
  { label: 'Tue', value: 1480 },
  { label: 'Wed', value: 1150 },
  { label: 'Thu', value: 690 },
  { label: 'Fri', value: 2110 },
  { label: 'Sat', value: 1490 },
];

const automationRules = [
  { title: 'After-hours missed call', detail: 'Text within 60 seconds and ask what service is needed.' },
  { title: 'Urgent plumbing keywords', detail: 'Escalate leaks, no hot water, and sewer backups to same-day priority.' },
  { title: 'Booking handoff', detail: 'Reserve the best-fit window and send confirmation once the customer agrees.' },
];

const liveActivity = [
  'Aitha tagged “no hot water” as urgent and bumped Maria to the top of the queue.',
  'New photo request sent to David for drain-clearing qualification.',
  'Sarah’s appointment packet synced with technician notes and route order.',
];

const tutorialSteps = [
  {
    id: 'missed-calls',
    title: 'Missed calls',
    description: 'Riverside Plumbing can see every missed and overflow call in one place, with service type, urgency, and estimated job value already attached.',
    targetId: 'demo-missed-calls',
  },
  {
    id: 'auto-text',
    title: 'Auto-text',
    description: 'Aitha replies automatically in seconds, so leads get an immediate response even when the office is busy or closed.',
    targetId: 'demo-auto-text',
  },
  {
    id: 'ai-conversation',
    title: 'AI conversation',
    description: 'The AI thread feels human, gathers the right job details, and keeps the customer moving toward a booking without extra admin work.',
    targetId: 'demo-ai-conversation',
  },
  {
    id: 'booked-job',
    title: 'Booked job',
    description: 'Once the customer agrees, Aitha can hold the slot, confirm the visit, and push the job details into the team’s workflow.',
    targetId: 'demo-booked-jobs',
  },
  {
    id: 'revenue-recovered',
    title: 'Revenue recovered',
    description: 'This is the payoff — Riverside Plumbing turns missed calls into real booked revenue that would have otherwise disappeared.',
    targetId: 'demo-revenue-recovered',
  },
];

const revenueBarScaleFactor = 18;
const revenueBarMinHeight = 18;
const sectionBaseClass = 'rounded-3xl border border-cool-gray300 bg-white p-6 shadow-sm transition-all duration-300';
const tutorialHighlightClass = 'ring-4 ring-rocket-orange/80 shadow-[0_0_0_8px_rgba(249,115,22,0.16)]';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    problem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);
  const [tutorialStepIndex, setTutorialStepIndex] = useState(0);
  const [activeDemoSection, setActiveDemoSection] = useState('demo-overview');
  const [selectedLeadId, setSelectedLeadId] = useState(riversideLeads[0].id);
  const [selectedJobId, setSelectedJobId] = useState(bookedJobs[0].id);

  const selectedLead = riversideLeads.find((lead) => lead.id === selectedLeadId) || riversideLeads[0];
  const selectedJob = bookedJobs.find((job) => job.id === selectedJobId) || bookedJobs[0];
  const activeThread = conversationThreads[selectedLead.id] || [];
  const currentTutorialStep = tutorialSteps[tutorialStepIndex];
  const selectedLeadFirstName = selectedLead.name.trim().split(/\s+/)[0] || 'there';

  useEffect(() => {
    if (!isDemoOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDemoOpen(false);
        setIsTutorialVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDemoOpen]);

  useEffect(() => {
    if (!isDemoOpen || !isTutorialVisible) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const currentTargetId = tutorialSteps[tutorialStepIndex].targetId;
      const element = document.getElementById(currentTargetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setActiveDemoSection(currentTargetId);
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [isDemoOpen, isTutorialVisible, tutorialStepIndex]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setSubmitMessage("Thanks! We'll be in touch soon.");
      setFormData({ name: '', businessName: '', phone: '', email: '', problem: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLiveDemo = () => {
    setIsDemoOpen(true);
    setIsTutorialVisible(true);
    setTutorialStepIndex(0);
    setActiveDemoSection('demo-overview');
    setSelectedLeadId(riversideLeads[0].id);
    setSelectedJobId(bookedJobs[0].id);
  };

  const closeLiveDemo = () => {
    setIsDemoOpen(false);
    setIsTutorialVisible(false);
  };

  const goToDemoSection = (targetId: string) => {
    setActiveDemoSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTutorialNext = () => {
    if (tutorialStepIndex === tutorialSteps.length - 1) {
      setIsTutorialVisible(false);
      return;
    }
    setTutorialStepIndex(prev => Math.min(prev + 1, tutorialSteps.length - 1));
  };

  const isTutorialTarget = (targetId: string) => isTutorialVisible && currentTutorialStep.targetId === targetId;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-deep-navy via-blue-gray-gradient-start to-cool-gray900 text-white py-20 min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary opacity-15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rocket-orange opacity-15 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-gray-gradient-start opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-10 pt-6 px-4"
        >
          <Image
            src="https://static.wixstatic.com/media/18d7f4_e76c704a9a6c4cefb2c36f97438df737~mv2.png"
            alt="TaskRocket Logo"
            originWidth={1024}
            originHeight={1024}
            fittingType="fit"
            className="object-contain max-w-[460px] sm:max-w-[620px] lg:max-w-[700px] h-auto drop-shadow-2xl mix-blend-normal"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Business Should Work <span className="text-rocket-orange">Without You</span>
            </h1>
            <p className="font-paragraph text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop being trapped by manual work. We build automated systems that run your business 24/7—so you can focus on growth, not admin tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-6 rounded-lg"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cool-gray100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
                Reclaim Your Time: Stop Losing Hours to Manual Work
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Spending hours scheduling jobs manually',
                'Chasing down leads instead of closing deals',
                'Sending quotes late and losing opportunities',
                'Working nights just to keep up with admin tasks',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white p-6 rounded-lg border-l-4 border-rocket-orange shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-3 h-3 bg-rocket-orange rounded-full flex-shrink-0"></div>
                  <p className="font-paragraph text-lg text-cool-gray700">{item}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20"
            >
              <p className="font-paragraph text-xl text-deep-navy font-semibold">
                Every hour saved is an hour you get back. Let&apos;s build a system that gives you your time back.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Automate Your Business. Reclaim Your Time.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scheduling & Dispatch',
                description: 'Automatically assign jobs and keep your team moving—save hours every week',
                icon: '📅',
              },
              {
                title: 'Estimates & Quotes',
                description: 'Create fast, consistent quotes and close deals faster',
                icon: '📊',
              },
              {
                title: 'Lead Follow-Up',
                description: 'Never miss a lead again—automated follow-ups that convert',
                icon: '🎯',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cool-gray100 to-white p-8 rounded-xl border-2 border-cool-gray300 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-deep-navy mb-4">
                  {service.title}
                </h3>
                <p className="font-paragraph text-lg text-cool-gray700">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="aitha" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cool-gray100 via-white to-cool-gray100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-10 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
                <Sparkles className="h-4 w-4" />
                Aitha live demo
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
                Meet <span className="text-primary">Riverside Plumbing</span> — a realistic Aitha demo built for home-service teams
              </h2>
              <p className="font-paragraph text-lg sm:text-xl text-cool-gray700 mb-8 max-w-3xl">
                See how Aitha handles missed calls, sends immediate follow-up texts, and keeps the conversation moving. It turns after-hours opportunities into booked plumbing jobs without sending visitors to a separate page.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Missed calls are tagged with urgency and service type automatically.',
                  'Auto-text messages respond in under a minute with a natural tone.',
                  'AI qualification captures job details before booking the visit.',
                  'Booked work and recovered revenue look like a real operating dashboard.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-cool-gray300 bg-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <p className="font-paragraph text-base text-cool-gray700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openLiveDemo}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-heading px-8 py-6 rounded-xl"
                >
                  Try Live Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="font-heading px-8 py-6 rounded-xl"
                >
                  Talk to TaskRocket
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-deep-navy/10 bg-deep-navy p-4 sm:p-5 shadow-2xl">
              <div className="rounded-[1.5rem] bg-cool-gray100 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-cool-gray300 pb-4 mb-4">
                  <div>
                    <p className="font-heading text-xl font-bold text-deep-navy">Riverside Plumbing</p>
                    <p className="font-paragraph text-sm text-cool-gray700">Aitha dashboard preview</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live after-hours recovery
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {riversideStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="rounded-2xl bg-white p-4 border border-cool-gray300 shadow-sm">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${stat.accent}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="font-heading text-2xl font-bold text-deep-navy">{stat.value}</p>
                        <p className="font-paragraph text-sm text-cool-gray700">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-2xl bg-white border border-cool-gray300 p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-heading text-base font-bold text-deep-navy">Latest conversation</p>
                      <p className="font-paragraph text-sm text-cool-gray700">Maria Thompson • Water heater replacement</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Booked</span>
                  </div>
                  <div className="space-y-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-white">
                      Hi Maria — this is Aitha with Riverside Plumbing. Sorry we missed your call.
                    </div>
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-cool-gray100 px-4 py-3 text-sm text-cool-gray700">
                      No hot water at all. Friday morning is best if possible.
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-secondary px-4 py-3 text-sm text-deep-navy">
                      Friday 8–10 AM is reserved. Tap the demo to see the full workflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cool-gray100 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rocket-orange to-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'We Find the Bottleneck',
                description: "We identify what's slowing your business down",
              },
              {
                step: '2',
                title: 'We Build the System',
                description: 'We install a solution that fixes it',
              },
              {
                step: '3',
                title: 'We Manage It Monthly',
                description: 'We keep everything running and improving over time',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl border-2 border-primary shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-2xl mb-6 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-deep-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-lg text-cool-gray700">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold text-deep-navy mb-4 text-center"
          >
            Pricing That Gives You More Time, Not Less
          </motion.h2>
          <p className="font-paragraph text-lg text-cool-gray700 text-center mb-16 max-w-2xl mx-auto">
            We offer flexible pricing that scales with your business needs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 bg-cool-gray100 p-8 rounded-lg"
          >
            <h3 className="font-heading text-3xl font-bold text-deep-navy mb-4">
              System Setup
            </h3>
            <p className="font-heading text-2xl font-bold text-rocket-orange mb-4">
              Starting at $1,500
            </p>
            <p className="font-paragraph text-lg text-cool-gray700 mb-4">
              One-time, per workflow
            </p>
            <p className="font-paragraph text-base text-cool-gray700 mb-4">
              We build and install a custom system designed to fix a specific problem in your business.
            </p>
            <p className="font-paragraph text-base text-cool-gray700">
              Most systems fall between <span className="font-bold">$1,500 – $3,500</span> depending on complexity and level of automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-heading text-3xl font-bold text-deep-navy mb-2">
              Ongoing Management
            </h3>
            <p className="font-paragraph text-base text-cool-gray700 mb-8 italic">
              Per Workflow — Each workflow is maintained individually to ensure reliability and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-cool-gray300 p-8 rounded-lg"
              >
                <h4 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                  Core Plan
                </h4>
                <p className="font-heading text-3xl font-bold text-primary mb-6">
                  $500<span className="text-lg text-cool-gray700">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Monitoring & upkeep', 'Minor updates', 'Basic improvements', 'Email support'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base text-cool-gray700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary text-white p-8 rounded-lg border-2 border-primary relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rocket-orange text-white px-4 py-1 rounded-full font-heading font-bold text-sm">
                  Most Popular
                </div>
                <h4 className="font-heading text-2xl font-bold mb-2">
                  Growth Plan
                </h4>
                <p className="font-heading text-3xl font-bold mb-6">
                  $750<span className="text-lg">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Everything in Core', 'Priority updates', 'Workflow improvements', 'Monthly performance review'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-cool-gray300 p-8 rounded-lg"
              >
                <h4 className="font-heading text-2xl font-bold text-deep-navy mb-2">
                  Scale Plan
                </h4>
                <p className="font-heading text-3xl font-bold text-primary mb-6">
                  $1,000<span className="text-lg text-cool-gray700">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {['Everything in Growth', 'Priority turnaround', 'Advanced optimizations', 'New workflow builds (within scope)'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-paragraph text-base text-cool-gray700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-cool-gray100 p-6 rounded-lg text-center"
          >
            <p className="font-paragraph text-base text-cool-gray700 mb-2">
              <span className="font-bold">Managing multiple workflows?</span> We offer discounted pricing for bundled systems.
            </p>
            <p className="font-paragraph text-base text-cool-gray700">
              <span className="font-bold">Flexible and scalable.</span> Grow at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="trust" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-cool-gray100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold text-deep-navy mb-12"
          >
            Built for Busy Business Owners
          </motion.h2>
          <div className="space-y-6">
            {[
              'Designed for service-based businesses that value their time',
              'Focused on saving hours every week through smart automation',
              'Systems built to work in real-world operations so you can focus on growth',
            ].map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="font-paragraph text-xl text-cool-gray700"
              >
                ✓ {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-navy to-cool-gray900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 bg-rocket-orange/20 border-2 border-rocket-orange p-6 rounded-lg"
          >
            <p className="font-heading text-lg sm:text-xl font-bold text-rocket-orange">
              👇 Ready to transform your business? Fill out the intake form below to get started!
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold mb-12"
          >
            Ready to Get Your Time Back?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('how-it-works')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading text-lg px-8 py-6 rounded-lg"
            >
              Learn More
            </Button>
            <Button
              onClick={openLiveDemo}
              className="bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg px-8 py-6 rounded-lg"
            >
              Try Live Demo
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-deep-navy mb-2 text-center">
              Let&apos;s Fix Your Workflow
            </h2>
            <p className="font-paragraph text-lg text-cool-gray700 text-center mb-12">
              Tell us what&apos;s slowing you down. We&apos;ll be in touch within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Business Name
                  </label>
                  <Input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-paragraph text-sm font-semibold text-deep-navy mb-2 block">
                  What&apos;s slowing your business down?
                </label>
                <Textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cool-gray300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-paragraph"
                  placeholder="Tell us about the biggest bottleneck in your business..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rocket-orange hover:bg-orange-600 text-white font-heading text-lg py-3 rounded-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-paragraph ${
                    submitMessage.includes('Thanks') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />

      <AnimatePresence>
        {isDemoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-deep-navy/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label="Riverside Plumbing live demo"
              className="flex h-full flex-col"
              data-testid="riverside-demo-dialog"
            >
              <div className="border-b border-white/10 bg-deep-navy/95 px-4 sm:px-6 py-4 text-white">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <Button
                      onClick={closeLiveDemo}
                      variant="ghost"
                      className="text-white hover:no-underline hover:bg-white/10"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      Back to TaskRocket
                    </Button>
                    <div className="hidden h-8 w-px bg-white/10 sm:block"></div>
                    <div className="min-w-0">
                      <h2 id="riverside-demo-title" className="font-heading text-xl sm:text-2xl font-bold truncate">
                        Riverside Plumbing • Aitha live dashboard
                      </h2>
                      <p className="font-paragraph text-sm text-white/70 truncate">
                        Missed-call recovery, AI texting, and booked jobs — all on the same page.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Demo data • Riverside, CA
                    </span>
                    <button
                      type="button"
                      onClick={closeLiveDemo}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                      aria-label="Close live demo"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 overflow-hidden">
                <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-white/10 bg-deep-navy text-white">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-rocket-orange">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-heading text-lg font-bold">Riverside Plumbing</p>
                        <p className="font-paragraph text-sm text-white/60">Powered by Aitha</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/80">
                      <p className="font-semibold text-white">Today</p>
                      <p>18 missed calls captured • 11 jobs booked • $7,840 recovered</p>
                    </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-2">
                    {demoNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeDemoSection === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => goToDemoSection(item.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                            isActive ? 'bg-white text-deep-navy' : 'text-white/75 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-paragraph text-sm font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </aside>

                <main className="min-h-0 flex-1 overflow-y-auto bg-cool-gray100">
                  <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
                    <div className="lg:hidden mb-4 overflow-x-auto pb-2">
                      <div className="flex gap-2 min-w-max">
                        {demoNavItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = activeDemoSection === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => goToDemoSection(item.id)}
                              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                                isActive ? 'bg-deep-navy text-white' : 'bg-white text-cool-gray700 border border-cool-gray300'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <section id="demo-overview" className="mb-6 scroll-mt-24">
                      <div className="rounded-[2rem] border border-cool-gray300 bg-gradient-to-br from-deep-navy via-primary to-secondary px-6 py-6 sm:px-8 text-white shadow-xl">
                        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                          <div className="max-w-3xl">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                              <Sparkles className="h-4 w-4 text-rocket-orange" />
                              Welcome to Riverside Plumbing&apos;s Aitha dashboard
                            </div>
                            <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
                              A realistic home-services workflow — from missed call to booked job.
                            </h3>
                            <p className="font-paragraph text-base sm:text-lg text-white/85 max-w-2xl">
                              This live demo shows how Aitha helps Riverside Plumbing respond instantly, qualify jobs over SMS, book appointments, and recover revenue from calls the team could not answer live.
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:w-[520px]">
                            {riversideStats.map((stat) => {
                              const Icon = stat.icon;
                              return (
                                <div key={stat.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${stat.accent}`}>
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <p className="font-heading text-2xl font-bold">{stat.value}</p>
                                  <p className="font-paragraph text-sm text-white/80">{stat.label}</p>
                                  <p className="font-paragraph text-xs text-white/60 mt-1">{stat.detail}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </section>

                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                      <section
                        id="demo-missed-calls"
                        className={`${sectionBaseClass} scroll-mt-24 ${isTutorialTarget('demo-missed-calls') ? tutorialHighlightClass : ''}`}
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <div className="inline-flex rounded-full bg-rocket-orange/10 px-3 py-1 text-xs font-semibold text-rocket-orange mb-3">
                              Missed calls queue
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-deep-navy">Calls that would have been lost are now ready for follow-up</h3>
                            <p className="font-paragraph text-base text-cool-gray700 mt-2">
                              Click any lead to see the live conversation and the booking outcome.
                            </p>
                          </div>
                          <div className="rounded-2xl bg-cool-gray100 px-4 py-3 text-right">
                            <p className="font-heading text-2xl font-bold text-deep-navy">18</p>
                            <p className="font-paragraph text-sm text-cool-gray700">Captured today</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {riversideLeads.map((lead) => (
                            <button
                              key={lead.id}
                              type="button"
                              onClick={() => {
                                setSelectedLeadId(lead.id);
                                const linkedJob = bookedJobs.find((job) => job.leadId === lead.id);
                                if (linkedJob) {
                                  setSelectedJobId(linkedJob.id);
                                }
                              }}
                              className={`w-full rounded-2xl border p-4 text-left transition ${
                                selectedLeadId === lead.id
                                  ? 'border-primary bg-primary/5 shadow-sm'
                                  : 'border-cool-gray300 bg-white hover:border-primary/50 hover:shadow-sm'
                              }`}
                            >
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <p className="font-heading text-lg font-bold text-deep-navy">{lead.name}</p>
                                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                      lead.status === 'Booked'
                                        ? 'bg-emerald-500/10 text-emerald-700'
                                        : lead.status === 'Qualified'
                                          ? 'bg-primary/10 text-primary'
                                          : 'bg-cool-gray100 text-cool-gray700'
                                    }`}>
                                      {lead.status}
                                    </span>
                                    <span className="rounded-full bg-rocket-orange/10 px-2.5 py-1 text-xs font-semibold text-rocket-orange">
                                      {lead.priority}
                                    </span>
                                  </div>
                                  <p className="font-paragraph text-sm text-cool-gray700 mb-2">
                                    {lead.service} • {lead.location} • Missed at {lead.missedAt}
                                  </p>
                                  <p className="font-paragraph text-sm text-cool-gray700">
                                    {lead.threadPreview}
                                  </p>
                                </div>
                                <div className="sm:text-right">
                                  <p className="font-heading text-xl font-bold text-deep-navy">{lead.estimate}</p>
                                  <p className="font-paragraph text-xs text-cool-gray700">Potential value</p>
                                  <p className="font-paragraph text-xs text-cool-gray700 mt-3">Auto-text sent {lead.autoTextAt}</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </section>

                      <section
                        id="demo-auto-text"
                        className={`${sectionBaseClass} scroll-mt-24 ${isTutorialTarget('demo-auto-text') ? tutorialHighlightClass : ''}`}
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                              Auto-text workflow
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-deep-navy">Aitha replies instantly with the right next question</h3>
                          </div>
                          <div className="rounded-2xl bg-primary/5 px-4 py-3 text-right">
                            <p className="font-heading text-2xl font-bold text-primary">47 sec</p>
                            <p className="font-paragraph text-sm text-cool-gray700">Avg. first response</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                          <div className="rounded-2xl border border-cool-gray300 bg-cool-gray100 p-4">
                            <p className="font-heading text-lg font-bold text-deep-navy mb-3">Trigger rules</p>
                            <div className="space-y-3">
                              {automationRules.map((rule) => (
                                <div key={rule.title} className="rounded-2xl bg-white p-4 border border-cool-gray300">
                                  <p className="font-semibold text-deep-navy">{rule.title}</p>
                                  <p className="font-paragraph text-sm text-cool-gray700 mt-1">{rule.detail}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[1.75rem] border border-cool-gray300 bg-deep-navy p-4 text-white shadow-inner">
                            <div className="rounded-[1.35rem] bg-white p-4 text-deep-navy">
                              <div className="mb-4 flex items-center justify-between">
                                <div>
                                  <p className="font-heading text-base font-bold">SMS preview</p>
                                  <p className="font-paragraph text-xs text-cool-gray700">Sent from Riverside Plumbing</p>
                                </div>
                                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">Delivered</span>
                              </div>
                              <div className="space-y-3">
                                <div className="rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-white">
                                  Hi {selectedLeadFirstName} — this is Aitha with Riverside Plumbing. Sorry we missed your call. Are you dealing with {selectedLead.service.toLowerCase()} today?
                                </div>
                                <div className="rounded-2xl bg-cool-gray100 px-4 py-3 text-sm text-cool-gray700">
                                  Triggered {selectedLead.autoTextAt} • Customer profile attached • Booking link ready if needed
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <section
                        id="demo-ai-conversation"
                        className={`${sectionBaseClass} scroll-mt-24 ${isTutorialTarget('demo-ai-conversation') ? tutorialHighlightClass : ''}`}
                      >
                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-deep-navy mb-3">
                              AI conversation
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-deep-navy">Live SMS thread for {selectedLead.name}</h3>
                            <p className="font-paragraph text-base text-cool-gray700 mt-2 max-w-2xl">
                              Aitha qualifies the lead, keeps the tone natural, and moves toward a booking without sounding scripted.
                            </p>
                          </div>
                          <div className="rounded-2xl bg-cool-gray100 px-4 py-3">
                            <p className="font-heading text-xl font-bold text-deep-navy">{selectedLead.estimate}</p>
                            <p className="font-paragraph text-sm text-cool-gray700">Expected job value</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
                          <div className="rounded-[1.75rem] border border-cool-gray300 bg-cool-gray100 p-4">
                            <div className="space-y-3">
                              {activeThread.map((message) => (
                                <div
                                  key={message.id}
                                  className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
                                >
                                  <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                                      message.sender === 'customer'
                                        ? 'rounded-bl-md bg-white text-cool-gray700 border border-cool-gray300'
                                        : message.sender === 'system'
                                          ? 'rounded-2xl bg-deep-navy text-white'
                                          : 'rounded-br-md bg-primary text-white'
                                    }`}
                                  >
                                    <p>{message.body}</p>
                                    <p className={`mt-2 text-[11px] ${message.sender === 'customer' ? 'text-cool-gray700/70' : 'text-white/70'}`}>
                                      {message.time}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="rounded-2xl border border-cool-gray300 bg-cool-gray100 p-4">
                              <p className="font-heading text-lg font-bold text-deep-navy">Lead profile</p>
                              <dl className="mt-4 space-y-3 text-sm">
                                <div>
                                  <dt className="text-cool-gray700">Service requested</dt>
                                  <dd className="font-semibold text-deep-navy">{selectedLead.service}</dd>
                                </div>
                                <div>
                                  <dt className="text-cool-gray700">Property</dt>
                                  <dd className="font-semibold text-deep-navy">{selectedLead.property}</dd>
                                </div>
                                <div>
                                  <dt className="text-cool-gray700">Issue summary</dt>
                                  <dd className="font-semibold text-deep-navy">{selectedLead.issue}</dd>
                                </div>
                              </dl>
                            </div>
                            <div className="rounded-2xl border border-cool-gray300 bg-white p-4">
                              <p className="font-heading text-lg font-bold text-deep-navy">Why this feels real</p>
                              <ul className="mt-4 space-y-3 text-sm text-cool-gray700">
                                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> The conversation adapts to service type and urgency.</li>
                                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Booking windows are specific, local, and plausible.</li>
                                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Customer details are captured before dispatch is touched.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="space-y-6">
                        <section
                          id="demo-booked-jobs"
                          className={`${sectionBaseClass} scroll-mt-24 ${isTutorialTarget('demo-booked-jobs') ? tutorialHighlightClass : ''}`}
                        >
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div>
                              <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 mb-3">
                                Booked jobs
                              </div>
                              <h3 className="font-heading text-2xl font-bold text-deep-navy">Appointments Aitha helped secure</h3>
                            </div>
                            <div className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-right">
                              <p className="font-heading text-2xl font-bold text-emerald-700">11</p>
                              <p className="font-paragraph text-sm text-cool-gray700">Booked this week</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {bookedJobs.map((job) => (
                              <button
                                key={job.id}
                                type="button"
                                onClick={() => setSelectedJobId(job.id)}
                                className={`w-full rounded-2xl border p-4 text-left transition ${
                                  selectedJobId === job.id
                                    ? 'border-emerald-500 bg-emerald-500/5 shadow-sm'
                                    : 'border-cool-gray300 bg-white hover:border-emerald-500/40'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-4">
                                  <div>
                                    <p className="font-heading text-lg font-bold text-deep-navy">{job.customer}</p>
                                    <p className="font-paragraph text-sm text-cool-gray700">{job.job}</p>
                                  </div>
                                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    job.status === 'En Route'
                                      ? 'bg-secondary/20 text-deep-navy'
                                      : 'bg-emerald-500/10 text-emerald-700'
                                  }`}>
                                    {job.status}
                                  </span>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-sm text-cool-gray700">
                                  <span>{job.arrival}</span>
                                  <span className="font-semibold text-deep-navy">{job.revenue}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 rounded-2xl bg-cool-gray100 p-4">
                            <p className="font-heading text-lg font-bold text-deep-navy">Selected job</p>
                            <div className="mt-3 space-y-2 text-sm text-cool-gray700">
                              <p><span className="font-semibold text-deep-navy">{selectedJob.job}</span> for {selectedJob.customer}</p>
                              <p>Arrival window: {selectedJob.arrival}</p>
                              <p>Assigned tech: {selectedJob.tech}</p>
                              <p>{selectedJob.notes}</p>
                            </div>
                          </div>
                        </section>

                        <section
                          id="demo-revenue-recovered"
                          className={`${sectionBaseClass} scroll-mt-24 ${isTutorialTarget('demo-revenue-recovered') ? tutorialHighlightClass : ''}`}
                        >
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div>
                              <div className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-deep-navy mb-3">
                                Revenue recovered
                              </div>
                              <h3 className="font-heading text-2xl font-bold text-deep-navy">Recovered revenue from saved conversations</h3>
                            </div>
                            <div className="rounded-2xl bg-secondary/10 px-4 py-3 text-right">
                              <p className="font-heading text-2xl font-bold text-deep-navy">$7,840</p>
                              <p className="font-paragraph text-sm text-cool-gray700">This week</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 items-end h-44 rounded-2xl bg-cool-gray100 p-4">
                            {revenueMoments.map((item) => (
                              <div key={item.label} className="flex h-full flex-col items-center justify-end gap-3">
                                <div className="flex w-full items-end justify-center rounded-t-2xl bg-gradient-to-t from-primary to-secondary" style={{ height: `${Math.max(revenueBarMinHeight, item.value / revenueBarScaleFactor)}px` }}>
                                  <span className="mb-2 text-[11px] font-semibold text-white">${Math.round(item.value / 10) * 10}</span>
                                </div>
                                <span className="text-xs font-medium text-cool-gray700">{item.label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-cool-gray300 bg-white p-4">
                              <p className="font-paragraph text-sm text-cool-gray700">Highest converting source</p>
                              <p className="font-heading text-xl font-bold text-deep-navy mt-1">Google Business Profile</p>
                            </div>
                            <div className="rounded-2xl border border-cool-gray300 bg-white p-4">
                              <p className="font-paragraph text-sm text-cool-gray700">Average ticket recovered</p>
                              <p className="font-heading text-xl font-bold text-deep-navy mt-1">$713</p>
                            </div>
                          </div>
                        </section>

                        <section id="demo-settings" className={`${sectionBaseClass} scroll-mt-24`}>
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div>
                              <div className="inline-flex rounded-full bg-deep-navy/10 px-3 py-1 text-xs font-semibold text-deep-navy mb-3">
                                Automation health
                              </div>
                              <h3 className="font-heading text-2xl font-bold text-deep-navy">The dashboard still feels alive after the tour</h3>
                            </div>
                            <Clock3 className="h-6 w-6 text-cool-gray700" />
                          </div>
                          <div className="space-y-3 mb-4">
                            {liveActivity.map((item) => (
                              <div key={item} className="rounded-2xl border border-cool-gray300 bg-cool-gray100 p-4 text-sm text-cool-gray700">
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="rounded-2xl border border-cool-gray300 bg-white p-4">
                            <p className="font-heading text-lg font-bold text-deep-navy mb-2">What visitors can explore</p>
                            <p className="font-paragraph text-sm text-cool-gray700">
                              Use the sidebar, switch leads, review messages, and inspect booked work to explore Riverside Plumbing&apos;s Aitha workflow on your own after dismissing the tutorial.
                            </p>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </main>
              </div>

              <AnimatePresence>
                {isTutorialVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    className="pointer-events-none fixed inset-x-4 bottom-4 z-[95] sm:inset-x-auto sm:right-6 sm:bottom-6"
                  >
                    <div className="pointer-events-auto w-full max-w-md rounded-[1.75rem] border border-white/20 bg-deep-navy text-white shadow-2xl">
                      <div className="p-5 sm:p-6">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="font-paragraph text-xs uppercase tracking-[0.2em] text-white/60">Guided tour</p>
                            <p className="font-heading text-2xl font-bold mt-2">Welcome to Riverside Plumbing&apos;s Aitha dashboard</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsTutorialVisible(false)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                            aria-label="Dismiss guide"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4">
                          <div className="mb-3 flex items-center justify-between gap-4">
                            <p data-testid="demo-tutorial-title" className="font-heading text-xl font-bold text-rocket-orange">
                              {currentTutorialStep.title}
                            </p>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                              {tutorialStepIndex + 1} / {tutorialSteps.length}
                            </span>
                          </div>
                          <p className="font-paragraph text-sm text-white/80">
                            {currentTutorialStep.description}
                          </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsTutorialVisible(false)}
                            className="border-white/20 bg-transparent text-white hover:bg-white hover:text-deep-navy"
                          >
                            Explore Freely
                          </Button>
                          <Button
                            type="button"
                            onClick={handleTutorialNext}
                            className="bg-rocket-orange text-white hover:bg-orange-600"
                          >
                            {tutorialStepIndex === tutorialSteps.length - 1 ? 'Finish Tour' : 'Next'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
