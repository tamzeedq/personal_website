import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen flex'>
      <div className='w-[50%] max-h-[100%]'>
        <img className='w-full h-full object-cover' src="/images/tamzeed/walking.JPG" alt="Tamzeed Photo" />
      </div>
      
      <div className='w-[50%] max-h-[100%] py-16 px-8 overflow-y-scroll no-scrollbar text-white'>
        <h1 className='text-3xl sm:text-4xl md:text-7xl'>About Me</h1>
        <hr className="border border-red-400"/>
        <br />
        <p>
          Hello!👋 My name is Tamzeed Quazi. I am in my third year at the University of British Columbia pursuing a combined major in Computer Science and Statistics.
          Currently, I am a simulation software developer for <a className="text-amber-200 " href="https://ubcsolar.com/">UBC Solar</a>, and have also completed a co-op as a full-stack developer and software engineer at Tetra Tech.
        </p>
        <br />
        <p>
         🤖 My interests include machine learning, computer vision, computer graphics, web development, and software engineering. Low-level programming and C are some skills I am currently picking up.
        </p>
        <br />
        <p>I enjoy watching movies, playing sports, going to the gym, playing chess, gaming, and keeping up with all things AI. Check out my resume to see more of the professional experience I have!</p>
        <br />
        <p>🚀 Feel free to check out my socials and get in touch!</p>
        <p className='text-red-300'>I am currently looking for internship opportunities for Summer 2024!</p>
      </div>
    </div>
  );
};

export default About;
