import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen p-24 flex flex-col gap-8'>
      <div className='w-[100%] text-center md:text-8xl sm:text-6xl text-4xl'>
        Projects
      </div>

      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content text-white"> 
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content text-white"> 
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content text-white"> 
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content text-white"> 
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content text-white"> 
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Projects