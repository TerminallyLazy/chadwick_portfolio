import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-b-2 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-2 uppercase">Professional Journey</h2>
          <div className="w-24 h-2 bg-accent mx-auto border-2 border-black"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-black"></div>

          <div className="space-y-16">
            {RESUME_DATA.experience.map((job, index) => (
              <motion.div 
                key={job.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`neo-card p-6 relative group hover:bg-accent/10`}>
                    {/* Connector Line for Desktop */}
                    <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? '-left-10' : '-right-10'} w-8 h-1 bg-black`}></div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b-2 border-black/10">
                      <h3 className="text-xl font-black text-black uppercase">{job.role}</h3>
                      <span className="inline-flex items-center text-xs font-bold text-white bg-black px-2 py-1 border-2 border-black shadow-neo-sm">
                        <Calendar className="w-3 h-3 mr-1" /> {job.period}
                      </span>
                    </div>
                    <div className="text-primary font-extrabold mb-3 flex items-center uppercase tracking-wide">
                      <Briefcase className="w-5 h-5 mr-2 text-black" strokeWidth={2.5} />
                      {job.company}
                    </div>
                    <p className="text-black font-bold text-sm mb-4 bg-yellow-100 border border-black p-2 inline-block">{job.description}</p>
                    <ul className="space-y-2">
                      {job.points.map((point, idx) => (
                        <li key={idx} className="text-slate-800 text-sm flex items-start font-medium">
                          <span className="w-2 h-2 bg-secondary border border-black mt-1.5 mr-3 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-black z-10 flex items-center justify-center shadow-neo-sm">
                </div>
                
                {/* Spacer for layout balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;