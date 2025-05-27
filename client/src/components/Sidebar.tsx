import { Link, useLocation } from "wouter";
import { 
  Database, 
  LayoutDashboard, 
  Server, 
  GitBranch, 
  Bot, 
  Users, 
  BarChart3, 
  User 
} from "lucide-react";

const navigationItems = [
  { path: "/platform", label: "Platform", icon: LayoutDashboard },
  { path: "/data-environment", label: "Data Environment", icon: Server },
  { path: "/process-builder", label: "Process Builder", icon: GitBranch },
  { path: "/agentic-engine", label: "Agentic Engine", icon: Bot },
  { path: "/expert-marketplace", label: "Expert Marketplace", icon: Users },
  { path: "/model-evaluations", label: "Model Evaluations", icon: BarChart3 },
];

export default function Sidebar() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/platform" && (location === "/" || location === "/platform")) {
      return true;
    }
    return location === path;
  };

  return (
    <aside className="hidden lg:flex w-72 bg-sidebar text-sidebar-foreground flex-col">
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Database className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-semibold">Invisible Platform</h1>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 sidebar-scroll overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className={`flex items-center px-3 py-2.5 rounded-lg nav-item-hover ${
                      isActive(item.path) 
                        ? 'active-nav' 
                        : 'text-gray-300'
                    }`}>
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        <div className="px-4 py-4 border-t border-gray-800">
          <div className="flex items-center space-x-3 px-3 py-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-gray-400 truncate">admin@invisible.ai</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
