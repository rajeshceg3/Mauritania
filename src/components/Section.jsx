import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';
import { TextElement } from './TextElement';
import { ImageElement } from './ImageElement';
import { clsx } from 'clsx';

export const Section = ({ section, index, onInView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className={clsx(
        "min-h-screen flex items-center justify-center py-24 px-8 md:px-24 md:py-48 relative overflow-hidden w-full",
        // Remove bg color from here as it's handled globally now, but keep text color logic
        section.theme === 'dark' ? 'text-white' : 'text-text'
      )}
      initial="hidden"
      whileInView="visible"
      onViewportEnter={onInView}
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
    >
      <div className={clsx(
        "container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center max-w-7xl",
        isEven ? "" : "md:grid-flow-col-dense"
      )}>
        {/* Text Side */}
        <div className={clsx("space-y-10 relative z-10", isEven ? "md:order-1" : "md:order-2")}>
           <TextElement as="h2" className="text-5xl md:text-8xl font-serif tracking-tight font-light opacity-90 leading-none">
             {section.title}
           </TextElement>
           <TextElement as="p" delay={0.2} className="text-xl md:text-2xl font-light leading-relaxed opacity-80 max-w-md">
             {section.text}
           </TextElement>
        </div>

        {/* Image Side */}
        <div className={clsx("w-full aspect-[3/4] md:aspect-[4/5] relative z-10", isEven ? "md:order-2" : "md:order-1")}>
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
