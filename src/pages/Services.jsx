import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, LayoutTemplate, ShoppingCart, Wrench, CheckCircle } from 'lucide-react';
import CTA from '../components/CTA';

const Services = () => {
  const servicesData = [
    {
      id: "web-design",
      icon: <Layout size={40} className="text-blue-500" />,
      tag: "Web Design",
      title: "UI/UX Design That Converts",
      description: "We don't just make things look pretty. We engineer user interfaces designed to guide your visitors exactly where you want them to go. Our data-driven design process ensures every color, button, and layout choice serves a specific business objective.",
      benefits: ["Deep user journey mapping", "Conversion rate optimization focus", "High-fidelity clickable prototypes", "Custom, non-templated brand aesthetics"],
      perfectFor: "Companies facing high bounce rates or rebranding efforts.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      bgClass: "bg-blue-50"
    },
    {
      id: "web-development",
      icon: <Code size={40} className="text-purple-500" />,
      tag: "Web Development",
      title: "Enterprise-Grade Engineering",
      description: "Using the MERN stack, Next.js, and modern headless architectures, we build web applications that are lightning-fast, ultra-secure, and ready to scale. We write clean, documented code that your internal teams can easily inherit.",
      benefits: ["React / Next.js architecture", "API development and massive integrations", "Server-Side Rendering (SSR) for speed", "Bank-level security protocols"],
      perfectFor: "Startups and enterprises needing complex data handling and dashboards.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      bgClass: "bg-purple-50"
    },
    {
      id: "landing-pages",
      icon: <LayoutTemplate size={40} className="text-green-500" />,
      tag: "Landing Pages",
      title: "High-Octane Landing Pages",
      description: "Running paid ads? Don't send expensive traffic to a generic homepage. We build standalone, laser-focused landing pages designed specifically to capture leads, sell a single product, or promote an event with maximum efficiency.",
      benefits: ["A/B testing ready", "Sub-second load times", "Persuasive copywriting structure", "Integrated analytics tracking"],
      perfectFor: "Marketing teams running Google Ads, Meta Ads, or product launches.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      bgClass: "bg-green-50"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart size={40} className="text-orange-500" />,
      tag: "E-Commerce",
      title: "Scalable E-Commerce Platforms",
      description: "Modern digital retail demands flawless performance. We craft custom e-commerce experiences on platforms like Shopify Plus, or build completely bespoke headless commerce solutions that give you ultimate flexibility and unrivaled speed.",
      benefits: ["Frictionless checkout flows", "Complex inventory system integrations", "Headless commerce architecture", "Advanced product filtering"],
      perfectFor: "Retailers looking to scale past 7-figures online.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
      bgClass: "bg-orange-50"
    },
    {
      id: "maintenance",
      icon: <Wrench size={40} className="text-gray-700" />,
      tag: "Support & Maintenance",
      title: "Website Maintenance & Security",
      description: "A website is never truly 'done'. We offer premium retainer packages to ensure your digital assets remain secure against threats, perform optimally, and evolve alongside your business with continuous iterative improvements.",
      benefits: ["24/7 uptime monitoring", "Weekly framework and plugin updates", "Monthly performance audits", "Priority development hours"],
      perfectFor: "Established brands requiring absolute reliability and peace of mind.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      bgClass: "bg-gray-100"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* 1. HERO SERVICES */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From initial strategy to final deployment, we provide end-to-end digital engineering. Explore how we can solve your specific business challenges.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES BREAKDOWN */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-32 py-16">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
              >
                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${service.bgClass} shadow-inner`}>
                    {service.icon}
                  </div>
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">{service.tag}</span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-10">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-700 font-medium">
                          <CheckCircle size={18} className="text-accent mt-1 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 bg-primary/5 p-5 rounded-xl border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">!</div>
                    <p className="text-gray-800 font-medium"><span className="font-bold text-primary">Perfect for:</span> {service.perfectFor}</p>
                  </div>
                </div>
                
                {/* Image Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-700 z-10"></div>
                    <img src={service.image} alt={service.title} className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Scale Your Digital Presence?" />
    </motion.div>
  );
};

export default Services;
