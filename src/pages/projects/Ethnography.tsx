import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Ethnography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-rose-900/10" />
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
              This research explores the tiffin scene at MIT College, focusing on
              student preferences, meal quality, and the performance of current
              services, to identify what defines a great tiffin experience on
              campus.
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
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-card/50">
              <img
                src="Photos/Ethnography/2.jpg"
                alt="Ethnographic field context"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-8 max-w-8xl">
          {/* Research Timeline */}
        <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Research Timeline</h2>
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

          {/* Methodology */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Methodology</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Shadowing, semi-structured interviews, artifact walk-throughs, and
                user journey mapping.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add methodology diagram/image
              </div>
            </div>
          </div>

          {/* Interviews */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Interviews</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Conducted with students and tiffin providers to understand needs,
                expectations, and challenges.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add interview image
              </div>
            </div>
          </div>

          {/* User Analysis */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">User Analysis</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Identified user segments based on preferences, budget, and dietary
                requirements.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add user analysis diagram/image
              </div>
            </div>
          </div>

          {/* User Journey */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">User Journey</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Mapped the end-to-end experience from searching for tiffin services
                to daily meal consumption.
              </p>
              {/* Add info/description here */}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Diagram/Image placeholder */}
              <div className="aspect-video w-full max-w-xs bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Add user journey diagram/image
              </div>
            </div>
          </div>

          {/* Analysis of Tiffin Providers */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Analysis of Tiffin Providers</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Compared providers on meal quality, punctuality, variety, and customer
                service.
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
                <li>Word-of-mouth is the main channel for provider discovery.</li>
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
