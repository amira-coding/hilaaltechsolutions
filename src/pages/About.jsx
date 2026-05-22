import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Target, Users } from 'lucide-react';
import CTA from '../components/CTA';

const About = () => {
  const values = [
    { icon: <Lightbulb size={32} />, title: "Innovation", desc: "Constantly pushing boundaries and adopting modern technologies." },
    { icon: <Shield size={32} />, title: "Quality", desc: "No compromises. We engineer robust, secure, and permanent solutions." },
    { icon: <Target size={32} />, title: "Client Success", desc: "Your growth is our only metric for agency success." },
    { icon: <Users size={32} />, title: "Transparency", desc: "Clear communication, radical honesty, and collaborative processes." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* 1. HERO ABOUT SECTION */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">About Our Agency</span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight max-w-4xl mx-auto">
              A Web Agency Focused on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Real Business Growth</span>
            </h1>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of strategists, designers, and engineers dedicated to elevating your brand through world-class digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY STORY & MISSION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Hilaal Tech Story</h2>
               <div className="prose prose-lg text-gray-600">
                <p>
                  Hilaal Tech Solutions began with a realization: the web development industry was oversaturated with agencies that delivered visually appealing shells lacking strategic depth and engineering rigor.
                </p>
                <p>
                  Businesses were receiving websites that looked good on day one, but failed to drive conversions, scale securely, or rank well on search engines. We set out to change that paradigm.
                </p>
                <div className="my-8 p-8 bg-gray-50 border-l-4 border-accent rounded-r-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="mb-0 italic">"To deliver high-performance, architecturally sound websites and applications that serve as foundational engines for client success."</p>
                </div>
                <p>
                  We prioritize quality over quantity. By taking on select projects, we ensure our leadership is deeply involved in every codebase and design system we deploy, aiming to become the premier digital agency in the region.
                </p>
              </div>
            </motion.div>
            
            <div className="lg:w-1/2">
               <div className="grid grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden aspect-square shadow-xl mt-12">
                    <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDERS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Leadership</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet The Founders</h2>
            <p className="text-xl text-gray-600">The visionaries driving technical excellence and creative strategy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Asad */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-96 overflow-hidden relative">
                <img src="src/assets/asadkee.jpeg" alt="Asad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="text-3xl font-bold mb-1">Asad</h3>
                   <p className="text-accent-light font-medium uppercase tracking-widest text-sm">Co-Founder & Technical Lead</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Asad spearheads the architectural decisions and engineering practices at Hilaal Tech. With a deep background in scalable cloud systems and full-stack development, he ensures every product is built to enterprise standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "Our code isn't just written; it's engineered for longevity. I believe in giving clients platforms that won't break when they scale."
                </p>
              </div>
            </motion.div>

            {/* Amira */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-96 overflow-hidden relative">
                <img src="src/assets/amira.jpeg" alt="Amira" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="text-3xl font-bold mb-1">Amira</h3>
                   <p className="text-accent-light font-medium uppercase tracking-widest text-sm">Co-Founder & Strategy Lead</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Amira oversees design systems, user experience research, and client relations. Her unique ability to translate complex business requirements into intuitive UI makes our products feel effortless to use.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "Design without strategy is just art. We focus on design as a tool—a mechanism to build trust and guide users to conversion."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VALUES & CULTURE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Agency DNA</h2>
            <p className="text-xl text-gray-600">The core values that dictate how we work, hire, and interact with our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {values.map((val, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-white text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{val.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
             ))}
          </div>

          <div className="mt-24 p-12 bg-primary rounded-3xl text-white text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
             <h3 className="text-3xl font-bold mb-6 relative z-10">Our Work Style</h3>
             <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed relative z-10 font-light">
               We operate an agile, highly collaborative environment. We move fast without breaking things, foster immense creativity, and maintain radical transparency with our partners. When you hire Hilaal Tech, you aren't outsourcing—you are extending your team.
             </p>
          </div>
        </div>
      </section>

      <CTA title="Let’s Build Something Great Together" />
    </motion.div>
  );
};

export default About;
