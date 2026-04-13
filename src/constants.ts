import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Lakshman Kumar Dara",
  tagline: "Inquisitive and Persistent Learner",
  contact: {
    email: "klakshman616@gmail.com",
    phone: "7396360074",
    location: "Vizianagaram, Andhra Pradesh | Bangalore, Karnataka",
    linkedin: "https://www.linkedin.com/in/lakshman-kumar-2118b31b7/",
    github: "https://github.com/tryhard727",
    discord: "0x1z_"
  },
  summary: "ECE graduate focused on Digital Design and Verification of RTL. Developed strong technical proficiency in HDLs and HVLs. Driven by a commitment to innovation in chip architecture and verification methodologies. Aiming to leverage skills for advanced challenges within VLSI and SoC design and verification environments.",
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
    {
      category: "HDL & HVL/Framework",
      items: ["Verilog", "SystemVerilog", "SVA", "UVM"]
    },
    {
      category: "Protocols",
      items: ["AXI", "APB", "SPI"]
    },
    {
      category: "EDA Tools",
      items: ["VCS", "Questa Sim", "Xilinx ISE", "Vivado", "Synopsys Design Compiler", "VC Spyglass Lint", "Fuse", "Icarus Verilog", "Verilator", "GTK Wave", "Verible", "Dsim(Altair)", "Slang Server", "svlangserver", "svls", "Yosys"]
    },
    {
      category: "Programming Languages",
      items: ["C Programming [DSA]", "Python"]
    },
    {
      category: "Tools",
      items: ["MATLAB", "Octave", "SciLab", "Arduino IDE", "Desmos", "Logisim"]
    },
    {
      category: "Core Skills",
      items: ["RTL Coding", "FSM-based design", "Simulation", "Code Coverage", "CRCDV", "Regression Testing", "Functional Coverage", "Synthesis", "Linting", "Embedded Systems", "IoT"]
    },
    {
      category: "Non Core Skills",
      items: ["API", "Cloud", "Building from source", "ADB", "Github Codespaces", "Virtual Machines", "Docker", "Prompting"]
    },
    {
      category: "Non Technical Skills",
      items: ["Critical Thinking", "Problem Solving", "Planning", "First Principles Thinking", "Reasoning"]
    }
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
