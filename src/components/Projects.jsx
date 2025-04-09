import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'student-learning-portal',
      description:
        'A comprehensive online platform for students to access courses, track progress, and enhance learning through interactive resources.',
      githubLink: 'https://github.com/rishvanth512/student-learning-portal',
    },
    {
      title: 'Project-Budget-Tracker',
      description:
        'CA project budget tracking tool that estimates costs using the COCOMO 2 model, helping teams plan and manage software development expenses efficiently.',
      githubLink: 'https://github.com/rishvanth512/Project-Budget-Tracker',
    },
    {
      title: 'FirstRepo',
      description: 'A beginner-friendly GitHub repository for learning and practicing version control with Git, including essential commands and workflows.',
      githubLink: 'https://github.com/rishvanth512/FirstRepo',
    },
    {
      title: 'Trip2trip',
      description: 'Trip2Trip is a travel planning app designed with intuitive UI/UX, offering personalized trip recommendations and seamless itinerary management for travelers.',
      githubLink: 'https://github.com/rishvanth512/Trip2trip',
    },
    {
      title: 'License-Plate-recognition',
      description:
        'A computer vision-based system for automatic license plate recognition (ALPR) using image processing and machine learning techniques.',
      githubLink: 'https://github.com/rishvanth512/License_plate_recognition',
    },
    {
      title: 'Diabetes-prediction',
      description:
        'A machine learning-based system for predicting diabetes risk using patient data and predictive analytics.',
      githubLink: 'https://github.com/rishvanth512/Diabetes-prediction',
    },
    {
      title: 'Portifolio',
      description:
        'A personal portfolio website showcasing projects, skills, and experiences, designed to highlight expertise and attract potential clients or employers.',
      githubLink: 'https://github.com/rishvanth512/portifolio',
    },
    
    
  ];

  return (
    <div id="projects" className="relative mt-20 border-b border-neutral-800 min-h-[350px]">
      <div className="text-center">
        <h2
          className="text-2xl sm:text-2xl lg:text-3xl mt-0 lg:mt-0 tracking-wide 
            bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent uppercase 
            relative inline-block px-6 py-3 border border-[#ff0080] rounded-lg shadow-lg"
          style={{
            textShadow: '2px 2px 6px rgba(255, 0, 128, 0.6)',
            WebkitTextStroke: '1px #ff0080',
            boxShadow: '4px 4px 12px rgba(255, 0, 128, 0.4)',
          }}
        >
          Projects
        </h2>
      </div>

      <div className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-neutral-800 border border-gray-700 
            shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <strong className="text-xl text-white font-semibold hover:text-[#ff0080] transition-colors duration-200 mb-4">
                {project.title}
              </strong>
              <p className="text-gray-300 text-sm mb-6">{project.description}</p>

              {/* GitHub Button */}
              <div className="flex justify-center w-full mt-6">
              <a
              href={project.githubLink}
              className="flex items-center space-x-2 justify-start bg-black text-white 
              rounded-lg px-6 py-3 hover:bg-[#24292f] hover:scale-105 
              transition-all duration-300 absolute bottom-4 left-4
              bg-gradient-to-r from-[#ff0080] to-[#7928CA] text-white px-6 py-3 
              rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
                  <FaGithub size={20} />
                  <span className="text-sm">Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
