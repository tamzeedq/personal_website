"use client"

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const MinimalistPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');
  const [isAlternateImage, setIsAlternateImage] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const handleImageClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsAlternateImage(!isAlternateImage);
      setTimeout(() => {
        setIsExploding(false);
      }, 1000); // Increased duration to match longer particle animations
    }, 300);
  };

  const handleProjectClick = (github : string) => {
    if (github) {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      title: "Breathe App 🌱",
      category: "Full-Stack AI/ML",
      tech: "React • TypeScript • Flask • C++",
      description: "Air quality monitoring dashboard with real-time sensor data and AI analysis",
      github: "https://github.com/ryanarnouk/nwhacks-2024",
      color: "bg-emerald-50",
      accent: "bg-emerald-400"
    },
    {
      title: "Pace Pal 🏃",
      category: "IoT & Data Analysis",
      tech: "C++ • Python • Firebase",
      description: "IoT pace tracking system with real-time data storage and visualization tools",
      github: "https://github.com/tamzeedq/PacePal",
      color: "bg-blue-50",
      accent: "bg-blue-400"
    },
    {
      title: "Hoppon Bot 🤖",
      category: "Backend & Cloud",
      tech: "Python • Docker • AWS EC2",
      description: "Scalable Discord bot supporting 30+ concurrent users for music streaming via Spotify and YouTube APIs",
      github: "https://github.com/tamzeedq/DiscordBot",
      color: "bg-purple-50",
      accent: "bg-purple-400"
    },
    {
      title: "Track My Form 🏋️",
      category: "AI/ML",
      tech: "React • TensorFlow • TypeScript",
      description: "AI-driven exercise form tracking and analysis using pose estimation",
      github: "https://github.com/tamzeedq/TrackMyForm",
      color: "bg-violet-50",
      accent: "bg-violet-400"
    },
    {
      title: "GestureCV 👋",
      category: "AI/ML",
      tech: "Python • OpenCV • MediaPipe",
      description: "Real-time gesture recognition system using computer vision for hand tracking and ML-powered system interaction",
      github: "https://github.com/tamzeedq/GestureCV",
      color: "bg-teal-50",
      accent: "bg-teal-400"
    },
    {
      title: "Solar Race Simulation GUI ☀️",
      category: "Full-Stack",
      tech: "Python • React • Electron",
      description: "Race simulation GUI for solar vehicle competitions",
      github: "https://github.com/UBC-Solar/Simulation-Client",
      color: "bg-orange-50",
      accent: "bg-orange-400"
    },
    {
      title: "Solar Race Optimizer ☀️",
      category: "AI/ML & Data Analysis",
      tech: "Python • PyGad • NumPy",
      description: "Race strategy optimization system using a genetic algorithm for solar vehicle competitions",
      github: "https://github.com/UBC-Solar/Simulation",
      color: "bg-amber-50",
      accent: "bg-amber-400"
    }
  ];

  const socials = [
    { 
      icon: <FaGithub size={20} />, 
      href: "https://github.com/tamzeedq",
      tooltip: "GitHub"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      href: "https://www.linkedin.com/in/tamzeedquazi/",
      tooltip: "LinkedIn"
    },
    { 
      icon: <HiOutlineMail size={20} />, 
      href: "mailto:tamzeed.q@gmail.com",
      tooltip: "Email"
    },
    { 
      icon: <FaFilePdf size={20} />, 
      href: "/docs/Tamzeed_Quazi_Resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      tooltip: "Resume"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900" onMouseMove={handleMouseMove}>
      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50 hidden md:block">
        {['hero', 'skills', 'experience', 'projects'].map((section) => (
          <motion.div
            key={section}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 
              ${activeSection === section ? 'bg-indigo-600' : 'bg-neutral-200'}`}
            whileHover={{ scale: 1.5 }}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/80 backdrop-blur-sm z-40 border-b border-neutral-100"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            className="font-medium text-indigo-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            TQ
          </motion.span>
          <div className="flex gap-6">
            {socials.map((social, index) => (
              <motion.div
                key={index}
                className="relative group w-5"
              >
                <motion.a
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="hover:text-indigo-600 transition-colors flex justify-center tooltip tooltip-bottom" 
                  data-tip={social.tooltip}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
                
              
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 border-b border-neutral-100">
        <div className="absolute inset-0 opacity-30" />
        <div className="container mx-auto max-w-5xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-light mb-8"
              >
                Tamzeed Quazi
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-neutral-600 mb-8"
              >
                A Software Developer focused on crafting intuitive digital 
                experiences and scalable solutions with an interest in AI. 
                Currently pursuing Computer Science and Statistics at UBC.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm space-y-2 text-neutral-600"
              >
                {[
                  { text: "Vancouver, Canada", color: "bg-emerald-400" },
                  { text: "Currently @ UBC Solar", color: "bg-amber-400" },
                  { text: "Previously @ Tetra Tech", color: "bg-sky-400" }
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <motion.span
                      className={`w-2 h-2 rounded-full ${item.color}`}
                      whileHover={{ scale: 1.5 }}
                    />
                    {item.text}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            {/* Profile Image Section */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Enhanced background glow */}
                <motion.div 
                  className="absolute -inset-8 rounded-full bg-indigo-200 blur-lg opacity-90 rotate-45 z-0"
                  animate={isExploding ? { 
                    scale: [1, 1.5, 1],
                    opacity: [0.9, 0.7, 0.9],
                    rotate: [45, 90, 45]
                  } : {}}
                  transition={{ duration: 0.8 }}
                />

                {/* Multiple layers of explosion particles */}
                {isExploding && (
                  <div className="absolute inset-0">
                    {/* Shooting stars effect */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={`star-${i}`}
                        className="absolute w-1 h-6 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          background: `linear-gradient(to bottom, #818CF8, transparent)`,
                          transformOrigin: 'center',
                        }}
                        initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: (i / 12) * 360 }}
                        animate={{
                          x: Math.cos((i / 12) * Math.PI * 2) * 200,
                          y: Math.sin((i / 12) * Math.PI * 2) * 200,
                          scale: 2,
                          opacity: 0,
                          rotate: ((i / 12) * 360) + 45,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Sparkle overlay */}
                {isExploding && (
                  <motion.div 
                    className="absolute inset-0 z-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={`sparkle-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 0.4,
                          delay: Math.random() * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Image container */}
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer z-20"
                  whileHover={{ scale: 1.05 }}
                  onClick={handleImageClick}
                  animate={isExploding ? { 
                    scale: [1, 0.9, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  } : {}}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.img
                    src={isAlternateImage ? "/images/tamzeed/pixelated_pfp.png" : "/images/tamzeed/profile_pic.jpg"}
                    alt="Tamzeed Quazi"
                    className="w-full h-full object-cover"
                    initial={false}
                    animate={{ 
                      scale: isExploding ? [1, 1.1, 1] : 1,
                      opacity: [0, 1]
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: isExploding ? 0 : 0.2 
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 px-6 border-b border-neutral-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Languages", 
                skills: [
                  { name: "TypeScript", bg: "bg-blue-50" },
                  { name: "Python", bg: "bg-yellow-50" },
                  { name: "Java", bg: "bg-orange-50" },
                  { name: "C++", bg: "bg-blue-50" },
                  { name: "SQL", bg: "bg-orange-50" },
                  { name: "R", bg: "bg-indigo-50" }
                ]
              },
              { 
                title: "Technologies", 
                skills: [
                  { name: "React", bg: "bg-cyan-50" },
                  { name: "Next.js", bg: "bg-gray-50" },
                  { name: "Node.js", bg: "bg-green-50" },
                  { name: "Flask", bg: "bg-gray-50" },
                  { name: "PostgreSQL", bg: "bg-blue-50" },
                  { name: "TensorFlow", bg: "bg-orange-50" },
                  { name: "Scikit-Learn", bg: "bg-yellow-50" }
                ]
              },
              { 
                title: "Tools", 
                skills: [
                  { name: "AWS", bg: "bg-orange-50" },
                  { name: "Azure", bg: "bg-blue-50" },
                  { name: "Docker", bg: "bg-blue-50" },
                  { name: "Git", bg: "bg-red-50" }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-sm font-medium mb-4 text-indigo-600">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg ${skill.bg} backdrop-blur-sm`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -4,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span 
                        className="text-sm font-medium text-neutral-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-b border-neutral-100">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-12 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Software Developer Co-op",
                company: "Tetra Tech",
                period: "Jan 2023 – Aug 2023",
                description: "Led development of full-stack hazard alert systems, that utilize computer vision, and automation tools. Created and deployed a GIS asset managment web application serving 1000+ users.",
                icon: "/images/companies/tt-icon.jpg" 
              },
              {
                title: "Strategy Software Developer",
                company: "UBC Solar",
                period: "Sep 2023 – Present",
                description: "Developed race strategy optimization algorithms and real-time data analysis tools. Contributed to team's highest-ever finish at the Formula Sun Grand Prix 2024 through innovative software solutions.",
                icon: "/images/companies/ubc-solar-icon.png" 
              }
            ].map((experience, index) => (
              <motion.div 
                key={index}
                className="grid md:grid-cols-2 gap-8 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-neutral-200">
                    <img
                      src={experience.icon}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {experience.company} • {experience.period}
                    </p>
                  </div>
                </div>
                <div className="text-neutral-600">
                  {experience.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-b border-neutral-100">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-12 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`group grid md:grid-cols-2 gap-8 p-8 rounded-lg cursor-pointer relative overflow-hidden ${project.color} ${project.github ? 'hover:shadow-lg' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleProjectClick(project.github)}
                title={project.github ? 'View project on GitHub' : ''}
              >
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${project.accent}`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">{project.category}</p>
                  <p className="text-sm text-neutral-600">{project.tech}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">{project.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${project.github ? 'text-indigo-600' : 'text-neutral-400'}`}
                  >
                    {project.github ? <FaArrowRight /> : null}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-b border-neutral-100">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-12 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light">Want to get in touch?</h3>
              <p className="text-neutral-600">
                I&apos;m always excited to discuss new opportunities, creative ideas, or potential collaborations.
                Feel free to reach out!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: "Email", value: "tamzeed.q@gmail.com", icon: <HiOutlineMail size={20} />, ref: "mailto:tamzeed.q@gmail.com"},
                { label: "LinkedIn", value: "tamzeedquazi", icon: <FaLinkedin size={20} color='#0077B5'/>, ref: "https://www.linkedin.com/in/tamzeedquazi/"},
                { label: "Resume", value: "Check out my resume", icon: <FaFilePdf size={20} />, ref: "/docs/Tamzeed_Quazi_Resume.pdf"},
                { label: "Availability", value: "Open to opportunities", icon: "✨", ref: "" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-4 text-neutral-600 ${item.ref ? 'cursor-pointer hover:bg-neutral-50 rounded-lg p-2 transition-colors' : ''}`}
                  whileHover={{ x: 10 }}
                  onClick={() => item.ref && window.open(item.ref, '_blank')}
                >
                  <span className="text-indigo-600">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className={item.ref ? 'hover:text-indigo-600 transition-colors' : ''}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}  
      <footer className="py-12 px-6 bg-gradient-to-b from-indigo-50/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.p 
              className="text-sm text-neutral-600"
              whileHover={{ x: 10 }}
            >
              © 2024 Tamzeed Quazi
            </motion.p>
            <motion.div 
              className="text-sm text-right text-neutral-600"
              whileHover={{ x: -10 }}
            >
              Vancouver, BC
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;