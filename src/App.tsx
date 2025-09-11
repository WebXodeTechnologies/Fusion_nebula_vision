import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MarinePartsPage = lazy(() => import("./pages/MarinePartsPage"));
const AutomotivePartsPage = lazy(() => import("./pages/AutomotivePartsPage"));
const MachineryPage = lazy(() => import("./pages/MachineryPage"));
const SolarPage = lazy(() => import("./pages/SolarPage"));
const ElectricalServices = lazy(() => import("./pages/ElectricalServices"));
const Hvac = lazy(() => import("./pages/Hvac"));
const Construction = lazy(() => import("./pages/Construction"));
const BatterySolution = lazy(() => import("./pages/BatterySolution"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marine-parts" element={<MarinePartsPage />} />
            <Route path="/automotive-parts" element={<AutomotivePartsPage />} />
            <Route path="/machinery" element={<MachineryPage />} />
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/electrical-services" element={<ElectricalServices />} />
            <Route path="/hvac-plumbing" element={<Hvac />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/battery-solutions" element={<BatterySolution />} />
            {/* Catch-all for unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
