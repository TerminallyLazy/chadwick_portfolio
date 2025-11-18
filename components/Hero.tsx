import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Database, Activity, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white border-b-2 border-black">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent border-2 border-black shadow-neo rotate-12 hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-secondary rounded-full border-2 border-black shadow-neo hidden md:block"></div>
      <div className="absolute top-40 right-10 w-12 h-12 bg-primary border-2 border-black shadow-neo -rotate-12 hidden md:block"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-6 transform -rotate-2">
            <span className="py-2 px-4 bg-accent border-2 border-black shadow-neo text-black font-bold tracking-wider uppercase text-sm">
              Healthcare Data Analyst & Informaticist
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-black text-black mb-6 leading-[0.9] tracking-tighter uppercase">
            <span className="bg-white text-black border-2 border-black px-2 shadow-neo-sm">Chadwick B.</span> <br/> 
            <span className="text-primary" style={{ WebkitTextStroke: '3px black' }}>Jones</span>
          </h1>
          
          <div className="bg-white border-2 border-black shadow-neo p-6 max-w-2xl mx-auto mb-6 transform rotate-1">
            <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
              Bridging the gap between complex <span className="bg-blue-200 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-1 mx-1">clinical data</span> and actionable <span className="bg-green-200 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-1 mx-1">AI insights</span>. 
              Specializing in HL7, FHIR, and Predictive Analytics.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
           {[
             { icon: Database, text: "Clinical Data Integration", color: "bg-blue-100" },
             { icon: Brain, text: <span className="flex items-center gap-1"><span className="bg-yellow-200 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-1 mx-1text-black">Healthcare</span> Informatics</span>, color: "bg-green-100" },
             { icon: Activity, text: "Workflow Optimization", color: "bg-yellow-100" }
           ].map((item, idx) => (
             <div key={idx} className={`flex items-center gap-2 px-4 py-3 bg-white border-2 border-black shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-lg transition-transform`}>
               <item.icon className="w-5 h-5 text-black" strokeWidth={2.5} />
               <span className="font-bold text-sm text-black uppercase">{item.text}</span>
             </div>
           ))}
        </motion.div>

        <motion.button
           onClick={scrollToAbout}
           className="neo-button inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-slate-800 border-2 border-black"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 5, 0] }}
           transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-bold uppercase tracking-widest">Explore Profile</span>
          <ArrowDown className="w-5 h-5" strokeWidth={3} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;