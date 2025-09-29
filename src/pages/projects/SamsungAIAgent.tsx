import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SamsungAIAgent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-900/10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Samsung AI Agent</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Concept prototype exploring proactive multimodal assistance across Samsung devices—context awareness, on-device privacy, and helpful automation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm"><Calendar className="w-3 h-3 mr-1" />2025</Badge>
              <Badge variant="outline" className="text-sm"><Users className="w-3 h-3 mr-1" />Individual</Badge>
              <Badge variant="outline" className="text-sm"><Award className="w-3 h-3 mr-1" />Concept</Badge>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-card/50">
              <img src="/Photos/illustrations/netflix.png" alt="Samsung AI Agent concept" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-sm text-muted-foreground">Framing the opportunity for an assistant that anticipates needs, reduces friction, and respects privacy.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Approach</h2>
              <p className="text-sm text-muted-foreground">Journey mapping, intent modeling, and lightweight prototypes for notification, voice, and glanceable UI.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
              <p className="text-sm text-muted-foreground">Design directions for proactive prompts, cross-device handoff, and safe-guarded automation.</p>
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

export default SamsungAIAgent;
