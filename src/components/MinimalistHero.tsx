import React from "react";
import { motion } from "framer-motion";
import HandDrawnIllustrations from "./HandDrawnIllustrations";

const CANVAS_WIDTH = 1280; // px - fixed desktop canvas width
const CANVAS_HEIGHT = 720; // px - fixed desktop canvas height

const MinimalistHero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden  bg-[radial-gradient(#bcbcbc_0.7px,transparent_1px)] [background-size:20px_20px] md:min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.2) 0.5px, transparent 0)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--minimal-cool)_/_0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_hsl(var(--minimal-warm)_/_0.25),_transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-y-0 left-8 hidden md:block w-px bg-minimal-cool/40" />
      <div className="absolute inset-y-0 right-8 hidden md:block w-px bg-minimal-warm/35" />

      <div className="absolute inset-0 hidden md:block">
        <HandDrawnIllustrations showTooltip />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs sm:text-sm font-medium text-foreground/80 shadow-sm ring-1 ring-black/5 backdrop-blur mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="h-2 w-2 rounded-full bg-minimal-warm/80" />
            Immersive media designer & XR storyteller
          </motion.span>*/}

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            himanshi puri
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-2 font-regular  tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            curious + creative + consistent
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-sm text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Designing purposeful immersive experiences
          </motion.p>

          {/*}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-muted-foreground/80"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-border/40">
              <span className="h-1.5 w-1.5 rounded-full bg-minimal-sage" />
              Research-driven design
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-border/40">
              <span className="h-1.5 w-1.5 rounded-full bg-minimal-warm" />
              XR prototyping
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-border/40">
              <span className="h-1.5 w-1.5 rounded-full bg-minimal-cool" />
              3D design & environments
            </span>
          </motion.div>
          */}

          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-xs sm:text-sm text-muted-foreground mb-4 font-light uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
            <motion.div
              className="w-px h-14 bg-gradient-to-b from-muted-foreground/80 to-transparent"
              animate={{ scaleY: [1, 0.75, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hidden md:block absolute top-20 left-24 w-3 h-3 bg-minimal-sage rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-32 right-32 w-4 h-4 bg-minimal-warm rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-10 w-2 h-2 bg-minimal-cool rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default MinimalistHero;
