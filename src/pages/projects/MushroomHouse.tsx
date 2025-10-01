import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Eye,
  Award,
  Github,
  ExternalLink,
  Play,
  Sparkles,
  Palette,
  Mountain,
  TreePine,
  Home,
  Lightbulb,
  Camera,
  Layers,
  Wand2,
  Flower,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">Uh-oh!</h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">Open this website on a bigger screen!</p>
    </div>
  </div>
);

const MushroomHouse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = {
    title: "The Mushroom House",
    subtitle: "A Fantasy 3D Environment Showcasing Complete Pipeline Mastery",
    duration: "2 weeks",
    year: "2025",
    client: "3D Art Portfolio",
    team: "Solo Artist",
    role: "3D Artist & Environment Designer",
    status: "Completed",
  };

  const technologies = [
    "Autodesk Maya",
    "Substance Painter",
    "Unreal Engine 5",
    "UV Mapping",
    "Hand-painted Textures",
    "3D Modeling",
    "Lighting Design",
    "Environment Art",
    "Real-time Rendering",
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "3D Modeling in Maya",
      description:
        "Created the core stylized mushroom house model in Autodesk Maya, focusing on whimsical proportions and fantasy aesthetics.",
      tools: ["Autodesk Maya", "Polygon Modeling", "Mesh Optimization"],
      icon: Layers,
    },
    {
      step: "02",
      title: "UV Mapping & Texturing",
      description:
        "Developed UV maps and applied detailed hand-painted textures using Substance Painter for rich, stylized surface details.",
      tools: ["Substance Painter", "UV Mapping", "Hand-painted Textures"],
      icon: Palette,
    },
    {
      step: "03",
      title: "Rigging & Animation",
      description:
        "Rigged and animated interactive elements like leaves in Maya to bring life and movement to the environment.",
      tools: ["Maya Rigging", "Animation", "Interactive Elements"],
      icon: Wand2,
    },
    {
      step: "04",
      title: "Environment Building",
      description:
        "Imported the model into Unreal Engine 5 and built a complete fantasy environment with lighting and storytelling elements.",
      tools: ["Unreal Engine 5", "Lighting", "Environment Design"],
      icon: Mountain,
    },
  ];

  const environmentFeatures = [
    {
      icon: Home,
      title: "Magical Mushroom House",
      description:
        "Glowing windows and chimney enhance believability and create warm, inviting atmosphere in the fantasy setting.",
      category: "Hero Asset",
    },
    {
      icon: TreePine,
      title: "Detailed Pathways & Boundaries",
      description:
        "Stone tile footpath leading to entrance with wooden fence surrounding the house for clear spatial definition.",
      category: "Navigation",
    },
    {
      icon: Lightbulb,
      title: "Realistic Props & Details",
      description:
        "Sacks, logs, pots, and lantern post scattered throughout for environmental storytelling and realism.",
      category: "Props",
    },
    {
      icon: Flower,
      title: "Natural Flora & Landscape",
      description:
        "Multiple tiny mushrooms in various colors, wildflowers, and grass clusters creating rich, organic environment.",
      category: "Landscaping",
    },
  ];

  const technicalAchievements = [
    {
      title: "Complete 3D Pipeline Mastery",
      description:
        "Demonstrated proficiency across the entire 3D production pipeline from initial modeling to final real-time rendering.",
    },
    {
      title: "Hand-Painted Texture Artistry",
      description:
        "Created unique, stylized textures using traditional digital painting techniques for authentic fantasy aesthetic.",
    },
    {
      title: "Real-Time Environment Optimization",
      description:
        "Successfully optimized detailed 3D assets for real-time rendering in Unreal Engine 5 while maintaining visual quality.",
    },
    {
      title: "Environmental Storytelling",
      description:
        "Used props, lighting, and composition to create narrative atmosphere that draws viewers into the fantasy world.",
    },
  ];

  const learningOutcomes = [
    "Complete 3D Production Pipeline",
    "Maya Modeling & Animation Techniques",
    "Substance Painter Texturing Workflows",
    "Unreal Engine 5 Environment Building",
    "UV Mapping & Optimization",
    "Lighting & Atmosphere Creation",
    "Fantasy Art Direction",
    "Real-time Rendering Optimization",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-sky-100">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* Hero Section - subtle fantasy theme, more visuals */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-rose-50 to-sky-100/60">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              {projectDetails.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {projectDetails.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="outline"
                className="text-sm border-purple-400 text-purple-400"
              >
                <Calendar className="w-3 h-3 mr-1" />
                {projectDetails.year}
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-pink-400 text-pink-400"
              >
                <Users className="w-3 h-3 mr-1" />
                {projectDetails.team}
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-yellow-400 text-yellow-400"
              >
                <Award className="w-3 h-3 mr-1" />
                {projectDetails.status}
              </Badge>
            </div>
            <CustomVideoPlayer
              src="https://youtu.be/zkfMJK6O_9Y?mute=0&autoplay=1"
              title="Mushroom House YouTube Showcase"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Moodboard Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Moodboard</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fantasy, whimsy, and hand-painted textures
            </p>
            <img
              src="/Photos/Mushroom/2.png"
              alt="Mushroom House Moodboard"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3D Pipeline Section - short, more images, no cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">3D Production Pipeline</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Modeling, texturing, rigging, and environment building
            </p>
              <img
                src="/Photos/Mushroom/1.png"
                alt="Modeling in Maya"
                className="rounded-lg shadow w-full object-cover aspect-16/9"
              />
          </div>
        </div>
      </section>

      {/* Fantasy Environment Features - add images */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-background to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Fantasy Environment Features
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Elements that bring the magical world to life
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-4 rounded-xl shadow">
                <img
                  src="/Photos/Mushroom/5.png"
                  alt="Magical Mushroom House"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
                <h3 className="font-bold mb-2">Magical Mushroom House</h3>
                <p className="text-sm text-muted-foreground">
                  Glowing windows and chimney create a warm, inviting atmosphere.
                </p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl shadow">
                <img
                  src="/Photos/Mushroom/6.png"
                  alt="Detailed Pathways & Boundaries"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
                <h3 className="font-bold mb-2">Detailed Pathways & Boundaries</h3>
                <p className="text-sm text-muted-foreground">
                  Stone tile footpath and wooden fence for clear spatial
                  definition.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl shadow">
                <img
                  src="/Photos/Mushroom/8.png"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
                <h3 className="font-bold mb-2">Realistic Props & Details</h3>
                <p className="text-sm text-muted-foreground">
                  Sacks, logs, pots, and lanterns for environmental storytelling.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl shadow">
                <img
                  src="/Photos/Mushroom/9.png"
                  alt="Natural Flora & Landscape"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
                <h3 className="font-bold mb-2">Natural Flora & Landscape</h3>
                <p className="text-sm text-muted-foreground">
                  Tiny mushrooms, wildflowers, and grass clusters for a rich,
                  organic environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Achievements - short, visual */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center grid md:grid-cols-1 gap-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-4 rounded-xl shadow aspect-auto">
                <h3 className="font-bold mb-2">3D Pipeline Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  Modeling, texturing, rigging, and real-time rendering in Unreal
                  Engine 5.
                </p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2">Hand-Painted Textures</h3>
                <p className="text-sm text-muted-foreground">
                  Created unique, stylized textures for authentic fantasy
                  aesthetic.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2">Environment Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized assets for real-time rendering while maintaining
                  quality.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2">Environmental Storytelling</h3>
                <p className="text-sm text-muted-foreground">
                  Used props, lighting, and composition to create a narrative
                  atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-gradient-to-r from-purple-400/10 via-background to-pink-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Creative Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that showcase the intersection of art and
            technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/savey">
                Previous: Savey Interactive Piggy Bank
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500"
            >
              <Link to="/projects">
                <Eye className="mr-2 h-4 w-4" />
                All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MushroomHouse;
