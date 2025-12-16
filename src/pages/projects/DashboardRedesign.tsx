import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Lightbulb, Palette, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MobileOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-lg md:hidden">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl text-red-700 font-heading text-foreground mb-4">Uh-oh!</h2>
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light">Open this website on a bigger screen!</p>
    </div>
  </div>
);

const DashboardRedesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileOverlay />
      <Navigation forceWhite />

      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Dashboard Redesign</h1>
              <p className="text-lg text-white/80 mb-6">
                We redesigned a hospital management dashboard (Bold BI) to improve information hierarchy, visual clarity, and
                data-driven decision-making for healthcare teams. The redesign focuses on prioritizing critical metrics, a clean grid
                system, and consistent visual language.
              </p>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-orange-500 text-orange-400">Data Visualization</Badge>
                <Badge variant="secondary" className="bg-white/5 text-white/90">Dashboard UI</Badge>
              </div>

              <div className="flex gap-3">
                <Button asChild size="lg" className="bg-orange-700 hover:bg-orange-600">
                  <Link to="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                    Back to Projects
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/6 shadow-lg">
                <img src="/Photos/UI/1.png" alt="Dashboard overview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Overview</h2>
              <p className="text-white/80 leading-relaxed">
                We took on the challenge of redesigning Bold BI's hospital management dashboard, powered by real-time data. The
                original interface was cluttered and made it tough for users to find crucial information quickly. The redesign aims to
                transform it into an efficient tool that healthcare professionals can rely on for clear, immediate insights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Design Process</h3>

              {/*<div className="grid grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg border border-white/6 flex items-center justify-center mb-2">⚙️</div>
                  <div className="text-sm">Understand</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg border border-white/6 flex items-center justify-center mb-2">💡</div>
                  <div className="text-sm">Ideate</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg border border-white/6 flex items-center justify-center mb-2">🔲</div>
                  <div className="text-sm">Define</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg border border-white/6 flex items-center justify-center mb-2">🖊️</div>
                  <div className="text-sm">Design</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg border border-white/6 flex items-center justify-center mb-2">⚡</div>
                  <div className="text-sm">Prototype</div>
                </div>
              </div>*/}
               <div className="rounded-lg overflow-hidden border border-white/6 p-8 bg-white/3">
            <img src="/Photos/UI/2.png" className="w-full object-cover rounded-md" />
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl text-white">
          <h2 className="text-4xl font-bold mb-6">Goal</h2>
          <p className="text-white/80 max-w-3xl">
            To transform a cluttered, overwhelming interface into a clear, user-friendly tool that delivers essential insights at a glance.
            By improving the UX and layout we aimed to ensure that healthcare teams can access the information they need swiftly, leading to
            faster decision-making and better patient care outcomes.
          </p>
        </div>
      </section>

      {/* Before */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8">Before</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="bg-white/5 border-white/6">
              <CardContent>
                <img src="/Photos/UI/10.png" alt="Before dashboard" className="w-full object-cover rounded-md" />
              </CardContent>
            </Card>

            <div className="text-white/80">
              <p className="mb-4">Important data wasn't prioritized and the interface felt cluttered with weak visual cues. We focused on
              simplifying priority information and introducing a consistent visual hierarchy.</p>
              <ul className="list-disc ml-6 space-y-2 text-white/70">
                <li>Cluttered Interface</li>
                <li>Lack of visual cues</li>
                <li>Poor prioritization of metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
         
          <div className="rounded-lg overflow-hidden border border-white/6 p-8 bg-white/3">
            <img src="/Photos/UI/9.png"  className="w-full object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8">Grid System</h2>
          <div className="rounded-lg overflow-hidden border border-white/6 p-8 bg-white/3">
            <img src="/Photos/UI/4.png" alt="Grid system" className="w-full object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8">Data Visualization</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/6">
              <CardContent>
                <img src="/Photos/UI/8.png" alt="Data visualizations" className="w-full object-cover rounded-md" />
              </CardContent>
            </Card>
            <div className="text-white/80">
              <p className="mb-4">We emphasized clear, readable charts and compact KPI widgets that surface the most important metrics.
              Visual contrast, grouping, and consistent spacing were used to guide attention.</p>
              <ul className="list-disc ml-6 space-y-2 text-white/70">
                <li>Readable charts with high contrast</li>
                <li>KPI widgets for at-a-glance insights</li>
                <li>Consistent spacing and color palette</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8">Design</h2>
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="rounded-lg overflow-hidden border border-white/6">
              <img src="/Photos/UI/6.png" alt="Final design" className="w-full object-cover rounded-md" />
            </div>
            <div className="rounded-lg overflow-hidden border border-white/6 p-6 bg-white/3">
              <h3 className="text-2xl font-semibold mb-4">Before & After</h3>
              <p className="text-white/80 mb-4">The redesigned dashboard improves clarity and reduces cognitive load while maintaining rich, actionable information.</p>
              <div className="flex gap-4">
                <img src="/Photos/UI/10.png" alt="before" className="w-1/2 rounded-md object-cover border border-white/6" />
                <img src="/Photos/UI/5.png" alt="after" className="w-1/2 rounded-md object-cover border border-white/6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <Card className="bg-white/5 border-white/6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">What I learned</h3>
              <p className="text-white/80">This redesign reinforced the importance of prioritizing information architecture, establishing a consistent visual language, and designing compact, high-signal data visualizations for fast decision-making in operational contexts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-white/3 via-white/2 to-white/3">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-2xl font-bold mb-4 text-black">Explore more projects</h3>
          <Button asChild size="lg" className="bg-black text-white">
            <Link to="/projects">All Projects</Link>
          </Button>
        </div>
      </section>

     
    </div>
  );
};

export default DashboardRedesign;
