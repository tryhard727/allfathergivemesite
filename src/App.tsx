import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Code2, 
  Terminal, 
  Award, 
  Globe,
  Zap,
  Activity,
  Layers,
  Github
} from 'lucide-react';
import { resumeData } from './constants';
import { useState, useEffect, useRef } from 'react';

const WaveformBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${50 + i * 100} L 100 ${50 + i * 100} L 100 ${10 + i * 100} L 200 ${10 + i * 100} L 200 ${90 + i * 100} L 300 ${90 + i * 100} L 300 ${50 + i * 100} L 400 ${50 + i * 100} L 400 ${10 + i * 100} L 500 ${10 + i * 100} L 500 ${50 + i * 100} L 600 ${50 + i * 100} L 600 ${90 + i * 100} L 700 ${90 + i * 100} L 700 ${50 + i * 100} L 800 ${50 + i * 100} L 800 ${10 + i * 100} L 900 ${10 + i * 100} L 900 ${90 + i * 100} L 1000 ${90 + i * 100} L 1000 ${50 + i * 100} L 1100 ${50 + i * 100} L 1100 ${10 + i * 100} L 1200 ${10 + i * 100} L 1200 ${50 + i * 100} L 1300 ${50 + i * 100} L 1300 ${90 + i * 100} L 1400 ${90 + i * 100} L 1400 ${50 + i * 100} L 1500 ${50 + i * 100} L 1500 ${10 + i * 100} L 1600 ${10 + i * 100} L 1600 ${50 + i * 100} L 1700 ${50 + i * 100} L 1700 ${90 + i * 100} L 1800 ${90 + i * 100} L 1800 ${50 + i * 100} L 1900 ${50 + i * 100} L 1900 ${10 + i * 100} L 2000 ${10 + i * 100}`}
            fill="none"
            stroke={i % 3 === 0 ? "#39FF14" : i % 3 === 1 ? "#00F3FF" : "#FF3333"}
            strokeWidth="3"
            strokeLinecap="square"
            initial={{ pathLength: 0, x: -100 }}
            animate={{ pathLength: 1, x: [0, -100] }}
            transition={{
              pathLength: { duration: 5, ease: "linear" },
              x: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          />
        ))}
      </svg>
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-eda-signal-high/5 rounded-full blur-[120px]" 
      />
    </div>
  );
};

const SectionHeader = ({ title, subtitle, color = "green" }: { title: string; subtitle?: string, color?: "green" | "pink" | "yellow" | "cyan" }) => {
  const colorClass = color === "green" ? "text-neon-green neon-glow-green" : color === "pink" ? "text-neon-pink neon-glow-pink" : color === "yellow" ? "text-neon-yellow neon-glow-yellow" : "text-neon-cyan neon-glow-cyan";
  const bgClass = color === "green" ? "bg-neon-green" : color === "pink" ? "bg-neon-pink" : color === "yellow" ? "bg-neon-yellow" : "bg-neon-cyan";
  
  return (
    <div className="mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center space-x-4 mb-4"
      >
        <div className={`h-[1px] w-12 ${bgClass} opacity-50`} />
        {subtitle && (
          <p className={`font-mono text-xs uppercase tracking-[0.3em] ${colorClass}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white"
      >
        {title}<span className={colorClass}>.</span>
      </motion.h2>
    </div>
  );
};

const SkillItem = ({ skill, color = "green" }: { skill: string, color?: "green" | "pink" | "yellow" | "cyan", key?: string | number }) => {
  const dotColor = color === "green" ? "bg-neon-green" : color === "pink" ? "bg-neon-pink" : color === "yellow" ? "bg-neon-yellow" : "bg-neon-cyan";
  const glowColor = color === "green" ? "shadow-neon-green/20" : color === "pink" ? "shadow-neon-pink/20" : color === "yellow" ? "shadow-neon-yellow/20" : "shadow-neon-cyan/20";
  const textColor = color === "green" ? "group-hover:text-neon-green" : color === "pink" ? "group-hover:text-neon-pink" : color === "yellow" ? "group-hover:text-neon-yellow" : "group-hover:text-neon-cyan";

  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="flex items-center justify-between py-2 border-b border-slate-800/30 group cursor-default"
    >
      <div className="flex items-center space-x-3">
        <div className={`w-1 h-1 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${glowColor} group-hover:scale-150 transition-transform flex-shrink-0 relative`} style={{ backgroundColor: color === "green" ? "#39FF14" : color === "pink" ? "#FF007F" : color === "yellow" ? "#CCFF00" : "#00F3FF" }}>
          {/* Create a small square pad like a PCB pad instead of a rounded dot */}
        </div>
        <span className={`text-slate-400 ${textColor} transition-colors font-mono text-sm tracking-tight`}>{skill}</span>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[8px] text-slate-600 uppercase tracking-tighter">
        <span className="text-neon-cyan">WIRE</span> {skill.replace(/[^A-Za-z0-9]/g, '_').toUpperCase()}_w;
      </div>
    </motion.div>
  );
};

const VerilogTerminal = () => {
  const codeLines = [
    '<span class="text-neon-pink">module</span> <span class="text-neon-green">top_tb</span>;',
    '  <span class="text-neon-pink">import</span> uvm_pkg::*;',
    '  <span class="text-neon-pink">`include</span> <span class="text-neon-yellow">"uvm_macros.svh"</span>',
    '  ',
    '  <span class="text-neon-cyan">logic</span> clk;',
    '  <span class="text-neon-cyan">logic</span> rst_n;',
    '  <span class="text-neon-cyan">logic</span> [31:0] data_bus;',
    '  ',
    '  <span class="text-neon-pink">initial begin</span>',
    '    clk = 0;',
    '    <span class="text-neon-pink">forever</span> #5 clk = ~clk;',
    '  <span class="text-neon-pink">end</span>',
    '  ',
    '  <span class="text-[10px] text-slate-500">// Simulating RTL Verification Environment...</span>',
    '  <span class="text-neon-green">initial</span> <span class="text-neon-pink">begin</span>',
    '    $display(<span class="text-neon-yellow">"UVM_INFO: Starting tests..."</span>);',
    '    run_test(<span class="text-neon-yellow">"base_test"</span>);',
    '  <span class="text-neon-pink">end</span>',
    '<span class="text-neon-pink">endmodule</span>'
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0d1117] border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden font-mono text-[10px] sm:text-xs">
      <div className="bg-[#161b22] px-4 py-2 border-b border-slate-700/50 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-slate-400 ml-4">vcs -sverilog top_tb.sv</span>
      </div>
      <div className="p-6 text-slate-300 leading-relaxed overflow-x-auto">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >
          {codeLines.map((line, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 + 0.5, duration: 0.3 }}
              dangerouslySetInnerHTML={{ __html: line }}
              className="whitespace-pre"
            />
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-slate-400 mt-2 inline-block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 font-sans selection:bg-neon-green/20 selection:text-neon-green">
      <div className="scanline" />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-md py-4 border-b border-slate-800/50' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-neon-green rounded flex items-center justify-center text-dark-bg">
              <Zap size={18} fill="currentColor" />
            </div>
            <span>LKD<span className="text-neon-green">.</span></span>
          </motion.div>
          <div className="hidden md:flex space-x-10 text-xs font-mono uppercase tracking-widest text-slate-500">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-neon-green transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon-green transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <motion.a
            href="https://tryhard727.github.io/canvas/"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-green text-dark-bg px-6 py-2 rounded font-bold text-xs uppercase tracking-widest transition-all inline-block text-center"
          >
            Resume
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <WaveformBackground />
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-3 mb-8">
                  <div className="h-[1px] w-8 bg-neon-green" />
                  <span className="text-neon-green font-mono text-xs uppercase tracking-[0.4em] neon-glow-green">System Initialized</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                  LAKSHMAN<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink">KUMAR DARA</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light">
                  {resumeData.tagline}. <span className="text-white font-medium">Electronics & Communication Engineer</span> pushing the boundaries of Digital Design & RTL Verification.
                </p>
                
                <div className="flex flex-wrap gap-8 mb-12 font-mono text-xs uppercase tracking-widest">
                  <a href={`mailto:${resumeData.contact.email}`} className="flex items-center space-x-2 text-slate-500 hover:text-neon-green transition-colors">
                    <Mail size={14} className="text-neon-green" />
                    <span>{resumeData.contact.email}</span>
                  </a>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <MapPin size={14} className="text-neon-pink" />
                    <span>{resumeData.contact.location}</span>
                  </div>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-500 hover:text-neon-cyan transition-colors">
                    <Linkedin size={14} className="text-neon-cyan" />
                    <span>LinkedIn</span>
                  </a>
                  {resumeData.contact.github && (
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-500 hover:text-neon-green transition-colors">
                      <Github size={14} className="text-neon-green" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {resumeData.contact.discord && (
                    <div className="flex items-center space-x-2 text-slate-500">
                      <Terminal size={14} className="text-neon-yellow" />
                      <span>Discord: {resumeData.contact.discord}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="#projects" className="group relative px-8 py-4 bg-neon-green text-dark-bg font-bold uppercase text-xs tracking-[0.2em] overflow-hidden">
                    <span className="relative z-10">Execute Projects</span>
                    <motion.div 
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-slate-700 text-white font-bold uppercase text-xs tracking-[0.2em] hover:border-neon-pink hover:text-neon-pink transition-all">
                    Establish Link
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative z-10 w-full flex items-center justify-center">
                  <VerilogTerminal />
                </div>
                
                {/* Floating Stats */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 glass-panel p-4 rounded border-eda-signal-high/30 z-20 hidden xl:block"
                >
                  <Activity size={16} className="text-eda-signal-high mb-2" />
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Coverage</div>
                  <div className="text-lg font-bold text-white">100%</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 glass-panel p-4 rounded border-eda-signal-z/30 z-20 hidden xl:block"
                >
                  <Layers size={16} className="text-eda-signal-z mb-2" />
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Logic Cells</div>
                  <div className="text-lg font-bold text-white">1.2M</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section-padding relative">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Mission Brief" subtitle="Executive Summary" color="pink" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-pink to-transparent" />
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light italic">
              "{resumeData.summary}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Redesigned for better readability */}
      <section id="skills" className="section-padding bg-slate-900/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Tech Stack" subtitle="Core Capabilities" color="yellow" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {resumeData.skills.map((category, idx) => {
              const colors: ("green" | "pink" | "yellow" | "cyan")[] = ["green", "cyan", "yellow", "pink", "green", "cyan", "yellow", "pink"];
              const color = colors[idx % colors.length];
              const accentColor = color === "green" ? "text-neon-green" : color === "pink" ? "text-neon-pink" : color === "yellow" ? "text-neon-yellow" : "text-neon-cyan";
              const dotColor = color === "green" ? "bg-neon-green" : color === "pink" ? "bg-neon-pink" : color === "yellow" ? "bg-neon-yellow" : "bg-neon-cyan";

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <h3 className={`text-xs font-mono uppercase tracking-[0.3em] ${accentColor} mb-8 flex items-center space-x-3`}>
                    <span className={`w-2 h-2 ${dotColor} rounded-full animate-pulse`} />
                    <span>{category.category}</span>
                  </h3>
                  <div className="space-y-1">
                    {category.items.map((skill) => (
                      <SkillItem key={skill} skill={skill} color={color} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Education */}
            <div>
              <SectionHeader title="Education" subtitle="Academic Node" color="green" />
              <div className="space-y-16">
                {resumeData.education.map((edu, idx) => (
                  <motion.div 
                    key={edu.school}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-slate-800 group-hover:bg-neon-green transition-colors" />
                    <div className="absolute -left-[27px] top-2 w-2 h-2 rounded-full bg-dark-bg border border-slate-700 group-hover:border-neon-green transition-colors" />
                    
                    <div className="text-neon-green font-mono text-[10px] uppercase tracking-widest mb-3">{edu.duration}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{edu.school}</h3>
                    <div className="text-slate-500 mb-4 font-medium">{edu.degree}</div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] font-mono text-neon-green uppercase tracking-widest">
                      <span>Grade:</span>
                      <span className="font-bold">{edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Qualification */}
            <div>
              <SectionHeader title="Training" subtitle="Specialization" color="pink" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-none border-l-4 border-l-neon-pink relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Cpu size={80} className="text-neon-pink" />
                </div>
                
                <div className="relative z-10">
                  <div className="text-neon-pink font-mono text-[10px] uppercase tracking-widest mb-4">
                    {resumeData.professionalQualification.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{resumeData.professionalQualification.institution}</h3>
                  <p className="text-lg text-slate-400 mb-8">{resumeData.professionalQualification.course}</p>
                  
                  <div className="flex items-center space-x-4 text-slate-500 text-xs font-mono uppercase tracking-widest">
                    <MapPin size={14} className="text-neon-pink" />
                    <span>{resumeData.professionalQualification.location}</span>
                  </div>
                </div>
              </motion.div>

              <div className="mt-20">
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-10 flex items-center space-x-3">
                  <Award size={16} />
                  <span>Certifications</span>
                </h3>
                <div className="grid gap-4">
                  {resumeData.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between p-5 bg-slate-900/50 border border-slate-800/50 hover:border-neon-pink/30 transition-colors group">
                      <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{cert.name}</span>
                      <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Futuristic Cards */}
      <section id="projects" className="section-padding bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Projects" subtitle="Logic Implementations" color="cyan" />
          
          <div className="grid md:grid-cols-2 gap-10">
            {resumeData.projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-slate-900/40 border border-slate-800 glow-border-cyan transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-neon-cyan group-hover:h-full transition-all duration-500" />
                
                <div className="h-48 w-full overflow-hidden relative bg-slate-900/60 flex items-center justify-center group-hover:bg-slate-900/40 transition-colors duration-500">
                  <div className="absolute inset-0 z-20 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #00F3FF 1px, transparent 1px), linear-gradient(to bottom, #00F3FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  </div>

                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1.1, rotate: 5 }}
                    className="relative z-10 text-slate-700 group-hover:text-neon-cyan transition-all duration-500"
                  >
                    <Github size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]" />
                  </motion.div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/90 to-transparent z-30" />
                </div>

                <div className="p-10 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-800 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-dark-bg group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-500 ${!project.link && 'pointer-events-none'}`}
                    >
                      <Terminal size={24} />
                    </a>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="text-slate-700 group-hover:text-neon-cyan transition-colors" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors neon-glow-cyan opacity-90 group-hover:opacity-100">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light">{project.description}</p>
                  
                  <div className="space-y-4">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-3 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        <ChevronRight size={14} className="mt-1 text-neon-cyan shrink-0" />
                        <span className="font-mono leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-[40px] font-bold font-mono uppercase tracking-tighter">0{idx + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <SectionHeader title="Awards" subtitle="Recognition" color="yellow" />
              <div className="space-y-12">
                {resumeData.achievements.map((achievement) => (
                  <div key={achievement.title} className="flex space-x-8 group">
                    <div className="shrink-0 w-14 h-14 bg-slate-900 border border-slate-800 flex items-center justify-center text-neon-yellow group-hover:border-neon-yellow transition-colors">
                      <Award size={28} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-yellow transition-colors">{achievement.title}</h3>
                        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{achievement.date}</span>
                      </div>
                      <p className="text-slate-400 font-light leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Global" subtitle="Communication" color="pink" />
              <div className="space-y-6 mb-20">
                {resumeData.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-5 bg-slate-900/30 border border-slate-800/50">
                    <div className="flex items-center space-x-4">
                      <Globe size={18} className="text-neon-pink" />
                      <span className="font-bold text-white">{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{lang.level}</span>
                  </div>
                ))}
              </div>

              <SectionHeader title="Interests" subtitle="Sub-Routines" color="cyan" />
              <div className="flex flex-wrap gap-3">
                {resumeData.interests.flatMap(i => i.items).map((interest) => (
                  <span key={interest} className="px-4 py-2 bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-500 uppercase tracking-widest hover:border-neon-cyan hover:text-neon-cyan transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-900/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-8">
              <div className="px-4 py-2 border border-neon-green/30 rounded-full flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-ping" />
                <span className="text-[10px] font-mono text-neon-green uppercase tracking-[0.3em]">Connection Request</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-none">
              READY TO <span className="text-neon-green italic">COLLABORATE</span>?
            </h2>
            
            <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              System is online and accepting new mission parameters. 
              Reach out to establish a secure communication channel.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={`mailto:${resumeData.contact.email}`}
                className="w-full sm:w-auto px-10 py-5 bg-neon-green text-dark-bg font-bold uppercase text-sm tracking-[0.2em] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all"
              >
                Transmit Email
              </a>
              <a 
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 border border-slate-700 text-white font-bold uppercase text-sm tracking-[0.2em] hover:border-neon-cyan hover:text-neon-cyan transition-all"
              >
                LinkedIn Node
              </a>
              {resumeData.contact.github && (
                <a 
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 border border-slate-700 text-white font-bold uppercase text-sm tracking-[0.2em] hover:border-neon-green hover:text-neon-green transition-all"
                >
                  GitHub Source
                </a>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <footer className="mt-40 pt-12 border-t border-slate-800/50 text-center">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-600 font-mono text-[10px] uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} LKD_OS_v1.0. All rights reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-neon-green transition-colors">Protocol</a>
              <a href="#" className="hover:text-neon-green transition-colors">Security</a>
              <a href="#" className="hover:text-neon-green transition-colors">Logs</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

