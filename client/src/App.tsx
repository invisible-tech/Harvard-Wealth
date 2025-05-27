import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Platform from "@/pages/Platform";
import DataEnvironment from "@/pages/DataEnvironment";
import ProcessBuilder from "@/pages/ProcessBuilder";
import AgenticEngine from "@/pages/AgenticEngine";
import ExpertMarketplace from "@/pages/ExpertMarketplace";
import ModelEvaluations from "@/pages/ModelEvaluations";
import NotFound from "@/pages/not-found";

function Router() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
      
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={toggleMobileMenu} />
        
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Switch>
            <Route path="/" component={Platform} />
            <Route path="/platform" component={Platform} />
            <Route path="/data-environment" component={DataEnvironment} />
            <Route path="/process-builder" component={ProcessBuilder} />
            <Route path="/agentic-engine" component={AgenticEngine} />
            <Route path="/expert-marketplace" component={ExpertMarketplace} />
            <Route path="/model-evaluations" component={ModelEvaluations} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
