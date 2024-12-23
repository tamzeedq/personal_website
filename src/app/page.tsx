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
      description: "Air quality monitoring dashboard with real-time sensor data and AI analysis"
    },
    {
      title: "Track My Form",
      role: "ML Engineer",
      tech: "React • TensorFlow • TypeScript",
      description: "AI-powered exercise form tracking and analysis using pose estimation"
    },
    {
      title: "Solar Race Optimizer",
      role: "Strategy Developer",
      tech: "Python • React • Electron",
      description: "Race strategy optimization system for solar vehicle competitions"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-neutral-50/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-medium">TQ</span>
          <div className="flex gap-6">
            <a href="https://github.com/tamzeedq" className="hover:text-neutral-500 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tamzeedquazi/" className="hover:text-neutral-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/tamzeed.q/" className="hover:text-neutral-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:tamzeed.q@gmail.com" className="hover:text-neutral-500 transition-colors">
              <HiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-7xl font-light mb-8">
            Tamzeed Quazi
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-lg text-neutral-600">
              Software Developer crafting digital experiences with a focus on user-centric design 
              and scalable solutions. Currently pursuing Computer Science and Statistics at UBC.
            </p>
            <div className="text-sm space-y-2 text-neutral-600">
              <p>Vancouver, Canada</p>
              <p>Currently @ UBC Solar</p>
              <p>Previously @ Tetra Tech</p>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-sm font-medium mb-4">Languages</h2>
            <p className="text-neutral-600">TypeScript • Python • Java • C++ • SQL</p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-4">Technologies</h2>
            <p className="text-neutral-600">React • Next.js • Node.js • Flask • PostgreSQL</p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-4">Tools</h2>
            <p className="text-neutral-600">AWS • Azure • Docker • Git • TensorFlow</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm font-medium mb-12">Experience</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-2">Software Developer Co-op</h3>
                <p className="text-sm text-neutral-600 mb-4">Tetra Tech • Jan 2023 – Aug 2023</p>
              </div>
              <div className="text-neutral-600">
                Led development of full-stack alert systems and automation tools. 
                Improved database performance by 30% and reduced manual workflows 
                through automated solutions. Deployed applications serving 1000+ users.
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-2">Strategy Software Developer</h3>
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm font-medium mb-12">Selected Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group grid md:grid-cols-2 gap-8 py-8 border-t border-neutral-200">
                <div>
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{project.role}</p>
                  <p className="text-sm text-neutral-600">{project.tech}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">{project.description}</p>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-neutral-600">© 2024 Tamzeed Quazi</p>
            <div className="text-sm text-neutral-600">
              Designed and built in Vancouver
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;