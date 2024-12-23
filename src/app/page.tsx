"use client"

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaMousePointer } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

{/* Section Separator Component */}
const SectionSeparator = () => (
  <div className="w-full h-px bg-neutral-200 my-4" />
);

const MinimalistPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
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
      title: "Breathe App",
      role: "Full-Stack Developer",
      tech: "React • TypeScript • Flask • C++",
      description: "Air quality monitoring dashboard with real-time sensor data and AI analysis",
      color: "bg-emerald-50",
      accent: "bg-emerald-400"
    },
    {
      title: "Track My Form",
      role: "ML Engineer",
      tech: "React • TensorFlow • TypeScript",
      description: "AI-powered exercise form tracking and analysis using pose estimation",
      color: "bg-violet-50",
      accent: "bg-violet-400"
    },
    {
      title: "Solar Race Optimizer",
      role: "Strategy Developer",
      tech: "Python • React • Electron",
      description: "Race strategy optimization system for solar vehicle competitions",
      color: "bg-amber-50",
      accent: "bg-amber-400"
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
            {[
              { icon: <FaGithub size={20} />, href: "https://github.com/tamzeedq" },
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/tamzeedquazi/" },
              { icon: <HiOutlineMail size={20} />, href: "mailto:tamzeed.q@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="hover:text-indigo-600 transition-colors relative"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className=" pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50/50 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          }}
        />
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
                {/* Hi,👋<br></br>
                <span> I'm Tamzeed</span> */}
                Tamzeed Quazi 🚀
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

            {/* Profile Image */}
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 rounded-full bg-indigo-100 blur-2xl opacity-50" />
                <div className="absolute -inset-4 rounded-full bg-red-100 blur-2xl opacity-70 rotate-45" />
                
                {/* Image container */}
                <motion.div 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/images/tamzeed/profile_pic.jpg"
                    alt="Tamzeed Quazi"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        {/* <SectionSeparator /> */}
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-8 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-neutral-600 space-y-4"
            >
              <p>
                I'm a passionate software developer with a strong foundation in full-stack development 
                and a growing expertise in artificial intelligence. My journey in tech began with 
                creating simple web applications and has evolved into developing complex systems 
                that solve real-world problems.
              </p>
              <p>
                At UBC, I'm pursuing a combined major in Computer Science and Statistics, 
                where I've developed a deep appreciation for both the theoretical and practical 
                aspects of software development and data analysis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-neutral-600 space-y-4"
            >
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or working on UBC Solar's race strategy software. I believe 
                in creating technology that not only works well but also provides an excellent 
                user experience.
              </p>
              <p>
                I'm always open to new opportunities and collaborations that allow me to push 
                my boundaries and learn from others in the tech community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 px-6">
        {/* <SectionSeparator /> */}
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          {[
            { title: "Languages", content: "TypeScript • Python • Java • C++ • SQL • R" },
            { title: "Technologies", content: "React • Next.js • Node.js • Flask • PostgreSQL • TensorFlow • Scikit-Learn" },
            { title: "Tools", content: "AWS • Azure • Docker • Git" }
          ].map((skill, index) => (
            <motion.div 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium mb-4 text-indigo-600">{skill.title}</h2>
              <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
                {skill.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-indigo-50/50">
        {/* <SectionSeparator /> */}
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
                description: "Led development of full-stack alert systems and automation tools. Improved database performance by 30% and reduced manual workflows through automated solutions. Deployed applications serving 1000+ users."
              },
              {
                title: "Strategy Software Developer",
                company: "UBC Solar",
                period: "Sep 2023 – Present",
                description: "Developed race strategy optimization algorithms and real-time data analysis tools. Contributed to team's highest-ever 6th place finish at FSGP 2024 through innovative software solutions."
              }
            ].map((experience, index) => (
              <motion.div 
                key={index}
                className="grid md:grid-cols-2 gap-8 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div>
                  <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {experience.company} • {experience.period}
                  </p>
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
      <section id="projects" className="py-20 px-6">
        {/* <SectionSeparator /> */}
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-12 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Selected Projects
          </motion.h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`group grid md:grid-cols-2 gap-8 p-8 rounded-lg cursor-pointer relative overflow-hidden ${project.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
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
                  <p className="text-sm text-neutral-600 mb-2">{project.role}</p>
                  <p className="text-sm text-neutral-600">{project.tech}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">{project.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-indigo-50/50">
        <SectionSeparator />
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-sm font-medium mb-12 text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light">Have a project in mind?</h3>
              <p className="text-neutral-600">
                I'm always excited to discuss new opportunities, creative ideas, or potential collaborations.
                Feel free to reach out!
              </p>
              {/* <motion.button
                onClick={() => window.location.href = 'mailto:tamzeed.q@gmail.com'}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <FaArrowRight className="text-sm" />
              </motion.button> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: "Email", value: "tamzeed.q@gmail.com", icon: <HiOutlineMail size={20} /> },
                { label: "Location", value: "Vancouver, BC", icon: "🌎" },
                { label: "Availability", value: "Open to opportunities", icon: "✨" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 text-neutral-600"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-indigo-600">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-b from-indigo-50/50">
        {/* <SectionSeparator /> */}
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.p 
              className="text-sm text-neutral-600"
              whileHover={{ x: 10 }}
            >
              © 2024 Tamzeed Quazi
            </motion.p>
            <motion.div 
              className="text-sm text-neutral-600"
              whileHover={{ x: -10 }}
            >
              {/* Built with <span className="text-indigo-600">♥</span> in Vancouver */}
              Footer
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;