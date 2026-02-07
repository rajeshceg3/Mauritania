export const softFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const hoverNudge = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const imageBreath = {
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 15, // Slower breath
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};
