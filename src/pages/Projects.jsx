import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CTA from '../components/CTA';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Apps', 'Web Design', 'E-Commerce'];

  const projects = [
    {
      id: 1,
      title: "Pulse Analytics Dashboard",
      category: "Web Apps",
      problem: "A major fintech firm had fragmented data silos creating a 48-hour lag in critical financial reporting, costing them enterprise clients.",
      solution: "We engineered a centralized, real-time analytics portal utilizing a React front-end and a high-performance Node.js/GraphQL backend architecture.",
      result: "Reduced data sync time to under 2 seconds, improving report accuracy by 99.9% and saving $1.2M annually.",
      tech: ["React", "TypeScript", "Node.js", "GraphQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Aura Premium Retail",
      category: "E-Commerce",
      problem: "A luxury brand experienced a 65% cart abandonment rate due to a clunky, outdated WooCommerce setup.",
      solution: "Executed a complete headless commerce rebuild using Next.js and Shopify Plus to deliver a native-app-like mobile shopping experience.",
      result: "Boosted checkout conversion rates by 42% in the first 30 days and increased average order value by 18%.",
      tech: ["Next.js", "Shopify Plus", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "HealthCare Connect",
      category: "Web Apps",
      problem: "Patients struggled to navigate a 12-step disjointed booking process on mobile devices.",
      solution: "Developed a progressive web app (PWA) with a streamlined 3-step intuitive UI and direct EHR systems integration.",
      result: "Increased successful mobile bookings by 150% and dramatically reduced administrative call volume.",
      tech: ["React", "Firebase", "WebRTC"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Nexus Global Logistics",
      category: "Web Design",
      problem: "The client’s brand felt outdated, hurting their ability to secure massive international shipping contracts.",
      solution: "A complete brand overhaul and corporate website redesign focusing on high-trust visual language and clear service silos.",
      result: "Helped secure a 7-figure partnership within two months of launch due to elevated corporate perception.",
      tech: ["Figma", "Framer", "React"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* HEADER */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Case Studies</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We measure our success by the success of our clients. Dive into our detailed portfolio to see how we tackle complex problems.
          </motion.p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="pt-12 pb-6 bg-gray-50 border-b border-gray-200 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-lg transform -translate-y-1' 
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white min-h-[800px]">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden group flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Image Block */}
                  <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex justify-center items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                          <ArrowUpRight size={32} />
                        </div>
                    </div>
                  </div>
                  
                  {/* Content Block */}
                  <div className="lg:w-1/2 p-10 md:p-14 flex flex-col">
                    <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{project.category}</span>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">{project.title}</h3>
                    
                    <div className="space-y-6 flex-grow">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">The Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Our Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
                        <h4 className="font-bold text-green-900 text-lg mb-2">The Result</h4>
                        <p className="text-green-800 font-medium">{project.result}</p>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA title="Let’s Discuss Your Next Great Project" />
    </motion.div>
  );
};

export default Projects;
