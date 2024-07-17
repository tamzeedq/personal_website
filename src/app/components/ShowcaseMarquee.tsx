import React from 'react'
import ShowcaseCard from './ShowcaseCard';
import Marquee from "react-fast-marquee";

const projects = [
    { img: "/images/form_tracker_project/form_tracker_1.png", title: 'Track My Form', description: 'Description of project 1' },
    { img: "/images/messenger_project/morningmessenger_demo.jpeg", title: 'Morning Messenger', description: 'Description of project 2' },
    { img: "/images/nwHacks2024_project/nwhacks_3.jpg", title: 'Breathe', description: 'Description of project 3' },
    { img: "/images/nwHacks2024_project/nwhacks_3.jpg", title: 'GestureCV', description: 'Description of project 3' },
];

const ShowcaseMarquee = () => {

    return (
        <Marquee
            pauseOnHover={true}
            autoFill={true}
        >
            {projects.map(({ img, title, description }, index) => (
                <div
                key={index}
                className='mx-8'
                >
                <ShowcaseCard
                    imageSrc={img}
                    title={title}
                    description={description}
                />
                </div>
            ))}
        </Marquee>
    )
}

export default ShowcaseMarquee