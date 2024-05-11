import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import ImageCarousel from '../components/imageCarousel'

const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col text-white p-8 items-center justify-center gap-8 font-mono'>
      <div className='w-[100%] text-center text-white md:text-8xl sm:text-6xl text-4xl'>
        Projects
      </div>

      {/* Project drop downs */}

      {/* TODO: refactor drop downs into a component */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Morning Messenger        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Wrote a script with Python to send me a SMS text of my tasks for the day and a summary of the weather
            </li>
            <li>
              Set up an AWS EC2 instance with a cron job to automatically run the script to send me a text every morning
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Python</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">AWS EC2</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Linux</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Docker</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/MorningMessenger' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/messenger_project/morningmessenger_demo.jpeg"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* Breathe (nwHacks 2024 submission) */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          GestureCV        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Created this project to control my laptop without touching it to watch YouTube videos while I eat
            </li>
            <li>
              Utilized Google's MediaPipe hand detection model and OpenCV to detect hand location and gestures
            </li>
            <li>
              The hand landmarks are then interpolated from webcam to monitor resolution to control my mouse and gestures to trigger media events
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Python</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">OpenCV</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">MediaPipe</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Docker</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/GestureCV' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            {/* <li>
              <ImageCarousel
                imageURLS={["/images/nwHacks2024_project/nwhacks_1.png", "/images/nwHacks2024_project/nwhacks_2.png", "/images/nwHacks2024_project/nwhacks_3.jpg"]}
              ></ImageCarousel>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Breathe (nwHacks 2024 submission) */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Breathe App | nwHacks 2024        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Utilizes sensors connected to an Arduino Mega 2560 to detect air quality and GPS location
            </li>
            <li>
              Python is used to send data from the Arduino to the front-end through a web socket, and used for the Flask server
            </li>
            <li>
              React front-end that displays all the data from the Arduino, and uses GPT-4 to interpret and give advice based on a user-selected context based on the data
            </li>
            <li>
              See more of the project here:<a className="pl-2 text-red-200 hover:text-red-400 hover:underline" href='https://devpost.com/software/breathe-air-quality-sensor-app' target='blank'>Devpost</a> 
              <a className="pl-2 text-red-200 hover:text-red-400 hover:underline" href='https://www.youtube.com/watch?feature=shared&v=YEevDblyLsI' target='blank'>YouTube</a>
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">ReactJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Tailwind CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Python</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Flask</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Arduino</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">C++</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">GPT-4</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/ryanarnouk/nwhacks-2024' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/nwHacks2024_project/nwhacks_1.png", "/images/nwHacks2024_project/nwhacks_2.png", "/images/nwHacks2024_project/nwhacks_3.jpg"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* AI Exercise Tracker */}
      <div className="collapse collapse-arrow bg-zinc-800 hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          AI Exercise Form Tracker        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Utilizes React and TensorFlowJS to run a pose-detection model in the browser on the user’s webcam feed to track form, 
              count repetitions, and trace joint path based on user selection
            </li>
            <li>
              User’s can record their exercises, download the recording once finished, or take screenshots of their webcam feed
            </li>
            <li>
              Added a togglable view of the detection model and webcam, and currently supports tracking push-ups, pull-ups and squats
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">ReactJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">TypeScript</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Tailwind CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">TensorFlowJS</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
                <Link href='https://github.com/tamzeedq/TrackMyForm' target='_blank' className='flex gap-2 items-center'>
                  View Project on GitHub <AiFillGithub size={25}></AiFillGithub>
                </Link>
              </li>
            </div>
            <li>
              <ImageCarousel
                imageURLS={["/images/form_tracker_project/form_tracker_1.png", "/images/form_tracker_project/form_tracker_2.png", "/images/form_tracker_project/form_tracker_3.png"]}
              ></ImageCarousel>
            </li>
          </ul>
        </div>
      </div>

      {/* Portfolio Website */}
      <div className="collapse collapse-arrow bg-zinc-800 text-white hover:text-red-400 lg:w-[75%] xl:w-[65%]">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-bold text-center">
          Personal Website        
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Used NextJS 13 as the framework, Tailwind CSS for styling, TypeScript, and hosted on Netlify
            </li>
            <li>
              Features my projects, some skills, my resume, a little about me, and my socials to get connected
            </li>
            <li>
              Includes a responsive design to account for different screen sizes and mobile view
            </li>
            <li>
              Click around  or view the code on GitHub!
            </li>
            <li className=''>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">ReactJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">TypeScript</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">NextJS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Tailwind CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white mr-1">Netlify</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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
              Created a website that pulls from the Open Weather API to create weather cards with a quick summary
              of the current weather of the day from a user-inputted location
            </li>
            <li>Made the project to grasp fundamentals of React and learn front-end development with frameworks</li>
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
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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
            <li>Created the project to prepare for my algorithms class by visualizing how some basic sorting algorithms work</li>
            <li>The website visualizes bubble sort, insertion sort, selection sort, and quick sort</li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">HTML</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">CSS</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JavaScript</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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
          Discord Bot
        </div>
        <div className="collapse-content text-white"> 
          <ul className='flex flex-col gap-4'>
            <li>
              Used the Discord API to create a server bot to solve issues on my personal server with friends
            </li>
            <li>
              Command to flip a coin, plays a GIF and posts the result
            </li>
            <li>
              Creates customizable polls in server chats by creating an embedded message with interactive
              reactions to vote for the options
            </li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Python</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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
              carbohydrates, fats, and personal notes for each day of the week
            </li>
            <li>
              Data is tracked, saved, and reloaded between sessions using JSON files to ensure persistency
            </li>
            <li>
              Created the GUI with Java Swing and utilized JUnit testing used to assure user story functionality
            </li>
            <li>
              Created UML diagrams to demonstrate relationships between different classes and ensured functionality with JUnit testing
            </li>
            <li className='flex gap-2'>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Java</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JUnit</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">Java Swing</div>
              <div className="badge badge-neutral text-gray-300 hover:scale-105 hover:text-white">JSON</div>
            </li>
            <div className='flex items-center justify-center'>
              <li className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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