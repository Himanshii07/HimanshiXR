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
    icon: Code2,
    title: "Generative typography engine",
    description:
      "A canvas-based playground where words react to voice input. Letterforms stretch, distill, and reform based on tone, allowing poetic performances to leave visual traces.",
    badge: "WebGL + Web Audio",
  },
  {
    icon: Cpu,
    title: "Analog sensors meet shaders",
    description:
      "Arduino-driven pressure pads stream data into GLSL shaders, creating living gradients projected onto walls. Participants choreograph colour fields through movement.",
    badge: "Physical computing",
  },
  {
    icon: Sparkles,
    title: "Particle narratives",
    description:
      "Stories unfold as particle clusters. Each sentence becomes a swarm with rules inspired by flocking and magnetism, encouraging audiences to follow arcs rather than scroll text blocks.",
    badge: "Creative storytelling",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-purple-50">
      <MobileOverlay />
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/50 via-white to-sky-100/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="border-purple-400 text-purple-600"
                >
                  Experimental Coding Lab
                </Badge>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                  Immersive media
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Creative Coding Residency Series
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A year-long residency of nightly sketches exploring how code,
                sound, and fabrication can translate complex emotions into
                playful digital instruments.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  2023 – 2024 · Residency hosted in Bangalore and remote pop-ups
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  48 working prototypes shared with the community across six
                  showcases
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                  Explore more projects
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-purple-200/40 via-white to-sky-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[40px] border border-purple-200/60 shadow-xl">
                <img
                  src="/Photos/illustrations/13.png"
                  alt="Creative coding projection mapped artwork"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Featured Experiments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each build was a conversation between algorithms and human
              improvisation, designed to invite non-coders into generative
              thinking.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => {
              const Icon = experiment.icon;
              return (
                <Card
                  key={index}
                  className="h-full border-border/50 bg-card/60 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {experiment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {experiment.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-600"
                    >
                      {experiment.badge}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
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
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border border-purple-200/60 bg-white/80">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-heading text-foreground">
                Why Creative Coding Matters Here
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The residency proved that accessible tools and storytelling
                frameworks help people reimagine technology as a companion
                rather than a barrier. The experiments now power workshops with
                schools, indie musicians, and museum educators who want to turn
                data into intimate experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreativeCoding;
