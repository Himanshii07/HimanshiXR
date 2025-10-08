import React from "react";
import { motion } from "framer-motion";

interface HandDrawnIllustrationsProps {
  showTooltip?: boolean;
}

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
      svg: (
        <img
          src="/Photos/illustrations/21.png"
          alt="Netflix Logo"
          width={180}
          height={350}
          className="object-contain"
        />
      ),
      position: { top: "7%", left: "74%" },
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
          className="object-contain"
        />
      ),
      position: { top: "57%", right: "8%" },
      color: "text-amber-600",
      tooltipPosition: { right: "16%", top: "-2.5rem" },
    },
    {
      name: "rajma-chawal",
      message: "Comfort food",
      svg: (
        <img
          src="/Photos/illustrations/26.png"
          alt="Chai logo"
          width={150}
          height={120}
          className="object-contain"
        />
      ),
      position: { top: "42%", left: "10%" },
      color: "text-orange-600",
      tooltipPosition: { left: "10%", top: "-2.5rem" },
    },
    {
      name: "Unreal Engine",
      message: "Creating cool 3d Environments",
      svg: (
        <img
          src="/Photos/illustrations/15.png"
          alt="Chai logo"
          width={240}
          height={180}
          className="object-contain"
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
          alt="Chai logo"
          width={320}
          height={240}
          className="object-contain"
        />
      ),
      position: { top: "67%", left: "4%" },
      color: "text-purple-600",
      tooltipPosition: { left: "20%", top: "3rem" },
    },
    {
      name: "VR Headset",
      message: "Living in multiple realities.",
      svg: (
        <img
          src="/Photos/illustrations/16.png"
          alt="Chai logo"
          width={420}
          height={380}
          className="object-contain"
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
          alt="Chai logo"
          width={220}
          height={280}
          className="object-contain"
        />
      ),
      position: { top: "62%", right: "26%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "5%", top: "-2.5rem" },
    },
    {
      name: "Research",
      message: "Brainstorming sessions",
      svg: (
        <img
          src="/Photos/illustrations/25.png"
          alt="Chai logo"
          width={380}
          height={250}
          className="object-contain"
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
          alt="Chai logo"
          width={200}
          height={140}
          className="object-contain"
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
          alt="Chai logo"
          width={400}
          height={300}
          className="object-contain"
        />
      ),
      position: { top: "2%", right: "80%" },
      color: "text-indigo-600",
      tooltipPosition: { right: "10%", top: "2rem" },
    },
    {
      name: "Stock Market",
      message: "Investing wisely",
      svg: (
        <img
          src="/Photos/illustrations/20.png"
          alt="Chai logo"
          width={260}
          height={320}
          className="object-contain"
        />
      ),
      
      position: { top: "54%", left: "25%" },
      color: "text-indigo-600",
      tooltipPosition: { left: "5%", top: "3rem" },
    },
  ];

  return (
    <div className="absolute inset-0">
      {illustrations.map((illustration, index) => (
        <motion.div
          key={illustration.name}
          className={`absolute ${illustration.color} cursor-pointer`}
          style={{ ...illustration.position, pointerEvents: "auto", zIndex: 20 }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0 + index * 0.1, ease: "easeOut" }}
          onHoverStart={() => setHoveredIllustration(illustration.name)}
          onHoverEnd={() => setHoveredIllustration(null)}
        >
          {/* Tooltip above illustration, manual position */}
          {showTooltip && hoveredIllustration === illustration.name && (
            <motion.div
              className="absolute z-50 pointer-events-auto"
              style={illustration.tooltipPosition}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-background/95 backdrop-blur border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap relative">
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
                    y: [0, -5, 0],
                    rotate: [0, 2, 0],
                    scale: 1.1,
                    rotateZ: 0,
                  }
                : { y: 0, rotate: 0, scale: 1, rotateZ: 0 }
            }
            transition={
              hoveredIllustration === illustration.name
                ? {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { duration: 0 }
            }
            style={{ filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))" }}
          >
            {illustration.svg}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HandDrawnIllustrations;
