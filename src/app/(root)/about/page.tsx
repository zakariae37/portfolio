"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import { ArrowBigLeft  } from "lucide-react";

export default function About() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen items-center justify-center px-4">
      <div className="pl-12 my-4 rounded-xl ">
      
        <main className="max-w-full mx-auto flex gap-12 items-center justify-between">
        
          <motion.div 
            className="space-y-8 max-w-[50%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="/" className="text-gray-700 flex items-center gap-2"> 
                <ArrowBigLeft size={40}/>
                <h3 className="text-xl font-semibold">Go Back</h3>
            </Link>
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-700"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              ABOUT
            </motion.h1>
            <motion.div
              className="h-px bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            />
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            >
             Hello, I&apos;m Zakariae Lakhdar, an experienced web developer with a focus on Next.js, React.js, and Node.js. 
             With a solid foundation from a comprehensive three-year web development program, I specialize in building dynamic, 
             impactful solutions with a creative approach to problem-solving and technical expertise. I&apos;m passionate about staying 
             current with the latest technologies and am always looking to collaborate on innovative projects where I can contribute 
             to meaningful development and team success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
              <Link
                href="https://drive.google.com/file/d/1HtUMcmH7WckTyulXfDUpkfSbiXZT02rU/view?usp=drive_link"
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
                target="_blank" // This will open the link in a new tab
                rel="noopener noreferrer" 
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 mr-2"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                >
                  resume
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/anime.jpg"
              alt="Profile portrait"
              width={400}
              height={600}
              className="object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        </main>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
