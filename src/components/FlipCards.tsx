import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Layers3, Palette } from "lucide-react";

interface FlipCardProps {
  frontIcon: React.ElementType;
  frontTitle: string;
  frontDescription: string;
  backContent: React.ReactNode;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontIcon: Icon,
  frontTitle,
  frontDescription,
  backContent,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-80 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-border/50 bg-card p-8 flex flex-col items-center justify-center text-center shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-minimal-sage/20">
            <Icon className="w-8 h-8 text-minimal-sage" />
          </div>
          <h3 className="text-xl font-normal text-foreground mb-3">
            {frontTitle}
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            {frontDescription}
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-border/50 bg-white p-8 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center  rounded-xl border border-dashed border-minimal-sage/30 ">
            <div className="text-center p-2">
              <div className="text-muted-foreground text-sm mb-4">
                {backContent}
              </div>
             
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FlipCards: React.FC = () => {
  const cards = [
    {
      frontIcon: Eye,
      frontTitle: "XR Development",
      frontDescription:
        "I design engaging AR/VR experiences that merge storytelling, interaction, and technology to create meaningful virtual worlds.",
      backContent: (
        <div>
          <img
                  src="/Photos/VR_Headset.jpg"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover bg-white aspect-square"
                />
          <p className="text-muted-foreground bg-white text-sm">
            Where imagination meets immersion.
          </p>
        </div>
      ),
    },
    {
      frontIcon: Layers3,
      frontTitle: "3D and Interaction Design",
      frontDescription:
        "From prototyping in Unity and Unreal to modeling in Maya and Blender, I bring ideas to life with intuitive, interactive environments.",
      backContent: (
        <div>
         <img
                  src="/Photos/object.jpg"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover bg-white aspect-square"
                />
          <p className="text-muted-foreground bg-white text-sm">
            Designing the unseen connections between motion and meaning.
          </p>
        </div>
      ),
    },
    {
      frontIcon: Palette,
      frontTitle: "Research-Driven Approach",
      frontDescription:
        "Experienced in conducting design research to inform concepts, usability, and immersive solutions.",
      backContent: (
        <div>
          
         <img
                  src="/Photos/sticky.png"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover aspect-square bg-white"
                />
                <p className="text-muted-foreground bg-white text-sm mb-2">
            Curiosity leads every design decision.
          </p>
        </div>
        
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {cards.map((card, index) => (
        <FlipCard
          key={index}
          frontIcon={card.frontIcon}
          frontTitle={card.frontTitle}
          frontDescription={card.frontDescription}
          backContent={card.backContent}
          index={index}
        />
      ))}
    </div>
  );
};

export default FlipCards;
