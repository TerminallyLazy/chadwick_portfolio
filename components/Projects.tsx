import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Bot, 
  Database, 
  MessageSquare, 
  Box, 
  Share2, 
  Eye, 
  Layers, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { RESUME_DATA } from '../constants';

const getTechIcon = (tech: string) => {
  const lower = tech.toLowerCase();
  if (lower.includes('llm')) return <Bot className="w-5 h-5" />;
  if (lower.includes('rag')) return <Database className="w-5 h-5" />;
  if (lower.includes('python')) return <Terminal className="w-5 h-5" />;
  if (lower.includes('discord')) return <MessageSquare className="w-5 h-5" />;
  if (lower.includes('cornerstone')) return <Box className="w-5 h-5" />;
  if (lower.includes('langgraph')) return <Share2 className="w-5 h-5" />;
  if (lower.includes('vision')) return <Eye className="w-5 h-5" />;
  if (lower.includes('segmentation')) return <Layers className="w-5 h-5" />;
  return <Code2 className="w-5 h-5" />;
};

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-2 uppercase">Open Source</h2>
              <p className="text-black font-bold bg-accent inline-block px-2 border-2 border-black">Contributing to the future of AI agents.</p>
           </div>
           <div className="mt-4 md:mt-0">
             <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noreferrer" className="neo-button px-4 py-2 flex items-center text-black hover:bg-primary hover:text-white">
               View GitHub <ExternalLink className="w-4 h-4 ml-2" />
             </a>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {RESUME_DATA.opensource.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white border-2 border-black shadow-neo p-8 relative overflow-hidden group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all duration-200">
                {/* Background Icon */}
                <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className="w-40 h-40 text-black" />
                </div>
                
                <h3 className="text-2xl font-black text-black mb-4 uppercase group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="w-12 h-1 bg-black mb-4"></div>
                <p className="text-slate-800 mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.tech.map((t) => (
                      <div key={t} className="group/icon relative">
                         <div className="p-2 bg-white border-2 border-black text-black hover:bg-secondary transition-colors cursor-help shadow-neo-sm">
                           {getTechIcon(t)}
                         </div>
                         {/* Tooltip */}
                         <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-bold text-white bg-black border border-black opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                           {t}
                         </span>
                      </div>
                    ))}
                  </div>

                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-sm font-bold text-black border-b-2 border-black hover:text-primary hover:border-primary transition-colors"
                   >
                     Source Code <Github className="w-4 h-4 ml-2" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;