import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Database, 
  Brain, 
  Clock,
  Plus,
  CheckCircle,
  Bot
} from "lucide-react";
import { 
  StatusBadge, 
  StatusAlert, 
  HealthIndicator, 
  TaskStatus, 
  MetricCard 
} from "@/components/StatusComponents";

export default function Platform() {
  const statsCards = [
    {
      title: "Active Processes",
      value: "24",
      change: "+12%",
      changeText: "from last week",
      icon: Play,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Data Sources", 
      value: "156",
      change: "+8%",
      changeText: "from last week",
      icon: Database,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "AI Models",
      value: "43", 
      change: "+24%",
      changeText: "from last week",
      icon: Brain,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "+0.1%", 
      changeText: "from last week",
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const recentActivities = [
    {
      title: "New data source connected",
      subtitle: 'PostgreSQL database "analytics_prod" • 2 hours ago',
      icon: Plus,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Process execution completed",
      subtitle: "Customer segmentation pipeline • 4 hours ago",
      icon: CheckCircle,
      iconBg: "bg-green-100", 
      iconColor: "text-green-600"
    },
    {
      title: "AI model deployed",
      subtitle: "Recommendation engine v2.1 • 6 hours ago",
      icon: Bot,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const systemMetrics = [
    { name: "API Response Time", value: "127ms", percentage: 85, color: "bg-green-600" },
    { name: "Memory Usage", value: "67%", percentage: 67, color: "bg-yellow-500" },
    { name: "Storage Used", value: "43%", percentage: 43, color: "bg-blue-600" }
  ];

  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {card.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {card.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`${card.iconColor} h-6 w-6`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-success font-medium">
                      {card.change}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {card.changeText}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Recent Activity and System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-border">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 ${activity.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`${activity.iconColor} h-4 w-4`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-border">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">System Health</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {metric.name}
                      </span>
                      <span className={`text-sm font-medium ${
                        metric.name === "Memory Usage" ? "text-yellow-600" : 
                        metric.name === "API Response Time" ? "text-green-600" : "text-blue-600"
                      }`}>
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className={`${metric.color} h-2 rounded-full`}
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color Guidelines Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* System Health Dashboard */}
          <Card className="bg-white border-border">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">System Health</h3>
            </div>
            <CardContent className="p-6 space-y-4">
              <HealthIndicator status="healthy" label="Database Connection" />
              <HealthIndicator status="warning" label="API Gateway" />
              <HealthIndicator status="critical" label="Cache Service" />
              <HealthIndicator status="healthy" label="Message Queue" />
            </CardContent>
          </Card>

          {/* Task Status Overview */}
          <Card className="bg-white border-border">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Task Status</h3>
            </div>
            <CardContent className="p-6 space-y-3">
              <TaskStatus status="completed" label="Data Processing Complete" />
              <TaskStatus status="in-progress" label="Model Training Running" />
              <TaskStatus status="failed" label="Export Job Failed" />
              <TaskStatus status="pending" label="Backup Scheduled" />
            </CardContent>
          </Card>
        </div>

        {/* Metrics with Semantic Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <MetricCard title="Success Rate" value="98.5%" change={2.3} trend="up" />
          <MetricCard title="Error Rate" value="1.2%" change={-0.8} trend="down" />
          <MetricCard title="Response Time" value="245ms" change={15} trend="neutral" />
          <MetricCard title="Throughput" value="1.2K/min" change={-5.2} trend="down" />
        </div>

        {/* Status Alerts */}
        <div className="space-y-4 mt-6">
          <StatusAlert status="success" title="Deployment Successful">
            Version 2.1.0 has been successfully deployed to production environment.
          </StatusAlert>
          
          <StatusAlert status="warning" title="High Memory Usage">
            Memory usage is at 85%. Consider scaling up resources if this persists.
          </StatusAlert>
          
          <StatusAlert status="error" title="Critical Error">
            Database connection failed. Immediate attention required.
          </StatusAlert>
        </div>

        {/* Status Badges Examples */}
        <Card className="bg-white border-border mt-6">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Component Status</h3>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="success">Online</StatusBadge>
              <StatusBadge status="warning">Degraded</StatusBadge>
              <StatusBadge status="error">Offline</StatusBadge>
              <StatusBadge status="info">Maintenance</StatusBadge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
