import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TimelineCardProps = {
  index: number | string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

const MobileOverlay: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center px-6">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">
        Uh-oh!
      </h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">
        Open this website on a bigger screen!
      </p>
    </div>
  </div>
);

const TimelineCard: React.FC<TimelineCardProps> = ({
  index,
  title,
  subtitle = "",
  dark = false,
}) => (
  <div
    className={`rounded-lg border ${dark ? "bg-gradient-to-br from-slate-800/80 to-slate-700/60 text-white" : "bg-white"
      } p-4 shadow-sm min-w-[200px]`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xs uppercase font-medium tracking-wider text-muted-foreground">
          {subtitle}
        </p>
        <h4 className={`mt-2 font-semibold ${dark ? "text-white" : "text-slate-800"}`}>
          {title}
        </h4>
      </div>
      <div className={`text-sm font-mono ${dark ? "text-slate-100/80" : "text-muted-foreground"}`}>
        {String(index).padStart(2, "0")}
      </div>
    </div>
  </div>
);

const SamsungAIAgent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-100">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* COVER / TITLE */}
      <section className="relative pt-12 pb-34 items-center overflow-hidden bg-white max-w-8xl ">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="mb-4 text-muted-foreground hover:text-foreground"
              >
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2 inline-block" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Large Title block */}
            <div className="py-72 max-w-8xl">
              <h1 className="text-8xl md:text-5xl font-extrabold leading-tight text-sky-600">
                Samsung
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-slate-700 font-semibold mb-80">
                Designing Agentic AI Interactions in XR
              </p>

              {/* author / course line */}
              <div className="mt-8  border-t border-border/40 pt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div>M.Des. Immersive Media Design | 6 weeks</div>
                <div>Nidhi Surekha | Himanshi Puri | Akash Rawat | Rachit Bhatnagar</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Design brief card centered
            <div className="mt-12 max-w-6xl items-center">
              <div className="mx-auto bg-white md:text-2xl rounded-lg shadow-md p-8">
                <div className="text-center">
                  <h3 className="text-sm text-sky-600 font-semibold">Design Brief</h3>
                  <h2 className="mt-3 text-2xl md:text-2xl font-medium text-slate-900">
                    Design user-agent <span className="font-bold">interactions</span> for a futuristic
                    and ubiquitous agent in an XR device.
                  </h2>
                </div>

                <div className="mt-6 border-t border-border/50 pt-6 flex items-start gap-6">
                  <div className="text-sky-600 font-semibold text-sm">Key Challenge</div>
                  <div className="text-xs text-muted-foreground">
                    Designing an AI agent that can seamlessly understand user context, anticipate needs,
                    and act intelligently in real time within an XR environment, while maintaining natural
                    and intuitive interactions.
                  </div>
                </div>
              </div>
            </div> */}



             {/* design brief */}
      <section className="py-16 bg-white-50">
        <div className="container max-w-7xl mx-auto px-4 rounded-xl  overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/sam/1.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>










      {/* QUOTE + INTRO PARAGRAPH */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-extrabold leading-snug text-slate-900">
              “The <span className="text-sky-600">more senses</span> an agent understands the
              more human the interactions feels.”
            </blockquote>

            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl">
              As technology evolves, our interactions with digital products are no longer limited to a
              mouse and keyboard. Users can now tap, swipe, speak, and gesture — and even glance —
              to interact. This shift toward multimodal interfaces, where multiple input methods coexist
              has opened up exciting possibilities for creating more intuitive, accessible, and
              versatile experiences.
            </p>

            <div className="mt-4">
              <a
                href="#"
                className="inline-block text-sky-600 font-semibold underline text-sm"
              >
                how do we design effectively for such diverse interactions?
              </a>
            </div>

            <hr className="mt-10 border-t border-border/50" />
          </div>
        </div>
      </section>

     


       {/* competitors */}
      <section className="py-16 bg-white">
        <div className="container max-w-12xl mx-auto px-4 rounded-xl  overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/sam/6.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover aspect-4/3"
            />
          </div>
        </div>
      </section>



             {/* Cuser persona */}
      <section className="py-16 bg-white-50">
        <div className="container max-w-12xl mx-auto px-4 rounded-xl  overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/sam/2.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover aspect-16/9"
            />
          </div>
        </div>
      </section>


       {/* user flow */}
      <section className="py-16 bg-white">
        <div className="container max-w-12xl mx-auto px-4 rounded-xl  overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/sam/4.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover aspect-4/3"
            />
          </div>
        </div>
      </section>


      {/* user flow */}
      <section className="py-16 bg-white">
        <div className="container max-w-12xl mx-auto px-4 rounded-xl  overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/sam/3.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover aspect-16/9"
            />
          </div>
        </div>
      </section>


      {/* key user interface */}
      <section className="py-12 bg-white text-sky-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-sky-600 text-center">
             Key User Interface Considerations
            </h2>
            <p className="text-white font-light text-sm leading-relaxed mb-6 text-center">
              
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                  Peripheral-first
                </h3>
                <p>
                  Place primary presence (agent orb) at lower-right periphery (≈15° off gaze).
                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Gaze lanes
                </h3>
                <p>
                 Keep 8-12° cone clear; only transiently enter center with micro-confirmations, less than 2s.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                 Depth layering
                </h3>
                <p>
                  Place capture guides at object depth (object-locked), not HUD depth, to reduce parallax fatigue.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Safe zones
                </h3>
                <p>
                  10% inset margins on all sides for labels; avoid edge clipping in motion.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* USER-CENTERED CREATION PROCESS 
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-muted-foreground">Design Process</h3>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">User-Centered Creation Process</h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-prose">
                BetterAI was a journey focused on delivering an intuitive, user-friendly, & AI-powered
                experience that simplifies everyday tasks. Every stage of the design process was aimed
                at understanding user needs and anticipating challenges.
              </p>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm text-muted-foreground">Brand Guidelines</div>
            </div>
          </div> */}

          {/* TIMELINE CARDS
          <div className="mt-10 max-w-8xl mx-auto items-center">
            <div className="overflow-x-auto">
              <div className="flex gap-6 items-start py-6 px-2">
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">1 week</div>
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">2 week</div>
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">3 week</div>
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">4 week</div>
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">5 week</div>
                <div className="min-w-[120px] text-xs text-center text-muted-foreground">6 week</div>
              </div>

              <div className="flex gap-6 items-center max-w-8xl mt-4 px-2 pb-6">
                <div className="flex flex-col gap-6">
                  <TimelineCard index={1} title="Market Research" subtitle="MARKET RESEARCH" dark />
                  <div className="mt-10">
                    <TimelineCard index={2} title="Information Architecture" subtitle="INFORMATION ARCHITECTURE" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <TimelineCard index={3} title="Wireframes" subtitle="WIREFRAMES" dark />
                  <div className="mt-6">
                    <TimelineCard index={4} title="UX Design" subtitle="UX DESIGN" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="mt-12">
                    <TimelineCard index={5} title="UI Design & Style Guide" subtitle="UI DESIGN & STYLE GUIDE" />
                  </div>
                  <div className="mt-14">
                    <TimelineCard index={6} title="Development" subtitle="DEVELOPMENT" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SamsungAIAgent;
