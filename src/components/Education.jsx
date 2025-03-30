import React from 'react'

const education = [
    {
      year: "2023 - 2025",
      title: "Master of Science in Software Engineering",
      company: "Cleveland State University, Cleveland, OH",
      description:
        "Coursework: Software Engineering, Software Quality Assurance, Software Project Managment, Software Engineering Project.",
    },
    {
      year: "2019 - 2023",
      title: "Bachelor of Engineering in Computer Science",
      company: "BITS Pilani, Dubai Campus",
      description:
        "Coursework: Data mining, Data Science Fundamentals, Web Applications, Artificial Intelligence",
    },
  ];


const Education = () => {
  return (
    <div id="education" className="relative mt-5 border-b border-neutral-800 min-h-[350px] pt-20">
            <div className='text-center'>     
            <h2  className="text-2xl sm:text-2xl lg:text-3xl mt-0 lg:mt-0 tracking-wide 
            bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent uppercase 
            relative inline-block px-6 py-3 border border-[#ff0080] rounded-lg shadow-lg"
            style={{textShadow: "2px 2px 6px rgba(255, 0, 128, 0.6)",
                WebkitTextStroke: "1px #ff0080", 
                boxShadow: "4px 4px 12px rgba(255, 0, 128, 0.4)" 
              }}>Education</h2>
              </div>
              <div className="relative border-l-4 border-[#ff0080]">
        {education.map((exp, index) => (
          <div key={index} className="mb-8 ml-6 group">
            {/* Timeline Dot with Zoom Hover */}
            <div className="absolute -left-3 w-6 h-6 bg-[#ff0080] rounded-full border-4 
            border-white transform transition-transform duration-300 group-hover:scale-125"></div>
            
            {/* Year */}
            <p className="text-lg font-semibold text-[#f5a623] transition-transform 
            transform duration-300 group-hover:scale-100 group-hover:-translate-y-1">{exp.year}</p>
            
            {/* Title with Subtle Centered Hover Effect */}
            <h3 className="text-xl font-bold text-[#8248bc] transition-transform 
            transform duration-300 group-hover:scale-100 group-hover:-translate-y-1">
              {exp.title}
            </h3>
            
            {/* Company & Description */}
            <h4 className="text-md font-medium text-gray-400">{exp.company}</h4>
            <p className="text-gray-500 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
              

           
      </div>
  )
}

export default Education
