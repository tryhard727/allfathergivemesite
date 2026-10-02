import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Lakshman Kumar Dara",
  tagline: "Inquisitive and Persistent Learner",
  contact: {
    email: "klakshman616@gmail.com",
    phone: "7396360074",
    location: "Bengaluru, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/lakshman-kumar-2118b31b7/",
    github: "https://github.com/tryhard727",
    discord: "0x1z_"
  },
  summary: "ECE graduate focused on digital RTL design and functional verification. Experienced with Verilog, SystemVerilog, UVM, assertions, and bus protocols through hands-on design and verification projects. Interested in RTL implementation, verification methodology, and SoC-level design.",
  professionalQualification: {
    institution: "Maven Silicon Softech Pvt. Ltd.",
    course: "Advanced VLSI Design and Verification course",
    duration: "Aug 2025 - Present",
    location: "Bengaluru"
  },
  education: [
    {
      school: "Lendi Institute of Engineering and Technology",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "Sep 2021 - May 2025",
      grade: "7.6 CGPA"
    },
    {
      school: "Narayana Junior College",
      degree: "HSC (MPC)",
      duration: "Mar 2018 - Mar 2020",
      grade: "8.56 CGPA"
    },
    {
      school: "Saint Joseph English Medium School",
      degree: "SSC",
      duration: "Mar 2008 - Mar 2018",
      grade: "9.5 CGPA"
    }
  ],
  skills: [
    { category: "RTL & Verification", items: ["Verilog", "SystemVerilog", "UVM", "SVA", "Functional Coverage", "Regression Testing"] },
    { category: "Protocols", items: ["AXI3", "APB", "SPI"] },
    { category: "EDA & Simulation", items: ["VCS", "Questa Sim", "Vivado", "Xilinx ISE", "Verilator", "Icarus Verilog", "GTKWave", "Yosys", "Verible"] },
    { category: "Design Methods", items: ["Synthesizable RTL", "FSM Design", "RTL Simulation", "Linting", "Synthesis", "CRCDV"] },
    { category: "Programming", items: ["C", "Python", "Bash", "Make"] },
    { category: "Engineering Tools", items: ["GNU/Linux", "Git", "Docker", "MATLAB", "Arduino IDE", "Logisim"] }
  ],
  projects: [
    {
      title: "AXI VIP",
      description: "Built VIP compliant to the AXI Protocol and checked through Assertions.",
      link: "https://github.com/tryhard727/axi_uvm_vip",
      highlights: [
        "Verified Features such as Multiple Outstanding, Out of Order Completion/Interleaving, Burst Modes, Independent Channels",
        "Introduced Random Behaviour to Identify Corner Cases"
      ]
    },
    {
      title: "APB to SPI Bridge",
      description: "Design and Verification of a bridge that enables communication between devices using APB and SPI using UVM and Verilog.",
      link: "https://github.com/tryhard727/spi_uvm_ral",
      highlights: [
        "Implemented Backdoor access through RAL for access of Control Registers",
        "Implemented Virtual Sequence, Virtual Sequencer for scalability"
      ]
    },
    {
      title: "RAM SoC Design and Verification",
      description: "Designed and Verified RAM SoC using Verilog and UVM.",
      highlights: [
        "Performed Regression Testing",
        "Developed Better understanding to verify SoC systems"
      ]
    },
    {
      title: "Cognito - AI in Terminal",
      description: "AI assistant integrated into the terminal environment.",
      highlights: [
        "Implemented Multifile Insertion into context using cat, stdin and stdout assisted by jq and python text parsing",
        "Added Memory mode where history is saved as a JSON Object",
        "Extended functionality by adding Copilot like features using Code Mode"
      ]
    }
  ],
  certifications: [
    { name: "CCNA: Introduction to Networks", date: "Jun 2024" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", date: "Jun 2024" },
    { name: "EF SET: English Proficiency (C1)", date: "Oct 2024" }
  ],
  achievements: [
    {
      title: "Dynamic Pollution Monitoring and Management using Embedded and IoT Technologies",
      date: "Feb 2024",
      description: "Secured Best Early Warning, Monitoring & Management Systems"
    },
    {
      title: "Optical Inter Satellite Communication",
      date: "Apr 2023",
      description: "Secured 1st place for my presentation on an innovative cutting-edge and emerging technology."
    },
    {
      title: "Star of the Month",
      date: "Sept 2025",
      description: "Rewarded for my performance during my time at Maven Silicon"
    }
  ],
  languages: [
    { name: "English", level: "Advanced (C1)" },
    { name: "Hindi", level: "Advanced" },
    { name: "Telugu", level: "Native" }
  ],
  interests: [
    {
      category: "Productive",
      items: ["Infotainment", "Philosophy", "Reading", "Writing", "Tinkering", "Modding", "Leetcode"]
    },
    {
      category: "Semi Productive",
      items: ["Esports", "Human Benchmark", "Cognitive Exercise's", "Language Learning"]
    },
    {
      category: "Casual",
      items: ["Exercise", "Cycling", "Walks"]
    }
  ]
};
