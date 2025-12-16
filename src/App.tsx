import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import KedarnathVR from "./pages/projects/KedarnathVR";
import Savey from "./pages/projects/Savey";
import ShootingRange from "./pages/projects/ShootingRange";
import MushroomHouse from "./pages/projects/MushroomHouse";
import UnrealCinematic from "./pages/projects/UnrealCinematic";
import DashboardRedesign from "./pages/projects/DashboardRedesign";
import StormyOcean from "./pages/projects/StormyOcean";
import SmartChemistry from "./pages/projects/SmartChemistry";
import AngryBirds from "./pages/projects/AngryBirds";
import NetflixSpatial from "./pages/projects/NetflixSpatial";
import NotFound from "./pages/NotFound";
import PreFlightVR from "./pages/projects/PreFlight-VR";
import SamsungAIAgent from "./pages/projects/SamsungAIAgent";
import SystemThinking from "./pages/projects/SystemThinking";
import Ethnography from "./pages/projects/Ethnography";
import TouchDesign from "./pages/projects/TouchDesign";
import CreativeCoding from "./pages/projects/CreativeCoding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/kedarnath" element={<KedarnathVR />} />
          <Route path="/projects/savey" element={<Savey />} />
          <Route path="/projects/shooting-range" element={<ShootingRange />} />
          <Route path="/projects/mushroom-house" element={<MushroomHouse />} />
          <Route
            path="/projects/unreal-cinematic"
            element={<UnrealCinematic />}
          />
          <Route
            path="/projects/dashboard-redesign"
            element={<DashboardRedesign />}
          />
          <Route path="/projects/stormy-ocean" element={<StormyOcean />} />
          <Route
            path="/projects/smart-chemistry"
            element={<SmartChemistry />}
          />
          <Route path="/projects/angry-birds" element={<AngryBirds />} />
          <Route
            path="/projects/netflix-spatial"
            element={<NetflixSpatial />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects/preflight-maintenance-check-vr"
            element={<PreFlightVR />}
          />
          <Route
            path="/projects/samsung-ai-agent"
            element={<SamsungAIAgent />}
          />
          <Route path="/projects/touch-design" element={<TouchDesign />} />
          <Route
            path="/projects/creative-coding"
            element={<CreativeCoding />}
          />
          <Route
            path="/projects/system-thinking"
            element={<SystemThinking />}
          />
          <Route path="/projects/ethnography" element={<Ethnography />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
