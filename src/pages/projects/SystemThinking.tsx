import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Share2,
  CloudRain,
  MapPin,
  Building2,
  Megaphone,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const wardNames = [
  "Ghoel Road Ward Office",
  "Kasaba Ward Office",
  "Wanowrie Ramtekdi Ward",
  "Sinhgad Road Ward Office",
  "Dhankawadi Sahakarnagar Ward Office",
  "Bibwewadi Ward Office",
  "Hadapsar Ward Office",
  "Bhavani Peth Ward Office",
  "Kondhwa Ward office",
  "Yerawada Ward office",
  "Warje Karvenagar Ward office",
  "Kothrud Bavdhan Ward office",
  "Aundh Baner Ward office",
  "Nagar Road Ward office",
  "Dhole Patil Road Ward office",
];

const majorCauses = [
  {
    title: "Urban Waterlogging",
    caption:
      "Intense monsoon showers overwhelm storm drains; garbage and silt block outflows.",
    img:
      "https://images.pexels.com/photos/26146692/pexels-photo-26146692.jpeg",
  },
  {
    title: "Dam Discharge",
    caption:
      "Sudden or high-volume releases increase downstream levels across the city.",
    img:
      "https://images.pexels.com/photos/9344646/pexels-photo-9344646.jpeg",
  },
  {
    title: "Riverside Encroachment",
    caption:
      "Construction near riverbanks reduces floodplains and narrows water pathways.",
    img:
      "https://images.pexels.com/photos/19271632/pexels-photo-19271632.jpeg",
  },
  {
    title: "Heavy Rainfall Events",
    caption:
      "Short, high-intensity rainfall leads to flash flooding in low-lying neighborhoods.",
    img:
      "https://images.pexels.com/photos/30309540/pexels-photo-30309540.jpeg",
  },
];

const affinityBuckets: { title: string; items: string[] }[] = [
  {
    title: "Coordination Issues",
    items: [
      "Delayed warnings between agencies",
      "Groups move only after GPS/visual cues",
      "PFCC forecasts not widely disseminated",
    ],
  },
  {
    title: "Communication Gap",
    items: [
      "Only select wards get alerts",
      "TV/news delayed; focus on major incidents",
      "Mobile networks fail during peak hours",
    ],
  },
  {
    title: "Disaster Response Challenges",
    items: [
      "Reluctance to adopt prevention tools due to cost",
      "Basements/parking quickly inundated",
      "Collecting documents and medicine slows evacuation",
    ],
  },
  {
    title: "Health & Sanitation Risks",
    items: [
      "Contaminated water; disease spread",
      "Public toilets flooded; cleanup is difficult",
      "Insects increase around stagnant water",
    ],
  },
  {
    title: "Lack of Awareness",
    items: [
      "Unclear on where to seek help",
      "Residents ignore late-night warnings",
      "Shortage of first-aid and clean water",
    ],
  },
];

const insights = [
  "People delay evacuation until water visibly rises",
  "Late-night alerts are often missed or ignored",
  "Residents prefer staying home over moving to shelters",
  "Vehicles are shifted late, increasing damage risk",
  "Information spreads via neighbors/WhatsApp more than official apps",
];

const SystemThinking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-emerald-900/10" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">System Thinking</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              This project explores the recurring flood issues in Pune, analyzing
              patterns, underlying causes, and community beliefs to propose
              cost‑effective, shared‑responsibility solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" /> 2025
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="w-3 h-3 mr-1" /> Case Study
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Share2 className="w-3 h-3 mr-1" /> Systems
              </Badge>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-card/50">
              <img
                src="/Photos/illustrations/shares.png"
                alt="Systems map visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aim + Methodology */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Project Aim</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CloudRain className="w-4 h-4 mt-0.5" />Understand Flood Dynamics</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" />Evaluate Disaster Management Systems</li>
                <li className="flex items-start gap-2"><Megaphone className="w-4 h-4 mt-0.5" />Identify Gaps in Communication</li>
                <li className="flex items-start gap-2"><Users className="w-4 h-4 mt-0.5" />Understand Community Impact and Behavior</li>
                <li className="flex items-start gap-2"><Building2 className="w-4 h-4 mt-0.5" />Explore Cost-Effective Solutions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Research Methodology</h2>
              <p className="text-sm text-muted-foreground">
                The data has been collected from both primary and secondary research. I
                visited the India Meteorological Department and Pune Flood Control
                Center to conduct observational study and interviews. I also consulted
                a trainer from the Indian Rescue Academy (NDRF) for expert insights,
                along with residents who have experienced floods, to understand
                community perspectives and preparedness. Secondary research was done
                via online articles and guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Visuals */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/60 overflow-hidden bg-card/40">
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Initial Research</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Exploring the topic to map stakeholders, impacts, and scope.
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2Fccc63ff5fdfb4a3e9f140bbddf9feeac?format=webp&width=1200"
                alt="Initial research mind map and stakeholder circles"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl border border-border/60 overflow-hidden bg-card/40">
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Secondary Research</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Review of SOPs, NDMA guidelines, and journals; analysis of Pune news.
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2F6c0a7cf9ec4e40eb82d85de41012d00e?format=webp&width=1200"
                alt="Secondary research sources and results"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Major Causes */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Major Causes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorCauses.map((c) => (
              <div
                key={c.title}
                className="rounded-xl overflow-hidden border border-border/60 bg-card/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Research */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Primary Research</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Field visits, stakeholder interviews, and community interactions to gather
            firsthand insights across institutions and resident groups.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2Faa64be6658d845ad8170f475e36347d3?format=webp&width=1600"
            alt="Primary research collage"
            className="w-full rounded-xl border border-border/60"
          />
        </div>
      </section>

      {/* Communication Loop + Wards */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Communication Loop</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center">
                {[
                  { icon: CloudRain, label: "IMD" },
                  { icon: Megaphone, label: "PFCC" },
                  { icon: Building2, label: "PMC" },
                  { icon: MapPin, label: "Wards" },
                  { icon: Phone, label: "Alerts" },
                  { icon: Users, label: "Residents" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border/60 bg-card/40 p-4 flex flex-col items-center gap-2"
                  >
                    <Icon className="w-6 h-6 text-emerald-600" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Forecasts and discharge data flow from agencies to wards; alerts reach
                residents via WhatsApp/SMS, ward staff and media. Feedback loops
                inform next updates.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">15 wards in Pune</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {wardNames.map((w) => (
                  <div
                    key={w}
                    className="rounded-md bg-emerald-700/80 text-white px-4 py-3 text-sm"
                  >
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flood-prone Areas + Shelters (awaiting list) */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Flood‑Prone Areas & Evacuation Shelters</h2>
          <div className="rounded-xl border border-border/60 bg-card/40 p-5">
            <p className="text-sm text-muted-foreground">
              Please share your list of flood‑prone areas and shelter locations
              (names/addresses/GPS). I will populate the tables and add a map view
              with quick filters by ward and risk level.
            </p>
          </div>
        </div>
      </section>

      {/* Affinity Mapping */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Affinity Mapping</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2F358d3085dbe8493784b0dc20301cd56e?format=webp&width=1600"
            alt="Affinity mapping reference"
            className="w-full rounded-xl border border-border/60 mb-6"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affinityBuckets.map((b) => (
              <div key={b.title} className="rounded-xl border border-border/60 bg-card/40 p-4">
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {b.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-xl border border-border/60 bg-emerald-950/30 p-6">
            <h2 className="text-3xl font-bold mb-3">Problem Statement</h2>
            <p className="text-base">
              Lack of timely communication, preparedness, and effective barriers leads
              to severe property damage and chaos during floods, leaving residents
              vulnerable and unprepared for evacuation or protection of their
              belongings.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Critical behavioral observed during floods</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {insights.map((i) => (
              <li key={i} className="rounded-md border border-border/60 bg-card/40 p-3">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Concept Solutions */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-semibold">Concept 1 — WhatsApp Alerts</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="rounded-xl border border-border/60 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2F94bba6ba1fef453e96b040f8b70bd41b?format=webp&width=1400"
                  alt="WhatsApp Alerts concept overview"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl border border-border/60 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2Fda54d5e7d3604b3eb5f5182c466197f4?format=webp&width=1400"
                  alt="How it works in WhatsApp"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Concept 2 — Integrating Evacuation Shelter Details with AR</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2Fe02654a06504479fbc7fa14c5cc39ae8?format=webp&width=1600"
              alt="AR integration for shelter details"
              className="w-full rounded-xl border border-border/60"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Concept 3 — Bamboo Floatable</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2F9e8844cdc53b42a5a69c7f8f153517da?format=webp&width=1600"
              alt="Bamboo floatable dual‑purpose concept"
              className="w-full rounded-xl border border-border/60"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Concept 4 — Flood Barrier</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fde49a9c1ca5d4406958db6961b210625%2F5c86b6338af54455b27c016060e4b51f?format=webp&width=1600"
              alt="Flood barrier design and setup"
              className="w-full rounded-xl border border-border/60"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-xl font-semibold mb-2">Problem Context</h2>
              <p className="text-sm text-muted-foreground">
                Scope, boundaries, and stakeholder goals anchoring the system
                definition.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Causal Loops</h2>
              <p className="text-sm text-muted-foreground">
                Reinforcing and balancing loops revealing dynamics over time.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Leverage Points</h2>
              <p className="text-sm text-muted-foreground">
                Interventions where small changes can lead to meaningful shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
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

export default SystemThinking;
