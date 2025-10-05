import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Eye,
  Play,
  Headphones,
  Building2,
  Target,
  Lightbulb,
  Sparkles,
  Heart,
  Zap,
  Briefcase,
  BookOpen,
  Hand,
  Mountain,
  Navigation as NavigationIcon,
  Palette,
  Timer,
  Volume2,
  Quote,
  Layers,
  Camera,
  User,
  TestTube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-heading text-blue-700 mb-4">Uh-oh!</h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">
        Open this website on a bigger screen!
      </p>
    </div>
  </div>
);

const KedarnathVR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeLevel, setActiveLevel] = useState("level1");

  const projectDetails = {
    title: "Kedarnath Mythological Story",
    subtitle: "Immersive Spiritual Journey Through Ancient Sacred Tales",
    duration: "2 months",
    year: "2025",
    client: "Individual Project",
    team: "Solo Developer",
    role: "Lead XR Designer & Developer",
    status: "Completed",
    category: "Virtual Reality & Cultural Heritage",
  };

  const targetAudience = [
    {
      name: "Gen Z",
      age: "Age 15-24",
      icon: Zap,
      characteristics:
        "Born into a digital world, fast content, immersive tech, and short attention spans",
      challenge: "Mythology feels distant or irrelevant in traditional formats",
    },
    {
      name: "Young Adults",
      age: "Age 25-35",
      icon: Briefcase,
      characteristics:
        "Juggling careers, responsibilities, and limited time for spiritual travel",
      challenge: "Spiritually curious but time-constrained",
    },
    {
      name: "Devotees",
      age: "Under 35",
      icon: Heart,
      characteristics:
        "Yearning for deeper connection with mythology and ritual",
      challenge:
        "Spiritually inclined but physically distant or restricted from travel",
    },
  ];

  const audienceAccents = [
    { iconBg: "bg-emerald-100", icon: "text-emerald-700", accent: "text-emerald-700" },
    { iconBg: "bg-sky-100", icon: "text-sky-700", accent: "text-sky-700" },
    { iconBg: "bg-teal-100", icon: "text-teal-700", accent: "text-teal-700" },
  ];

  const experienceFlow = {
    level1: [
      {
        step: "01",
        title: "Arrival at Kedarnath Temple",
        description: "Enter the sacred virtual space and feel the divine presence",
        icon: Mountain,
      },
      {
        step: "02",
        title: "Exploring the Temple",
        description: "Discover intricate architecture and sacred spaces within",
        icon: Building2,
      },
      {
        step: "03",
        title: "Participating in Ritual",
        description: "Engage in traditional prayers and sacred ceremonies",
        icon: Hand,
      },
    ],
    level2: [
      {
        step: "01",
        title: "Starting the Mythological Story",
        description: "Begin the ancient narrative journey through time",
        icon: BookOpen,
      },
      {
        step: "02",
        title: "Experiencing the Story",
        description: "Witness divine manifestations and mythological events",
        icon: Sparkles,
      },
      {
        step: "03",
        title: "Returning to the Temple",
        description: "Complete the spiritual circle back to the sacred space",
        icon: Building2,
      },
    ],
  };

  const storyboardFrames = [
    {
      image: "/Photos/Frame 1.png",
      alt:
        "Storyboard frame depicting pilgrims standing before Kedarnath temple with gentle snowfall",
      title: "Prologue: Pilgrims Arrive",
      description:
        "Establishing shots welcome the user with soft morning light and chants to set a reverent tone.",
    },
    {
      image: "/Photos/Frame 2.png",
      alt:
        "Storyboard frame capturing a guardian guiding the main character into the temple interior",
      title: "Guided Entry",
      description:
        "A guardian character invites the user to cross the mandapa, introducing the mythic transition.",
    },
    {
      image: "/Photos/kedar 7.png",
      alt:
        "Storyboard artwork highlighting the mythological retelling inside a glowing sacred hall",
      title: "Mythic Reveal",
      description:
        "The narrative shifts into vibrant story panels that animate key moments from the legend.",
    },
    {
      image: "/Photos/kedar 8.png",
      alt: "Storyboard frame showing the return to present with offerings placed before the deity",
      title: "Returning with Offering",
      description:
        "Users complete their journey by performing a gentle ritual that bridges past and present.",
    },
  ];

  const userInteractions = [
    {
      title: "Locomotion",
      description: "Easy navigation through the sacred environment",
      icon: NavigationIcon,
      image: "/Photos/Kedarnath.png",
      alt: "3D render of Kedarnath temple environment inside the VR build",
    },
    {
      title: "Performing Rituals",
      description: "Interactive participation in traditional ceremonies",
      icon: Hand,
      image: "/Photos/Kedarnath 1.png",
      alt: "Close-up of ritual setup with diya lamps and offerings inside the temple scene",
    },
    {
      title: "Interacting with Sculptures & Deities",
      description: "Engage with sacred art and divine representations",
      icon: Palette,
      image: "/Photos/kedar 6.png",
      alt: "Detailed sculpture render prepared for the virtual experience",
    },
    {
      title: "Exploring the Sacred Book",
      description: "Discover ancient texts and mythological knowledge",
      icon: BookOpen,
      image: "/Photos/kedar 3.png",
      alt: "Storyboard plate showing sacred scripture within the VR interface",
    },
    {
      title: "Visual & Audio Feedback",
      description: "Immersive sensory responses to user actions",
      icon: Volume2,
      image: "/Photos/Unreal.png",
      alt: "Unreal Engine shot showing audio and lighting curves for feedback",
    },
    {
      title: "Timed UI Appearance",
      description: "Context-sensitive interface elements",
      icon: Timer,
      image: "/Photos/kedar 5.png",
      alt: "In-engine capture of timed UI prompts appearing during the ritual sequence",
    },
  ];

  const challenges = [
    {
      title: "Character and Deity Modeling",
      description:
        "Modeling characters and deities was a major challenge, requiring detailed attention to cultural accuracy and spiritual representation.",
      solution:
        "Extensive research and multiple iterations to achieve respectful and authentic representations.",
    },
    {
      title: "Animation Complexity",
      description:
        "Animating them was even tougher, especially rigging clothing like dhotis, which often clipped or stuck unnaturally while walking.",
      solution:
        "Advanced rigging techniques and careful weight painting to achieve natural cloth movement.",
    },
    {
      title: "Narrative Tone",
      description:
        "Writing narrations in a tone that felt spiritual yet simple, avoiding heavy 'shudh Hindi' to maintain accessibility.",
      solution:
        "Multiple script revisions with cultural consultants to balance authenticity with accessibility.",
    },
    {
      title: "Custom Asset Creation",
      description:
        "Assets weren't readily available, I had to create or customize them manually. Creating the whole Temple Model from scratch.",
      solution:
        "Developed comprehensive asset library through careful 3D modeling and texturing work.",
    },
    {
      title: "Technical Learning Curve",
      description:
        "As a beginner, understanding Blueprint scripting and Niagara particle systems took time.",
      solution:
        "Dedicated learning sessions and community support to master Unreal Engine 5 systems.",
    },
    {
      title: "VR Hardware Issues",
      description:
        "Connecting my VR Headset was also a challenge because of some glitch it was very difficult.",
      solution:
        "Troubleshooting through forums and technical documentation to resolve compatibility issues.",
    },
  ];

  const developmentProcess = [
    {
      phase: "Research & Planning",
      description: "Research to understand the temple interior and details",
      icon: BookOpen,
    },
    {
      phase: "3D Modeling",
      description: "Created the whole temple in Maya from scratch",
      icon: Layers,
    },
    {
      phase: "Texturing & Materials",
      description: "Created UV Maps and added texture using Substance Painter",
      icon: Palette,
    },
    {
      phase: "Environment Design",
      description: "Created the environment and level design in Unreal Engine 5",
      icon: Mountain,
    },
    {
      phase: "Character Creation",
      description:
        "3D Modeled the characters and rigged them using Meshy.ai, Mixamo & Animate Anything",
      icon: User,
    },
    {
      phase: "Cinematic Creation",
      description:
        "Created 5 scenes for the mythological story and added sequencer, took cinematic shots and rendered them",
      icon: Camera,
    },
    {
      phase: "Testing & Validation",
      description: "Conducted comprehensive user testing for experience optimization",
      icon: TestTube,
    },
  ];

  const developmentGallery = [
    {
      image: "/Photos/kedar 4.jpg",
      alt: "Atmospheric capture of Kedarnath valley inspiring the lighting palette",
      caption: "Atmospheric lighting references for the pilgrimage valley",
    },
    {
      image: "/Photos/Kedar 2.png",
      alt: "Greybox model of Kedarnath shrine inside Maya viewport",
      caption: "Greybox iterations mapped in Maya before detailing",
    },
    {
      image: "/Photos/Frame 2.png",
      alt: "Storyboard panel highlighting narrative beat inside Unreal",
      caption: "Sequencer storyboard guiding cinematic pacing",
    },
    {
      image: "/Photos/Unreal.png",
      alt: "Screenshot of Unreal Engine level showing environment layers",
      caption: "Final environment pass assembled in Unreal Engine 5",
    },
  ];

  const learningInsights = [
    {
      title: "Cross-Platform Integration",
      description:
        "Mastered the complete pipeline from Maya to Substance Painter to Unreal Engine 5, understanding how different tools work together.",
      icon: Layers,
      iconWrapper: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      title: "Cultural Technology Bridge",
      description:
        "Learned to use modern technology respectfully to preserve and share ancient cultural heritage with contemporary audiences.",
      icon: Building2,
      iconWrapper: "bg-sky-100",
      iconColor: "text-sky-700",
    },
    {
      title: "Problem-Solving Under Constraints",
      description:
        "Developed creative solutions for technical challenges while maintaining cultural authenticity and spiritual reverence.",
      icon: Lightbulb,
      iconWrapper: "bg-teal-100",
      iconColor: "text-teal-700",
    },
    {
      title: "User-Centered Design",
      description:
        "Understanding different audience needs (Gen Z, Young Adults, Devotees) and designing experiences that resonate with each group.",
      icon: User,
      iconWrapper: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Independent Project Management",
      description:
        "Successfully managed a complex 2-month solo project from concept to completion, balancing multiple technical and creative aspects.",
      icon: Target,
      iconWrapper: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      title: "Cinematic Storytelling",
      description:
        "Created 5 mythological scenes with sequencer, mastering cinematic composition, lighting, and narrative pacing in VR.",
      icon: Camera,
      iconWrapper: "bg-sky-100",
      iconColor: "text-sky-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <MobileOverlay />
      <Navigation />

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/70" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-sky-200/25 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-200/25 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-indigo-200/25 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-slate-200/25 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-emerald-700"
              >
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100/60 to-sky-100/60 border border-emerald-200/60 mb-8">
                <Building2 className="w-5 h-5 mr-3 text-emerald-700" />
                <span className="text-base font-medium text-emerald-700">
                  Main Project • Cultural Heritage VR
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-700 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-10">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-emerald-200 text-emerald-700"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-sky-200 text-sky-700"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {projectDetails.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-teal-200 text-teal-700"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {projectDetails.team}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Watch Process Video
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-sky-200 text-sky-700 hover:bg-sky-100/60"
                >
                  <Headphones className="mr-3 h-5 w-5" />
                  Experience Preview
                </Button>
              </div>
            </div>

            <CustomVideoPlayer
              src="https://youtu.be/7_hjT2z4-20"
              title="Immersive Experience of Kedarnath Temple | Trailer Video"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-minimal-sage/10 to-minimal-cool/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-700">
                The Sacred Challenge
              </h2>
              <p className="text-xl text-muted-foreground">
                Bridging ancient wisdom with modern hearts
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <Card className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-emerald-700 text-xl">
                    <Target className="w-6 h-6 mr-3" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Many young people today are disconnected from the rich mythological stories and spiritual wisdom that shaped Indian culture. Sacred texts like the Bhagavad Gita or Shiv Puran are often unread or unfamiliar to them, not due to lack of interest, but because of changing lifestyles, shorter attention spans, and a world dominated by screens and tech.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-sky-300/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-sky-700 text-xl">
                    <Lightbulb className="w-6 h-6 mr-3" />
                    The Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    In a time when ancient temples are being reduced to photo-ops, and spiritual stories are fading from collective memory, there is a unique opportunity to reconnect people with India's sacred heritage in a way that is immersive, respectful, and relevant:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • <strong>Reviving Sacred Narratives</strong> - Presenting mythology as living stories
                    </li>
                    <li>
                      • <strong>Reclaiming Reverence Through Innovation</strong> - Using technology respectfully
                    </li>
                    <li>
                      • <strong>A Scalable, Replicable Model</strong> - Expandable to other sacred sites
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-teal-300/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-700 text-xl">
                    <Sparkles className="w-6 h-6 mr-3" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    A deeply immersive VR experience that lets users step inside Kedarnath temple, engage in rituals, discover mythological stories, and reconnect with India's sacred heritage. Users need an engaging and immersive way to experience Indian mythological stories because traditional storytelling methods no longer capture their interest due to language barriers and decreasing attention spans.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-20 mb-16">
              <Card className="border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-sky-50 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-emerald-700 mb-4 mx-auto" />
                  <p className="text-2xl font-medium text-center italic text-emerald-700">
                    "Story from the past, but as an experience in the present"
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-emerald-700">
                Why This Experience Matters
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mythology Made Accessible",
                    desc: "Brings ancient stories to life in a format Gen Z and young adults engage with immersive and tech-driven",
                    icon: BookOpen,
                  },
                  {
                    title: "Spiritual Engagement",
                    desc: "Offers a meaningful connection for those who can't travel to Kedarnath, especially working professionals",
                    icon: Heart,
                  },
                  {
                    title: "Cultural Awareness",
                    desc: "Educates users about Indian mythology, rituals, and temple architecture in a way that feels real and respectful",
                    icon: Building2,
                  },
                  {
                    title: "Interactive Learning",
                    desc: "Instead of passive viewing, users participate, making the experience memorable and emotionally powerful",
                    icon: Hand,
                  },
                  {
                    title: "Bridges Gaps",
                    desc: "Fills the growing disconnect between traditional spirituality and modern lifestyles",
                    icon: Zap,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center border-border/50 bg-card/60 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-emerald-700" />
                        </div>
                        <h4 className="font-semibold mb-3 text-emerald-700">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-emerald-700">Why Kedarnath?</h2>
            <div className="space-y-6 text-md text-muted-foreground leading-relaxed">
              <p>
                Explored multiple <strong>Jyotirlingas</strong> before choosing Kedarnath due to its spiritual depth and challenging accessibility.
              </p>
              <p>
                Studied <strong>rituals, temple architecture, and mythological stories</strong> from books, documentaries, and trusted websites.
              </p>
              <p>
                Noticed how <strong>many visitors today focus more on social media</strong> than spiritual connection.
              </p>
            </div>

            <div className="mt-12 mb-8">
              <Card className="border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-sky-50">
                <CardContent className="p-8">
                  <Quote className="w-6 h-6 text-emerald-700 mb-4 mx-auto" />
                  <p className="text-xl font-medium text-center text-emerald-700 mb-6">
                    "Because Faith is fading under fame."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div>
                <img
                  src="/Photos/kedar 6.png"
                  alt="News: Cricket match outside Kedarnath Temple sparks outrage over disrespect to sacred site. Video of people playing cricket near the holy shrine draws sharp criticism on social media."
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
              <div>
                <img
                  src="/Photos/kedar 5.png"
                  alt="News: Kedarnath flooded with pilgrims as more than 10 lakh people visit the temple in a short span. Large crowd in front of the temple."
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
              <div>
                <img
                  src="/Photos/Kedar 2.png"
                  alt="YouTuber proposes to her partner at Kedarnath temple, news coverage."
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
              <div>
                <img
                  src="/Photos/kedar 3.png"
                  alt="Pilgrims upset as Kedarnath Dham turns into reel shooting and dance ground."
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
              <div>
                <img
                  src="/Photos/kedar 1.png"
                  alt="News about virus outbreak affecting horses and mules in Kedarnath, May 2025"
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
              <div>
                <img
                  src="/Photos/kedar 4.jpg"
                  alt="Chopper crash news: At least seven people killed after a helicopter flying from Kedarnath to Guptkashi crashed in Rudraprayag."
                  className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-minimal-sage/10 to-minimal-cool/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">Target Audience</h2>
              <p className="text-xl text-muted-foreground">
                Understanding who needs this sacred connection
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((audience, index) => {
                const Icon = audience.icon;
                const accent = audienceAccents[index % audienceAccents.length];

                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div
                          className={`w-16 h-16 ${accent.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className={`w-8 h-8 ${accent.icon}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-emerald-700">
                          {audience.name}
                        </h3>
                        <Badge variant="outline" className="text-sm border-emerald-200 text-emerald-700">
                          {audience.age}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-xs tracking-widest text-emerald-700 mb-2">
                            CHARACTERISTICS
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {audience.characteristics}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs tracking-widest text-sky-700 mb-2">
                            CHALLENGE
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {audience.challenge}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">Experience Flow</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Two immersive levels of spiritual journey
              </p>

              <div className="flex justify-center gap-4 mb-12">
                <Button
                  onClick={() => setActiveLevel("level1")}
                  className={`text-lg py-3 px-8 transition-colors ${
                    activeLevel === "level1"
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-transparent border-emerald-300 text-emerald-700 hover:bg-emerald-100/60"
                  }`}
                  variant={activeLevel === "level1" ? "default" : "outline"}
                >
                  Level 1: Temple Experience
                </Button>
                <Button
                  onClick={() => setActiveLevel("level2")}
                  className={`text-lg py-3 px-8 transition-colors ${
                    activeLevel === "level2"
                      ? "bg-sky-600 text-white hover:bg-sky-700"
                      : "bg-transparent border-sky-300 text-sky-700 hover:bg-sky-100/60"
                  }`}
                  variant={activeLevel === "level2" ? "default" : "outline"}
                >
                  Level 2: Mythological Journey
                </Button>
              </div>
            </div>

            <div className="transition-all duration-500 ease-in-out">
              {activeLevel === "level1" && (
                <div className="grid md:grid-cols-3 gap-8 opacity-100 animate-in slide-in-from-left duration-500">
                  {experienceFlow.level1.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <Card
                        key={index}
                        className="text-center border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <span className="text-xl font-bold text-white">{step.step}</span>
                          </div>
                          <Icon className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-emerald-700">{step.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {activeLevel === "level2" && (
                <div className="grid md:grid-cols-3 gap-8 opacity-100 animate-in slide-in-from-right duration-500">
                  {experienceFlow.level2.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <Card
                        key={index}
                        className="text-center border-sky-200 bg-gradient-to-br from-sky-50 to-teal-50 backdrop-blur-sm hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <span className="text-xl font-bold text-white">{step.step}</span>
                          </div>
                          <Icon className="w-8 h-8 text-sky-700 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-sky-700">{step.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-minimal-sage/10 to-minimal-cool/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Storyboarding Journey
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-emerald-700">
                  Visualizing the Pilgrim Narrative
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Each storyboard frame acted as a meditative checkpoint—carefully mapping how users transition from the physical world into a reverent mythological space, then return with renewed understanding. The visual language balances quiet devotion with moments of awe.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="rounded-xl border border-emerald-200/60 bg-white/70 p-4 shadow-sm">
                    <h3 className="text-emerald-700 font-semibold mb-2">Intentional Rhythm</h3>
                    <p>
                      Slow camera movements and soft lighting cues keep the experience contemplative while guiding focus.
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-200/60 bg-white/70 p-4 shadow-sm">
                    <h3 className="text-sky-700 font-semibold mb-2">Mythic Highlights</h3>
                    <p>
                      Panels emphasize key legend moments that transition users seamlessly into interactive sequences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {storyboardFrames.map((frame, index) => (
                  <Card key={index} className="overflow-hidden border border-border/40 bg-card/70 shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={frame.image} alt={frame.alt} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide uppercase text-white/80">
                        Frame {index + 1}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                        {frame.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {frame.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">
                User Actions & Interactions
              </h2>
              <p className="text-xl text-muted-foreground">
                Immersive ways to connect with the sacred experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {userInteractions.map((interaction, index) => {
                const Icon = interaction.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/70 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-center">
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md">
                          <img
                            src={interaction.image}
                            alt={interaction.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center">
                              <Icon className="w-5 h-5 text-emerald-700" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-white">
                              {interaction.title}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-emerald-700">
                            {interaction.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {interaction.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-minimal-sage/10 to-minimal-cool/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">
                Development Challenges
              </h2>
              <p className="text-xl text-muted-foreground">
                Overcoming obstacles to create an authentic spiritual experience
              </p>
            </div>

            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="group border-border/50 bg-card/70 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 relative">
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                          Challenge: {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>

                      <div className="group-hover:-translate-x-1 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-sky-700">
                          Solution Approach
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">
                Development Process
              </h2>
              <p className="text-xl text-muted-foreground">
                From research to final experience - a comprehensive 2-month journey
              </p>
            </div>

            <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 hidden lg:block">
                  <div className="w-px h-full bg-gradient-to-b from-emerald-200 via-sky-200 to-teal-200" />
                </div>

                <div className="space-y-6">
                  {developmentProcess.map((process, index) => {
                    const Icon = process.icon;
                    return (
                      <Card
                        key={index}
                        className="relative border-border/50 bg-card/70 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                                {index + 1}
                              </div>
                              {index !== developmentProcess.length - 1 && (
                                <span className="hidden lg:block w-px flex-1 bg-gradient-to-b from-emerald-200 via-sky-200 to-transparent" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-emerald-700" />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                                  Phase {index + 1}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                                {process.phase}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {process.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {developmentGallery.map((item, index) => (
                  <div key={index} className="relative overflow-hidden rounded-3xl shadow-lg group">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-sm text-white leading-relaxed">
                      <p className="font-semibold mb-1">{item.caption}</p>
                      <p className="opacity-80">{item.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-minimal-sage/10 to-minimal-cool/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-emerald-700">
                Learning Outcomes & Skills Acquired
              </h2>
              <p className="text-xl text-muted-foreground">
                Key competencies and insights gained through this comprehensive VR project
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-border/50 bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-emerald-700 text-2xl">
                    <Layers className="w-6 h-6 mr-3" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">3D Development</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Maya 3D modeling and animation</li>
                        <li>• Character rigging and animation</li>
                        <li>• UV mapping and texturing workflows</li>
                        <li>• Substance Painter material creation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">VR Development</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Unreal Engine 5 mastery</li>
                        <li>• Blueprint visual scripting</li>
                        <li>• VR interaction design</li>
                        <li>• Niagara particle systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-sky-700 text-2xl">
                    <Heart className="w-6 h-6 mr-3" />
                    Cultural & Creative Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-3">Cultural Research</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Mythological story analysis</li>
                        <li>• Sacred architecture study</li>
                        <li>• Ritual and ceremony research</li>
                        <li>• Cultural sensitivity in design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-3">Experience Design</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Immersive storytelling</li>
                        <li>• User experience flow design</li>
                        <li>• Emotional engagement strategies</li>
                        <li>• Cultural narrative adaptation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {learningInsights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <Card
                    key={index}
                    className="text-center border-border/50 bg-card/70 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 ${insight.iconWrapper} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${insight.iconColor}`} />
                      </div>
                      <h3 className="font-semibold mb-3 text-emerald-700">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {insight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-sky-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
                  Key Project Insight
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  This project taught me that technology is not just about innovation—it's about preservation, connection, and respect. By creating an immersive VR experience of Kedarnath, I learned how to bridge the gap between ancient wisdom and modern minds, ensuring that sacred stories continue to inspire and educate future generations in ways that feel both authentic and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-emerald-100/60 via-background to-sky-100/60">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-emerald-700">
            Explore More Sacred Innovations
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover other projects that showcase the intersection of technology, culture, and meaningful experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-emerald-300 text-emerald-700 hover:bg-emerald-100/60"
            >
              <Link to="/projects/savey">Next: Savey Interactive Learning</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/projects">
                <Eye className="mr-3 h-5 w-5" />
                All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KedarnathVR;
