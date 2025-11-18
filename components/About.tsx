import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-accent/5 border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
             <div className="inline-block bg-black text-white px-3 py-1 font-bold text-xs uppercase mb-4 shadow-neo-sm">Overview</div>
             <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
               Architecting Data-Driven <span className="bg-primary text-white px-2">Solutions</span>
             </h2>
             <div className="bg-white border-2 border-black shadow-neo p-6 mb-8">
                <p className="text-black leading-relaxed text-lg font-medium">
                  {RESUME_DATA.summary}
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-secondary text-black border-2 border-black shadow-neo flex flex-col items-center justify-center text-center">
                 <div className="text-4xl font-black mb-1">15+</div>
                 <div className="text-xs font-bold uppercase tracking-wider">Years Experience</div>
               </div>
               <div className="p-6 bg-accent text-black border-2 border-black shadow-neo flex flex-col items-center justify-center text-center">
                 <div className="text-4xl font-black mb-1">$100K+</div>
                 <div className="text-xs font-bold uppercase tracking-wider">Funding Secured</div>
               </div>
             </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 bg-white border-2 border-black shadow-neo">
                <h3 className="text-black font-black text-xl mb-4 uppercase border-b-2 border-black pb-2">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                   {RESUME_DATA.skills.interop.slice(0,4).map(s => (
                     <span key={s} className="px-3 py-1 text-xs font-bold uppercase bg-blue-100 text-black border-2 border-black hover:bg-blue-200 transition-colors">{s}</span>
                   ))}
                   {RESUME_DATA.skills.analytics.slice(0,3).map(s => (
                     <span key={s} className="px-3 py-1 text-xs font-bold uppercase bg-green-100 text-black border-2 border-black hover:bg-green-200 transition-colors">{s}</span>
                   ))}
                </div>
              </div>
              
              <div className="p-6 bg-white border-2 border-black shadow-neo">
                <h3 className="text-black font-black text-lg mb-3 uppercase">Tools</h3>
                <ul className="space-y-2 text-sm font-bold text-slate-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>SQL & Python</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>Tableau / Power BI</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>Jira / Git</li>
                </ul>
              </div>

              <div className="p-6 bg-white border-2 border-black shadow-neo">
                <h3 className="text-black font-black text-lg mb-3 uppercase">Focus</h3>
                <ul className="space-y-2 text-sm font-bold text-slate-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>AI Integration</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>Data Provenance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>HIPAA</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;