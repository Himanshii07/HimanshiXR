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
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Preflight Maintenance Check VR
            </h1>
            <p className="text-lg text-white mb-8">
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
              <h2 className="text-2xl font-semibold mb-3 ">Human Factors and Ergonomics</h2>
              <p className="text-sm text-muted-white">
                The course focused on understanding how people interact with systems and environments, and how thoughtful design can enhance comfort, safety, and performance. It studies how humans think, move, and perceive, and applies that understanding to create safe, efficient, and comfortable experiences. In this course, we explored how these principles apply to Extended Reality (XR), learning to minimize discomfort through the right transition techniques, design interactions that closely mimic real-world movement, and help users build spatial awareness by understanding how their actions shape the environment. We also studied how our senses and cognition work differently in virtual spaces, how to manage cognitive load, and how to apply UX heuristics to XR design for a more natural and user-centered experience.
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
              Aviation maintenance crews and engineers are responsible for conducting pre-flight inspections and repairs—tasks that are time-critical, highly detailed, and essential for ensuring flight safety and compliance with regulations. However, traditional manual inspections are often time-consuming, physically demanding, and prone to human error. Even small mistakes can compromise safety and efficiency, making it necessary to explore solutions that support crews in performing these checks with accuracy, speed, and reduced strain.
            </p>
          </div>
        </div>
      </section>





      {/* Bodystorming Section - process, scripting, modeling, filming */}
      <section className="py-16  bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Bodystorming</h2>
            <p className="text-lg text-muted-grey mb-6 font-light">
              We bodystormed the VR training by scripting interactions, creating
              a plane model, and filming the process to refine inspections and
              UI.
            </p>
            <img
              src="/Photos/Flight/1.png"
              alt="Bodystorming with sticky notes and team"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interaction Planning Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
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

      {/* Storyboarding Section - images only */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Storyboarding</h2>
            <p className="text-lg text-muted-grey font-light mb-6">
              Visualizing the trainee journey from guided session to independent
              practice.
            </p>
            <div className="grid md:grid-cols-1 gap-12 bg-white py-24 px-14 rounded-lg">
              <img
                src="/Photos/Flight/10.png"
                alt="Storyboard sketch details"
                className="rounded-lg  w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/11.png"
                alt="Journey mapping with sticky notes"
                className="rounded-lg w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/12.png"
                alt="Desk setup for sketching"
                className="rounded-lg w-full object-cover aspect-16/9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Human Factors Section - reference image only */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/Flight/6.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* XR Design Heuristics Section - reference image only */}
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
      </section>

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
