"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIconClick = () => {
    window.open(link, '_blank');
  };

  return (
    <motion.div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <img 
        src={src} 
        alt={title} 
        className={`w-full h-64 object-cover transition-all duration-300 ${isHovered ? 'blur-sm' : 'blur-0'}`} 
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {isHovered && (
          <motion.div 
            className="bg-white rounded-full p-3 cursor-pointer" 
            onClick={handleIconClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub size={30} />
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div >
    </motion.div>
  );
};