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

  // Lazy parallax - moves slightly opposite to scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={twMerge('overflow-hidden relative group', className)}>
      <motion.div className="w-full h-full overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover origin-center"
          style={{ y }}
          variants={imageBreath}
          animate="animate"
          whileHover={{
            scale: 1.08,
            filter: "brightness(1.08) contrast(1.05)",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
        />
      </motion.div>

      {/* Subtle overlay for atmosphere/depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-shadow/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
      />
    </div>
  );
};
