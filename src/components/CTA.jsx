import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <svg fill="none" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
          <path d="M0,100 C20,0 50,0 100,100 Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something <span className="text-accent">Great</span> Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
            Ready to transform your ideas into reality? Partner with Hilaal Tech Solutions and take your digital presence to the next level.
          </p>
          
          <div className="flex justify-center">
            <Link to="/contact" className="px-10 py-4 bg-accent hover:bg-accent-light text-white rounded-full font-bold text-lg shadow-xl hover:shadow-accent/30 transition-all transform hover:-translate-y-1">
              Start Your Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
