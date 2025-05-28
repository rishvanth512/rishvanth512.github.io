import { useState, useEffect, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import CanvasLoader from "../Components/CanvasLoader";
import { HackerRoom } from "../Components/HackerRoom";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../Components/HeroCamera";
import * as THREE from "three";

const greetings = [
  "Hi", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", "こんにちは", "안녕하세요", "你好",
  "नमस्ते", "مرحبًا", "שלום", "สวัสดี", "नमस्कार", "నమస్తే", "హలో", "வணக்கம்", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "ನಮಸ್ಕಾರ", "നമസ്കാരം"
];

function ThreeSettings() {
  const { gl } = useThree();

  useEffect(() => {
    gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1;
  }, [gl]);

  return null;
}

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  function calculateSizes(isSmall, isMobile, isTablet) {
    return {
      deskScale: isSmall ? 1.0 : isMobile ? 1.5 : isTablet ? 2 : 3,
      deskPosition: isSmall ? [1.3, -5.8, -5.6] : isMobile ? [1.3, -5.8, -5.6] : [5, -5.8, -5.6],
      deskRotation: [0.2, -89.53, 0],
      cameraPosition: isSmall ? [0, 0, 20] : isMobile ? [0, 0, 28] : [0, 0, 25],
    };
  }

  useEffect(() => {
    let greetingIndex = 0;
    const interval = setInterval(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      setCurrentGreeting(greetings[greetingIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center -mt-10 lg:-mt-10">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold">
        <span className="greeting bg-gradient-to-r from-[#b388ff] to-[#f5a623] bg-clip-text text-transparent">
          {currentGreeting}, I'm
        </span>
      </h2>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent">
          Rishvanth Sabbani
        </span>
      </h1>

      <p className="mt-0 text-lg sm:text-xl text-center text-neutral-500 font-mono max-w-4xl">
        Graduate Student in Software Engineering at Cleveland State University, focusing on advanced development, system design, and innovative software solutions. I'm passionate about web design, typography, and design systems, creating visually appealing and functional websites through creativity, precision, and user-focused approach.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="https://drive.google.com/file/d/1DMUhBq2ckowzAAVJXGYlTS1eg1n9Qy_j/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 justify-start bg-black text-white 
            rounded-lg px-6 py-3 hover:bg-[#24292f] hover:scale-105 
            transition-all duration-300 bg-gradient-to-r from-[#ff0080] to-[#7928CA] 
            shadow-lg hover:shadow-xl"
        >
          Resume
        </a>
      </div>

      <div className={`w-full inset-0 z-0 -mt-10 lg:-mt-10 ${
        isMobile ? "h-[500px]" : "h-[600px]"
        }`}>
        <Canvas
        dpr={[5, 10]}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ThreeSettings />
            <PerspectiveCamera makeDefault position={sizes.cameraPosition} />
            <ambientLight intensity={0.7} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={6}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[
                  (sizes.deskRotation[0] * Math.PI) / 180,
                  (sizes.deskRotation[1] * Math.PI) / 180,
                  (sizes.deskRotation[2] * Math.PI) / 180
                ]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
