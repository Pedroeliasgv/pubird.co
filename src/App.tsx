import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "@/i18n/LanguageContext";

import Index from "./pages/index";
import WorkPage from "./pages/WorkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          <Routes>

            <Route
              path="/"
              element={<Index />}
            />

            <Route
              path="/work/:slug"
              element={<WorkPage />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </BrowserRouter>

        <Analytics />
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;