import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ChatBot from './components/ChatBot';
import ScrollMascot from './components/ScrollMascot';
import { Mail, MapPin, Phone } from 'lucide-react';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-50"></div>
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        
        {/* Footer */}
        <footer className="py-12 border-t-2 border-black bg-accent/10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-display font-black uppercase tracking-tight text-black">{RESUME_DATA.name}</h2>
              <p className="text-black font-medium border-b-2 border-primary inline-block">{RESUME_DATA.title}</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 text-sm font-bold text-black">
               <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center hover:text-primary transition-colors neo-button px-4 py-2 bg-white rounded-none">
                 <Mail className="w-4 h-4 mr-2" /> {RESUME_DATA.contact.email}
               </a>
               <div className="flex items-center neo-button px-4 py-2 bg-white rounded-none cursor-default">
                 <MapPin className="w-4 h-4 mr-2" /> {RESUME_DATA.contact.location}
               </div>
               <div className="flex items-center neo-button px-4 py-2 bg-white rounded-none cursor-default">
                 <Phone className="w-4 h-4 mr-2" /> {RESUME_DATA.contact.phone}
               </div>
            </div>

          </div>
            <div className="text-xs md:text-center text-center md:flex-row mx-auto py-8 font-mono font-bold">
              © {new Date().getFullYear()} Chadwick B. Jones.
            </div>
        </footer>
      </main>
      
      <ScrollMascot />
      <ChatBot />
    </div>
  );
};

export default App;