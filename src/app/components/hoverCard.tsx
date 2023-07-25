import React, { useState } from 'react';

// Define the prop types for the HoverCard component
interface HoverCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ imageSrc, title, description }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className="relative w-64 h-80 border border-gray-400 rounded-md overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: showInfo ? '0.5' : '1' }}
      />
      {showInfo && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center p-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
