import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TimelineCardProps = {
  index: number | string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};
const storyboardFrames = [
    {
      image: "/Photos/sam/18.jpg",
      alt: "Task Bar UI of AI Agent ",
      title: "Action Menu",
      description:
        "A clean, distraction-free layout with 3–5 primary tasks displayed upfront. One-tap action model, selecting a task directly initiates the process",
    },
    {
      image: "/Photos/sam/20.jpg",
      alt: "Agentic Camera UI",
      title: "Floating App Bar",
      description: "Clean, minimal and expandable UI displaying essential apps and their live notifications, offering quick access to calls, messages, and mails"
    },
    {
      image: "/Photos/sam/21.jpg",
      alt: "Agent Thinking and reasoning UI ",
      title: "Agent Thinking / Reasoning",
      description: "Subtle Visual Indicator that signals the agent’s presence and soft animation indicating that the agent is active. Positioned in lower-right peripheral vision where it’s visible but non-intrusive."
    },
       {
      image: "/Photos/sam/19.jpg",
      alt: "Navigation UI ",
      title: "Navigation ",
      description:
        "A subtle arrow and indicators are placed at the bottom center of the user’s field of view. Showing only essential metrics prevents information overload in a crowded environment.",
    },
    {
      image: "/Photos/sam/17.jpg",
      alt: "Cab Booking UI OF AI Agent",
      title: "Transportation Booking",
      description: "The most relevant option is placed directly in the center of the user’s field of view and the alternative transport modes are displayed in the peripheral vision."
    },
      {
      image: "/Photos/sam/16.jpg",
      alt: "Agentic Camera UI",
      title: "Agentic Camera",
      description: "Subtle framing guide composition without obstructing the subject. Instead of the user actively opening a camera app, the agent anticipates intent and offers capture."
    },

    
    

  ];


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
      
      {/* Hero Section - concise summary, visual */}
            <section className="relative py-24 bg-white text-slate-900 overflow-hidden text-white ">
              <div className="container mx-auto px-4">
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
                <div className="max-w-7xl mx-auto text-center">
                  <Button
                    asChild
                    variant="ghost"
                    className="mb-8 text-muted-white hover:text-foreground"
                  >
                    <Link to="/projects">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Projects
                    </Link>
                  </Button>
                  <h1 className="text-2xl md:text-5xl font-bold mb-6 text-sky-600">
                    Samsung
                  </h1>
                  <p className="text-lg text-slate-900 max-w-5xl mx-auto leading-relaxed mb-8 font-light">
                    Designing Agentic AI Interactions for XR Devices
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <Badge
                      variant="outline"
                      className="text-sm border-blue text-blue-400"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      July'25
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-sm border-blue text-blue-400"
                    >
                      <Users className="w-3 h-3 mr-1" />
                      Team Project
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-sm border-blue text-blue-400"
                    >
                      <Award className="w-3 h-3 mr-1" />
                      6 Weeks
                    </Badge>
                  </div>
                 <div className="flex justify-center mb-8">
                    <img
                      src="/Photos/sam/30.jpg"
                      alt="Aircraft maintenance hangar"
                      className="aspect-16/9 object-cover mx-auto"
                    />
                  </div> 
                   {/* author / course line */}
              <div className="mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div>M.Des. Immersive Media Design | 6 weeks</div>
                <div>Nidhi Surekha | Himanshi Puri | Akash Rawat | Rachit Bhatnagar</div>
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



             {/* design brief 
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
      </section> */}










      {/* QUOTE + INTRO PARAGRAPH */}
      <section className="py-16">
        <div className="container mx-auto px-8 py-24">
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
              className="rounded-xl w-full object-cover"
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


      


      {/* Travel Agent */}
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-sky-600 mb-8 ">
                AI Travel Agent
              </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              
              <div className="grid sm:grid-cols-1 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-sky-800 font-semibold mb-2">
                  Speak Like a Travel Companion, Not a Command Prompt
                </h3>
                <p>
                  The agent uses friendly, situational language, supportive without being overbearing.
                   It adapts tone to the user’s mood, urgency, and setting.
                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-sky-800 font-semibold mb-2">
                Let the Interaction Fit the Moment
                </h3>
                <p>
                 Gestures, haptics, gaze, and contextual triggers replace constant voice or text input. 
                 Agent reads environment and user cues to act with minimal friction.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-sky-800 font-semibold mb-2">
                 Design for All Abilities and Situations
                </h3>
                <p>
                  The system supports varied physical, sensory, and cognitive needs, adapting interaction modes to the moment, 
                whether the user’s hands are full, environment is noisy, or visibility is low.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-sky-800 font-semibold mb-2">
              Adapt to Patterns, Anticipate Needs
                </h3>
                <p>
                 The agent observes repeated choices, like preferred music volume, photo-sharing habits,
                  or travel booking methods and applies them proactively when relevant.
                </p>
              </div>
            </div>
            </div>
            <div className=" max-w-2xl">
              <img
                src="/Photos/sam/7.jpg"
                alt="Bodystorming with sticky notes and team"
                className="rounded-xl max-w-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* QUOTE + INTRO PARAGRAPH */}
      <section className="py-16">
        <div className="container mx-auto px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-extrabold leading-snug text-slate-900">
              “The <span className="text-sky-600">Calm technology or calm design</span> is a type of information technology 
              where the interaction between the technology and its user is designed to occur in the user's periphery rather than 
              constantly at the center of attention." 
            </blockquote>

            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl">
              The use of calm technology is paired with <span className="text-sky-600 font-bold"> ubiquitous computing</span>  as a way to minimize the perceptible 
              invasiveness of computers in everyday life.
            </p>

            <hr className="mt-10 border-t border-border/50" />
          </div>
        </div>
      </section>




       <section className="py-24 bg-gradient-to-r from-white via-slate-50 to-blue-50/60">
              <div className="container mx-auto px-4">
                <div className="max-w-8xl mx-auto">
                  <div className="grid lg:grid-cols-1 gap-12 items-center text-center">
                    <div> 
                      <h2 className="text-4xl font-bold mb-6 text-sky-700 text-center">
                       UI Explorations | Design Philosophy
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">
                         Before beginning development, I created a detailed storyboard to map out the entire user journey and mythological narrative.
                      </p>
                      {/*<div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="rounded-xl border border-blue-200/60 bg-white/70 p-4 shadow-sm">
                          <h3 className="text-blue-700 font-semibold mb-2">
                            Intentional Rhythm
                          </h3>
                          <p>
                            Slow camera movements and soft lighting cues keep the
                            experience contemplative while guiding focus.
                          </p>
                        </div>
                        <div className="rounded-xl border border-sky-200/60 bg-white/70 p-4 shadow-sm">
                          <h3 className="text-sky-700 font-semibold mb-2">
                            Mythic Highlights
                          </h3>
                          <p>
                            Panels emphasize key legend moments that transition users
                            seamlessly into interactive sequences.
                          </p>
                        </div>
                      </div>*/}
                    </div>
      
                    <div className="grid sm:grid-cols-2 gap-6">
                      {storyboardFrames.map((frame, index) => (
                        <Card
                          key={index}
                          className="overflow-hidden border border-border/40 bg-white"
                        >
                          <div className="relative aspect-16/9 overflow-hidden">
                            <img
                              src={frame.image}
                              alt={frame.alt}
                              className="w-full h-full object-cover aspect-16/9"
                            />
                            <div className="absolute inset-0 bg-transparent" />
                            <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide uppercase text-white/80">
                              
                            </span>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-semibold text-sky-700 mb-2">
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

      {/* key user interface */}
      <section className="py-24 bg-white text-sky-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-sky-600 text-center">
             Key User Interface Considerations
            </h2>
            <p className="text-white font-light text-sm leading-relaxed mb-6 text-center">
              
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                  Inform without interrupting
                </h3>
                <p>
                 Peripheral displays can inform without interrupting, allowing central vision to remain focused on primary tasks.
                 The user’s central view is for doing. Put urgent info near center, background reasoning should live peripherally.

                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Progressive disclosure
                </h3>
                <p>
                 Progressive disclosure manages complexity by revealing information as needed, preventing overload.
                 Show a tiny signal for thinking, expand on demand to detailed reasoning. Don’t dump chain-of-thought into view by default.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                 Decision Efficiency
                </h3>
                <p>
                 By surfacing the best option first, the design reduces decision fatigue, users don’t need to scan through multiple menus.
                 The secondary options remain visible but less prominent, reducing clutter while allowing for comparison if needed.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Actionable Items
                </h3>
                <p>
                 Keep action items close to central vision but not blocking the primary scene.
                 And use horizontal layout format for easy scannable linear arrangement.

                </p>
              </div>
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                  Cognitive Load Reduction
                </h3>
                <p>
                  Showing only essential metrics (distance, gate, ETA) prevents information overload in a crowded environment like an airport.
                  The small, persistent arrow subtly adapts as the user moves, guiding attention forward without demanding active focus.
                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Natural Interactions
                </h3>
                <p>
                 Placing the arrow low simulates how people naturally look at the ground when following a path, 
                 it feels intuitive and consistent with real-world navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 


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
