import React from "react";
import { motion } from "framer-motion";

interface HandDrawnIllustrationsProps {
  showTooltip?: boolean;
}

/**
 * NOTES:
 * - This component places all illustrations inside a fixed-size "canvas"
 *   (CANVAS_WIDTH x CANVAS_HEIGHT). The canvas is centered on the page.
 * - Illustration positions (top/left/right) are interpreted relative to this canvas.
 * - Images are given fixed pixel sizes so they remain identical across desktop/laptop screens.
 * - Tooltips use absolute positions relative to the canvas and won't shift with viewport size.
 *
 * If you want a different fixed desktop canvas size, change CANVAS_WIDTH / CANVAS_HEIGHT.
 */

const CANVAS_WIDTH = 1200; // px - fixed desktop canvas width
const CANVAS_HEIGHT = 800; // px - fixed desktop canvas height

const HandDrawnIllustrations: React.FC<HandDrawnIllustrationsProps> = ({
  showTooltip = true,
}) => {
  const [hoveredIllustration, setHoveredIllustration] = React.useState<
    string | null
  >(null);

  const illustrations = [
    {
      name: "netflix",
      message: "Binge-watching counts as research, right?",
      // fixed image dimensions below
      svg: (
        <img
          src="/Photos/illustrations/21.png"
          alt="Netflix Logo"
          width={180}
          height={350}
          style={{ width: 180, height: 350 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "4%", left: "90%" },
      color: "text-red-500",
      tooltipPosition: { right: "-25%", top: "-2rem" },
    },
    {
      name: "chai",
      message: "Chai Addicted",
      svg: (
        <img
          src="/Photos/illustrations/22.png"
          alt="Chai logo"
          width={160}
          height={160}
          style={{ width: 160, height: 160 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "62%", right: "2%" },
      color: "text-amber-600",
      tooltipPosition: { right: "16%", top: "-2.5rem" },
    },
    {
      name: "rajma-chawal",
      message: "Comfort food",
      svg: (
        <img
          src="/Photos/illustrations/26.png"
          alt="Rajma Chawal"
          width={150}
          height={120}
          style={{ width: 150, height: 120 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "2%", left: "1%" },
      color: "text-orange-600",
      tooltipPosition: { left: "10%", top: "-2.5rem" },
    },
    {
      name: "Unreal Engine",
      message: "Creating cool 3d Environments",
      svg: (
        <img
          src="/Photos/illustrations/15.png"
          alt="Unreal Engine"
          width={240}
          height={180}
          style={{ width: 240, height: 180 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "22%", right: "65%" },
      color: "text-blue-600",
      tooltipPosition: { right: "10%", top: "-2.5rem" },
    },
    {
      name: "Plants",
      message: "Plant Parent",
      svg: (
        <img
          src="/Photos/illustrations/19.png"
          alt="Plants"
          width={320}
          height={240}
          style={{ width: 320, height: 240 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "92%", Right: "90%" },
      color: "text-purple-600",
      tooltipPosition: { left: "20%", top: "3rem" },
    },
    {
      name: "VR Headset",
      message: "Living in multiple realities.",
      svg: (
        <img
          src="/Photos/illustrations/16.png"
          alt="VR Headset"
          width={420}
          height={380}
          style={{ width: 420, height: 380 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "25%", left: "74%" },
      color: "text-green-600",
      tooltipPosition: { left: "5%", top: "-1rem" },
    },
    {
      name: "to do list",
      message: "Planning and strategizing",
      svg: (
        <img
          src="/Photos/illustrations/14.png"
          alt="To do list"
          width={220}
          height={280}
          style={{ width: 220, height: 280 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "82%", right: "16%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "5%", top: "-2.5rem" },
    },
    {
      name: "Research",
      message: "Brainstorming sessions",
      svg: (
        <img
          src="/Photos/illustrations/25.png"
          alt="Research"
          width={380}
          height={250}
          style={{ width: 380, height: 250 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "1%", right: "40%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "10%", top: "2rem" },
    },
    {
      name: "ipad",
      message: "sketching and illustrating on my ipad",
      svg: (
        <img
          src="/Photos/illustrations/27.png.webp"
          alt="iPad"
          width={200}
          height={140}
          style={{ width: 200, height: 140 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "25%", right: "27%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "6%", top: "-2rem" },
    },
    {
      name: "3d modelling",
      message: "3d modelling",
      svg: (
        <img
          src="/Photos/illustrations/24.png"
          alt="3D modelling"
          width={400}
          height={340}
          style={{ width: 400, height: 340 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "27%", right: "80%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "10%", top: "2rem" },
    },
    {
      name: "Stock Market",
      message: "Investing wisely",
      svg: (
        <img
          src="/Photos/illustrations/20.png"
          alt="Stock Market"
          width={260}
          height={320}
          style={{ width: 260, height: 320 }}
          className="object-contain select-none"
          draggable={false}
        />
      ),
      position: { top: "57%", left: "10%" },
      color: "text-indigo-600",
      tooltipPosition: { left: "5%", top: "3rem" },
    },
  ];

  return (
    // Outer wrapper centers the fixed-size canvas on the page.
    <div
      className="w-full flex justify-center items-start"
      // ensure the wrapper doesn't shrink the canvas on smaller viewports
      style={{ minHeight: "100vh", paddingTop: 40 }}
    >
      {/* Fixed-size canvas: positions inside are relative to this box */}
      <div
        className="relative"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          // optional: visible border for debugging; remove border if you want clean output
          // border: "1px dashed rgba(0,0,0,0.05)",
          userSelect: "none",
        }}
      >
        {illustrations.map((illustration, index) => {
          // We'll spread the position object directly into inline style.
          // The position values are strings like "7%", "74%", etc. They are valid CSS.
          const posStyle: React.CSSProperties = {
            position: "absolute",
            ...((illustration.position as unknown) as React.CSSProperties),
            // ensure pointer works
            pointerEvents: "auto",
            zIndex: 20,
            // keep transform origin center for nicer animations
            transformOrigin: "center center",
          };

          // Tooltip inline style; keep it absolute inside the same canvas
          const tooltipStyle: React.CSSProperties = {
            position: "absolute",
            ...((illustration.tooltipPosition as unknown) as React.CSSProperties),
            zIndex: 50,
            whiteSpace: "nowrap",
          };

          return (
            <motion.div
              key={illustration.name}
              className={`absolute ${illustration.color} cursor-pointer`}
              style={posStyle}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0 + index * 0.06, ease: "easeOut" }}
              onHoverStart={() => setHoveredIllustration(illustration.name)}
              onHoverEnd={() => setHoveredIllustration(null)}
            >
              {/* Tooltip above illustration, manual position relative to canvas */}
              {showTooltip && hoveredIllustration === illustration.name && (
                <motion.div
                  className="absolute z-50 pointer-events-auto"
                  style={tooltipStyle}
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="bg-background/95 backdrop-blur border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap relative select-none">
                    <p className="text-sm text-foreground font-semibold">
                      {illustration.message}
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 transform translate-y-1"></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div
                animate={
                  hoveredIllustration === illustration.name
                    ? {
                        y: [0, -6, 0],
                        rotate: [0, 2, 0],
                        scale: 1.06,
                        rotateZ: 0,
                      }
                    : { y: 0, rotate: 0, scale: 1, rotateZ: 0 }
                }
                transition={
                  hoveredIllustration === illustration.name
                    ? {
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0 }
                }
                style={{ filter: "drop-shadow(1px 1px 6px rgba(0,0,0,0.08))" }}
              >
                {illustration.svg}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HandDrawnIllustrations;
