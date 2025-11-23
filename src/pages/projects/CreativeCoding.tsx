import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Code2,
  Cpu,
  Sparkles,
  Layers3,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const experiments = [
  {
    icon: Sparkles,
    title: "Communicate the Brand’s Unique Identity Clearly",
    description:
      "Simplify and present Four Two’s association-based working model in a way that is easy to understand for first-time visitors.",
    badge: "Figma • IA",
  },
  {
    icon: Cpu,
    title: "Create a Minimal and Intuitive User Experience",
    description:
      "Design a clean, distraction-free interface that guides users effortlessly through services and information with seamless navigation.",
    badge: "Design System",
  },
  {
    icon: Code2,
    title: "Improve Engagement Through Interactive Elements",
    description:
      "Introduce light interactions—such as flip cards and dynamic sections—to encourage exploration without compromising the minimalist visual language.",
    badge: "React • Tailwind",
  },
];

const toolkit = [
  "Three.js scene graph for spatial compositions",
  "Tone.js for layering adaptive sound design",
  "p5.js prototyping for quick sketching",
  "Arduino + Teensy boards for responsive inputs",
  "TouchDesigner pipelines for projection mapping",
];

const outcomes = [
  {
    icon: Layers3,
    title: "Modular pipeline",
    detail:
      "Built reusable modules that connect sensors, visual shaders, and lighting cues. Each block can be swapped to suit workshops, installations, or research sprints.",
  },
  {
    icon: Lightbulb,
    title: "Rapid experimentation",
    detail:
      "Set up a weekly cadence of creative jams to try new algorithms and form factors, documenting learnings through short films and open-source snippets.",
  },
  {
    icon: Rocket,
    title: "Community showcases",
    detail:
      "Hosted pop-up nights where visitors composed music with code, giving immediate feedback that shaped the roadmap for future explorations.",
  },
];

const CreativeCoding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileOverlay />
      <Navigation forceWhite />

      <section className="relative py-24 overflow-hidden">
        <div className=" bg-gradient-to-b from-teal-950 via-black to-black-900" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
             
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-white">
                Website Design & Development 
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I designed and developed the website for Four Two Private Ltd, an agency dedicated to transforming products into
                enduring and iconic brands. The goal was to craft a site that embodies their core values, showcases services and case
                studies, and communicates their strategic approach clearly and memorably across devices.
              </p>
               <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="border-blue-400 text-white-600"
                >
                  Brand & Strategy
                </Badge>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                  Website Design
                </Badge>
              </div>
              {/*<div className="space-y-3 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  Responsive, accessible, and brand-forward web design
                </div>
              </div>*/}
              <Button
                asChild
                size="lg"
                className="bg-teal-900 text-white hover:bg-teal-700"
              >
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                  Explore more projects
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="" />
              <div className="relative overflow-hidden rounded-[40px] border border-purple-200/60 shadow-xl">
                <img
                  src="/Photos/42.png"
                  alt="Four Two Private Ltd website screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      

      

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Goals
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A responsive, brand-led website that communicates Four Two's services, showcases case studies, and highlights their
              strategic approach to product and brand development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => {
              const Icon = experiment.icon;
              return (
                <Card
                  key={index}
                  className="h-full border-border/50 bg-teal-900 text-white backdrop-blur-sm text-white"
                >
                  <CardHeader>
                   
                    <CardTitle className="text-lg text-white font-semibold">
                      {experiment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-white/50 leading-relaxed mb-4">
                      {experiment.description}
                    </p>
                   
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* Four Two Case Study */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-4xl font-l font-bold mb-6">The Challenge was to create the digital presence</h2>
              <h3 className="text-xl text-teal-400 font-semibold mb-3">Who?</h3>
              <p className="text-muted-foreground mb-6 text-white/80">
                Four Two Brand Agency specializes in building products into timeless and universal brands. When tasked with
                redesigning their website, my objective was to create a digital experience that reflected their values, services and strategies.
              </p>

              <h3 className="text-xl text-teal-400 font-semibold mb-3">Challenge?</h3>
              <p className="text-muted-foreground mb-6 text-white/80">
                Creating a website that represents Four Two's values without overtly "screaming" through traditional marketing tactics demanded
                a nuanced approach to branding and messaging. Capturing the essence of minimalism without sacrificing functionality or engagement
                posed a creative challenge.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/Photos/42-5.png" alt="Four Two phone mockup" className="rounded-xl shadow-lg w-full max-w-sm object-cover" />
            </div>
          </div>

         

          

          {/*<div className="mb-12">
            <h3 className="text-3xl font-heading mb-6">Key features</h3>
            <ul className="space-y-8">
              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Addressing the Common Question</h4>
                  <p className="text-white/80">We incorporated a prominent section on the landing page dedicated to answering "What is 42?" — crafted in a visually appealing and easy-to-understand manner, inviting users to scroll for more information.</p>
                </div>
              </li>

              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Interactive Services Section</h4>
                  <p className="text-white/80">Services are showcased in three distinct segments on the home page. Each segment featured interactive elements, allowing users to flip and explore individual services. This interactive approach encouraged engagement and provided direct access to detailed information.</p>
                </div>
              </li>

              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Integration of Personal Connection</h4>
                  <p className="text-white/80">To establish a personal connection and leverage existing familiarity, we included an Instagram feed of the agency's creative director directly on the home page. This feature allowed users who were already acquainted with the creative director to connect with the agency on a more personal level.</p>
                </div>
              </li>
            </ul>
          </div>*/}

          {/*<div className="border-t border-white/10 pt-12">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 mb-6">
              “Himanshi picked up the values of attention to details at 42 really well. She perfectly grasped what we were looking for and delivered at par! Her punctuality, curiosity and diversity of learnings made our dream website happen in the exact we way expected it to happen.”
            </blockquote>
            <div className="flex items-center gap-4">
              <img src="/Photos/photobooth_profile.png" alt="Krishna Rathi" className="w-14 h-14 rounded-full" />
              <div>
                <p className="font-semibold">Krishna Rathi</p>
                <p className="text-white/60">Founder and Creative director of Four Two</p>
              </div>
            </div>
          </div>*/}
        </div>
      </section>

      {/* Aim + Methodology */}
      <section className="py-24 bg-teal-950 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-white text-center">
              Key Design Highlights
            </h2>
            <p className="text-white font-light text-sm leading-relaxed mb-6 text-center">
              Focus on how humans perceive, process and respond to information in
              system interactions.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-black font-bold mb-2">
                  Structured Service Exploration
                </h3>
                <p>
                  Services were presented in a clean, segmented layout for easy navigation.
                  Interactive flip cards allowed users to reveal details like descriptions, key features, and benefits without cluttering the interface.
                 The format encouraged engagement while maintaining a minimal and organized experience.

                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-black font-bold mb-2">
                 Visual Minimalism & Impact
                </h3>
                <p>
                  Full-screen project visuals were centered to create an uncluttered and immersive viewing experience.
                 Clean typography, subtle animations, and consistent spacing reinforced Four Two’s minimalist aesthetic.
                  This cohesive visual system strengthened brand perception and ensured a premium feel.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-black font-bold mb-2">
                 Homepage Enhancements for Clarity
                </h3>
                <p>
              A dedicated section answered the most common question—“What is 42?”—in a simple, visually driven format to guide new visitors.
              Three interactive service segments on the home page allowed users to explore offerings directly through flip interactions.
              An Instagram feed from the creative director added a personal touch, helping existing audiences connect instantly with the brand.
                </p>
              </div>
               
            </div>
          </div>
        </div>
      </section>



       <div className="mb-12 max-w-6xl mx-auto px-4 py-24">
            <h3 className="text-3xl font-l font-bold mb-6">Services</h3>
            <ul className="space-y-8">
              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Segmented Presentation</h4>
                  <p className="text-white/80">Services on the Four Two website are presented in a structured and organized layout, designed to flip and reveal detailed information on the backside. This interactive format allows users to easily explore each service within a structured and engaging layout.</p>
                </div>
              </li>

              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Interactive Flip Cards</h4>
                  <p className="text-white/80">Within each service category, interactive flip cards are utilized to display detailed information about individual services. Users can interact with these cards by flipping them to reveal descriptions, key features, and benefits of each service.</p>
                </div>
              </li>

              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Enhanced Visual Impact</h4>
                  <p className="text-white/80">Project images were designed to create a clean and uncluttered aesthetic by covering the entire screen. Each image was strategically centered to maximize impact and visual engagement, ensuring a focused and compelling viewing experience for visitors.</p>
                </div>
              </li>

              <li className="flex">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 mr-6 mt-2" />
                <div>
                  <h4 className="text-xl font-semibold">Visual Cohesion and Minimalism</h4>
                  <p className="text-white/80">The service section aligns with Four Two's minimalist aesthetic, featuring clean lines, cohesive typography, and subtle animations. This visual consistency reinforces the agency's brand identity and values.</p>
                </div>
              </li>
            </ul>
          </div>



       {/* Communication Loop */}
      <section className="py-4 bg-white-50">
        <div className="container max-w-7xl mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-10 grid md:grid-cols-1 lg:grid-cols-1 gap-6 ">
            <img
              src="/Photos/42-4.png"
              alt="Four Two case study screenshot"
              className="rounded-xl w-full object-cover aspect-16:9"
            />
          </div>
        </div>
      </section>  


       {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container max-w-7xl mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 grid md:grid-cols-1 lg:grid-cols-1 gap-6 ">
            <img
              src="/Photos/42-3.png"
              alt="Four Two case study screenshot"
              className="rounded-xl w-full object-cover aspect-16:9"
            />
          </div>
        </div>
      </section>


      
      {/*<section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading text-foreground mb-4">
                Making Technology Feel Playful
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I built a modular toolkit to combine sensors, code, projection,
                and sound. These foundations let workshops transform quickly—one
                night it's a narrative instrument, the next an ambient
                meditation space.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {toolkit.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-purple-200/60 bg-white/80 p-8 shadow-lg space-y-6">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {outcome.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>*/}

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border border-purple-200/60 bg-white">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-l font-bold text-foreground">
               What I learned?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
              Through this project, I explored the synergy between design tools, AI-assisted coding, and web development. 
              I gained hands-on experience in translating visual designs into functional interfaces, learned to guide AI to achieve the 
              desired outcomes, and understood how to experiment creatively while maintaining usability and responsiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

  
    </div>
  );
};

export default CreativeCoding;
