"use client"

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { gsap } from 'gsap';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  summary: string;
  year: string;
  description: string[];
  badges: string[];
  github: string;
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, description, badges, github, images, year }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      gsap.to(cardRef.current, { height: 'auto', width: '500px', duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(cardRef.current, { height: 'auto', width: '350px', duration: 0.5, ease: 'power3.out' });
    }
  }, [isExpanded]);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className="rounded-lg overflow-hidden shadow-lg w-80 cursor-pointer bg-latte border-2 border-rblack text-rblack"
      onClick={handleCardClick}
    >
      {/* Browser Window Header */}
      <div className="flex items-center bg-latte border-b-2 border-rblack px-4 py-2">
        <div className="w-3 h-3 bg-red-500 border-2 border-rblack rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 border-2 border-rblack rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 border-2 border-rblack rounded-full"></div>
        <h1 className='w-full text-right'> {year}</h1>
      </div>
      {/* Image */}
      <div className='flex items-center justify-center p-2'>
        <img
          src={images[0]}
          alt={title}
          className={`w-full border-2 border-rblack ${isExpanded ? 'h-60 object-fill' : 'h-48 object-cover'}`}
        />
      </div>
      {/* Title and Summary */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {!isExpanded && (
          <p className="mt-2">{summary}</p>
        )}
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 bg-latte">
          <h4 className="text-md font-semibold">Description:</h4>
          <ul className="list-disc ml-5 mt-2">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <h4 className="text-md font-semibold mt-4">Skills:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((badge, index) => (
              <span key={index} className="badge bg-rblack text-latte hover:scale-105 hover:bg-indigo">
                {badge}
              </span>
            ))}
          </div>
          <button className='btn bg-rblack hover:scale-105 text-latte w-full mt-4 hover:bg-indigo'>
            <Link href={github} target='_blank' className='flex gap-2 items-center'>
              GitHub <AiFillGithub size={25}></AiFillGithub>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
