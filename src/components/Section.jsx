import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';
import { TextElement } from './TextElement';
import { ImageElement } from './ImageElement';
import { clsx } from 'clsx';

export const Section = ({ section, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className={clsx(
        "min-h-screen flex items-center justify-center p-8 md:p-24 relative overflow-hidden",
        section.theme === 'dark' ? 'bg-shadow text-white' : 'bg-sand text-text'
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className={clsx(
        "container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center",
        isEven ? "" : "md:grid-flow-col-dense"
      )}>
        {/* Text Side */}
        <div className={clsx("space-y-8", isEven ? "md:order-1" : "md:order-2")}>
           <TextElement as="h2" className="text-4xl md:text-6xl font-serif tracking-tight font-light opacity-90">
             {section.title}
           </TextElement>
           <TextElement as="p" className="text-lg md:text-xl font-light leading-relaxed opacity-80 max-w-md">
             {section.text}
           </TextElement>
        </div>

        {/* Image Side */}
        <div className={clsx("w-full aspect-[3/4] md:aspect-[4/5]", isEven ? "md:order-2" : "md:order-1")}>
          <ImageElement
            src={section.image}
            alt={section.title}
            className="w-full h-full shadow-2xl"
          />
        </div>
      </div>
    </motion.section>
  );
};
