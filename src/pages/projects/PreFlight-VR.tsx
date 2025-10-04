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
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-black text-white overflow-hidden">
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
                className="text-sm border-green-600 text-green-400"
              >
                <Calendar className="w-3 h-3 mr-1" />
                2025
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-green-600 text-green-400"
              >
                <Users className="w-3 h-3 mr-1" />
                Team Project
              </Badge>
              <Badge
                variant="outline"
                className="text-sm border-green-600 text-green-400"
              >
                <Award className="w-3 h-3 mr-1" />
                2 Weeks
              </Badge>
            </div>
            <div className="flex justify-center mb-8">
              <img
                src="/Photos/Flight/8.png"
                alt="Aircraft maintenance hangar"
                className="rounded-lg shadow w-full grid md:grid-cols-1 gap-1 aspect-16/9 max-w-14xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bodystorming Section - process, scripting, modeling, filming */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Bodystorming</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We bodystormed the VR training by scripting interactions, creating
              a plane model, and filming the process to refine inspections and
              UI.
            </p>
            <img
              src="/Photos/Flight/1 copy.png"
              alt="Bodystorming with sticky notes and team"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interaction Planning Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">GOMS Model</h2>
            <p className="text-lg text-muted-foreground mb-6">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Storyboarding</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Visualizing the trainee journey from guided session to independent
              practice.
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              <img
                src="/Photos/Flight/3.png"
                alt="Storyboard sketch details"
                className="rounded-lg shadow w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/4.png"
                alt="Journey mapping with sticky notes"
                className="rounded-lg shadow w-full object-cover aspect-16/9"
              />
              <img
                src="/Photos/Flight/5.png"
                alt="Desk setup for sketching"
                className="rounded-lg shadow w-full object-cover aspect-16/9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Human Factors Section - reference image only */}
      <section className="py-16 bg-blue-50">
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
      <section className="py-16 bg-blue-50">
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
      <section className="py-16 bg-blue-100">
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
