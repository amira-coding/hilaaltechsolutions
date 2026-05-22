import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Layout, Code, PenTool, LayoutTemplate, ShoppingCart, Wrench,
  Zap, Smartphone, Search, Database, Shield, Star, CheckCircle, Rocket, Target, Users
} from 'lucide-react';
import CTA from '../components/CTA';

const Home = () => {
  const services = [
    { icon: <Layout size={28} />, title: "Web Design", desc: "Data-driven UI/UX design that converts visitors into customers." },
    { icon: <Code size={28} />, title: "Web Development", desc: "High-performance websites built with React and modern tech stacks." },
    { icon: <PenTool size={28} />, title: "UI/UX Design", desc: "Intuitive, engaging user experiences built upon deep user research." },
    { icon: <LayoutTemplate size={28} />, title: "Landing Pages", desc: "High-converting single pages tailored for marketing campaigns." },
    { icon: <ShoppingCart size={28} />, title: "E-commerce", desc: "Scalable online stores engineered for maximum sales and speed." },
    { icon: <Wrench size={28} />, title: "Website Maintenance", desc: "Ongoing 24/7 support, security updates, and performance tuning." }
  ];

  const reasons = [
    { icon: <Zap size={24} />, title: "Lightning Fast Delivery" },
    { icon: <Layout size={24} />, title: "Clean Modern Design" },
    { icon: <Smartphone size={24} />, title: "Mobile-First Approach" },
    { icon: <Search size={24} />, title: "SEO Optimized Code" },
    { icon: <Database size={24} />, title: "Secure & Scalable Systems" }
  ];

  const process = [
    { step: "01", icon: <Target size={32} />, title: "Discovery", desc: "We deep-dive into your business goals, target audience, and project scope." },
    { step: "02", icon: <PenTool size={32} />, title: "Design", desc: "Our UI/UX experts craft beautiful, conversion-optimized wireframes and high-fidelity mockups." },
    { step: "03", icon: <Code size={32} />, title: "Development", desc: "We write clean, scalable code using modern frameworks to bring the design to life." },
    { step: "04", icon: <Rocket size={32} />, title: "Launch", desc: "Rigorous testing across all devices before a smooth, seamless deployment." },
    { step: "05", icon: <Users size={32} />, title: "Support", desc: "Ongoing maintenance and iterative improvements to keep your site at peak performance." }
  ];

  const projects = [
    {
      title: "FinTech Dashboard Analytics",
      category: "Web App Development",
      description: "A centralized, real-time dashboard unifying fragmented financial data. Resulted in a 40% reduction in reporting times.",
      tech: ["React", "Node.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "HealthCare Connect Portal",
      category: "Web Design & Development",
      description: "Patient management ecosystem connecting doctors and patients seamlessly. Increased appointment conversions by 150%.",
      tech: ["Next.js", "PostgreSQL", "Figma"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Elevate E-Commerce",
      category: "E-Commerce",
      description: "Complete re-platforming for a high-volume retailer targeting global expansion. Boosted online revenue by 210% in Year 1.",
      tech: ["React", "Shopify Plus", "GraphQL"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "CMO, TechFlow", text: "Hilaal Tech didn't just build a website; they built our digital growth engine. Their attention to detail is unmatched." },
    { name: "Marcus Chen", role: "Founder, Zenith Logistics", text: "The team understood our complex requirements immediately. The final product was faster and cleaner than we could have imagined." },
    { name: "Elena Rostova", role: "Director, Pulse Health", text: "Professional, communicative, and exceptionally deep technically. They feel less like an agency and more like an internal team." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-white"></div>
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 mask-image-gradient"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-700 uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Leading Web & App Agency
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                We Build High-Performance Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grow Businesses</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                From initial concept to final launch, Hilaal Tech Solutions is your partner for bespoke web development that drives real, measurable growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1 hover:shadow-primary/40 flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-800 font-semibold text-lg shadow-md border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  View Our Work
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-accent" /> Fast Delivery</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-accent" /> Clean Design</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-accent" /> SEO Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-10 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Trusted by growing businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholder */}
            {['Acme Corp', 'GlobalTech', 'Nexus', 'Elevate', 'Aura'].map((logo, i) => (
              <span key={i} className="text-2xl font-black text-gray-500">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SHORT INTRO */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Where Modern Design Meets <span className="text-primary">Flawless Execution.</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8 mx-auto lg:mx-0 max-w-2xl">
                <p>
                  At Hilaal Tech Solutions, we believe your website should be your hardest-working asset. Founded by industry veterans Asad and Amira, we bridge the gap between stunning visual design and robust technical engineering.
                </p>
                <p>
                  We don't just write code; we solve complex business problems. Whether you need a corporate web presence, a high-converting landing page, or a massive e-commerce platform, our agency delivers tailored solutions focused exclusively on your growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-xl mx-auto lg:mx-0">
                <div className="flex-1 text-center py-2 sm:py-0 sm:border-r border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">Asad</div>
                  <div className="text-sm font-medium text-gray-500">Co-Founder, Tech Lead</div>
                </div>
                <div className="w-full h-px sm:hidden bg-gray-100"></div>
                <div className="flex-1 text-center py-2 sm:py-0">
                  <div className="text-3xl font-bold text-primary mb-1">Amira</div>
                  <div className="text-sm font-medium text-gray-500">Co-Founder, Design Strategy</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src="/src/assets/team.jpeg" alt="Agency Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-500"></div>
                
                {/* Decorative element for mobile/tablet */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Web Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to launch, scale, and maintain a powerful digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-primary font-bold text-lg hover:text-accent transition-colors group">
              Explore All Services <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">The Hilaal Advantage</span>
              <h2 className="text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We blend agency-level creative design with enterprise-grade technical engineering to deliver uncompromised quality.
              </p>
              <Link to="/about" className="px-8 py-3 rounded-full border border-gray-700 hover:border-white hover:bg-white hover:text-gray-900 transition-all font-semibold inline-block">
                Learn About Our Standards
              </Link>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-accent flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                      <p className="text-gray-400">Industry-leading standards applied precisely to your specific project needs.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work That Drives ROI</h2>
              <p className="text-xl text-gray-600">Explore case studies where we've turned complex challenges into competitive advantages.</p>
            </div>
            <Link to="/projects" className="px-8 py-3 rounded-full bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition-all whitespace-nowrap shadow-sm hover:shadow-md">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent font-bold tracking-wider text-xs uppercase mb-2 block drop-shadow-md">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 text-xs font-semibold rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Workflow</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Proven Process For Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line */}
                {i !== process.length - 1 && (
                  <div className="hidden md:block absolute top-[40px] left-[50%] w-full h-[2px] bg-gray-100 -z-10 group-hover:bg-accent/30 transition-colors duration-500"></div>
                )}
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">{p.step}</span>
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Partners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-700 text-lg italic mb-8 relative z-10">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{test.name}</h5>
                    <p className="text-sm text-gray-500">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <CTA title="Let’s Build a Website That Grows Your Business" />
    </motion.div>
  );
};

export default Home;
