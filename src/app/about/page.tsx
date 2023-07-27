import React from 'react';

const About = () => {
  return (
    <div className='max-h-screen flex'>
      <div className='w-[50%] max-h-[100%]'>
        <img className='w-full h-full object-cover' src="/images/tamzeed/alley_pic.jpg" alt="Tamzeed Photo" />
      </div>
      
      <div className='w-[50%] max-h-[100%] p-16 overflow-y-scroll no-scrollbar'>
        <h1 className='text-7xl'>About Me</h1>
        <hr />
        <br />
        <p>Hi! My name is Tamzeed Quazi. I am in my third year at the University of British Columbia pursuing a combined major in Computer Science and Statistics. Currently, I am a front-end developer for UBC MINT, and a full-stack developer and software engineer at my co-op. In the future, I hope to pursue a career in machine learning.</p>
        <br />
        <p>I enjoy watching movies, playing various sports, going to the gym, playing chess, gaming, and lately have been tinkering with my new Arduino starter kit. Check out my resume to see more of the professional experience I have!</p>
        <br />
        <p>Feel free to check out my socials and get in touch!</p>
        {/* <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint provident, quidem quod illo vero minima reiciendis ex officia fugiat ut odio blanditiis accusantium quae saepe aliquam alias perspiciatis iste laudantium enim repellendus hic quas modi corporis facere. Dolore ipsum corporis deserunt, autem iste architecto vel veniam inventore dolores ea quisquam!</p> */}
      </div>
    </div>
  );
};

export default About;
