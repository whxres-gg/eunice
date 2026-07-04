"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Sliders,
  Cpu,
  Bookmark,
  Activity,
  HeartPulse,
  ClipboardList,
  Target,
  UserCheck,
  Check,
  Trophy,
  Globe,
  Music,
  Heart
} from "lucide-react";

export default function SmoothAnimatedResume() {
  // Master Stagger Orchestration
  const layoutContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.02 
      }
    }
  };

  // Content Block Entry Animations
  const contentBlockVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 70, damping: 16 } 
    }
  };

  // Card Interactive Dynamic Shifting
  const interactiveCardVariants = {
    rest: { 
      y: 0, 
      backgroundColor: "rgba(12, 12, 14, 0.6)", 
      borderColor: "rgba(39, 39, 42, 0.4)",
      boxShadow: "0 0 0px rgba(0,0,0,0)"
    },
    hover: { 
      y: -6, 
      backgroundColor: "rgba(20, 20, 26, 0.9)", 
      borderColor: "rgba(82, 82, 91, 0.7)",
      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 20px 1px rgba(255,255,255,0.01)",
      transition: { type: "spring", stiffness: 200, damping: 18 }
    }
  };

  const skillBadgeVariants = {
    rest: { scale: 1, backgroundColor: "rgba(24, 24, 27, 0.8)", borderColor: "rgba(39, 39, 42, 0.6)", color: "#a1a1aa" },
    hover: { 
      scale: 1.05, 
      backgroundColor: "#ffffff", 
      borderColor: "#ffffff", 
      color: "#050507",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  const coreCompetencies = {
    clinicalResearch: ["MoCA Administration", "ACE-III Administration", "Cognitive Screening", "Behavioural Observation", "Neuropsychological Assessment", "Research Documentation", "Literature Review"],
    socialWork: ["Psychosocial Support", "Community Outreach", "Rehabilitation Support", "Mental Health Awareness", "Client Engagement", "Vulnerable Population Support", "Ethical Practice & Confidentiality"],
    professional: ["Workshop Coordination", "Stakeholder Communication", "Public Speaking", "Case Documentation", "Community Engagement"]
  };

  const experiences = [
    {
      company: "The Mind and Company",
      role: "Quality Control Intern | Event Coordinator | Mental Health Programme Support",
      period: "April 2025 – Present",
      bullets: [
        "Conduct client follow-up calls to evaluate service quality, gather feedback, and identify key operational improvement areas.",
        "Plan, organize, and execute mental health workshops, awareness programmes, and online community initiatives.",
        "Facilitate seamless communication between clients and professionals to increase participant engagement.",
        "Support neuropsychological screening activities using standardized cognitive assessment tools (MoCA and ACE-III).",
        "Drive public engagement and build content as a Social Media Content Creator for mental health awareness campaigns."
      ]
    },
    {
      company: "Unified Brain Health Care",
      role: "Research Intern – Neuropsychology",
      period: "May 2025 – October 2025",
      bullets: [
        "Completed formal, specialized training in administering the Montreal Cognitive Assessment (MoCA) and Addenbrooke's Cognitive Examination III (ACE-III).",
        "Administered supervised cognitive assessments to clinical participants.",
        "Reviewed and prepared Tamil translations and adaptations of MoCA manuals (Versions 8.1, 8.2, 8.3) and ACE-III assessment tools.",
        "Supported neuropsychological research through behavioral observation, precise documentation, and cognitive screening.",
        "Maintained strict ethical standards regarding participant confidentiality and professional clinical practice."
      ]
    },
    {
      company: "T.T. Ranganathan Clinical Research Foundation (TTK Hospital)",
      role: "Clinical Rehabilitation Intern",
      period: "April 2025 – May 2025",
      bullets: [
        "Observed multidisciplinary addiction rehabilitation services within a structured clinical setting.",
        "Attended family therapy sessions to gain deep insights into family-centered rehabilitation models at the core of the TTK model.",
        "Completed intensive in-house lectures on addiction, relapse prevention, and psychosocial recovery models.",
        "Developed a practical understanding of clinical rehabilitation pathways and community reintegration."
      ]
    },
    {
      company: "Myrtle Shelter Home for Women",
      role: "Service Learning – Community Worker / Volunteer",
      period: "July 2024 – September 2024",
      bullets: [
        "Provided critical emotional support and targeted psychosocial intervention to women experiencing homelessness.",
        "Assisted shelter staff in maintaining a safe, supportive, and person-centered environment.",
        "Gained practical exposure to trauma-informed care, resilience-building protocols, and community rehabilitation.",
        "Strengthened cross-cultural communication skills while working directly with highly vulnerable populations."
      ]
    },
    {
      company: "PsyHub",
      role: "Psychology Intern",
      period: "June 2024",
      bullets: [
        "Observed professional counseling sessions to understand advanced therapeutic communication and intervention techniques.",
        "Developed foundational knowledge of psychological assessment and mental health interventions.",
        "Gained clinical exposure to code of ethics and confidentiality laws within mental health services."
      ]
    }
  ];

  const secondaryExperience = [
    {
      company: "Expansion Path Academy",
      role: "Psychology Tutor",
      icon: <GraduationCap size={13} />,
      period: "November 2025 – Present",
      bullets: ["Deliver structured Psychology lessons to CBSE Grade 12 students to enhance conceptual clarity through interactive custom modules."]
    },
    {
      company: "Chesed Foundation | AJ Homemade Food",
      role: "Volunteer – Community Outreach",
      icon: <Heart size={13} />,
      period: "December 2025 – Present",
      bullets: ["Design custom educational graphics and digital copy using Canva to distribute high-impact public health resources."]
    },
    {
      company: "VLID (Voice Lessons School of Arts)",
      role: "Dance Tutor",
      icon: <Music size={13} />,
      period: "November 2025 – Present",
      bullets: ["Conduct online dance classes and choreography workshops tailored for clients based in the United States, teaching rhythm and technique."]
    }
  ];

  const awards = [
    "Media & PR Committee Member – Annual College Play (2025)",
    "Participant – Two-day International Seminar on Approaches to Trauma, WCC (2024)",
    "Recipient – Certificate of Appreciation for Leadership in Higher Education",
    "Recipient – Certification of Participation, Socio-Economic & Psychological Wellness Survey (2023)",
    "Participant – Webinar on Exam Failure & Suicide Prevention Counselling, CCS Academy",
    "1st Place Winner (Silhouette Event) – MT. Holyoke Fest (2023)",
    "3rd Prize Winner (Best Rossignol Singing) – FORLA Fest, Loyola College (2024)"
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-400 antialiased font-sans pb-32 selection:bg-zinc-800 selection:text-white overflow-x-hidden relative">
      
      {/* GLOBAL BACKGROUND GLOW STRIPES */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none z-0" />

      {/* HEADER HERO */}
      <motion.header 
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
        transition={{ duration: 0.8 }}
        className="bg-[#050507]/80 border-b border-zinc-900 sticky top-0 z-50 shadow-2xl"
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left group">
            <motion.div className="overflow-hidden inline-block vertical-align-middle">
              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="text-2xl md:text-3xl font-light tracking-[0.25em] text-white uppercase font-sans"
              >
                EUNICE BASILISSA
              </motion.h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 font-semibold mt-1.5 text-[10px] tracking-[0.18em] uppercase flex items-center justify-center lg:justify-start gap-2"
            >
              <Cpu size={11} className="text-zinc-600" /> Psychology Researcher & Community Practitioner
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-2.5 text-xs text-zinc-400 font-normal"
          >
            <span className="flex items-center gap-1.5 bg-zinc-900/40 border border-zinc-800/60 px-3 py-1.5 rounded-md">
              <MapPin size={13} className="text-zinc-500" /> Chennai, IN
            </span>
            <a 
              href="tel:+917904643966" 
              className="flex items-center gap-1.5 bg-zinc-900/40 border border-zinc-800/60 px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-200"
            >
              <Phone size={13} className="text-zinc-500" /> +91 79046 43966
            </a>
            <a 
              href="mailto:basilissaeunice@gmail.com" 
              className="flex items-center gap-1.5 bg-zinc-900/40 border border-zinc-800/60 px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-200"
            >
              <Mail size={13} className="text-zinc-500" /> basilissaeunice@gmail.com
            </a>
            
            {/* CORRECTED LINKEDIN ENGAGEMENT CTA */}
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "#ffffff", backgroundColor: "#ffffff", color: "#050507" }}
              href="https://in.linkedin.com/in/eunice-basilissa-2524a130a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 text-zinc-100 font-medium px-4 py-1.5 rounded-md border border-zinc-800 shadow-xl text-[11px] transition-all duration-150 group"
            >
              <svg className="w-3 h-3 fill-current text-zinc-100 group-hover:text-[#050507] transition-colors duration-150" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="group-hover:text-[#050507] transition-colors duration-150">Connect On LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-70 group-hover:text-[#050507] transition-colors duration-150" />
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {/* CORE LAYOUT CONTAINER */}
      <motion.main 
        variants={layoutContainerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
      >
        
        {/* SIDEBAR BLOCK */}
        <div className="space-y-8 lg:col-span-1">
          
          {/* PROFILE BRIEF & STORYTELLING */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-4 border-b border-zinc-900 pb-3.5">
              <FileText size={13} className="text-zinc-500" /> Journey & Philosophy
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              I am a Psychology undergraduate driven by the intersection of clinical precision and empathetic community care. With practical experience spanning community mental health, non-profit infrastructures, and complex neuropsychological assessments, I am dedicated to bridging the gap between rigorous research and accessible psychosocial support.
            </p>
            <motion.div 
              whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
              className="mt-5 p-3.5 bg-[#121215] border border-zinc-800/80 rounded-lg text-[11px] text-zinc-400 font-normal transition-colors duration-200"
            >
              <p className="flex items-start gap-2.5">
                <Sparkles size={13} className="text-white shrink-0 mt-[2px] animate-pulse" />
                <span className="leading-relaxed">Formally trained & certified in standard MoCA and ACE-III metrics, blending diagnostics with trauma-informed vulnerability support.</span>
              </p>
            </motion.div>
          </motion.section>

          {/* DYNAMIC HOVER COMPETENCY GRAPH */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-5 border-b border-zinc-900 pb-3.5">
              <Sliders size={13} className="text-zinc-500" /> Core Matrices
            </h2>
            
            <div className="space-y-6">
              {Object.entries(coreCompetencies).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-medium text-zinc-500 mb-2.5 text-[9px] uppercase tracking-[0.15em] flex items-center gap-1.5">
                    {category === "clinicalResearch" ? <Activity size={10} className="text-zinc-500" /> : category === "socialWork" ? <HeartPulse size={10} className="text-zinc-500" /> : <UserCheck size={10} className="text-zinc-500" />}
                    {category === "clinicalResearch" ? "Clinical & Research" : category === "socialWork" ? "Social Systems & Care" : "Operational Architecture"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <motion.span 
                        key={idx} 
                        variants={skillBadgeVariants}
                        initial="rest"
                        whileHover="hover"
                        className="border px-2.5 py-1 rounded text-[11px] font-light cursor-default shadow-sm tracking-wide"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ACADEMICS PATHWAY */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-4 border-b border-zinc-900 pb-3.5">
              <GraduationCap size={14} className="text-zinc-500" /> Academic Matrix
            </h2>
            <div className="space-y-5">
              <motion.div 
                whileHover={{ x: 3 }}
                className="border-l-2 border-white pl-4 py-0.5 transition-colors duration-200 relative group"
              >
                <Bookmark size={10} className="absolute right-2 top-1 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                <h3 className="font-medium text-white text-xs tracking-wide">Women's Christian College</h3>
                <p className="text-[11px] text-zinc-400 mt-1 font-light">B.Sc. Psychology</p>
                <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-wider font-medium">Graduation Pool 2026</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 3 }}
                className="border-l-2 border-zinc-800 pl-4 py-0.5 transition-colors duration-200 relative group"
              >
                <Bookmark size={10} className="absolute right-2 top-1 text-zinc-800 group-hover:text-zinc-500 transition-colors" />
                <h3 className="font-medium text-zinc-400 text-xs tracking-wide">Union Christian School</h3>
                <p className="text-[11px] text-zinc-500 mt-1 font-light">12th Grade CBSE Matriculation</p>
                <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-wider font-medium">Academic Score: 88%</p>
              </motion.div>
            </div>
          </motion.section>

          {/* LANGUAGES BLOCK */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-4 border-b border-zinc-900 pb-3.5">
              <Globe size={14} className="text-zinc-500" /> Linguistic Profiling
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-zinc-300">English</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-zinc-300">Tamil</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-zinc-300">French</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-900">Basic / Int</span>
              </div>
            </div>
          </motion.section>

        </div>

        {/* CONTENT ROLES TIMELINE TRACK */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* EXPERIENCES BLOCK */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-6 border-b border-zinc-900 pb-4">
              <Briefcase size={15} className="text-zinc-500" /> Clinical Residency & Research Systems
            </h2>

            {/* TIMELINE ARCHITECTURE */}
            <div className="border-l border-zinc-800/80 ml-2 sm:ml-4 space-y-8 py-2">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8">
                  <span className="absolute -left-[5px] top-6 w-[9px] h-[9px] rounded-full bg-zinc-600 ring-[5px] ring-[#0c0c0e] z-10" />
                  
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    variants={interactiveCardVariants}
                    className="p-5 sm:p-6 rounded-xl border border-zinc-900 bg-[#0c0c0e]/80 transition-all backdrop-blur-sm relative group overflow-hidden"
                  >
                    <ClipboardList size={14} className="absolute right-4 top-5 text-zinc-800 group-hover:text-zinc-600 transition-colors pointer-events-none hidden sm:block" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                      <div>
                        <h3 className="font-medium text-white text-sm tracking-wide transition-colors duration-150">{exp.company}</h3>
                        <p className="text-zinc-400 text-xs mt-1 font-light tracking-wide">{exp.role}</p>
                      </div>
                      <span className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase bg-zinc-950 px-2.5 py-1 rounded border border-zinc-900/60 h-fit self-start whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="mt-5 space-y-2.5 text-xs text-zinc-400 list-none pl-0 leading-relaxed font-light">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <Check size={12} className="text-zinc-600 mt-[3px] shrink-0" />
                          <span className="group-hover:text-zinc-300 transition-colors duration-150">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* SECONDARY TIERS */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-5 border-b border-zinc-900 pb-3.5">
              <ShieldAlert size={14} className="text-zinc-500" /> Adjunct Field Engagements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {secondaryExperience.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(24, 24, 32, 0.4)" }}
                  className="p-5 bg-zinc-950 rounded-lg border border-zinc-900 flex flex-col justify-between transition-all duration-200 relative group"
                >
                  <div className="absolute right-4 top-4 text-zinc-800 group-hover:text-zinc-500 transition-colors">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-200 text-xs tracking-wide pr-6">{exp.company}</h3>
                    <p className="text-zinc-500 text-[10px] mt-1.5 tracking-wide font-medium uppercase">{exp.role}</p>
                    <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">{exp.bullets[0]}</p>
                  </div>
                  <span className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase mt-4 block border-t border-zinc-900 pt-3">{exp.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* PREMIUM GRID CERTIFICATIONS */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-4 border-b border-zinc-900 pb-3.5">
              <Award size={14} className="text-zinc-500" /> Validation & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                "Montreal Cognitive Assessment (MoCA) – Administration & Scoring",
                "Addenbrooke's Cognitive Examination III (ACE-III) – Scoring Training",
                "Psychological Rehabilitation & Interventions – SCARF Chennai",
                "Basics of Qualitative Research Methods – Letourneau University",
                "Introduction to Remedial Teaching Methods – Dyslexia Support",
                "The Science of Well-Being – Yale University / Coursera",
                "Emotional Intelligence Interpersonal Core – Coursera",
                "Forgiveness & Reconciliation Models – ACUCA & Assumption College"
              ].map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.01)" }}
                  className="flex items-start gap-3 p-3.5 bg-zinc-950 border border-zinc-900/80 rounded-lg transition-all duration-150"
                >
                  <Target size={12} className="text-zinc-700 mt-[2px] shrink-0" />
                  <span className="font-light text-zinc-400 text-[11px] leading-snug tracking-wide">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* AWARDS & VOLUNTEERING */}
          <motion.section variants={contentBlockVariants} className="bg-[#0c0c0e] p-6 rounded-xl border border-zinc-900 shadow-xl">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2.5 mb-4 border-b border-zinc-900 pb-3.5">
              <Trophy size={14} className="text-zinc-500" /> Awards, Workshops & Volunteering
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-zinc-400 list-none pl-0 font-light">
              {awards.map((award, aIdx) => (
                <li key={aIdx} className="flex items-start gap-3 group">
                  <Sparkles size={11} className="text-zinc-700 mt-[3px] shrink-0 group-hover:text-zinc-400 transition-colors" />
                  <span className="leading-relaxed group-hover:text-zinc-200 transition-colors">{award}</span>
                </li>
              ))}
            </ul>
          </motion.section>

        </div>

      </motion.main>
    </div>
  );
}