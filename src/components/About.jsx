
const About = () => {
    
      return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
            <div className='text-center'>     
            <h2  className="text-2xl sm:text-2xl lg:text-3xl mt-10 lg:mt-5 tracking-wide 
            bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent uppercase 
            relative inline-block px-6 py-3 border border-[#ff0080] rounded-lg shadow-lg"
            style={{textShadow: "2px 2px 6px rgba(255, 0, 128, 0.6)",
                WebkitTextStroke: "1px #ff0080", 
                boxShadow: "4px 4px 12px rgba(255, 0, 128, 0.4)" 
              }}>About Me</h2>
              <div className="text-lg sm:text-xl text-center text-neutral-400 mt-20 px-4 py-2">
           <p className=" text-justify mb-5">Hi, I’m Risvanth Sabbani—a Front-end Developer with over one year of experience specializing in HTML, CSS, React, PHP, JavaScript, Wordpress. </p>
        
        <p className=" text-justify mb-5">My experience includes WordPress development with PHP for the backend, ensuring seamless content management. </p>
        
        <p className=" text-justify mb-5">I am passionate about creating user-friendly interfaces and thrive in collaborative, fast-paced environments. With a keen eye for design and performance, I focus on delivering high-quality projects on time.</p>
        
        <p className=" text-justify mb-5">Let’s connect to build something meaningful, spark new ideas, or simply share great music and stories!</p>
        </div>

        </div>   
      </div>
      );
};

export default About;