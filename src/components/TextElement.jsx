import React from 'react';
import { motion } from 'framer-motion';
import { softFadeUp } from '../utils/animations';
import { twMerge } from 'tailwind-merge';

export const TextElement = ({ children, className, as: Component = 'p', delay = 0, variants }) => {
  return (
    <motion.div
      variants={variants || softFadeUp}
      custom={delay}
      whileHover={{
        x: 4,
        color: '#5D6D7E', // Muted Indigo
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={twMerge('text-balance cursor-default origin-left', className)}
    >
      <Component>{children}</Component>
    </motion.div>
  );
};
