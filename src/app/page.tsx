"use client"

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const MinimalistPortfolio = () => {
  const projects = [
    {
      title: "Breathe App",
      role: "Full-Stack Developer",
      tech: "React • TypeScript • Flask • C++",
      description: "Air quality monitoring dashboard with real-time sensor data and AI analysis",
      color: "bg-emerald-50"
    },
    {
      title: "Track My Form",
      role: "ML Engineer",
      tech: "React • TensorFlow • TypeScript",
      description: "AI-powered exercise form tracking and analysis using pose estimation",
      color: "bg-violet-50"
    },
    {
      title: "Solar Race Optimizer",
      role: "Strategy Developer",
      tech: "Python • React • Electron",
      description: "Race strategy optimization system for solar vehicle competitions",
      color: "bg-amber-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-medium text-indigo-600">TQ</span>
          <div className="flex gap-6">
            <a href="https://github.com/tamzeedq" className="hover:text-indigo-600 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tamzeedquazi/" className="hover:text-indigo-600 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/tamzeed.q/" className="hover:text-indigo-600 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:tamzeed.q@gmail.com" className="hover:text-indigo-600 transition-colors">
              <HiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50/50">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-7xl font-light mb-8">
            Tamzeed <span className="text-indigo-600">Quazi</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-lg text-neutral-600">
              Software Developer focused on crafting intuitive digital experiences 
              and scalable solutions. Currently pursuing Computer Science and 
              Statistics at UBC.
            </p>
            <div className="text-sm space-y-2 text-neutral-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Vancouver, Canada
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                Currently @ UBC Solar
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Previously @ Tetra Tech
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          <div className="group">
            <h2 className="text-sm font-medium mb-4 text-indigo-600">Languages</h2>
            <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
              TypeScript • Python • Java • C++ • SQL
            </p>
          </div>
          <div className="group">
            <h2 className="text-sm font-medium mb-4 text-indigo-600">Technologies</h2>
            <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
              React • Next.js • Node.js • Flask • PostgreSQL
            </p>
          </div>
          <div className="group">
            <h2 className="text-sm font-medium mb-4 text-indigo-600">Tools</h2>
            <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
              AWS • Azure • Docker • Git • TensorFlow
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm font-medium mb-12 text-indigo-600">Experience</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 group">
              <div>
                <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                  Software Developer Co-op
                </h3>
                <p className="text-sm text-neutral-600 mb-4">Tetra Tech • Jan 2023 – Aug 2023</p>
              </div>
              <div className="text-neutral-600">
                Led development of full-stack alert systems and automation tools. 
                Improved database performance by 30% and reduced manual workflows 
                through automated solutions. Deployed applications serving 1000+ users.
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 group">
              <div>
                <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                  Strategy Software Developer
                </h3>
                <p className="text-sm text-neutral-600 mb-4">UBC Solar • Sep 2023 – Present</p>
              </div>
              <div className="text-neutral-600">
                Developed race strategy optimization algorithms and real-time 
                data analysis tools. Contributed to team's highest-ever 6th place 
                finish at FSGP 2024 through innovative software solutions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm font-medium mb-12 text-indigo-600">Selected Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group grid md:grid-cols-2 gap-8 p-8 rounded-lg transition-all hover:scale-[1.02] ${project.color}`}
              >
                <div>
                  <h3 className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">{project.role}</p>
                  <p className="text-sm text-neutral-600">{project.tech}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">{project.description}</p>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-indigo-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-b from-indigo-50/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-neutral-600">© 2024 Tamzeed Quazi</p>
            <div className="text-sm text-neutral-600">
              Built with <span className="text-indigo-600">♥</span> in Vancouver
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;