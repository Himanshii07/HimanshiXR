import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  Gamepad2,
  Target,
  Layers,
  Cpu,
  Zap,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

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

const AngryBirds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = {
    title: "Angry Birds Recreation",
    category: "Game Development",
    year: "2024",
    duration: "2 weeks",
    client: "Individual Project",
    role: "Game Developer",
    tools: ["Unity", "C#", "Physics Engine", "UI Design"],
  };

  const features = [
    {
      icon: Gamepad2,
      title: "3 Distinct Levels",
      description:
        "Created three different levels with increasing difficulty and unique challenges for players to master.",
    },
    {
      icon: Target,
      title: "Physics-Based Gameplay",
      description:
        "Implemented realistic physics interactions for slingshot mechanics and collision detection.",
    },
    {
      icon: Layers,
      title: "UI Screens",
      description:
        "Designed comprehensive UI including home screen and level completion screens for seamless user experience.",
    },
    {
      icon: Zap,
      title: "Particle Effects",
      description:
        "Added engaging particle effects after collisions to enhance visual feedback and game feel.",
    },
    {
      icon: Cpu,
      title: "Smart Mechanics",
      description:
        "Implemented minimum range constraints for the slingshot and disappearing bird icons system.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* Hero Section - Updated to match Mushroom House style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50 to-amber-100/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="text-red-600 hover:text-red-800"
              >
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            {/* Project Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-400/10 to-pink-400/10 border border-red-400/20 mb-6">
                <Gamepad2 className="w-4 h-4 mr-2 text-red-400" />
                <span className="text-sm font-medium text-red-400">
                  Game Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                As part of the Introduction to Coding course, I developed a 2D
                version of Angry Birds using Unity. The project involved
                designing levels, scripting physics-based interactions, and
                creating an engaging user interface with a home screen. With
                three distinct levels, the game combined strategy and fun,
                showcasing gameplay mechanics and visual aesthetics inspired by
                the classic Angry Birds experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-red-400 text-red-600"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-pink-400 text-pink-600"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {projectDetails.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-red-400 text-red-600"
                >
                  <User className="w-3 h-3 mr-1" />
                  {projectDetails.client}
                </Badge>
              </div>
             {/*} <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-pink-400 text-white hover:from-red-700 hover:to-pink-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Gameplay Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-400 text-pink-600 hover:bg-pink-400 hover:text-black"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              </div>*/}
            </div>
            {/* Video Showcase */}
            <CustomVideoPlayer
              src="https://www.youtube.com/embed/SjZT8W8lbZU?mute=0"
              title="Angry Birds Recreation Project"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-24 bg-gradient-to-r from-rose-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This project was a hands-on introduction to 2D game
                  development, focusing on physics-based gameplay and level
                  design. The goal was to recreate the core mechanics and fun of
                  Angry Birds using Unity and C#.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I designed three unique levels, implemented slingshot
                  mechanics, and added visual polish with particle effects and
                  UI screens. The project helped me master Unity's physics
                  engine and game scripting fundamentals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The final result is a simple but engaging game that
                  demonstrates my ability to build interactive experiences and
                  manage a complete game development pipeline.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Focus</h3>
                  <p className="text-muted-foreground">
                    Physics-based 2D game development
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Primary Tools
                  </h3>
                  <p className="text-muted-foreground">
                    Unity → C# → Physics Engine
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Core gameplay mechanics and features implemented in the project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-neon/10 mb-4">
                        <Icon className="h-6 w-6 text-xr-neon" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
                Learning Outcomes
              </h2>
              <p className="text-lg text-muted-foreground">
                What I gained from this exploration into Unity game development
              </p>
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Technical Skills
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>C# programming fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Unity physics system implementation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Game object scripting and management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>UI system design and implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Design Insights
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Game feel and user feedback loops</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Progressive difficulty design</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Visual effects and game polish</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Player engagement mechanics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-xr-neon/5 rounded-lg border border-xr-neon/20">
                  <p className="text-muted-foreground italic">
                    "This project was a simple exploration into Unity during my
                    learning journey. It gave me hands-on experience with game
                    development fundamentals and sparked my interest in
                    interactive media design. Keep this project simple only, I
                    was just exploring Unity at that time."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-gradient-to-r from-red-50 via-background to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
            Explore More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my other work in XR design, interactive media, and
            immersive experiences.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            <Link to="/projects">
              View All Projects
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AngryBirds;
