import { useState, useEffect } from "react";

const greetings = [
  "Hi", // English
  "Hola", // Spanish
  "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "Olá", // Portuguese
    "Привет", // Russian
    "こんにちは", // Japanese
    "안녕하세요", // Korean    
    "你好", // Chinese (Simplified)
    "नमस्ते", // Hindi
    "مرحبًا", // Arabic
    "שלום", // Hebrew
    "สวัสดี", // Thai
    "नमस्कार", // Marathi
    "नमस्ते", // Nepali   
    "హలో", // Telugu
    "வணக்கம்", // Tamil
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "ನಮಸ್ಕಾರ", // Kannada
    "നമസ്കാരം", // Malayalam
        
];

export default function HeroSection() {
  const sadApplemojiImg = "/assets/sad_applemoji.png";
  const happyApplemojiImg = "/assets/happy_applemoji.png";
  const [emoji, setEmoji] = useState(sadApplemojiImg);
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    let greetingIndex = 0;
    const interval = setInterval(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[greetingIndex]);
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold">
        <span className="greeting bg-gradient-to-r from-[#b388ff] to-[#f5a623] bg-clip-text text-transparent">{currentGreeting}, I'm </span>
      </h2>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent">
          Rishvanth Sabbani
        </span>
      </h1>
      <p className="mt-10 text-lg sm:text-xl text-justify text-neutral-500 font-mono max-w-4xl">
      Graduate Student in Software Engineering at Cleveland State University, focusing on advanced development, system design, and innovative software solutions. I'm Passionate about web design, typography, and design systems, 
      creating visually appealing and functional websites through creativity, precision, and user-focused approach.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://drive.google.com/file/d/1-Wy9OYhOQH96mfcv1e7tqqyB963bSJYV/view"
          target="_blank"
          className=" flex items-center space-x-2 justify-start bg-black text-white 
              rounded-lg px-6 py-3 hover:bg-[#24292f] hover:scale-105 
              transition-all duration-300 bg-gradient-to-r from-[#ff0080] to-[#7928CA] text-white px-6 py-3 
          rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          Resume
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <img
          src={emoji}
          alt="Applemoji"
          className="w-70 h-70 transition-transform transform duration-300 ease-in-out hover:scale-110"
          onMouseEnter={() => setEmoji(happyApplemojiImg)}
          onMouseLeave={() => setEmoji(sadApplemojiImg)}
        />
      </div>
    </div>
  );
}
