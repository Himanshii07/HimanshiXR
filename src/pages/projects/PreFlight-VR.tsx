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

const PreFlightVR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-blue-100 to-blue-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text text-transparent">
              Preflight Maintenance Check VR
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We designed a VR-based pre-flight maintenance training simulation to replace costly, risky traditional methods. A guided inspection is followed by independent practice with real-time feedback in a safe, immersive setup.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm border-blue-400 text-blue-600">
                <Calendar className="w-3 h-3 mr-1" />
                2025
              </Badge>
              <Badge variant="outline" className="text-sm border-blue-400 text-blue-600">
                <Users className="w-3 h-3 mr-1" />
                Team Project
              </Badge>
              <Badge variant="outline" className="text-sm border-green-400 text-green-600">
                <Award className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            </div>
            <div className="flex justify-center mb-8">
              <img src="https://images.pexels.com/photos/6006171/pexels-photo-6006171.jpeg" alt="Aircraft maintenance hangar" className="rounded-xl shadow-lg w-full max-w-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Body Storming Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Body Storming</h2>
            <p className="text-lg text-muted-foreground mb-6">Physical enactment of maintenance tasks to understand user needs and workflow.</p>
            <img src="https://images.pexels.com/photos/7640741/pexels-photo-7640741.jpeg" alt="Bodystorming with sticky notes and team" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* GOMS Model Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">GOMS Model</h2>
            <p className="text-lg text-muted-foreground mb-6">Task analysis for guided inspection and independent practice.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <img src="https://images.pexels.com/photos/29765799/pexels-photo-29765799.jpeg" alt="Checklist for task decomposition" className="rounded-lg shadow w-full object-cover aspect-square" />
              <img src="https://images.pexels.com/photos/11786435/pexels-photo-11786435.jpeg" alt="Aircraft inspection context" className="rounded-lg shadow w-full object-cover aspect-square" />
              <img src="https://images.pexels.com/photos/2059638/pexels-photo-2059638.jpeg" alt="Rotor maintenance task context" className="rounded-lg shadow w-full object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Storyboarding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Storyboarding</h2>
            <p className="text-lg text-muted-foreground mb-6">Visualizing the trainee journey from guided session to independent practice.</p>
            <div className="grid md:grid-cols-4 gap-6">
              <img src="https://images.pexels.com/photos/6002182/pexels-photo-6002182.jpeg" alt="Storyboard sketch details" className="rounded-lg shadow w-full object-cover aspect-square" />
              <img src="https://images.pexels.com/photos/7640741/pexels-photo-7640741.jpeg" alt="Journey mapping with sticky notes" className="rounded-lg shadow w-full object-cover aspect-square" />
              <img src="https://images.pexels.com/photos/29765811/pexels-photo-29765811.jpeg" alt="Desk setup for sketching" className="rounded-lg shadow w-full object-cover aspect-square" />
              <img src="https://images.pexels.com/photos/29765799/pexels-photo-29765799.jpeg" alt="Checklist frames" className="rounded-lg shadow w-full object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Human Factors Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Human Factors</h2>
            <p className="text-lg text-muted-foreground mb-6">Designed for safety, comfort, and effective learning in VR.</p>
            <img src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg" alt="Human factors: posture and comfort" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* XR Design Heuristics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">XR Design Heuristics</h2>
            <p className="text-lg text-muted-foreground mb-6">Applied best practices for immersive training and feedback.</p>
            <img src="https://images.pexels.com/photos/8097823/pexels-photo-8097823.jpeg" alt="VR training context and heuristics" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Skills & Learnings Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Skills & Learnings</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs">VR Development</Badge>
              <Badge variant="secondary" className="text-xs">Human Factors</Badge>
              <Badge variant="secondary" className="text-xs">Task Analysis</Badge>
              <Badge variant="secondary" className="text-xs">Storyboarding</Badge>
              <Badge variant="secondary" className="text-xs">XR Heuristics</Badge>
              <Badge variant="secondary" className="text-xs">Team Collaboration</Badge>
              <Badge variant="secondary" className="text-xs">Real-time Feedback</Badge>
            </div>
            <p className="text-muted-foreground text-sm">Gained hands-on experience in designing safe, effective, and immersive VR training simulations for aviation maintenance.</p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white">
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PreFlightVR;
