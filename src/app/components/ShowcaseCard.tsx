import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

interface ShowcaseCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="overflow-hidden shadow-lg w-80 cursor-pointer border-2 border-rblack">
      {/* Browser Window Header */}
      <div className="flex items-center bg-latte border-2 border-rblack px-4 py-2">
        {/* <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div> */}
        {/* <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div> */}
        <div className="w-3 h-3 bg-red-500 border-2 border-rblack  rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-latte border-2 border-rblack rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-latte border-2 border-rblack rounded-full"></div>
      </div>
      {/* Image */}
      <div className='flex items-center justify-center p-2'>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover border-2 border-rblack"
        />
      </div>
      {/* Title and Description */}
      <div className="p-4 bg-latte text-rblack">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <div>
          {/* <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition duration-300">View Project</button> */}
          <button className='btn btn-sm bg-rblack hover:scale-105 text-latte xs:w-[80%] md:w-[50%] hover:text-red-400'>
            <Link href='https://github.com/tamzeedq/MorningMessenger' target='_blank' className='flex gap-2 items-center'>
              GitHub <AiFillGithub size={25}></AiFillGithub>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;