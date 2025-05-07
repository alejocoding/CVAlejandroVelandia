import React from 'react';

const ProjectCard = ({ title, description, imageUrl,gitHub, technologies}) => {
  return (
    <div className="bg-[#1f2937] rounded-xl shadow-lg p-4 w-full max-w-md max-h-[550px] hover:scale-105 transition-transform">
      <img src={imageUrl} alt={title} className="rounded-md mb-4 w-full h-60 object-cover" />
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2 line-clamp-5">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies && technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a href={gitHub} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Ver mas</a>
      </div>
    </div>
  );
};

export default ProjectCard;