import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const Ethnography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-rose-100/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ethnography: Tiffin Services at MIT College
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              This research explores the tiffin scene at MIT College, focusing
              on student preferences, meal quality, and the performance of
              current services, to identify what defines a great tiffin
              experience on campus.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                Team of 3
              </Badge>
              <Badge variant="outline" className="text-sm">
                <FileText className="w-3 h-3 mr-1" />
                Duration: 2 weeks
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-8 max-w-8xl">
          {/* the ask */}
          <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">The ask</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Before adding any interactions, we carefully planned and
                  discussed each step to ensure a smooth and intuitive user
                  experience in VR.
                </p>
                <img
                  src="/Photos/Ethnography/3.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Research Timeline */}
          <section className="py-16 bg-white-100">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Research Timeline</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Before adding any interactions, we carefully planned and
                  discussed each step to ensure a smooth and intuitive user
                  experience in VR.
                </p>
                <img
                  src="/Photos/Ethnography/1.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Stakeholders */}
          <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Stakeholders</h2>
                <p className="text-lg text-muted-foreground mb-6"></p>
                <img
                  src="/Photos/Ethnography/4.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Interviews */}
          <section className="py-16 bg-white-100">
            <div className="container mx-auto px-4">
              <div className="max-w-8xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-4"></h2>
                <p className="text-lg text-muted-foreground mb-6"></p>
                <img
                  src="/Photos/Ethnography/6.jpg"
                  alt="Checklist for interaction planning"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Pain Points Section - Casual Style */}
          <div className="bg-pink-50 rounded-xl shadow p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">Students POV</h4>
                  <ul className="list-disc ml-4 text-sm mb-2">
                    <li>Limited options & info</li>
                    <li>Inconsistent quality</li>
                    <li>Lack of customization</li>
                    <li>Commitment issues</li>
                    <li>No central platform</li>
                    <li>Weird timings</li>
                    <li>Communication gaps</li>
                    <li>Payment trust</li>
                    <li>Taste differences</li>
                    <li>Affordability</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">
                    Tiffin Provider POV
                  </h4>
                  <ul className="list-disc ml-4 text-sm mb-2">
                    <li>Getting noticed</li>
                    <li>Marketing costs</li>
                    <li>Keeping quality up</li>
                    <li>Customer loyalty</li>
                    <li>Delivery drama</li>
                    <li>Knowing what students want</li>
                    <li>Payment hassles</li>
                    <li>Building trust</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-left">
                <p className="font-semibold">Opportunity:</p>
                <p className="text-sm mb-2">
                  A student-friendly app could make ordering easier, let you
                  tweak your meal plan, and give feedback instantly.
                </p>
                <p className="font-semibold">Collaboration:</p>
                <p className="text-sm">
                  Better chats between students and providers = less meal
                  stress, more happy bellies!
                </p>
              </div>
            </div>
          </div>

          {/* Analysis of Tiffin Providers */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Analysis of Tiffin Providers
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Compared providers on meal quality, punctuality, variety, and
                customer service.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add provider analysis diagram/image
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Key Insights</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Students value taste, hygiene, and timely delivery.</li>
                <li>Flexibility in meal plans is highly desired.</li>
                <li>
                  Word-of-mouth is the main channel for provider discovery.
                </li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add insights diagram/image
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Pain Points</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Inconsistent meal quality and quantity.</li>
                <li>Lack of transparency in pricing and menu.</li>
                <li>Poor communication during delays or issues.</li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add pain points diagram/image
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
              <ul className="text-sm text-muted-foreground list-disc ml-4 mb-4">
                <li>Standardize meal quality and portion sizes.</li>
                <li>Improve communication and feedback channels.</li>
                <li>Offer customizable meal plans and transparent pricing.</li>
              </ul>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add recommendations diagram/image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Impact - moved from ShootingRange */}
      <section className="py-24 bg-gradient-to-r from-sky-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                Analysis
              </h2>
              <p className="text-lg text-muted-foreground">
                Measuring effectiveness and user satisfaction from our
                ethnography research
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">55%</div>
                <div className="text-lg font-semibold mb-2">
                  Students of MIT Design Institute takes tiffin service
                </div>
                <p className="text-sm text-muted-foreground">
                  Rapid fieldwork and analysis
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">42%</div>
                <div className="text-lg font-semibold mb-2">
                  students uses tiffin services daily
                </div>
                <p className="text-sm text-muted-foreground">
                  Collaborative research and interviews
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  Rs. 50 - 80
                </div>
                <div className="text-lg font-semibold mb-2">On Campus Life</div>
                <p className="text-sm text-muted-foreground">
                  Amount for single tiffin meal{" "}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Opportunity for Improvement
                </h3>
                <p className="text-muted-foreground text-sm">
                  A student-focused app could streamline ordering, customize
                  meal plans, and gather real-time feedback to improve service
                  satisfaction.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Collaboration Potential{" "}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Strengthen communication between students and the tiffin
                  provider to address specific needs (diet preferences, delivery
                  timings) and reduce meal-related hassles for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ethnography;
