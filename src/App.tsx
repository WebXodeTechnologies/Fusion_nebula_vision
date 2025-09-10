import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MarinePartsPage = lazy(() => import("./pages/MarinePartsPage"));
const AutomotivePartsPage = lazy(() => import("./pages/AutomotivePartsPage"));
const MachineryPage = lazy(() => import("./pages/MachineryPage"));
const SolarPage = lazy(() => import("./pages/SolarPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Suspense fallback while route is loading */}
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marine-parts" element={<MarinePartsPage />} />
            <Route path="/automotive-parts" element={<AutomotivePartsPage />} />
            <Route path="/machinery" element={<MachineryPage />} />
            <Route path="/solar" element={<SolarPage />} />
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
