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
          src="/Photos/illustrations/netflix.png"
          alt="Netflix Logo"
          width={180}
          height={350}
          className="object-contain"
        />
      ),
      position: { top: "5%", left: "54%" },
      color: "text-red-500",
    },
    {
      name: "chai",
      message: "Chai Addicted",
      svg: (
        <img
          src="/Photos/illustrations/8.png"
          alt="Chai logo"
          width={220}
          height={280}
          className="object-contain"
        />
      ),
      position: { top: "28%", right: "24%" },
      color: "text-amber-600",
    },
    {
      name: "rajma-chawal",
      message: "Comfort food",
      svg: (
        <img
          src="/Photos/illustrations/13.png"
          alt="Chai logo"
          width={220}
          height={180}
          className="object-contain"
        />
      ),
      position: { top: "37%", left: "22%" },
      color: "text-orange-600",
    },
    {
      name: "dog",
      message: "Heart stolen by every dog on the street",
      svg: (
        <img
          src="/Photos/illustrations/11.png"
          alt="Chai logo"
          width={240}
          height={180}
          className="object-contain"
        />
      ),
      position: { top: "62%", right: "31%" },
      color: "text-blue-600",
    },
    {
      name: "Plants",
      message: "Plant Parent",
      svg: (
        <img
          src="/Photos/illustrations/10.png"
          alt="Chai logo"
          width={420}
          height={680}
          className="object-contain"
        />
      ),
      position: { top: "60%", left: "34%" },
      color: "text-purple-600",
    },
    {
      name: "VR Headset",
      message: "Living in multiple realities.",
      svg: (
        <img
          src="/Photos/illustrations/12.png"
          alt="Chai logo"
          width={220}
          height={380}
          className="object-contain"
        />
      ),
      position: { top: "25%", left: "30%" },
      color: "text-green-600",
    },
    {
      name: "to do list",
      message: "Daily task manager",
      svg: (
        <img
          src="/Photos/illustrations/2.png"
          alt="Chai logo"
          width={220}
          height={280}
          className="object-contain"
        />
      ),
      position: { top: "47%", right: "22%" },
      color: "text-indigo-600",
    },
    {
      name: "clock",
      message: "124 Alarms set, 120 snoozed",
      svg: (
        <img
          src="/Photos/illustrations/3.png"
          alt="Chai logo"
          width={180}
          height={120}
          className="object-contain"
        />
      ),
      position: { top: "18%", right: "51%" },
      color: "text-indigo-600",
    },
    {
      name: "Stock Market",
      message: "Investing wisely",
      svg: (
        <img
          src="/Photos/illustrations/5.png"
          alt="Chai logo"
          width={260}
          height={320}
          className="object-contain"
        />
      ),
      position: { top: "52%", left: "25%" },
      color: "text-indigo-600",
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
          {/* Tooltip above illustration, consistent gap */}
          {showTooltip && hoveredIllustration === illustration.name && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
              style={{ top: "-2.5rem" }}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-background/95 backdrop-blur border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                <p className="text-sm text-foreground font-semibold">
                  {illustration.message}
                </p>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-background border-l border-t border-border rotate-45 transform -translate-y-1"></div>
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
