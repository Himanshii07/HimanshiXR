import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Play,
  Filter,
  Headphones,
  Smartphone,
  MonitorSpeaker,
  Microscope,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">Uh-oh!</h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">Open this website on a bigger screen!</p>
    </div>
  </div>
);

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Mahakatha VR Experience",
      category: "vr",
      categoryLabel: "Virtual Reality",
      description:
        "An immersive VR experience that brings ancient mythological stories of Kedarnath to life, allowing users to witness divine tales in a sacred virtual environment.",
      longDescription:
        "This spiritually immersive VR application recreates the sacred pilgrimage site of Kedarnath and tells the ancient mythological stories through interactive narratives. Users can explore the holy temple, witness divine manifestations, and experience the rich cultural heritage of Hindu mythology in a respectful and educational manner.",
      image: "/Photos/Kedarnath.png",
      tags: ["Unreal Engine", "Storytelling", "Cultural Heritage", "3D Modeling"],
      featured: true,
      year: "2025",
      client: "Individual Project",
      duration: "2 months",
      slug: "kedarnath",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "Savey - Interactive Piggy Bank",
      category: "interactive",
      categoryLabel: "Interactive Product Design",
      description:
        "A friendly piggy bank that reacts to a child's behavior, encouraging them to save. Turns saving into a game using emotional cues, sounds, and interaction.",
      longDescription:
        "Savey is an interactive companion that turns saving into an emotional, sensory, and cognitive experience. With expressive OLED eyes, happy sounds, coin detection, and transparent design, it makes kids want to save more because they enjoy it, not because they have to.",
      image: "/Photos/savey/13.png",
      tags: [
        "Arduino",
        "OLED Display",
        "IR Sensors",
        "3D Modeling",
        "User Testing",
      ],
      featured: true,
      year: "2025",
      client: "Group Project",
      duration: "2 weeks",
      slug: "savey",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    

        {
      id: 4,
      title: "The Mushroom House",
      category: "3d-art",
      categoryLabel: "3D Environment",
      description:
        "A fantasy 3D environment showcasing the complete production pipeline from Maya modeling to Unreal Engine 5 rendering with hand-painted textures.",
      longDescription:
        "This project demonstrates mastery of the full 3D pipeline including modeling in Maya, UV mapping, hand-painted textures in Substance Painter, rigging and animation, culminating in a magical environment built in Unreal Engine 5 with detailed props and atmospheric lighting.",
      image: "/Photos/Mushroom.png",
      tags: [
        "Maya",
        "Substance Painter",
        "Unreal Engine 5",
        "3D Modeling",
        "Hand-painted Textures",
      ],
      featured: true,
      year: "2025",
      client: "Individual Project",
      duration: "2 weeks",
      slug: "mushroom-house",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },

    {
      id: 11,
      title: "Samsung AI Agent",
      category: "interactive",
      categoryLabel: "XR Interaction Design",
      description:
        "Concept prototype for a proactive multimodal assistant across Samsung devices.",
      longDescription:
        "Exploration of context-aware assistance, privacy-preserving on-device intelligence, and helpful automation spanning phone, tablet, and wearable surfaces.",
      image: "Photos/sam/26.jpg",
      tags: ["AI", "AI Agents", "Prototyping", "Multimodal Interactions"],
      featured: false,
      year: "2025",
      client: "Interaction Design",
      duration: "6 week",
      slug: "samsung-ai-agent",
      links: { demo: "#", github: "#", live: "#" },
    },


    
   
     
    
    ,
    {
      id: 10,
      title: "Preflight Maintenance Check VR",
      category: "vr",
      categoryLabel: "Human Factors & Ergonomics",
      description:
        "VR-based pre-flight maintenance training with guided inspection and independent practice in a safe, immersive environment.",
      longDescription:
        "We designed a VR-based pre-flight maintenance simulation to replace costly, risky traditional training. Trainees first complete a guided inspection with real-time feedback, then practice independently to build confidence safely.",
      image: "/Photos/Flight/6.png",
      tags: [
         "XR Heuristics",
         "Interaction Design",
         "UX in XR",
        "VR Training Simulation",
      ],
      featured: true,
      year: "2025",
      client: "Team Project",
      duration: "3 weeks",
      slug: "preflight-maintenance-check-vr",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      id: 12,
      title: "System Thinking",
      category: "research",
      categoryLabel: "Research",
      description:
        "Mapping interdependencies, feedback loops, and leverage points in complex problems.",
      longDescription:
        "Case study applying systems thinking tools to reveal dynamics over time and identify intervention opportunities.",
      image: "/Photos/pune/28.png",
      tags: ["Design Thinking", "field research", "Affinity Mapping", "Feedback loops"],
      featured: false,
      year: "2025",
      client: "Case Study",
      duration: "1 week",
      slug: "system-thinking",
      links: { demo: "#", github: "#", live: "#" },
    },

    {
      id: 7,
      title: "Smart Chemistry",
      category: "interactive",
      categoryLabel: "Interactive Design",
      description:
        "An AI-powered educational tool to make chemistry interactive and fun for students. Real-time compound identification with instant feedback.",
      longDescription:
        "To make chemistry more interactive and fun for students, we designed an AI-powered educational tool using color-coded element cards. Each card represents a chemical element, and students can arrange them to form compounds. Using image recognition, the tool instantly identifies the compound and gives real-time feedback. This hands-on approach helps students visualize and understand chemical combinations better.",
      image: "/Photos/Chem.png",
      tags: [
        "Artificial Intelligence",
        "Machine Learning",
        "LLM",
        "Image Recognition",
        
      ],
      featured: true,
      year: "2025",
      client: "Educational Innovation",
      duration: "1 Week",
      slug: "smart-chemistry",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },


    {
      id: 13,
      title: "Ethnography",
      category: "research",
      categoryLabel: "Research",
      description:
        "Research project that explores the tiffin scene at MIT College, to identify what defines a great tiffin experience on campus.",
      longDescription:
        "Research project using observations and interviews to surface needs, constraints, and design opportunities.",
      image: "Photos/1.jpg",
      tags: ["Research", "Interviews", "Observation", "Synthesis"],
      featured: false,
      year: "2025",
      client: "Research Study",
      duration: "1 week",
      slug: "ethnography",
      links: { demo: "#", github: "#", live: "#" },
    },

      {
      id: 3,
      title: "Shooting Range in VR",
      category: "vr",
      categoryLabel: "Virtual Reality",
      description:
        "A realistic virtual reality shooting simulation that provides safe training environment with physics-based mechanics and multiple weapon systems.",
      longDescription:
        "This VR shooting simulation offers a comprehensive training experience with realistic ballistics, multiple weapon types, and various challenging scenarios. Built with safety and education in mind, it provides an immersive environment for skill development without real-world risks.",
      image: "/Photos/shooting.png",
      tags: [
        "Unreal Engine 5",
        "Physics Simulation",
        "Training",
        "Haptic Feedback",
      ],
      featured: true,
      year: "2025",
      client: "Individual Project",
      duration: "2 weeks",
      slug: "shooting-range",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },

    

   






  ];

  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "vr", label: "VR & Spatial", icon: Headphones },
    { id: "interactive", label: "Interactive & Games", icon: Smartphone },
    { id: "research", label: "Research", icon: Microscope },
    { id: "3d-art", label: "3D Environment", icon: MonitorSpeaker },
  ];

  

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
      
    <div className="min-h-screen bg-background">
       {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading mb-6 text-foreground animate-fade-in">
              Featured Work
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a collection of immersive experiences, innovative
              applications, and cutting-edge XR solutions that push the
              boundaries of what's possible in extended reality.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <Button
                  key={filter.id}
                  variant="outline"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 backdrop-blur ${
                    isActive
                      ? "border-transparent bg-gradient-to-r from-minimal-warm/80 to-minimal-sage/80 text-foreground shadow-lg shadow-minimal-warm/30"
                      : "border-border/60 bg-white/70 text-muted-foreground hover:text-foreground hover:border-minimal-cool/60 hover:bg-white/90"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 mr-2 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`}>
                <Card className="group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="bg-muted/70 text-foreground border-border/10 text-xs rounded-[6px]"
                      >
                        {project.categoryLabel}
                      </Badge>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-muted/80 text-foreground border-border/40 text-xs rounded-[6px]">
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </Button>
                        <span className="text-white/80 text-xs">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-xr-neon transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {project.client} • {project.duration}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/10 via-background to-xr-cyber/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative
            XR experiences. Let's discuss your next project.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
          >
            <a href="mailto:himanshipuri07@gmail.com">
              Start a Conversation
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
