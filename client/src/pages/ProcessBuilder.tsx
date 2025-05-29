import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GitBranch, 
  Users, 
  FileCheck, 
  Shield,
  Play,
  Pause,
  CheckCircle,
  AlertTriangle,
  Edit,
  Trash2,
  Plus
} from "lucide-react";

export default function ProcessBuilder() {
  const processes = [
    {
      title: "Data Processing Pipeline",
      description: "ETL workflows and data transformation",
      status: "Running",
      isActive: true,
      icon: GitBranch,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      lastRun: "2 minutes ago",
      statusIcon: Play
    },
    {
      title: "Customer Journey",
      description: "User experience tracking and analytics",
      status: "Paused",
      isActive: false,
      icon: Users,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      lastRun: "1 hour ago",
      statusIcon: Pause
    },
    {
      title: "Document Approval",
      description: "Automated document review workflow",
      status: "Completed",
      isActive: true,
      icon: FileCheck,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      lastRun: "5 minutes ago",
      statusIcon: CheckCircle
    },
    {
      title: "Fraud Detection",
      description: "Real-time transaction monitoring",
      status: "Alert",
      isActive: false,
      icon: Shield,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      lastRun: "30 seconds ago",
      statusIcon: AlertTriangle
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
        return "bg-green-500";
      case "Paused":
        return "bg-yellow-500";
      case "Completed":
        return "bg-blue-500";
      case "Alert":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const yourProcesses = [
    {
      name: "Customer Onboarding",
      description: "Complete customer registration and verification workflow",
      steps: "5 steps",
    },
    {
      name: "Invoice Processing",
      description: "Automated invoice validation and approval process",
      steps: "3 steps",
    },
    {
      name: "Risk Assessment",
      description: "Comprehensive risk evaluation for new applications",
      steps: "7 steps",
    },
    {
      name: "Data Backup",
      description: "Daily backup routine for critical data systems",
      steps: "4 steps",
    },
    {
      name: "Quality Control",
      description: "Product quality assurance and testing workflow",
      steps: "6 steps",
    }
  ];

  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Process Templates Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Process Templates</h3>
            <Button variant="outline" size="sm">
              View All Templates
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card key={index} className="bg-white border-border p-6">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {process.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                        {process.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {index === 0 ? '4 steps' : index === 1 ? '6 steps' : index === 2 ? '5 steps' : '7 steps'}
                        </span>
                        <Button variant="outline" size="sm" className="text-xs px-3 py-1">
                          Use Template
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Your Processes Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Your Processes</h3>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Process
            </Button>
          </div>
          <Card className="bg-white border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Steps
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {yourProcesses.map((process, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-foreground">
                            {process.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-muted-foreground max-w-xs">
                            {process.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {process.steps}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
