import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import ImageCarousel from '../components/imageCarousel'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "UBC Solar Simulation",
    summary: "UBC Solar's simulation environment to strategize and optimize competition race speeds.",
    description: [
      "Designed a genetic algorithm with to simulate car physics models in race conditions to optimize speed",
      "Developed a script to tune hyperameters of the genetic algorithm using random search and grid search",
      "Created a CLI to manage GIS and Weather APIs for the race and cache the result for future simulations"
    ],
    badges: ["Python", "PyGAD", "NumPy", "Scikit-learn"],
    github: "https://github.com/UBC-Solar/Simulation",
    images: ["/images/simulation/simulation_1.png"],
    year: "2023 - Present"
  },
  // {
  //   title: "Morning Messenger",
  //   summary: "Automated SMS notifications for daily tasks and weather updates using Python and AWS EC2.",
  //   description: [
  //     "Wrote a script with Python to send me a SMS text of my tasks for the day and a summary of the weather",
  //     "Set up an AWS EC2 instance with a cron job to automatically run the script to send me a text every morning"
  //   ],
  //   badges: ["Python", "AWS EC2", "Linux", "Docker"],
  //   github: "https://github.com/tamzeedq/MorningMessenger",
  //   images: ["/images/messenger_project/morningmessenger_demo.jpeg"],
  //   year: "2024"
  // },
  {
    title: "GestureCV",
    summary: "Control your laptop with hand gestures using Google MediaPipe and OpenCV.",
    description: [
      "Created this project to control my laptop without a mouse or keyboard for accessibility and fun",
      "Utilized Google MediaPipe hand detection model and OpenCV to detect hand location and gestures",
      "The hand landmarks are interpolated from webcam to monitor resolution to control the mouse and use gestures to trigger media events"
    ],
    badges: ["Python", "OpenCV", "MediaPipe", "Docker"],
    github: "https://github.com/tamzeedq/GestureCV",
    images: ["/images/gesturecv/gesturecv_1.png"],
    year: "2024"
  },
  {
    title: "Breathe App | nwHacks 2024",
    summary: "Detect air quality and GPS location using sensors and display data with React and GPT-4.",
    description: [
      "Utilizes sensors connected to an Arduino Mega 2560 to detect air quality and GPS location",
      "Python is used to send data from the Arduino to the front-end through a web socket, and used for the Flask server",
      "React front-end that displays all the data from the Arduino, and uses GPT-4 to interpret and give advice based on a user-selected context based on the data",
      "See more of the project here: Devpost, YouTube"
    ],
    badges: ["ReactJS", "Tailwind CSS", "Python", "Flask", "Arduino", "C++", "GPT-4"],
    github: "https://github.com/ryanarnouk/nwhacks-2024",
    images: ["/images/nwHacks2024_project/nwhacks_1.png", "/images/nwHacks2024_project/nwhacks_2.png", "/images/nwHacks2024_project/nwhacks_3.jpg"],
    year: "2024"
  },
  {
    title: "UBC Solar Simulation Client",
    summary: "GUI for UBC Solar's simulation environment.",
    description: [
      "Connected front-end to the simulation server to send and receive simulation data and display the results",
      "Overhauled UI to allow users to input simulation parameters and view the results in a user-friendly manner",
    ],
    badges: ["React", "Electron", "Python"],
    github: "https://github.com/UBC-Solar/Simulation-Client",
    images: ["/images/simulation_client/simulation_client_1.png", "/images/simulation_client/simulation_client_2.png"],
    year: "2023"
  },
  {
    title: "AI Exercise Form Tracker",
    summary: "Track exercise form and repetitions with a pose-detection model using TensorFlowJS",
    description: [
      "Utilizes React and TensorFlowJS to run a pose-detection model in the browser on the user webcam feed to track form, count repetitions, and trace joint path based on user selection",
      "Users can record their exercises, download the recording once finished, or take screenshots of their webcam feed",
      "Added a togglable view of the detection model and webcam, and currently supports tracking push-ups, pull-ups and squats"
    ],
    badges: ["ReactJS", "TypeScript", "Tailwind CSS", "TensorFlowJS"],
    github: "https://github.com/tamzeedq/TrackMyForm",
    images: ["/images/form_tracker_project/form_tracker_3.png", "/images/form_tracker_project/form_tracker_2.png", "/images/form_tracker_project/form_tracker_3.png"],
    year: "2023"
  },
  {
    title: "Personal Website v1",
    summary: "My original portfolio with a modern, responsive Next.js website.",
    description: [
      "Used NextJS 13 as the framework, Tailwind CSS for styling, TypeScript, and hosted on Netlify",
      "Features my projects, some skills, my resume, a little about me, and my socials to get connected",
      "Includes a responsive design to account for different screen sizes and mobile view",
    ],
    badges: ["ReactJS", "TypeScript", "NextJS", "Tailwind CSS", "Netlify"],
    github: "https://github.com/tamzeedq/personal_website",
    images: ["/images/portfolio_v1/portfolio_v1_1.png", "/images/portfolio_v1/portfolio_v1_2.png"],
    year: "2023"
  },
  {
    title: "React Weather App",
    summary: "Get weather updates for any location with a React-based weather app.",
    description: [
      "Created a website that pulls from the Open Weather API to create weather cards with a quick summary of the current weather of the day from a user-inputted location",
      "Made the project to grasp fundamentals of React and learn front-end development with frameworks",
      "Utilized React component format and automatic re-render to spontaneously create cards for each location’s weather for clear display and comparison with other locations"
    ],
    badges: ["HTML", "CSS", "ReactJS"],
    github: "https://github.com/tamzeedq/react-weather-app",
    images: ["/images/weather_project/weather_app_1.png", "/images/weather_project/weather_app_2.png", "/images/weather_project/weather_app_3.png"],
    year: "2022"
  },
  {
    title: "Sorting Algorithm Visualizer",
    summary: "Visualize sorting algorithms in action with this interactive website.",
    description: [
      "Created a website to visualize the sorting of a randomly generated array by manipulating the HTML DOM with JavaScript",
      "Implemented adjustable size for the array and speed of solution",
      "Created the project to prepare for my algorithms class by visualizing how some basic sorting algorithms work",
      "The website visualizes bubble sort, insertion sort, selection sort, and quick sort"
    ],
    badges: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tamzeedq/SortingAlgorithmVisualizer",
    images: ["/images/algorithm_project/algorithm_project1.png", "/images/algorithm_project/algorithm_project2.png", "/images/algorithm_project/algorithm_project3.png"],
    year: "2022"
  },
  // {
  //   title: "Discord Bot",
  //   summary: "Enhance your Discord server with a custom bot for commands and interactive polls.",
  //   description: [
  //     "Used the Discord API to create a server bot to solve issues on my personal server with friends",
  //     "Command to flip a coin, plays a GIF and posts the result",
  //     "Creates customizable polls in server chats by creating an embedded message with interactive reactions to vote for the options"
  //   ],
  //   badges: ["Python"],
  //   github: "https://github.com/tamzeedq/DiscordBot",
  //   images: ["/images/hoppon_project/hoppon_bot1.png", "/images/hoppon_project/hoppon_bot2.png", "/images/hoppon_project/hoppon_bot3.png"],
  //   year: "2022"
  // },
  {
    title: "Fitness Tracker",
    summary: "Track your diet and workouts with a Java-based fitness tracker app.",
    description: [
      "Tracks your diet and workouts for a week including calories burned and eaten, protein, carbohydrates, fats, and personal notes for each day of the week",
      "Data is tracked, saved, and reloaded between sessions using JSON files to ensure persistency",
      "Created the GUI with Java Swing and utilized JUnit testing used to assure user story functionality",
      "Created UML diagrams to demonstrate relationships between different classes and ensured functionality with JUnit testing"
    ],
    badges: ["Java", "JUnit", "Java Swing", "JSON"],
    github: "https://github.com/tamzeedq/FitnessTrackerApp",
    // images: ["/images/fitness_project/fitnessApp_1.png", "/images/fitness_project/fitnessApp_3.png", "/images/fitness_project/fitnessApp_2.png"],
    images: ["/images/fitness_project/fitnessApp_3.png"],
    year: "2022"
  }
];

const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col p-8 items-center justify-center gap-8 font-mono'>
      <div className='w-[100%] text-center text-rblack md:text-8xl sm:text-6xl text-4xl'>
        Projects
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8 w-[95%]'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            summary={project.summary}
            description={project.description}
            badges={project.badges}
            github={project.github}
            images={project.images}
            year = {project.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;