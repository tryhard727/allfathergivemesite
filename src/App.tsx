import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Github, Linkedin, Mail, MapPin, Terminal, CircuitBoard, Radio, Braces, Activity, ExternalLink } from 'lucide-react';
import { resumeData } from './constants';

const Section = ({ id, index, title, children }: { id: string; index: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="section-shell">
    <div className="section-heading"><span className="section-index">[{index}]</span><h2>{title}</h2><span className="section-rule" /></div>
    {children}
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => <span className="tag">{children}</span>;

export default function App() {
  return (
    <main className="site-frame">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark"><CircuitBoard size={19} /></span><span>LKD<span className="accent">_</span>SYS</span></a>
        <nav aria-label="Main navigation">
          {['about','skills','experience','projects','background','contact'].map((item, i) => <a key={item} href={'#'+item}><span className="nav-number">0{i+1}</span>{item}</a>)}
        </nav>
        <a className="top-cta" href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">Connect <ArrowUpRight size={14}/></a>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="system-state"><span className="status-dot" /> DIGITAL DESIGN / RTL VERIFICATION <span className="state-divider">•</span> INDIA</div>
          <p className="eyebrow">PORTFOLIO // ENGINEER PROFILE</p>
          <h1>LAKSHMAN<br/><span>KUMAR DARA</span></h1>
          <p className="hero-tagline">{resumeData.tagline}. <span>Electronics & Communication Engineer</span> focused on Digital Design & RTL Verification.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects"><Terminal size={15}/> Explore projects <ArrowUpRight size={15}/></a><a className="button-secondary" href="https://tryhard727.github.io/canvas/" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15}/></a></div>
          <div className="contact-strip">
            <a href={'mailto:'+resumeData.contact.email}><Mail size={14}/>{resumeData.contact.email}</a>
            <span><MapPin size={14}/>{resumeData.contact.location}</span>
          </div>
        </div>
        <motion.div className="hero-console" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
          <div className="console-top"><div className="window-dots"><i/><i/><i/></div><span>profile.init — bash</span><span className="console-live">LIVE</span></div>
          <div className="console-body">
            <p className="console-muted"># Initializing engineer profile...</p>
            <p><b className="syntax-orange">const</b> engineer = {'{'}</p>
            <p className="indent"><span className="syntax-key">name</span>: <span className="syntax-green">'{resumeData.name}'</span>,</p>
            <p className="indent"><span className="syntax-key">domain</span>: <span className="syntax-green">'Digital VLSI'</span>,</p>
            <p className="indent"><span className="syntax-key">focus</span>: [<span className="syntax-green">'RTL'</span>, <span className="syntax-green">'UVM'</span>, <span className="syntax-green">'SVA'</span>],</p>
            <p className="indent"><span className="syntax-key">status</span>: <span className="syntax-green">'Building & verifying'</span></p>
            <p>{'}'};</p>
            <div className="console-divider"/>
            <p className="console-muted">// Current toolchain</p>
            <div className="console-chips"><Tag>SystemVerilog</Tag><Tag>UVM</Tag><Tag>VCS</Tag><Tag>Questa</Tag></div>
            <p className="console-prompt"><span>lkd@portfolio</span>:~$ <b>cat mission.txt</b><span className="cursor">▋</span></p>
            <p className="console-output">Design with intent. Verify with rigor.</p>
          </div>
          <div className="console-foot"><span><Activity size={12}/> SYSTEM READY</span><span>RTL / SOC / VERIFICATION</span></div>
        </motion.div>
        <div className="hero-coordinate">FIG 01 <span>—</span> ENGINEERING PROFILE</div>
      </section>

      <Section id="about" index="01" title="Mission brief">
        <div className="summary-panel"><div className="panel-symbol"><Braces size={24}/></div><div><p className="panel-label">PROFILE.SUMMARY</p><p className="summary-text">{resumeData.summary}</p></div></div>
      </Section>

      <Section id="skills" index="02" title="Technical stack">
        <div className="skills-grid">{resumeData.skills.map((category, i) => <article className="skill-card" key={category.category}><div className="card-meta"><span>MODULE_0{i+1}</span><Cpu size={16}/></div><h3>{category.category}</h3><div className="tag-list">{category.items.map(item=><Tag key={item}>{item}</Tag>)}</div></article>)}</div>
      </Section>

      <Section id="experience" index="03" title="Education & training">
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="item-top"><span className="item-type">PROFESSIONAL QUALIFICATION</span><span className="item-date">{resumeData.professionalQualification.duration}</span></div><h3>{resumeData.professionalQualification.course}</h3><p className="item-place">{resumeData.professionalQualification.institution} <span> / </span> {resumeData.professionalQualification.location}</p></div></article>
          {resumeData.education.map((item,i)=><article className="timeline-item" key={item.school}><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="item-top"><span className="item-type">EDUCATION_0{i+1}</span><span className="item-date">{item.duration}</span></div><h3>{item.degree}</h3><p className="item-place">{item.school}</p><span className="grade">{item.grade}</span></div></article>)}
        </div>
      </Section>

      <Section id="projects" index="04" title="Selected projects">
        <div className="projects-grid">{resumeData.projects.map((project,i)=><article className="project-card" key={project.title}><div className="project-top"><span className="project-number">PRJ_0{i+1}</span><Radio size={17}/></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.highlights.map((highlight,j)=><li key={j}>{highlight}</li>)}</ul>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View source <ExternalLink size={14}/></a>}<span className="project-watermark">0{i+1}</span></article>)}</div>
      </Section>

      <Section id="background" index="05" title="Credentials & beyond">
        <div className="background-grid"><div className="background-column"><p className="subsection-label">CERTIFICATIONS</p>{resumeData.certifications.map(item=><div className="credential-row" key={item.name}><div><h3>{item.name}</h3><span>{item.date}</span></div><ArrowUpRight size={15}/></div>)}<p className="subsection-label achievement-label">RECOGNITION</p>{resumeData.achievements.map(item=><div className="achievement-row" key={item.title}><span className="achievement-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div><div className="background-column side-column"><p className="subsection-label">LANGUAGES</p>{resumeData.languages.map(item=><div className="language-row" key={item.name}><span>{item.name}</span><span>{item.level}</span></div>)}<p className="subsection-label interest-label">INTERESTS / SUBROUTINES</p>{resumeData.interests.map(group=><div className="interest-group" key={group.category}><span>{group.category}</span><div className="tag-list">{group.items.map(item=><Tag key={item}>{item}</Tag>)}</div></div>)}</div></div>
      </Section>

      <section id="contact" className="contact-section"><div className="contact-orbit" aria-hidden="true"/><p className="eyebrow">[ 06 / OPEN CHANNEL ]</p><h2>Let's build<br/><span>something precise.</span></h2><p className="contact-copy">For technical discussions, opportunities, or collaboration, reach out through the channels below.</p><div className="contact-actions"><a className="button-primary" href={'mailto:'+resumeData.contact.email}><Mail size={15}/> Send an email <ArrowUpRight size={15}/></a><a className="button-secondary" href={resumeData.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={15}/></a>{resumeData.contact.github && <a className="button-secondary" href={resumeData.contact.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={15}/></a>}</div><div className="contact-details"><span>{resumeData.contact.email}</span><span>{resumeData.contact.phone}</span><span>{resumeData.contact.discord ? 'Discord: '+resumeData.contact.discord : ''}</span></div></section>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><CircuitBoard size={16}/></span>LKD<span className="accent">_</span>SYS</a><span>© {new Date().getFullYear()} LAKSHMAN KUMAR DARA</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
