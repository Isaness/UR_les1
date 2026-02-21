'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ImageWithModal from "./components/ImageWithModal";

export default function ProjectPage() {
  return (
    <main className="bg-white min-h-screen">
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ 
          duration: 0.8, 
          ease: "easeOut" 
        }}
        /* pt-8 op mobiel en pt-12 op desktop zet de titel direct bovenaan */
        className="max-w-4xl mx-auto pt-8 md:pt-12 px-6"
      >
        
        {/* Titel Sectie - Compacte layout */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            Projecten
          </h1>
          
          <div className="mt-4 max-w-2xl">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Een selectie van projecten waarin strategie, design en technologie samenkomen. 
              Hier zitten zowel school- als persoonlijke projecten in.
            </p>
          </div>
        </div>

        {/* Projecten Grid - Begint nu ook hoger door minder margin/padding */}
        <div className="flex flex-wrap gap-10 pt-2 pb-24">
          <ImageWithModal 
            src="/project_images/cinecity.jpeg"
            alt="cinecity"
            title="Cinecity"
            descriptions={["Voor dit project ontwierp ik de volledige visuele identiteit voor het nieuwe filmfestival CineCity in Antwerpen. De opdracht bestond uit het vertalen van de thema’s coming of age en city after dark naar een krachtige key visual en een reeks communicatiedragers."]}
            itemCount={1}
            subtitles={["Visual Design"]}
          />

          <ImageWithModal
            src="/project_images/brewtopia.jpeg"
            alt="brewtopia"
            title="Brewtopia"
            itemCount={3}
            subtitles={["Brand Design"]}
            descriptions={["In opdracht van een grote speler in de Food & Beverage-sector ontwikkelde ik een vernieuwend merkvoorstel voor een Kombucha in een 330ml ‘sleek’ blik."]}
          />

          <ImageWithModal
            src="/project_images/wenskaarten.jpg"
            alt="wenskaarten"
            title="Wenskaarten"
            descriptions={["Ik ben een persoon die er van houdt om dingen voor anderen te maken, dus ik maak soms wenskaarten."]}
            itemCount={1}
            subtitles={["Print Design"]}
          />

          <ImageWithModal
            src="/project_images/leporello.jpeg"
            alt="leporello"
            title="Leporello"
            descriptions={["In dit project stond de kracht van visuele storytelling centraal. Door zelfgecreëerde beelden te combineren met bewuste keuzes in compositie en belichting."]}
            itemCount={1}
            subtitles={["Storytelling"]}
          />
        </div>

      </motion.div>

    </main>
  );
}