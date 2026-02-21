'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Sectie met Foto & Biografie */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-24 md:pt-16 flex flex-col md:flex-row items-start gap-12 md:gap-24">
        
        {/* Linkerkant: De Foto (Sticky) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 md:sticky md:top-16"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/project_images/Vanessa.jpeg" 
              alt="Vanessa Hoefkens" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Rechterkant: De Tekst */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8 leading-tight">
            Biografie <br />
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            <p>
              Mijn naam is Vanessa, ik ben 20 jaar oud en geboren en getogen in Duffel, een plek waar ik met trots "thuis" tegen zeg. Ik draag twee culturen in mij: Belgisch en Filipijns. Die mix heeft me gevormd, maar mijn hart ligt het meest bij mijn Filipijnse roots. De warmte, de kleuren, de symboliek... het voelt als een deel van mezelf. In de toekomst wil ik mijn Filipijnse invloeden graag meer in mijn designs verwerken, zodat mijn werk niet alleen creatief is, maar ook cultureel verbonden. 
            </p>
            <p>
              Ik ben een creatieveling met een oog voor detail. Ik bouw graag moderne, gebruiksvriendelijke applicaties die niet alleen goed werken, maar ook esthetisch rust en elegantie uitstralen. Voor mij draait design om gevoel: kalmte, inspiratie en een vleugje gezelligheid. Als mensen mij herinneren als iemand met een creatieve geest en een elegante levensstijl, dan heb ik mijn doel bereikt.
            </p>
            <p>
              Koffie speelt daarbij een kleine maar belangrijke rol. Ik ben een echte koffiemens; mijn dag begint pas écht wanneer ik mijn eerste kop vastheb. Het is mijn moment van stilte, een zachte start die me helpt om in de juiste flow te komen.
            </p>
            <p>
              Buiten vind ik mijn balans. Wandelen geeft me ruimte om te ademen, mijn hoofd leeg te maken en nieuwe ideeën te laten ontstaan. En dieren hebben altijd een zachte plek in mijn leven gehad. Ze brengen rust, warmte en een soort eenvoud die me telkens opnieuw doet glimlachen.
            </p>
            <p>
              Als ik mezelf moet omschrijven: ik ben iemand die creativiteit en rust combineert, die schoonheid ziet in details en die trouw probeert te blijven aan wie ze is. Mijn leven draait om balans, inspiratie en het koesteren van de kleine dingen die elke dag bijzonder maken.
            </p>
          </div>

          {/* Navigatie Links */}
          <div className="mt-12 mb-12 flex flex-wrap gap-8 md:gap-12">
            {/* Terug naar Home */}
            <Link href="/" className="inline-block group">
              <span className="text-black font-bold uppercase tracking-widest text-sm relative pb-1">
                Terug naar home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-100 group-hover:scale-x-110 transition-transform duration-300"></span>
              </span>
            </Link>

            {/* Naar Projecten */}
            <Link href="/project" className="inline-block group">
              <span className="text-black font-bold uppercase tracking-widest text-sm relative pb-1">
                Bekijk mijn projecten
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform scale-x-100 group-hover:scale-x-110 transition-transform duration-300"></span>
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}