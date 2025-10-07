import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Hand,
  Palette,
  Sparkles,
  Layers3,
  Lightbulb,
  Cpu,
  Users,
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

const sensoryPrinciples = [
  {
    icon: Hand,
    title: "Gesture-native navigation",
    description:
      "Guided surfaces are sculpted to be read through touch. Swiping and pressing create gentle haptic pulses that confirm every move without visual overload.",
    iconColor: "text-amber-600",
    background: "bg-amber-100",
  },
  {
    icon: Palette,
    title: "Material storytelling",
    description:
      "Soft textile meshes, etched glass, and thermo-chromatic ink become interactive surfaces. Each texture signals purpose—guiding fingertips to explore new actions.",
    iconColor: "text-rose-600",
    background: "bg-rose-100",
  },
  {
    icon: Sparkles,
    title: "Micro moments of delight",
    description:
      "Ambient lighting and sound respond to pressure. A light squeeze activates glows that bloom outward, rewarding curiosity and creating memorable rituals.",
    iconColor: "text-sky-600",
    background: "bg-sky-100",
  },
];

const prototypes = [
  {
    icon: Layers3,
    title: "Layered canvas for multi-user sketching",
    caption:
      "A palm-sized tablet where two people can sculpt typographic strokes together. Force-sensitive layers capture nuance, allowing tactile co-creation in dimly lit spaces.",
  },
  {
    icon: Lightbulb,
    title: "Ambient lighting choreographer",
    caption:
      "Touch-reactive tiles orchestrate lighting scenes based on movement paths. The system learns favourite moods and suggests compositions for storytelling in physical rooms.",
  },
  {
    icon: Cpu,
    title: "Pressure-mapped sound controls",
    caption:
      "Haptic sliders replace knobs with a pressure fabric that modulates soundscapes. Musicians feel feedback before hearing it, helping them mix confidently without screens.",
  },
];

const collaborationInsights = [
  "Co-designed with industrial designers to prototype soft-good housings that protect embedded sensors.",
  "Mapped accessibility considerations with visually impaired storytellers, ensuring gestures can be learned through tone and pace.",
  "Used iterative testing sessions to calibrate vibration intensity, avoiding sensory fatigue during extended use.",
];

const TouchDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50">
      <MobileOverlay />
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-white to-rose-100/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge
                  variant="outline"
                  className="mb-6 border-amber-400 text-amber-600"
                >
                  Tactile Interaction Study
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">
                  Touch Design Research Platform
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A suite of tactile-first prototypes exploring how surfaces,
                  light, and sound respond to nuanced gestures. Built to help
                  storytellers and facilitators host collaborative experiences
                  without relying on screens.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-700"
                  >
                    Multi-sensory interactions
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-rose-100 text-rose-700"
                  >
                    Inclusive design research
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-sky-100 text-sky-700"
                  >
                    Physical computing
                  </Badge>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    2024 · Independent exploration with guest collaborators
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-rose-500" />
                    Weekly co-creation sessions across three continents
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-200/40 via-white to-rose-200/40 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-amber-200/60 shadow-xl">
                  <img
                    src="/Photos/illustrations/8.png"
                    alt="Touch-sensitive prototype being tested"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Sensory Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every interaction was tuned to communicate through texture,
              rhythm, and temperature before visuals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sensoryPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={index}
                  className="h-full border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${principle.background}`}
                    >
                      <Icon className={`w-6 h-6 ${principle.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading text-foreground mb-4">
                Prototyping Highlights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We iterated across foam models, conductive paint experiments,
                and microcontroller firmware to discover how gestures could
                control ambient systems without visual distraction.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  • Designed modular PCBs that snap into soft enclosures for
                  rapid sensor swapping.
                </li>
                <li>
                  • Documented tactile grammar so facilitators can onboard
                  participants within two minutes.
                </li>
                <li>
                  • Crafted a testing kit with thermochromic stickers to
                  visualise heat trails from repeated gestures.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              {prototypes.map((prototype, index) => {
                const Icon = prototype.icon;
                return (
                  <Card
                    key={index}
                    className="border border-amber-200/40 bg-white/80 shadow-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {prototype.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {prototype.caption}
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

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="border border-rose-200/60 bg-white/80">
            <CardContent className="p-10">
              <h2 className="text-2xl font-heading text-foreground mb-4 text-center">
                Collaboration Insights
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Touch Design is a living platform that grows through
                partnerships. These insights keep the work grounded in
                real-world rituals.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {collaborationInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-rose-200/60 bg-rose-50/60 p-6 text-sm text-muted-foreground leading-relaxed"
                  >
                    {insight}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TouchDesign;
