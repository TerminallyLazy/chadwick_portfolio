import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { subject: 'Clinical Interop', A: 90, fullMark: 100 },
  { subject: 'Data Analysis', A: 90, fullMark: 100 },
  { subject: 'BI & Visualization', A: 80, fullMark: 100 },
  { subject: 'Strategy', A: 75, fullMark: 100 },
  { subject: 'Open Source', A: 85, fullMark: 100 },
  { subject: 'EHR/EMR', A: 80, fullMark: 100 },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-accent/5 border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-3 py-1 font-bold text-xs uppercase mb-4 shadow-neo-sm">Capabilities</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-4 uppercase">Technical Expertise</h2>
          <p className="text-black font-medium">Balanced profile of technical depth and strategic leadership.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="h-[450px] w-full bg-white border-2 border-black shadow-neo p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#000" strokeWidth={1} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#000', fontSize: 12, fontWeight: 'bold', fontFamily: 'Space Grotesk' }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#000"
                  strokeWidth={3}
                  fill="#3b82f6"
                  fillOpacity={0.8}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderColor: '#000', borderWidth: '2px', color: '#000', borderRadius: '0px', boxShadow: '4px 4px 0px 0px #000' }}
                    itemStyle={{ color: '#000', fontWeight: 'bold' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-8">
             <div className="space-y-2">
               <h3 className="text-xl text-black font-black uppercase flex items-center">
                 <span className="w-4 h-4 bg-primary border border-black mr-2"></span>
                 Interop & Standards
               </h3>
               <p className="text-slate-800 font-medium text-sm">Expertise in standardizing heterogeneous data using HL7 v2, C-CDA, and FHIR R4. Proven ability to author SOPs for data mapping.</p>
               <div className="w-full bg-white border-2 border-black h-4 rounded-none overflow-hidden relative">
                 <motion.div 
                    className="bg-primary h-full absolute top-0 left-0" 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '95%' }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                 />
               </div>
             </div>

             <div className="space-y-2">
               <h3 className="text-xl text-black font-black uppercase flex items-center">
                  <span className="w-4 h-4 bg-secondary border border-black mr-2"></span>
                  Data Analytics
               </h3>
               <p className="text-slate-800 font-medium text-sm">Building reliable pipelines with SQL, Python, and SAS. Automated workflows for health-informatics research.</p>
               <div className="w-full bg-white border-2 border-black h-4 rounded-none overflow-hidden relative">
                 <motion.div 
                    className="bg-secondary h-full absolute top-0 left-0" 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '90%' }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                 />
               </div>
             </div>

             <div className="space-y-2">
               <h3 className="text-xl text-black font-black uppercase flex items-center">
                  <span className="w-4 h-4 bg-accent border border-black mr-2"></span>
                  AI & Innovation
               </h3>
               <p className="text-slate-800 font-medium text-sm">Contributor to Agent Zero AI Framework and creator of Novion Radiology Assistant. Practical experience with RAG and LLMs.</p>
               <div className="w-full bg-white border-2 border-black h-4 rounded-none overflow-hidden relative">
                 <motion.div 
                    className="bg-accent h-full absolute top-0 left-0" 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '75%' }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                 />
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;