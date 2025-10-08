import React, { useState, useEffect } from "react";
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
  Heart,
  Smile,
  Lightbulb,
  Target,
  Zap,
  Camera,
  TrendingUp,
  Baby,
  GraduationCap,
  Home,
  Sparkles,
  Volume2,
  Coins,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
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

const Savey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = {
    title: "Savey - Interactive Piggy Bank",
    subtitle: "A Friendly Companion That Makes Saving Joyful for Kids",
    duration: "2 weeks",
    year: "2025",
    client: "Group Project",
    team: "Team of 2",
    role: "Hardware Integration & UX Design",
    status: "Completed",
  };

  const technologies = [
    "Arduino",
    "IR Sensors",
    "OLED Display",
    "Buzzer Systems",
    "3D Modeling",
    "Laser Cutting",
    "Circuit Design",
    "User Testing",
    "Interaction Design",
  ];

  const features = [
    {
      icon: Eye,
      title: "👁️‍🗨️ Expressive OLED Eyes",
      description:
        "Animated eyes that blink, wink, and express emotions to create a personal connection with children.",
    },
    {
      icon: Volume2,
      title: "🎵 Happy Sounds on Deposits",
      description:
        "Delightful audio feedback that celebrates every coin or note deposited, making saving feel rewarding.",
    },
    {
      icon: Coins,
      title: "🪙 Coin/Note Detection",
      description:
        "Smart sensors that detect when money is added and trigger appropriate celebrations and responses.",
    },
    {
      icon: Sparkles,
      title: "💸️ Transparent Back Panel",
      description:
        "Kids can see their savings grow visually, creating a sense of progress and accomplishment.",
    },
  ];

  const problemSolution = {
    problem: "Kids don't understand the importance of savings",
    solution: "Interactive saving piggy bank that turns saving into a game",
    benefits: [
      "Teaches kids financial habits early",
      "Turns savings into an enjoyable experience",
      "Creates emotional connection with money management",
      "Makes saving feel like play, not obligation",
    ],
  };

  const targetMarket = [
    {
      icon: Baby,
      demographic: "Kids aged 5 to 12 years",
      description: "Primary users who will interact with Savey daily",
    },
    {
      icon: Home,
      demographic: "Parents",
      description: "Who want their children to learn saving habits early",
    },
    {
      icon: GraduationCap,
      demographic: "Schools",
      description: "For financial literacy workshops and educational programs",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Circuit Design & Sensor Integration",
      description:
        "Designed the electronic architecture using Arduino, IR sensors, and buzzer systems for interactive functionality.",
      tools: ["Arduino", "IR Sensors", "Buzzer", "Circuit Design"],
    },
    {
      step: "02",
      title: "3D Modeling & Design",
      description:
        "Created detailed 3D models of the piggy bank form factor, ensuring space for all electronic components.",
      tools: ["3D Modeling Software", "Component Layout", "Design Iteration"],
    },
    {
      step: "03",
      title: "Laser Cutting & Assembly",
      description:
        "Precision laser cutting of components and careful assembly with integrated sensor placement.",
      tools: ["Laser Cutting", "Assembly", "Sensor Integration"],
    },
    {
      step: "04",
      title: "User Testing & Refinement",
      description:
        "Conducted extensive testing with children who especially loved the expressive eyes and blinking animations.",
      tools: ["User Testing", "Feedback Analysis", "Design Refinement"],
    },
  ];

  const futureScope = [
    {
      icon: Lightbulb,
      title: "AI Voice Assistant",
      description:
        "Integrate voice features allowing kids to ask questions about money and receive age-appropriate financial education.",
    },
    {
      icon: Target,
      title: "Mobile App Integration",
      description:
        "Companion app for parents and kids to track savings, set goals, and receive progress reports.",
    },
    {
      icon: TrendingUp,
      title: "Goal-Based Challenges",
      description:
        "Custom saving goals like toys or books, with milestone celebrations and reward systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* Hero Section with Playful Design (same as other projects) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-sky-50" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float" />
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-blue-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            {/* Project Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/10 to-pink-400/10 border border-yellow-400/20 mb-6">
                <Heart className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">
                  Interactive Hardware Design
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-yellow-400 text-yellow-400"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-pink-400 text-pink-400"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {projectDetails.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-blue-400 text-blue-400"
                >
                  <Users className="w-3 h-3 mr-1" />
                  {projectDetails.team}
                </Badge>
              
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black hover:from-yellow-500 hover:to-pink-500"
                >
                  <a
                    href="https://youtu.be/a_lNpr5PO_A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch User Testing
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <a
                    href="https://your-documentation-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Documentation
                  </a>
                </Button>
              </div>
            </div>
            {/* Hero Video */}
            <img
              src="/Photos/savey/13.png"
              alt="Kids playing with Savey"
              className="rounded-lg shadow w-full grid md:grid-cols-1 gap-1 aspect-16/9 max-w-14xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Solution Section with 3 Cards */}
      <section className="py-24 bg-gradient-to-r from-amber-50 via-rose-20 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                How Savey Solves the Problem
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-yellow-200 bg-yellow-50/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-700">
                    The Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kids don't understand the importance of savings. Traditional
                    piggy banks are passive and don't engage children.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-pink-200 bg-pink-50/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-pink-700">
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Savey is an interactive piggy bank that turns saving into a
                    game. It reacts, responds, and rewards kids for saving.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {problemSolution.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* User Testing Section - grid, minimal text, more images */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              Traditional Piggy Banks are{" "}
              <span className="bg-pink-400 text-white px-2 rounded">
                Passive
              </span>
              - Kids lose interest
            </h2>
            <p className="text-lg text-muted-foreground ">
            They are passive boxes that just stores money, No excietment, no learning
            </p>
            <p className="text-lg text-muted-foreground mb-6">
            Result? Savings feels boring and kids lose interest fast
            </p>
          </div>
          <hr className="mt-10 border-t border-border/70 mb-6" />
          
          <div className="grid md:grid-cols-1 gap-1 aspect-3/4 max-w-6xl mx-auto text-center">
           
              <h2 className="text-xl font-bold mb-4">
              
              <span className="bg-pink-400 text-white px-2 rounded">
                Design Challenge :
              </span>
             
            </h2>
            <p className="text-lg text-muted-foreground ">
            Can we turn the traditional piggy banks into something that childern love to interact with?
            </p>
            <p className="text-lg text-muted-foreground mb-6">
            Result? Savings feels boring and kids lose interest fast
            </p>
          </div>
        </div>
      </section>


      {/* User Testing Section - grid, minimal text, more images */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              It all begins with{" "}
              <span className="bg-orange-400 text-white px-2 rounded">
                Sketching our Ideas
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
            
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-1 aspect-3/4 max-w-6xl mx-auto">
            <img
              src="/Photos/savey/12.jpg"
              alt="Kids playing with Savey"
              className="rounded-lg w-full object-cover aspect-16/9"
            />
          </div>
        </div>
      </section>

      



      {/* Features Section - grid, minimal text, more images */}
      <section className="py-32 bg-pink-100 ">
        <div className="container mx-auto px-4  max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Making saving exciting through{" "}
              <span className="bg-blue-400 text-white px-2 rounded">
                playful features
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/16.png"
                alt="Expressive OLED Eyes"
                className="rounded-lg mb-4 w-full object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">Expressive OLED Eyes</h3>
              <p className="text-sm text-muted-foreground">
                Animated eyes blink, wink, and express emotions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/Rectangle 4.png"
                alt="Playful Sound Cues"
                className="rounded-lg mb-4 w-full object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">Playful Sound Cues</h3>
              <p className="text-sm text-muted-foreground">
                Cheerful sounds reward every deposit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/12.png"
                alt="Coin & Note Detection"
                className="rounded-lg mb-4 w-full object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">Coin & Note Detection</h3>
              <p className="text-sm text-muted-foreground">
                Smart sensors trigger feedback and celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Section - grid, minimal text, more images */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Bringing Savey to life — from{" "}
              <span className="bg-blue-500 text-white px-2 rounded">
                idea to prototype
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 ">
            <img
              src="/Photos/savey/6.png"
              alt="Laser cutting"
              className="rounded-lg bg-white p-4 shadow w-full object-cover aspect-square"
            />
            <img
              src="/Photos/savey/5.png"
              alt="Assembly"
              className="rounded-lg bg-white p-4 shadow w-full object-cover aspect-square"
            />
            <img
              src="/Photos/savey/10.png"
              alt="Circuit design"
              className="rounded-lg bg-white p-4 shadow w-full object-cover aspect-square"
            />
            <img
              src="/Photos/savey/1.png"
              alt="Testing"
              className="rounded-lg bg-white p-4 shadow w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* User Testing Section - grid, minimal text, more images */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Kids treated Savey like a{" "}
              <span className="bg-orange-400 text-white px-2 rounded">
                friend, not a money box
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Kids smiled, giggled, and kept coming back — Savey felt alive to
              them.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-1 aspect-3/4 max-w-3xl mx-auto">
            <img
              src="/Photos/savey/17.png"
              alt="Kids playing with Savey"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

       {/* User Testing Section - grid, minimal text, more images */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Cost Breakdown{" "}
              <span className="bg-orange-400 text-white px-2 rounded">
                Building Smart on a Budget
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
            
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-1 aspect-3/4 max-w-5xl mx-auto">
            <img
              src="/Photos/savey/11.jpg"
              alt="Kids playing with Savey"
              className="rounded-lg w-full object-cover aspect-16/9"
            />
          </div>
        </div>
      </section>


      {/* Features Section - grid, minimal text, more images */}
      <section className="py-32 bg-sky-100 ">
        <div className="container mx-auto px-4  max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Future Scope{" "}
              <span className="bg-blue-400 text-white px-2 rounded">
                playful features
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/1.jpg"
                alt="Expressive OLED Eyes"
                className="rounded-lg mb-4 w-half object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">AI Voice Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Integrate a voice assistant feature, allowing kids to ask questions about money, saving, 
                or spending—and receive simple, age-appropriate answers, making it both fun and educational.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/2.jpg"
                alt="Playful Sound Cues"
                className="rounded-lg mb-4 w-half object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">Mobile App Integration</h3>
              <p className="text-sm text-muted-foreground">
                A companion app can help parents and kids track savings, set goals, and receive progress reports.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/Photos/savey/3.jpg"
                alt="Coin & Note Detection"
                className="rounded-lg mb-4 w-half object-cover aspect-square"
              />
              <h3 className="font-bold mb-2">Goal-Based Challenges</h3>
              <p className="text-sm text-muted-foreground">
                Children can choose or set custom saving goals—like buying a toy or book—and the piggy bank will encourage them with milestones and rewards.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Project Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Innovation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that blend technology with human experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white"
            >
              <Link to="/projects/kedarnath">
                Next: Kedarnath Mythological Story
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black hover:from-yellow-500 hover:to-pink-500"
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

export default Savey;
