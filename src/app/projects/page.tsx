import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import ImageCarousel from '../components/imageCarousel'

const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col p-8 items-center justify-center gap-8'>
      <div className='w-[100%] text-center md:text-8xl sm:text-6xl text-4xl'>
        Projects
      </div>

      {/* Project drop downs */}

      {/* TODO: refactor drop downs into a component */}

      {/* Portfolio Website */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Personal Website        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Used NextJS 13 and React as the framework, Tailwind CSS for styling, TypeScript, and hosted on Netlify
            </li>
            <li>
              Click Around !
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">ReactJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">TypeScript</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">NextJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Tailwind CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Netlify</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/personal_website' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* React Weather Project */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          React Weather App
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Created a website that pulls from the Open Weather API to show the weather and a quick summary
              for the day of a user-inputted location
            </li>
            <li>
              Utilized React’s component format and automatic re-render to spontaneously create cards for each
              location’s weather for clear display and comparison with other locations
            </li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">HTML</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">ReactJS</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/react-weather-app' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/weather_project/weather_app_1.png", "/images/weather_project/weather_app_2.png", "/images/weather_project/weather_app_3.png"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* Sorting Algorithm Project */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Sorting Algorithm Visualizer
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Created a website to visualize the sorting of a randomly generated array by manipulating the HTML
              DOM with JavaScript
            </li>
            <li>Implemented adjustable size for the array and speed of solution</li>
            <li>The website visualizes bubble sort, insertion sort, selection sort, and quick sort</li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">HTML</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JavaScript</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/SortingAlgorithmVisualizer' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/algorithm_project/algorithm_project1.png", "/images/algorithm_project/algorithm_project2.png", "/images/algorithm_project/algorithm_project3.png"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* Discord Bot Project */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Hoppon Bot
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Used the Discord API to create a server bot with convenient functionality
            </li>
            <li>
              Command to flip a coin, plays a GIF and posts the result
            </li>
            <li>
              Creates customizable polls in server chats by creating an embedded message with interactive
              reactions to vote based on the input of the user for the options
            </li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Python</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/DiscordBot' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/hoppon_project/hoppon_bot1.png", "/images/hoppon_project/hoppon_bot2.png", "/images/hoppon_project/hoppon_bot3.png"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* Fitness Tracker App */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Fitness Tracker
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Tracks your diet and workouts for a week including calories burned and eaten, protein,
              carbohydrates, fats, and personal notes for each day
            </li>
            <li>
              The week can be saved to a JSON file and then reloaded anytime and an event log is printed to the
              console of any changes made at the end of a session
            </li>
            <li>
              JUnit testing used to assure user story functionality
            </li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Java</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JUnit</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Java Swing</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JSON</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/FitnessTrackerApp' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/fitness_project/fitnessApp_1.png", "/images/fitness_project/fitnessApp_3.png", "/images/fitness_project/fitnessApp_2.png"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Projects