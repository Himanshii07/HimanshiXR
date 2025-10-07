import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  Eye,
  Play,
  CheckCircle,
  BookOpen,
  BarChart,
  UserCheck,
  Layout,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const PreFlightVR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      {/* Hero Section - concise summary, visual */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-white ">
        <div className="container mx-auto px-4">
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
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-white">
              Preflight Maintenance Check VR
            </h1>
            <p className="text-lg text-white max-w-5xl mx-auto leading-relaxed mb-8 font-light">
              VR-based pre-flight maintenance training simulation to address
              costly, risky, and hands-off traditional methods. Guided
              inspection and independent practice in a safe, immersive
              environment with real-time feedback.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="outline"
                className="text-sm border-white text-blue-200"
              >
                <Calendar className="w-3 h-3 mr-1" />
                2025
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-white text-blue-200"
              >
                <Users className="w-3 h-3 mr-1" />
                Team Project
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-white text-blue-200"
              >
                <Award className="w-3 h-3 mr-1" />
                2 Weeks
              </Badge>
            </div>
            <div className="flex justify-center mb-8">
              <img
                src="/Photos/Flight/6.png"
                alt="Aircraft maintenance hangar"
                className="rounded-lg shadow w-full grid md:grid-cols-1 gap-1 aspect-16/9 max-w-14xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      
      

      

      {/* Aim + Methodology */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#8DB2D6] mb-3 ">
                Human Factors and Ergonomics
              </h2>
              <p className="text-sm text-muted-white">
                The course focused on understanding how people interact with systems
                and environments, and how thoughtful design can enhance comfort,
                safety, and performance. It studies how humans think, move, and
                perceive, and applies that understanding to create safe, efficient,
                and comfortable experiences. In this course, we explored how these
                principles apply to Extended Reality (XR), learning to minimize
                discomfort through the right transition techniques, design
                interactions that closely mimic real-world movement, and help users
                build spatial awareness by understanding how their actions shape the
                environment. We also studied how our senses and cognition work
                differently in virtual spaces, how to manage cognitive load, and how
                to apply UX heuristics to XR design for a more natural and user-centered
                experience.
              </p>
            </div>
            <div>
              <img
                src="/Photos/Flight/13.png"
                alt="Bodystorming with sticky notes and team"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-xl border border-border/60 bg-slate-100 p-6 items-center shadow-lg">
            <h2 className="text-3xl text-blue-900 font-bold mb-3 text-center">
              Problem Statement
            </h2>
            <p className="text-base text-blue-900 text-center">
              Aviation maintenance crews and engineers are responsible for conducting
              pre-flight inspections and tasks that are time-critical, highly
              detailed, and essential for ensuring flight safety and compliance with
              regulations. However, traditional manual inspections are often
              time-consuming, physically demanding, and prone to human error. Even
              small mistakes can compromise safety and efficiency, making it
              necessary to explore solutions that support crews in performing these
              checks with accuracy, speed, and reduced strain.
            </p>
          </div>
        </div>
      </section>







      

      {/* Communication Loop */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-8xl mx-auto px-4 py-6 rounded-xl shadow-lg overflow-hidden bg-slate-900 grid sm:grid-cols-1 gap-4 ">
          <div className="max-w-8xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/Flight/28.png"
              alt="Human Factors reference"
              className="rounded-xl aspect-16/9 object-fit"
            />
          </div>
          {/* <div className="max-w-4xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/Flight/16.png"
              alt="Human Factors reference"
              className="rounded-xl aspect-16/9 object-fit"
            />
          </div>*/}
        </div>
      </section>



      {/* Default Bias Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h3 className="text-lg font-semibold mb-4 text-slate-200">
              What is Cognitive Human Factors?
            </h3>
            <p className="text-2xl font-semibold mb-6 text-orange-400">
             Cognitive human factors focus on how people perceive, process, and respond to information while interacting with systems.
            
            </p>
          </div>
          <div className="max-w-7xl mx-auto bg-slate-800/80 rounded-xl p-8 shadow-xl">
            <h4 className="text-xl font-bold mb-3 text-white">How It Was Applied in the Project</h4>
            <p className="text-slate-200 mb-2">
            Critical information (tool status, inspection alerts) placed within the primary visual field for faster comprehension. 
            <span className="font-bold text-orange-200">Sequential task flow</span>.
             used to minimize memory load and guide users step-by-step. 
           Added visual and audio feedback cues to confirm user actions and improve system understanding. 
            <span className="font-bold text-orange-200">Designed context-based menus and prompts</span>.
             so users could focus on the maintenance process without distractions. Ensured all interactions followed cognitive ergonomics principles, improving focus, decision-making, and overall task accuracy.
             {/* <span className="font-bold text-orange-400">
                pre-configured or default settings
              </span>
            
              <span className="font-bold text-orange-400">defaults</span>. They often
              serve as the easiest path in a sea of choices, especially when we are
              either{" "}
              <span className="font-bold text-cyan-400">overwhelmed or uncertain</span>
              .*/}
            </p>
          </div>
        </div>
      </section>




      {/* Bodystorming Section - process, scripting, modeling, filming */}
      <section className="py-16  bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Bodystorming</h2>
            <p className="text-lg text-muted-grey mb-6 font-light">
              We bodystormed the VR training by scripting interactions, creating
              a plane model, and filming the process to refine inspections and
              UI.
            </p>
            <CustomVideoPlayer
              src="https://youtu.be/3CAd8phVRMc"
              title=""
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Interaction Planning Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">GOMS Model</h2>
            <p className="text-lg text-muted-grey font-light mb-6">
              Before adding any interactions, we carefully planned and discussed
              each step to ensure a smooth and intuitive user experience in VR.
            </p>
            <img
              src="/Photos/Flight/8.jpg"
              alt="Checklist for interaction planning"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Aim + Methodology */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-white text-center">
              VR Design Considerations
            </h2>
            <p className="text-white font-light text-sm leading-relaxed mb-6 text-center">
              Focus on how humans perceive, process and respond to information in
              system interactions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-blue-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                  Natural Posture & Movement
                </h3>
                <p>
                  Interactions were designed to align with natural human body mechanics, allowing users to reach, look, 
                  and move comfortably without awkward or repetitive motions.
                </p>
              </div>
              <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                 Viewing Angle & Menu Placement
                </h3>
                <p>
                  UI elements and menus were positioned 15–20° below eye level
                   and within the primary field of view to prevent neck strain and reduce eye fatigue during longer sessions.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                 Movement Comfort & Locomotion
                </h3>
                <p>
                  Used teleportation and smooth joystick transitions instead of
                   free movement to minimize motion sickness and maintain a stable visual experience.
                </p>
              </div>
               <div className="rounded-xl border border-sky-200/60 bg-slate-100 p-4 shadow-sm">
                <h3 className="text-blue-900 font-semibold mb-2">
                Feedback & Responsiveness
                </h3>
                <p>
                  Provided visual, audio, and haptic feedback for every action to reassure users that their input was registered, 
                  enhancing confidence and reducing cognitive load.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Storyboarding Section - images only */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Storyboarding</h2>
            <p className="text-lg text-muted-grey font-light mb-6">
              Visualizing the trainee journey from guided session to independent
              practice.
            </p>
            <div className="grid md:grid-cols-1 gap-12 bg-white py-24 px-14 rounded-lg">
              <img
                src="/Photos/Flight/14.png"
                alt="Storyboard sketch details"
                className="rounded-lg  w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/3.png"
                alt="Journey mapping with sticky notes"
                className="rounded-lg w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/4.png"
                alt="Desk setup for sketching"
                className="rounded-lg w-full object-cover aspect-16/9"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Behavior Model Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 max-w-2xl">
            
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                VR Experience Walkthrough
              </h2>
            </div>
            <p className="text-base text-lg text-slate-200 mb-6">
              A step-by-step training flow that mirrors real aircraft inspections, using clear cues,
               feedback, and transitions to keep users focused and engaged.
            </p>
            {/*<div className="text-6xl font-bold text-orange-400 mb-2">Impact</div>
            <div className="text-base text-slate-200 mb-8">
              Behavior (B) = Motivation (M) × Ability (A) × Prompt (P)
            </div>*/}
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-slate-800/80 border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-1 text-[#8DB2D6] text-center">
                 Flow
                </h3>
                <p className="text-slate-200 mb-6 text-sm text-center">
                 Training starts in guided mode with step-by-step instructor cues.
                </p>
                <img
                  src="/Photos/Flight/21.png"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-1 text-[#8DB2D6] text-center">
                  Task
                </h3>
                <p className="text-slate-200 mb-6 text-sm text-center">
                  Users inspect critical aircraft components like tyres, engines, and flaps.
                </p>
                <img
                  src="/Photos/Flight/22.png"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-1 text-[#8DB2D6] text-center">
                  Feedback
                </h3>
                <p className="text-slate-200 mb-6 text-sm text-center">
                  Users get visual and audio cues with options to repeat or go to next after each step.
                </p>
                <img
                  src="/Photos/Flight/23.png"
                  alt="Realistic Props & Details"
                  className="rounded-lg mb-4 w-full object-cover aspect-square"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* Principles Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-orange-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Human Factors Considered 
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/80 border-none shadow-xl rounded-xl">
              <CardContent className="p-8">
                <ul className="space-y-4 text-left">
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">1</span>
                    
                
                    <span className="text-orange-400 text-lg font-bold">
                     Cognitive Load
                     <p className="font-light text-sm text-slate-200">
                  We simplified the interface by limiting controls and visual clutter, reducing distractions and mental effort. 
                  This helped users focus on the inspection tasks rather than figuring out how to use the system.
                </p>
                      
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">2</span>
                    <span className="text-orange-400">
                      Signaling Principle
                       <p className="font-light text-sm text-slate-200">
                 Color-coded cues (green for correct, yellow for pending, red for error) helped users identify task progress instantly, improving situational clarity and reducing confusion.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">3</span>
                    <span className="text-orange-400">
                     Attention & Situational Awareness
                     <p className="font-light text-sm text-slate-200">
                 Guided cues and step-by-step instructions kept users oriented and focused on specific aircraft components,
                  preventing missed inspection steps and ensuring better awareness of their surroundings.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">4</span>
                    <span className="text-orange-400">
                     Memory & Recall
                      <p className="font-light text-sm text-slate-200">
                 Repetition of inspection procedures, along with the option to replay instructions, reinforced 
                 learning and improved retention of maintenance sequences for future tasks.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">5</span>
                    <span className="text-orange-400">
                      Perception
                       <p className="font-light text-sm text-slate-200">
                The VR environment is designed with realistic aircraft components, ensuring correct depth perception 
                and instrument clarity for accurate inspections
                </p>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-none shadow-xl flex items-center justify-center rounded-xl ">
              <CardContent className="p-8 flex flex-col items-center justify-center">
                <img
                  src="/Photos/Flight/25.png"
                  alt="Behavior Model UI"
                  className="rounded-xl shadow-lg mb-4 w-full object-cover aspect-sqaure"
                />
                <p className="text-slate-200 text-center">
                  
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Principles Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-orange-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                XR Design Heuristics
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/80 border-none shadow-xl rounded-xl">
              <CardContent className="p-8">
                <ul className="space-y-4 text-left">
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">1</span>
                    
                
                    <span className="text-orange-400 text-lg font-bold">
                     Guidance Principle
                     <p className="font-light text-sm text-slate-200">
                  Intense monsoon showers overwhelm storm drains; garbage and
                  silt block outflows.
                </p>
                      
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">2</span>
                    <span className="text-orange-400">
                      Signaling Principle
                       <p className="font-light text-sm text-slate-200">
                 Color-coded cues (green for correct, yellow for pending, red for error) helped users identify task progress instantly, improving situational clarity and reducing confusion.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">3</span>
                    <span className="text-orange-400">
                     Coherence Principle
                     <p className="font-light text-sm text-slate-200">
                 Removed unnecessary visuals and sounds to keep attention on the aircraft components and core objectives, preventing sensory overload and maintaining focus.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">4</span>
                    <span className="text-orange-400">
                      Temporal Contiguity Principle
                      <p className="font-light text-sm text-slate-200">
                 Placed instructions directly near the relevant aircraft parts to connect actions with information contextually, reducing cognitive effort and improving task accuracy.
                </p>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-orange-400 font-bold">5</span>
                    <span className="text-orange-400">
                      Error Prevention & Recovery
                      <p className="font-light text-sm text-slate-200">
                Minimizing chances for mistakes (like pressing the report button) and offering easy ways to correct them.
                </p>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-none shadow-xl flex items-center justify-center">
              <CardContent className="p-8 flex flex-col items-center justify-center rounded-xl ">
                <img
                  src="/Photos/Flight/24.png"
                  alt="Behavior Model UI"
                  className="rounded-xl shadow-lg mb-4 w-full asapect-square object-cover"
                />
                <p className="text-slate-200 text-center">
               
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Human Factors Section - reference image only 
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/Flight/6.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* XR Design Heuristics Section - reference image only 
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/Flight/7.jpg"
              alt="XR Design Heuristics reference"
              className="rounded-xl w-full object-cover gap-20"
            />
          </div>
        </div>
      </section>*/}

      {/* Skills & Learnings Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Skills & Learnings</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs">
                VR Development
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Human Factors
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Task Analysis
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Storyboarding
              </Badge>
              <Badge variant="secondary" className="text-xs">
                XR Heuristics
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Team Collaboration
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Real-time Feedback
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              Gained hands-on experience in designing safe, effective, and
              immersive VR training simulations for aviation maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white"
          >
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PreFlightVR;
