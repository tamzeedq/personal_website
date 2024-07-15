"use client"

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { gsap } from 'gsap';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

interface ProjectCardProps {
  title: string;
  summary: string;
  description: string[];
  badges: string[];
  github: string;
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, description, badges, github, images }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      gsap.to(cardRef.current, { height: 'auto', width: '500px', duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(cardRef.current, { height: 'auto', width: '350px',duration: 0.5, ease: 'power3.out' });
    }
  }, [isExpanded]);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)', duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, boxShadow: 'none', duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      className="rounded-lg overflow-hidden shadow-lg w-80 cursor-pointer bg-zinc-800"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Browser Window Header */}
      <div className="flex items-center bg-gray-950 px-4 py-2">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
      </div>
      {/* Image */}
      <img src={images[0]} alt={title} className="w-full h-48 object-cover" />
      {/* Title and Summary */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {!isExpanded && (
          <div>
            <p className="mt-2">{summary}</p>
            {/* <button className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
              View Project <MdArrowOutward  size={15}/> 
            </button> */}
          </div>
        )}
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 bg-zinc-800">
          <h4 className="text-md font-semibold">Description:</h4>
          <ul className="list-disc ml-5 mt-2">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <h4 className="text-md font-semibold mt-4">Badges:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((badge, index) => (
              <span key={index} className="badge badge-accent">
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
