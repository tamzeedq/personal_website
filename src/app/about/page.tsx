import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen flex font-mono'>
      <div className='w-[50%] max-h-[100%]'>
        <img className='w-full h-full object-cover' src="/images/tamzeed/walking.JPG" alt="Tamzeed Photo" />
      </div>
      
      <div className='w-[50%] max-h-[100%] py-16 px-8 overflow-y-scroll no-scrollbar text-white'>
        <h1 className='text-3xl sm:text-4xl md:text-7xl'>About Me</h1>
        <hr className="border border-red-400"/>
        <br />
        <p>
          Hello!👋 My name is Tamzeed Quazi. I am in my third year at the University of British Columbia pursuing a combined major in Computer Science and Statistics.
          Currently, I am a simulation software developer for <a className="text-amber-200 " href="https://ubcsolar.com/">UBC Solar</a>. I have previously completed an 8-month co-op as a full-stack developer and software engineer at Tetra Tech.
        </p>
        <br />
        <p>
          🤖 My interests include machine learning, computer vision, computer graphics, full-stack web development, and software engineering. I am always experimenting with various technologies to expand my knowledge.
        </p>
        <br />
        <p>I enjoy playing sports, going to the gym, reading comics, playing chess, gaming, and keeping up with AI news. Check out my resume to see more of the professional experience I have!</p>
        <br />
        <p>🚀 Feel free to check out my socials and get in touch!</p>
      </div>
    </div>
  );
};

export default About;
