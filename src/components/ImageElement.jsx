import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { imageBreath } from '../utils/animations';
import { twMerge } from 'tailwind-merge';

export const ImageElement = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={ref} className={twMerge('overflow-hidden relative', className)}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y }}
        variants={imageBreath}
        animate="animate"
      />
    </div>
  );
};
