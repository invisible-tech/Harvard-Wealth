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
  Trash2
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
        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processes.map((process, index) => {
            const Icon = process.icon;
            const StatusIcon = process.statusIcon;
            return (
              <Card key={index} className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${process.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`${process.iconColor} h-5 w-5`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {process.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {process.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(process.status)}`} />
                      <span className="text-sm font-medium text-foreground">
                        {process.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Last run: {process.lastRun}
                    </div>
                    <StatusIcon className={`h-4 w-4 ${getStatusColor(process.status).replace('bg-', 'text-')}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Your Processes Table */}
        <div className="mt-8">
          <Card className="bg-white border-border">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Your Processes</h3>
            </div>
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
