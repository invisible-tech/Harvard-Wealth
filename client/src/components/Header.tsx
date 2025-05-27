import { useLocation } from "wouter";
import { Menu, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageContent = {
  '/': { title: 'Platform Overview', subtitle: 'Manage your data platform and infrastructure' },
  '/platform': { title: 'Platform Overview', subtitle: 'Manage your data platform and infrastructure' },
  '/data-environment': { title: 'Data Environment', subtitle: 'Configure and monitor your data sources' },
  '/process-builder': { title: 'Process Builder', subtitle: 'Design and orchestrate data workflows' },
  '/agentic-engine': { title: 'Agentic Engine', subtitle: 'Manage AI agents and automation' },
  '/expert-marketplace': { title: 'Expert Marketplace', subtitle: 'Connect with domain specialists' },
  '/model-evaluations': { title: 'Model Evaluations', subtitle: 'Assess AI model performance' },
};

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [location] = useLocation();
  const currentPage = pageContent[location as keyof typeof pageContent] || pageContent['/'];

  return (
    <header className="bg-white border-b border-border px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {currentPage.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {currentPage.subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
