import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Clock, 
  CreditCard, 
  BarChart3,
  CheckCircle,
  Star,
  MessageSquare,
  FileCheck,
  Eye,
  Calendar
} from "lucide-react";
import { useState } from "react";

export default function ExpertMarketplace() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Tasks", icon: FileText },
    { name: "Task Queue", icon: Users },
    { name: "Talent Pool", icon: Users },
    { name: "Payments", icon: CreditCard },
    { name: "Metrics", icon: BarChart3 }
  ];

  const queueBreakdown = [
    { name: "Document Review", count: 12, change: "+5%", color: "bg-blue-500" },
    { name: "Content Verification", count: 8, change: "-3%", color: "bg-green-500" },
    { name: "Technical Assessment", count: 5, change: "+10%", color: "bg-yellow-500" },
    { name: "Data Analysis", count: 2, change: "0%", color: "bg-purple-500" }
  ];

  const topPerformers = [
    { rank: 1, name: "Alex Kim", tasks: 18, avgTime: "28 min" },
    { rank: 2, name: "Taylor Chen", tasks: 15, avgTime: "32 min" },
    { rank: 3, name: "Jordan Garcia", tasks: 12, avgTime: "34 min" }
  ];

  const recentActivity = [
    {
      name: "Alex Kim",
      action: "Completed: Technical code review",
      category: "Technical Assessment",
      time: "10 minutes ago",
      icon: CheckCircle,
      iconColor: "text-green-600"
    },
    {
      name: "Morgan Lee",
      action: "Assigned: Content accuracy verification",
      category: "Content Verification",
      time: "25 minutes ago",
      icon: FileText,
      iconColor: "text-blue-600"
    },
    {
      name: "Jordan Garcia",
      action: "Commented on: Financial document analysis",
      category: "Document Review",
      time: "42 minutes ago",
      icon: MessageSquare,
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Expert Marketplace</h1>
          <p className="text-muted-foreground">Connect with experts and manage specialized tasks in our marketplace</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
            <nav className="flex w-full">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm transition-all duration-200 ${
                      index === 0 ? 'rounded-l-md' : index === tabs.length - 1 ? 'rounded-r-md' : ''
                    } ${
                      activeTab === tab.name
                        ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Dashboard Content */}
        <div>
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Tasks in Queue</h3>
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">27</div>
                <div className="text-sm text-muted-foreground">Awaiting expert review</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Active Reviewers</h3>
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">14</div>
                <div className="text-sm text-muted-foreground">Currently online</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Average Latency</h3>
                  <Clock className="h-4 w-4 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">38 min</div>
                <div className="text-sm text-muted-foreground">Average response time</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Tasks Completed</h3>
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">47</div>
                <div className="text-sm text-muted-foreground">Today (1,258 total)</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Queue Breakdown */}
            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Queue Breakdown</h3>
                </div>
                <div className="space-y-4">
                  {queueBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-foreground">{item.count}</span>
                        <span className={`text-xs ${item.change.includes('+') ? 'text-green-600' : item.change.includes('-') ? 'text-red-600' : 'text-gray-600'}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View All Tasks
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Performance Metrics</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Task Acceptance Rate</span>
                    <span className="text-sm font-bold text-foreground">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">Top Performers</h4>
                  <div className="space-y-3">
                    {topPerformers.map((performer) => (
                      <div key={performer.rank} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                            {performer.rank}
                          </div>
                          <span className="text-sm font-medium text-foreground">{performer.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-foreground">{performer.tasks} tasks</div>
                          <div className="text-xs text-muted-foreground">Avg: {performer.avgTime}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Full Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-white border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{activity.name}</span>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="text-sm text-foreground mt-1">{activity.action}</div>
                        <div className="flex items-center mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}