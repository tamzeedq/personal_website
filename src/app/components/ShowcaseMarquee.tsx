import React from 'react'
import ShowcaseCard from './ShowcaseCard';
import Marquee from "react-fast-marquee";

const projects = [
    { 
        img: "/images/form_tracker_project/form_tracker_1.png", 
        title: 'Track My Form', 
        github: 'https://github.com/tamzeedq/TrackMyForm', 
        description: 'Track exercise form and repetitions with a pose-detection model using TensorFlowJS' 
    },
    { 
        img: "/images/nwHacks2024_project/nwhacks_3.jpg", 
        title: 'Breathe App', 
        github: 'https://github.com/ryanarnouk/nwhacks-2024', 
        description: 'Detect air quality and GPS location using sensors and display data with React and GPT-4.' 
    },
    { 
        img: "/images/gesturecv/gesturecv_1.png", 
        title: 'GestureCV', 
        github: 'https://github.com/tamzeedq/GestureCV', 
        description: 'Control your laptop with hand gestures using Google MediaPipe and OpenCV.' 
    },
];

const ShowcaseMarquee = () => {

    return (
        <Marquee
            pauseOnHover={true}
            autoFill={true}
        >
            {projects.map(({ img, title, description, github }, index) => (
                <div
                key={index}
                className='mx-8'
                >
                <ShowcaseCard
                    imageSrc={img}
                    title={title}
                    description={description}
                    github={github}
                />
                </div>
            ))}
        </Marquee>
    )
}

export default ShowcaseMarquee