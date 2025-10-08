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
  Shield,
  Layers,
  Navigation as NavIcon,
  Hammer,
} from "lucide-react";
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
  },
  {
    title: "Dam Discharge",
    caption:
      "Sudden or high-volume releases increase downstream levels across the city.",
  },
  {
    title: "Riverside Encroachment",
    caption:
      "Construction near riverbanks reduces floodplains and narrows water pathways.",
  },
  {
    title: "Heavy Rainfall Events",
    caption:
      "Short, high-intensity rainfall leads to flash flooding in low-lying neighborhoods.",
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

const shelters: { name: string; capacity: number }[] = [
  { name: "Saraf School", capacity: 350 },
  {
    name: "Dr Nanasaheb Parulekar Vidyalay / Lokshahir Annabhau Sathe Natyagruha / Late VD Ghate Vidyamandir",
    capacity: 650,
  },
  { name: "Rajarshi Shahu Maharaj Primary School", capacity: 100 },
  { name: "Dhole Patil School", capacity: 350 },
  { name: "Rajendra Prasad School", capacity: 150 },
  { name: "Balwadkar School", capacity: 200 },
  { name: "Mata Ramabai Ambedkar Prathamik Vidyalay", capacity: 100 },
  { name: "Indira Gandhi Prathamik Vidyalay", capacity: 100 },
  { name: "Dr. Babasaheb Ambedkar Prathamik Vidyalay", capacity: 175 },
  { name: "Narveer Tanaji Prathamik Vidyalay", capacity: 200 },
  { name: "Rane Academy", capacity: 50 },
  { name: "Ekta Nagari School", capacity: 200 },
];

const totalCapacity = shelters.reduce((sum, s) => sum + s.capacity, 0);

const SystemThinking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-only overlay */}
      <MobileOverlay />
      <Navigation />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-emerald-100/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-8xl mx-auto text-center">
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
              System Thinking
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              This project explores the recurring flood issues in Pune,
              analyzing patterns, underlying causes, and community beliefs to
              propose cost‑effective, shared‑responsibility solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                2024
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                Individual Project
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Share2 className="w-3 h-3 mr-1" />
                4 weeks
              </Badge>
            </div>
          </div>
          {/* Hero Video 
            <img
              src="/Photos/pune/28.png"
              alt="Kids playing with Savey"
              className="rounded-lg shadow w-full gap-1 aspect-16/9 max-w-7xl mx-auto"
            />*/}
        </div>
      </section>

      {/* Aim + Methodology */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Project Aim</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CloudRain className="w-4 h-4 mt-0.5" />
                  Understand Flood Dynamics
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5" />
                  Evaluate Disaster Management Systems
                </li>
                <li className="flex items-start gap-2">
                  <Megaphone className="w-4 h-4 mt-0.5" />
                  Identify Gaps in Communication
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-0.5" />
                  Understand Community Impact and Behavior
                </li>
                {/*<li className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 mt-0.5" />
                  Explore Cost-Effective Solutions
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Research Methodology
              </h2>
              <p className="text-sm text-muted-foreground">
                The data has been collected from both primary and secondary
                research. I visited the India Meteorological Department and Pune
                Flood Control Center to conduct observational study and
                interviews. I also consulted a trainer from the Indian Rescue
                Academy (NDRF) for expert insights, along with residents who
                have experienced floods, to understand community perspectives
                and preparedness. Secondary research was done via online
                articles and guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Initial & Secondary Research (structured, not screenshots) */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-6 ">
          <div className="rounded-xl border border-border/60 bg-card/40 p-5">
            <h3 className="text-2xl font-bold mb-3 text-emerald-600">Initial Research</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
              <li>
                Explored recurring floods in Pune to define scope and key
                questions
              </li>
              <li>Mind-mapped causes, impacts, and leverage points</li>
              <li>Identified primary stakeholders</li>
            </ul>
            {/*<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {[
                "IMD",
                "PFCC",
                "PMC",
                "NDRF",
                "SDRF",
                "NGOs",
                "Media",
                "Residents",
                "Urban Planners",
                "Health Dept",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md border bg-card/60 text-muted-foreground text-center"
                >
                  {t}
                </span>
              ))}
            </div>*/}
            <div className="mt-4 aspect-2/3 rounded-lg overflow-hidden">
              <img
                src="/Photos/pune/1.jpg"
                alt="Initial research visual placeholder"
                className="w-full h-full object-fit aspect-4/3"
              />
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-5 max-w-7xl mx-auto ">
            <h3 className="text-2xl font-bold mb-3 text-emerald-600">Secondary Research</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>STANDARD OPERATING PROCEDURE (state/city)</li>
              <li>National Disaster Management Guidelines (NDMA)</li>
              <li>Journal for Geographic Studies</li>
              <li>News articles about past Pune flood events</li>
            </ul>
            <div className="mt-4 aspect-2/3 rounded-lg overflow-hidden border">
              <img
                src="/Photos/pune/20 copy.jpg"
                alt="Secondary research visual placeholder"
                className="w-full h-auto object-fit aspect-2/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container max-w-7xl mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/9.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Major Causes (text cards) */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Major Causes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden border border-border/60 bg-card/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/Photos/pune/30.webp"
                  alt="Urban Waterlogging"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Urban Waterlogging</h3>
                <p className="text-sm text-muted-foreground">
                  Intense monsoon showers overwhelm storm drains; garbage and
                  silt block outflows.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/60 bg-card/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/Photos/pune/7.png"
                  alt="Dam Discharge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Dam Discharge</h3>
                <p className="text-sm text-muted-foreground">
                  Sudden or high-volume releases increase downstream levels
                  across the city.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/60 bg-card/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/Photos/pune/5.png"
                  alt="Riverside Encroachment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Riverside Encroachment</h3>
                <p className="text-sm text-muted-foreground">
                  Construction near riverbanks reduces floodplains and narrows
                  water pathways.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/60 bg-card/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/Photos/pune/6.png"
                  alt="Heavy Rainfall Events"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Heavy Rainfall Events</h3>
                <p className="text-sm text-muted-foreground">
                  Short, high-intensity rainfall leads to flash flooding in
                  low-lying neighborhoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Research (structured) */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-4">Primary Research</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <h3 className="font-semibold mb-2">Field Visits</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>India Meteorological Department (operations)</li>
                <li>Pune Flood Control Center (forecasting & alerts)</li>
                <li>Khadakwasla Dam vicinity (discharge context)</li>
              </ul>
              <img
                src="/Photos/pune/14.jpg"
                alt="Field Visits"
                className="mt-4 rounded-lg w-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <h3 className="font-semibold mb-2">Interviews</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>NDRF trainer (response protocols)</li>
                <li>Residents from flood-prone neighborhoods</li>
                <li>Local authorities/ward staff</li>
              </ul>
              <img
                src="/Photos/pune/15.jpg"
                alt="Interviews"
                className="mt-4 rounded-lg w-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <h3 className="font-semibold mb-2">Community Interaction</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Preparedness levels and risk perception</li>
                <li>Barriers to timely evacuation</li>
                <li>Preferred communication channels</li>
              </ul>
              <img
                src="/Photos/pune/16.jpg"
                alt="Community Interaction"
                className="mt-4 rounded-lg w-full object-fill aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/24.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Communication Loop + Wards */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-1 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">15 wards in Pune</h2>
              <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
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

      {/* Flood‑Prone Areas & Shelters */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl space-y-8 grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-3">Flood‑Prone Areas</h2>
            <div className="rounded-xl border border-border/60 bg-card/40 p-5 text-sm text-muted-foreground">
              Share the list of specific neighborhoods/streets so I can add
              filters by ward and risk level.
            </div>
            <img
              src="/Photos/pune/18.jpg"
              alt="flood prone areas map"
              className="rounded-xl shadow-lg w-full object-fit aspect-2/3"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Evacuation Shelters & Capacity
            </h2>
            <div className="rounded-xl border border-border/60 overflow-hidden">
              <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-sm font-medium">
                <div className="col-span-9">Shelter</div>
                <div className="col-span-3 text-right">Capacity</div>
              </div>
              {shelters.map((s, idx) => (
                <div
                  key={s.name}
                  className={`grid grid-cols-12 px-4 py-2 text-sm ${idx % 2 ? "bg-card/40" : ""}`}
                >
                  <div className="col-span-9">{s.name}</div>
                  <div className="col-span-3 text-right">
                    {s.capacity.toLocaleString()} people
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-12 px-4 py-3 border-t bg-emerald-950/10">
                <div className="col-span-9 font-semibold">Total Capacity</div>
                <div className="col-span-3 text-right font-semibold">
                  {totalCapacity.toLocaleString()} people
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/26.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/19.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Affinity Mapping */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Affinity Mapping</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affinityBuckets.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border/60 bg-card/40 p-4"
              >
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
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-xl border border-border/60 bg-emerald-700 p-6">
            <h2 className="text-3xl text-white font-bold mb-3">
              Problem Statement
            </h2>
            <p className="text-base text-white">
              Lack of timely communication, preparedness, and effective barriers
              leads to severe property damage and chaos during floods, leaving
              residents vulnerable and unprepared for evacuation or protection
              of their belongings.
            </p>
          </div>
        </div>
      </section>

    

       {/* solutions */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/6 copy.png"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* solutions */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/30.jpg"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>



         {/* solutions */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/9.png"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* solutions */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/11.png"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

        {/* Communication Loop */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/1.png"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

       {/* solutions */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4 rounded-xl shadow-lg overflow-hidden border">
          <div className="max-w-7xl mx-auto text-center mb-10 gap-8">
            <img
              src="/Photos/pune/2.png"
              alt="Human Factors reference"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>




      {/* Insights 
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-4">
            Critical behavioral observed during floods
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {insights.map((i) => (
              <li
                key={i}
                className="rounded-md border border-border/60 bg-card/40 p-3"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Back to Projects */}
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
