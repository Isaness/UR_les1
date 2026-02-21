'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const items = [
    { text: "Visual Designer", color: "text-blue-600" },
    { text: "UI/UX Designer", color: "text-purple-600" },
    { text: "Brand Strategist", color: "text-emerald-600" },
    { text: "Creative Thinker", color: "text-orange-600" },
    { text: "Graphic Designer", color: "text-red-600" }
  ];

  const projects = [
    { id: 1, title: "Cinecity", category: "Visual Design", slug: "Visual-design" },
    { id: 2, title: "Brewtopia", category: "Brand Design", slug: "branding-design" },
    { id: 3, title: "Wenskaarten", category: "Print Design", slug: "print-design" }
  ];

  const topics = [
    { title: "Motion", desc: "Verhaalvertelling door beweging en animatie." },
    { title: "Brand", desc: "Het bouwen van sterke, visuele merkidentiteiten." },
    { title: "Visual", desc: "Krachtige composities en grafische esthetiek." }
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans">
      
      {/* SECTION 1: SPLIT HERO */}
      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-full bg-white flex flex-col justify-center p-12 md:pl-12 md:pr-48 z-20">
          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-[0.9] tracking-tighter uppercase select-none"
            >
              <div className="flex">
                {"Vanessa".split("").map((letter, i) => (
                  <motion.span key={`v-${i}`} whileHover={{ filter: "blur(8px)", opacity: 0.5 }} className="inline-block transition-all duration-300">{letter}</motion.span>
                ))}
              </div>
              <div className="flex">
                {"Hoefkens".split("").map((letter, i) => (
                  <motion.span key={`h-${i}`} whileHover={{ filter: "blur(8px)", opacity: 0.5 }} className="inline-block transition-all duration-300">{letter}</motion.span>
                ))}
              </div>
            </motion.h1>

            <div className="h-14 flex items-center mt-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={items[index].text}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                  className={`text-xl md:text-4xl font-bold uppercase tracking-widest ${items[index].color}`}
                >
                  {items[index].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-full overflow-hidden border-l border-gray-100">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: "url('project_images/foto fontain.jpeg')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-30">
             <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg shadow-xl transition-all duration-300 uppercase tracking-widest border border-black/5"
                >
                  Learn more
                </motion.button>
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: RECENTE PROJECTEN */}
      <section className="relative z-30 min-h-screen bg-black text-white px-6 py-24 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm tracking-[0.5em] uppercase opacity-50 mb-4">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Recente Projecten
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-6xl">
          {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ x: 20 }}
                className="group border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between transition-colors hover:border-white"
              >
                <div>
                  <span className="text-blue-500 font-mono text-sm mb-2 block tracking-widest uppercase">
                    0{project.id} / {project.category}
                  </span>
                  <h4 className="text-4xl md:text-6xl font-bold uppercase group-hover:italic transition-all">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MINI ABOUT ME */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('project_images/park.jpeg')" }}
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-32">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-8">
              About Me
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
              Mijn werk bevindt zich op het snijvlak van visuele identiteit en menselijke ervaring. 
              Ik geloof in vormgeving die een verhaal vertelt en merken een onvergetelijke plek geeft.
            </p>
            <Link href="/about" className="inline-block group">
              <span className="text-black font-bold uppercase tracking-widest text-sm relative">
                Learn more
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: TOPICS */}
      <section className="relative w-full bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
              Topics waar ik aan werk
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 border border-gray-100 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:border-black"
              >
                <h4 className="text-2xl font-black uppercase tracking-widest mb-4 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h4>
                <div className="w-10 h-[2px] bg-black mb-6 group-hover:w-20 transition-all"></div>
                <p className="text-gray-500 leading-relaxed">
                  {topic.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
