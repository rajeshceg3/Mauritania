import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { twMerge } from 'tailwind-merge';

export const TextElement = ({ children, className, as: Component = 'p', delay = 0 }) => {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className={twMerge('text-balance', className)}
    >
      <Component>{children}</Component>
    </motion.div>
  );
};
