import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Activity } from 'lucide-react';

const ScrollMascot: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [facingRight, setFacingRight] = useState(true);
  
  // Map scroll progress to horizontal movement across the screen
  const x = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ["10vw", "80vw", "10vw", "80vw", "50vw"]
  );
  
  // Vertical bounce to simulate walking physics
  const y = useTransform(scrollYProgress, (val) => {
    return Math.sin(val * 50) * 5;
  });

  // Determine direction for flipping the character
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const velocity = latest - (scrollYProgress.getPrevious() || 0);
    if (Math.abs(velocity) > 0.001) {
        setFacingRight(velocity > 0); // If moving down (progress increasing), usually implies specific direction based on the mapping.
        // Actually, let's check the 'x' mapping slope.
        // 0->0.25 (10->80) = Moving Right
        // 0.25->0.5 (80->10) = Moving Left
        // 0.5->0.75 (10->80) = Moving Right
        // 0.75->1.0 (80->50) = Moving Left
        if (latest < 0.25) setFacingRight(true);
        else if (latest < 0.5) setFacingRight(false);
        else if (latest < 0.75) setFacingRight(true);
        else setFacingRight(false);
    }
  });

  return (
    <motion.div
      className="fixed bottom-0 z-50 pointer-events-none hidden md:block"
      style={{ x, y }}
      transition={{ duration: 0.5 }}
    >
      {/* Character Container - Scales X to flip direction */}
      <motion.div 
        className="relative w-48 h-64 origin-bottom"
        animate={{ scaleX: facingRight ? 1 : -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* --- ROBOT CONSTRUCTION (CSS/Tailwind) --- */}

        {/* 1. LEGS (Animated) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16">
           {/* Left Leg */}
           <motion.div 
             className="absolute left-2 w-8 h-16 bg-blue-500 border-2 border-black origin-top shadow-neo-sm"
             animate={{ rotate: [-15, 15, -15] }}
             transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
           >
             <div className="absolute bottom-0 w-full h-4 bg-black"></div>
           </motion.div>
           {/* Right Leg */}
           <motion.div 
             className="absolute right-2 w-8 h-16 bg-blue-600 border-2 border-black origin-top shadow-neo-sm"
             animate={{ rotate: [15, -15, 15] }}
             transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
           >
             <div className="absolute bottom-0 w-full h-4 bg-black"></div>
           </motion.div>
        </div>

        {/* 2. BODY (Lab Coat) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-28 h-32 bg-white border-2 border-black shadow-neo z-10 flex flex-col items-center">
           {/* Collar */}
           <div className="w-full h-6 flex">
              <div className="flex-1 bg-white border-b-2 border-r-2 border-black skew-y-6 origin-top-right"></div>
              <div className="w-8 border-b-2 border-black bg-blue-200"></div> {/* Shirt under coat */}
              <div className="flex-1 bg-white border-b-2 border-l-2 border-black -skew-y-6 origin-top-left"></div>
           </div>
           {/* Buttons */}
           <div className="mt-4 space-y-4">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <div className="w-3 h-3 rounded-full bg-black"></div>
           </div>
           {/* Stethoscope (SVG Overlay) */}
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                 <path d="M30,5 Q20,60 50,80 Q80,60 70,5" fill="none" stroke="#333" strokeWidth="3" />
                 <circle cx="50" cy="80" r="6" fill="#fbbf24" stroke="#000" strokeWidth="2" />
              </svg>
           </div>
           {/* ID Badge */}
           <div className="absolute top-10 right-2 w-8 h-10 bg-white border border-black p-0.5 shadow-sm rotate-3">
               <div className="w-full h-4 bg-slate-200 mb-1 border-b border-black"></div>
               <div className="w-full h-0.5 bg-black"></div>
           </div>
        </div>

        {/* 3. HEAD */}
        <motion.div 
          className="absolute bottom-[170px] left-1/2 -translate-x-1/2 w-24 h-20 bg-white border-2 border-black shadow-neo z-20"
          animate={{ y: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
           {/* Eyes Container */}
           <div className="absolute top-6 left-0 w-full flex justify-center gap-4 px-2">
              {/* Left Eye */}
              <div className="w-6 h-6 bg-black rounded-full relative overflow-hidden">
                 <motion.div 
                   className="absolute top-0 w-full h-full bg-blue-400 rounded-full opacity-50"
                   animate={{ height: ["0%", "100%", "0%"] }} // Blinking/Scanning
                   transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
                 />
                 <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
              {/* Right Eye */}
              <div className="w-6 h-6 bg-black rounded-full relative overflow-hidden">
                 <motion.div 
                   className="absolute top-0 w-full h-full bg-blue-400 rounded-full opacity-50"
                   animate={{ height: ["0%", "100%", "0%"] }} 
                   transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
                 />
                 <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
           </div>
           {/* Head Mirror */}
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-300 rounded-full border-2 border-black flex items-center justify-center shadow-sm">
              <div className="w-2 h-2 bg-white rounded-full"></div>
           </div>
           {/* Antenna */}
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-4 bg-black"></div>
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full border border-black animate-pulse"></div>
        </motion.div>

        {/* 4. ARMS */}
        {/* Back Arm (Swinging) */}
        <motion.div 
           className="absolute bottom-20 left-4 w-8 h-24 bg-white border-2 border-black rounded-full origin-top -z-10"
           animate={{ rotate: [20, -20, 20] }}
           transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        >
          <div className="absolute bottom-0 w-full h-6 bg-blue-200 border-t-2 border-black rounded-b-full"></div>
        </motion.div>

        {/* Front Arm (Holding iPad) */}
        <motion.div 
           className="absolute bottom-16 right-2 w-8 h-20 bg-white border-2 border-black rounded-full origin-top z-30"
           animate={{ rotate: [-10, -5, -10] }}
           transition={{ repeat: Infinity, duration: 2 }}
        >
           <div className="absolute bottom-0 w-full h-6 bg-blue-200 border-t-2 border-black rounded-b-full"></div>
           
           {/* The iPad */}
           <motion.div 
              className="absolute bottom-[-20px] -right-12 w-20 h-24 bg-white border-2 border-black shadow-neo origin-bottom-left"
              style={{ rotate: -10 }}
           >
              <div className="h-2 w-full bg-black mb-1"></div>
              <div className="bg-blue-50 h-[80px] p-1 overflow-hidden">
                 <div className="flex items-center gap-1 mb-1">
                    <Activity className="w-3 h-3 text-red-600" />
                    <div className="h-1 w-8 bg-black/20 rounded"></div>
                 </div>
                 {/* Data Scrolling Animation */}
                 <motion.div 
                    className="space-y-1"
                    animate={{ y: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                 >
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="flex gap-1">
                           <div className="h-0.5 w-1/2 bg-black/30"></div>
                           <div className="h-0.5 w-1/3 bg-green-500/50"></div>
                        </div>
                    ))}
                 </motion.div>
              </div>
           </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default ScrollMascot;