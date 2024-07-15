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
    <div className=" rounded-lg overflow-hidden shadow-lg w-80 cursor-pointer">
      {/* Browser Window Header */}
      <div className="flex items-center bg-gray-950 px-4 py-2">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        {/* <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div> */}
        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
      </div>
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Title and Description */}
      <div className="p-4 bg-zinc-800">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <div>
          {/* <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition duration-300">View Project</button> */}
          <button className='btn btn-sm bg-gray-900 hover:bg-gray-900 hover:scale-105 text-white xs:w-[80%] md:w-[50%] hover:text-red-400'>
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
