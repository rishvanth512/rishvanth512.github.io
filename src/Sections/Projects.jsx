import React, { useRef } from 'react';
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
      title: 'Kitchen Timer App',
      description:
        'A user-friendly kitchen timer app that helps users manage cooking times with customizable timers, alarms, and a sleek interface for efficient meal preparation.',
      githubLink: 'https://github.com/rishvanth512/Kitchen-Timer-App',
    },
    {
      title: 'Project-Budget-Tracker',
      description:
        'CA project budget tracking tool that estimates costs using the COCOMO 2 model, helping teams plan and manage software development expenses efficiently.',
      githubLink: 'https://github.com/rishvanth512/Project-Budget-Tracker',
    },
    {
      title: 'Portfolio',
      description:
        'A personal portfolio website showcasing projects, skills, and experiences, designed to highlight expertise and attract potential clients or employers.',
      githubLink: 'https://github.com/rishvanth512/portfolio',
    },
    {
      title: 'Step Detection App',
      description:
        'A mobile application that uses accelerometer data to detect and count user steps, providing insights into daily activity levels.',
      githubLink: 'https://github.com/rishvanth512/Step-Detection-App',
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
    
  ];

  // Handle tilt based on cursor position
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const cardRef = useRef();
            return (
              <div
                key={index}
                className="perspective-[1000px] w-full h-full"
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
              >
                <div
                  ref={cardRef}
                  className="min-h-[280px] flex flex-col items-center justify-between p-6 bg-neutral-800 border border-gray-700 
                  rounded-lg hover:shadow-2xl transition-shadow relative duration-300 ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <strong className="text-xl text-white font-semibold hover:text-[#ff0080] transition-colors duration-200 mb-4">
                    {project.title}
                  </strong>
                  <p className="text-gray-300 text-sm mb-6 text-center">
                    {project.description}
                  </p>

                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 justify-start bg-black text-white 
                    rounded-lg px-6 py-3 hover:bg-[#24292f] hover:scale-105 
                    transition-all duration-300 relative bottom-2 left-0
                    bg-gradient-to-r from-[#ff0080] to-[#7928CA] text-white px-6 py-3 
                    rounded-lg shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">Source Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
