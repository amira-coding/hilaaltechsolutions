import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const formVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* 1. HEADER */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Build Together</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don't let outdated technology bottleneck your growth. Let's discuss how we can engineer the perfect digital solution for your brand.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT BLOCK */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row max-w-7xl mx-auto"
          >
            {/* Info Side */}
            <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between z-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-dark rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 opacity-50 z-0"></div>
              
              <div className="relative z-10 font-sans">
                <span className="text-accent-light font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                <h3 className="text-4xl font-bold mb-6 text-white">Contact Info</h3>
                <p className="text-blue-100 mb-12 text-lg leading-relaxed">
                  Fill out the form, or reach out to us directly through the channels below. We typically respond within 24 hours.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Direct Line</p>
                      <a href="tel:+15551234567" className="text-2xl font-bold text-white hover:text-accent-light transition-colors">+254722688458</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Email Support</p>
                      <a href="mailto:hello@hilaaltech.com" className="text-2xl font-bold text-white hover:text-accent-light transition-colors">info@hilaaltechsolutions.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0 shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Office Location</p>
                      <p className="text-lg font-medium text-white leading-relaxed">123 Tech Boulevard, Suite 500<br/>Innovation City, TX 75001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Text Instead of Icons */}
              <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm font-bold uppercase tracking-wider text-blue-200">
                 <a href="#" className="hover:text-white transition-colors">Twitter</a>
                 <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-16 bg-gray-50/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us A Message</h2>
              <p className="text-gray-500 mb-12 text-lg">We'd love to hear about what you're building.</p>
              
              <motion.form 
                variants={formVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onSubmit={(e) => e.preventDefault()}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div variants={itemVariants} className="relative group mt-2">
                     <input type="text" id="name" className="peer w-full bg-transparent border-b-2 border-gray-300 py-2.5 text-gray-900 font-medium focus:outline-none focus:border-accent transition-colors placeholder-transparent" placeholder="John Doe" />
                     <label htmlFor="name" className="absolute left-0 -top-6 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent cursor-text">
                        Full Name
                     </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="relative group mt-2">
                     <input type="email" id="email" className="peer w-full bg-transparent border-b-2 border-gray-300 py-2.5 text-gray-900 font-medium focus:outline-none focus:border-accent transition-colors placeholder-transparent" placeholder="john@company.com" />
                     <label htmlFor="email" className="absolute left-0 -top-6 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent cursor-text">
                        Email Address
                     </label>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative mt-2">
                   <div className="relative">
                     <select id="service" className="peer w-full bg-transparent border-b-2 border-gray-300 py-2.5 text-gray-900 font-medium focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected className="text-gray-400">Select a service...</option>
                        <option value="web-design">Web UI/UX Design</option>
                        <option value="development">Full-Stack Development</option>
                        <option value="ecommerce">E-Commerce Architecture</option>
                        <option value="landing">High-Conversion Landing Page</option>
                        <option value="other">Other Inquiry</option>
                     </select>
                     <label htmlFor="service" className="absolute left-0 -top-6 text-sm font-bold text-gray-500 transition-all peer-focus:text-accent">
                        Project Type
                     </label>
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 peer-focus:text-accent transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                     </div>
                   </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative mt-2">
                   <textarea id="message" rows="4" className="peer w-full bg-transparent border-b-2 border-gray-300 py-2.5 text-gray-900 font-medium focus:outline-none focus:border-accent transition-colors placeholder-transparent resize-none" placeholder="Tell us about your project..."></textarea>
                   <label htmlFor="message" className="absolute left-0 -top-6 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent cursor-text">
                      Project Details
                   </label>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-6">
                  <button className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-accent focus:ring-4 focus:ring-accent/30 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-accent/40 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center gap-2">Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
