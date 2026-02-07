import React from 'react';

export const Layout = ({ children, backgroundColor }) => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden transition-colors duration-[1500ms] ease-in-out"
      style={{ backgroundColor }}
    >
      {/* Grain Overlay - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.015]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Content */}
      <main className="relative z-10 w-full">
        {children}
      </main>

      {/* Global Transition Overlay (Optional - e.g. for page load) */}
      <div className="fixed inset-0 bg-sand z-[60] pointer-events-none opacity-0 animate-[fadeOut_1s_ease-out_forwards]" />
    </div>
  );
};
