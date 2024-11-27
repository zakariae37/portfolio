"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grip } from 'lucide-react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { gsap } from 'gsap';
import { AnimatedButton } from './shared/AnimatedButton';
import { Nav } from './shared/Nav';

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(prevState => !prevState);
  };

  useEffect(() => {
    gsap.fromTo(
      ".header-text, .header-paragraph, .header-link",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  
    const typingEffect = (element: HTMLElement | null, text: string, speed: number): ReturnType<typeof setInterval> | null => {
      if (!element) return null;
  
      element.textContent = ''; // Clear existing content before starting the effect
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return interval; // Return the interval ID
    };
  
    const h1 = document.querySelector('.header-h1') as HTMLElement;
    const interval = typingEffect(h1, "HEY, I'M ZAKARIAE LAKHDAR", 50);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (interval !== null) { // Check against null instead of void
        clearInterval(interval);
      }
    };
  }, []); 

  return (
    <BackgroundBeamsWithCollision>
      <div>
        <div>
          
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 "></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-pink-200 to-purple-200 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full -translate-x-1/4 translate-y-1/4 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-yellow-200 to-pink-200 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
          <div className="absolute top-4 right-4 flex items-center space-x-2 text-gray-600">
            <Grip className="w-10 h-10 cursor-pointer" onClick={toggleNav} />
            {navVisible && <Nav />} 
          </div>

        
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
          <h1
            className="header-text header-h1 text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            style={{
              color: 'transparent', 
              WebkitTextStroke: '2.5px #4A5568',
            }}
          >
          </h1>
            <h2 className="header-text text-xl md:text-2xl lg:text-3xl font-semibold text-gray-500 mb-4">
              BUT YOU CAN CALL ME CODEWIZ
            </h2>
            <p className="header-paragraph text-md md:text-lg text-gray-600 mb-8">
              I&apos;m a full stack web developer specializing in Next.js, React, and Node.js.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#projects"
              >
                 <AnimatedButton 
              buttonText="see my projects" 
              icon="✈️" 
            />

              </Link>
              <Link
                href="/about"
                className="header-link text-blue-600 hover:text-blue-800 transition-colors"
              >
                → more about me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
