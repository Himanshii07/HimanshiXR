import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Layers3, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MinimalistHero from "@/components/MinimalistHero";
import FlipCards from "@/components/FlipCards";
import ValuesSection from "@/components/ValuesSection";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">
        Uh-oh!
      </h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">
        Open this website on a bigger screen!
      </p>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "XR Development",
      description:
        "I design engaging AR/VR experiences that merge storytelling, interaction, and technology to create meaningful virtual worlds.",
    },
    {
      icon: Layers3,
      title: "3D & Interaction Design",
      description:
        "From prototyping in Unity and Unreal to modeling in Maya and Blender, I bring ideas to life with intuitive, interactive environments.",
    },
    {
      icon: Palette,
      title: "Research-Driven Approach",
      description:
        "Experienced in conducting design research to inform concepts, usability, and immersive solutions.",
    },
  ];

  const recentProjects = [
    {
      title: "Mahakatha VR Experience",
      category: "VR Experience",
      image: "/Photos/Kedarnath.png",
      description:
        "Immersive VR experience bringing ancient mythological stories of Kedarnath to life",
      slug: "kedarnath",
    },
  ];

  const recentProjects1 = [
    {
      title: "Savey - Interactive Piggy Bank",
      category: "Interactive Design",
      image: "/Photos/savey/13.png",
      description:
        "Friendly piggy bank that makes saving joyful for kids with expressive eyes and sounds",
      slug: "savey",
    },
    {
      title: "The Mushroom House",
      category: "3D Environment",
      image: "/Photos/Mushroom.png",
      description:
        "Fantasy 3D environment showcasing complete pipeline from Maya to Unreal Engine 5",
      slug: "mushroom-house",
    },
     {
      title: "System Thinking",
      category: "research",
      image: "/Photos/pune/28.png",
      description:
        "Mapping interdependencies, feedback loops, and leverage points in complex problems.",
      slug: "system-thinking",
    },
     {
      title: "Pre-flight Maintenance Check VR",
      category: "research",
      image: "/Photos/Flight/6.png",
      description:
        "VR-based pre-flight maintenance training with guided inspection and independent practice in a safe, immersive environment",
      slug: "preflight-maintenance-check-vr",
    },
  ];



  // Only show Stormy Ocean and Unreal Cinematic Challenge in exploredProjects
  const exploredProjects = [
    {
      title: "Touch Design",
      category: "Multi-sensory interactions",
      image: "/Photos/touchdesign1.png",
      description:
        "A self-initiated exploration to understand real-time visual systems in TouchDesigner, by following a tutorial by Torin Blankensmith,",
      slug: "touch-design",
    },
    {
      title: "Creative Coding",
      category: "Generative Art",
      image: "/Photos/photobooth3.png",
      description:
        "A fully functional, interactive Photo Booth website that demonstrates a mix of coding skills, creativity, and user-centric design.",
      slug: "creative-coding",
    },
    {
      title: "Stormy Ocean",
      category: "Simulation & VFX",
      image: "/Photos/Stormy Ocean.png",
      description:
        "A dynamic ocean simulation project exploring water physics and visual effects in Unreal Engine.",
      slug: "stormy-ocean",
    },
    {
      title: "Unreal Cinematic Challenge",
      category: "Cinematic & Animation",
      image: "/Photos/Unreal.png",
      description:
        "Short film created for Unreal Engine's cinematic challenge, focusing on lighting, camera, and storytelling.",
      slug: "unreal-cinematic",
    },
    {
      title: "Angry Birds Game",
      category: "Interactive Game Design",
      image: "/Photos/Angry birds.png",
      description:
        "A 2D recreation of Angry Birds with physics-based gameplay, multiple levels, and engaging visual effects.",
      slug: "angry-birds",
    },
    
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile-only overlay */}
      <MobileOverlay />

      <Navigation />

      {/* Minimalist Hero Section */}
      <MinimalistHero />

      {/* Features Section */}
      <section className="py-24 bg-white bg-[radial-gradient(#bcbcbc_0.7px,transparent_0.7px)] [background-size:20px_20px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-red-700 text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Hover over the cards to see more details
            </p>
          </div>

          <FlipCards />
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 bg-white/20  bg-[radial-gradient(#bcbcbc_0.7px,transparent_0.7px)] [background-size:20px_20px]">
        <div className=" container mx-auto px-4">
          <div className="mb-2 flex justify-center gap-1">
            <video
              src="/videos/ball.mp4" // Update this path
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full max-w-2xl h-auto"
            />
          </div>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Untangling Problems Into Beautiful Solutions
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              A selection of projects I've worked on
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {recentProjects.map((project, index) => {
              const colors = ["minimal-sage", "minimal-warm", "minimal-cool"];
              const currentColor = colors[index];

              return (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                    <div
                      className={`aspect-video relative overflow-hidden ${
                        currentColor === "minimal-sage"
                          ? "bg-minimal-sage/10"
                          : currentColor === "minimal-warm"
                            ? "bg-minimal-warm/10"
                            : "bg-minimal-cool/10"
                      }`}
                    >
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center z-0"
                      />
                      {/* Project category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs font-normal text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Simple accent dot */}
                      <div
                        className={`absolute bottom-4 right-4 w-3 h-3 rounded-full z-10 ${
                          currentColor === "minimal-sage"
                            ? "bg-minimal-sage/60"
                            : currentColor === "minimal-warm"
                              ? "bg-minimal-warm/60"
                              : "bg-minimal-cool/60"
                        }`}
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-normal text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
              
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recentProjects1.map((project, index) => {
              const colors = ["minimal-sage", "minimal-warm", "minimal-cool"];
              const currentColor = colors[index];

              return (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                    <div
                      className={`aspect-video relative overflow-hidden ${
                        currentColor === "minimal-sage"
                          ? "bg-minimal-sage/10"
                          : currentColor === "minimal-warm"
                            ? "bg-minimal-warm/10"
                            : "bg-minimal-cool/10"
                      }`}
                    >
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center z-0"
                      />
                      {/* Project category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs font-normal text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Simple accent dot */}
                      <div
                        className={`absolute bottom-4 right-4 w-3 h-3 rounded-full z-10 ${
                          currentColor === "minimal-sage"
                            ? "bg-minimal-sage/60"
                            : currentColor === "minimal-warm"
                              ? "bg-minimal-warm/60"
                              : "bg-minimal-cool/60"
                        }`}
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-normal text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
              
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Explored */}
      <section className="py-24 bg-white/20  bg-[radial-gradient(#bcbcbc_0.7px,transparent_0.7px)] [background-size:20px_20px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Creative Explorations
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              A collection of small builds and prototypes created just for
              exploration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-12xl mx-auto">
            {exploredProjects.map((project, index) => {
              const colors = ["minimal-sage", "minimal-warm", "minimal-cool"];
              const currentColor = colors[index % 3];
              return (
                <Link
                  key={index}
                  to={`/projects/${project.slug}`}
                  className="block"
                >
                  <Card className="group cursor-pointer overflow-hidden border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                    <div
                      className={`aspect-video relative overflow-hidden ${
                        currentColor === "minimal-sage"
                          ? "bg-minimal-sage/10"
                          : currentColor === "minimal-warm"
                            ? "bg-minimal-warm/10"
                            : "bg-minimal-cool/10"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center z-0"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs font-normal text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                          {project.category}
                        </span>
                      </div>
                      <div
                        className={`absolute bottom-4 right-4 w-3 h-3 rounded-full z-10 ${
                          currentColor === "minimal-sage"
                            ? "bg-minimal-sage/60"
                            : currentColor === "minimal-warm"
                              ? "bg-minimal-warm/60"
                              : "bg-minimal-cool/60"
                        }`}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-normal text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
