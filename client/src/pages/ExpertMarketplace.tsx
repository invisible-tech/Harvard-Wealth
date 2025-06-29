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
  Calendar,
  Search,
  Filter,
  Plus,
  Link,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function ExpertMarketplace() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [taskTab, setTaskTab] = useState("Assigned");
  const [metricsTab, setMetricsTab] = useState("Overview");

  const tabs = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Tasks", icon: FileText },
    { name: "Task Queue", icon: Clock },
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

  const myTasks = [
    {
      id: 1,
      title: "Technical documentation review",
      priority: "High",
      priorityColor: "bg-red-100 text-red-800",
      dueDate: "Today, 5:00 PM",
      category: "Document Review",
      progress: 30,
      progressColor: "bg-yellow-500"
    },
    {
      id: 2,
      title: "Product market analysis verification",
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-800",
      dueDate: "Tomorrow, 12:00 PM",
      category: "Content Verification",
      progress: 65,
      progressColor: "bg-yellow-500"
    },
    {
      id: 3,
      title: "API integration validation",
      priority: "Low",
      priorityColor: "bg-green-100 text-green-800",
      dueDate: "Jul 24, 4:00 PM",
      category: "Technical Assessment",
      progress: 10,
      progressColor: "bg-gray-300"
    }
  ];

  const taskTabs = [
    { name: "Assigned", count: 3 },
    { name: "Completed", count: 2 },
    { name: "Available", count: 4 }
  ];

  const renderMyTasksContent = () => {
    return (
      <div>
        {/* Task Navigation Tabs */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
            <nav className="flex w-full">
              {taskTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setTaskTab(tab.name)}
                  className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm ${
                    index === 0 ? 'rounded-l-md' : index === taskTabs.length - 1 ? 'rounded-r-md' : ''
                  } ${
                    taskTab === tab.name
                      ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-1">{tab.name}</span>
                  <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-xs">
                    ({tab.count})
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Request New Task
            </Button>
          </div>
        </div>

        {/* Task Content Based on Active Tab */}
        {taskTab === "Assigned" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Tasks Assigned to You</h3>
            </div>

            <div className="space-y-4">
              {myTasks.map((task) => (
                <Card key={task.id} className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                            <FileCheck className="h-4 w-4 text-blue-600" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">{task.title}</h4>
                          <Badge className={task.priorityColor}>
                            {task.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{task.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${task.progressColor}`}
                                style={{ width: `${task.progress}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm font-medium text-foreground">{task.progress}%</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          Continue
                        </Button>
                        <Button variant="outline" size="sm">
                          Mark Complete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {taskTab === "Completed" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Your Completed Tasks</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Customer feedback analysis",
                  dueDate: "Jul 18, 3:00 PM",
                  completedDate: "Jul 18, 2:45 PM",
                  type: "Data Analysis",
                  rating: 5
                },
                {
                  title: "Competitor pricing validation",
                  dueDate: "Jul 17, 5:00 PM", 
                  completedDate: "Jul 17, 4:30 PM",
                  type: "Content Verification",
                  rating: 4
                }
              ].map((task, index) => (
                <Card key={index} className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">{task.title}</h4>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            Completed
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>Completed: {task.completedDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>{task.type}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < task.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {taskTab === "Available" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Tasks Available to Claim</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Market trend analysis report",
                  estimatedTime: "1-2 hours",
                  deadline: "Jul 25, 11:59 PM",
                  type: "Document Review",
                  priority: "Medium"
                },
                {
                  title: "Product feature evaluation",
                  estimatedTime: "30-45 mins",
                  deadline: "Jul 26, 5:00 PM",
                  type: "Technical Assessment",
                  priority: "Hard"
                },
                {
                  title: "Sales copy accuracy review",
                  estimatedTime: "45-60 mins",
                  deadline: "Jul 23, 3:00 PM",
                  type: "Content Verification",
                  priority: "Easy"
                },
                {
                  title: "User survey data validation",
                  estimatedTime: "1-1.5 hours",
                  deadline: "Jul 24, 2:00 PM",
                  type: "Data Analysis",
                  priority: "Medium"
                }
              ].map((task, index) => (
                <Card key={index} className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                            <Link className="h-4 w-4 text-blue-600" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">{task.title}</h4>
                          <Badge className={
                            task.priority === "Hard" ? "bg-red-100 text-red-800 hover:bg-red-100" :
                            task.priority === "Medium" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                            "bg-green-100 text-green-800 hover:bg-green-100"
                          }>
                            {task.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Estimated time: {task.estimatedTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>Deadline: {task.deadline}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{task.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-6">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Claim Task
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
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
                    className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm ${
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

        {/* Content */}
        <div>
          {activeTab === "My Tasks" && renderMyTasksContent()}
          
          {activeTab === "Task Queue" && (
            <div>
              {/* Header Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search task queues..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>

              {/* Task Queue Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>TASK ID</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>TASK NAME</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>CATEGORY</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>PRIORITY</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>STATUS</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>DUE DATE</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div>ACTIONS</div>
                </div>

                {/* Empty State */}
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks in queue</h3>
                  <p className="text-gray-500 mb-6">Tasks that need review will appear here</p>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh Queue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Talent Pool" && (
            <div>
              {/* Header Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search experts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter by Skill
                  </Button>
                  <Button variant="outline" size="sm">
                    Export List
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Expert
                  </Button>
                </div>
              </div>

              {/* Talent Pool Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>NAME</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>EXPERTISE</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>TASKS COMPLETED</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>AVG. RESPONSE TIME</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>RATING</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>STATUS</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <div>ACTIONS</div>
                </div>

                {/* Empty State */}
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No experts found</h3>
                  <p className="text-gray-500 mb-6">Invite experts to join your talent pool</p>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Invite Expert
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Payments" && (
            <div>
              {/* Payment Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Pending Payments</h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">$0.00</div>
                    <div className="flex items-center text-sm text-orange-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Awaiting processing
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Approved Payments</h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">$0.00</div>
                    <div className="flex items-center text-sm text-blue-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Ready for payment
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Paid This Month</h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">$0.00</div>
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Already processed
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-border">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Total Payments</h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">$0.00</div>
                    <div className="text-sm text-muted-foreground">All time</div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Management Section */}
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Payment Management</h3>
                      <p className="text-sm text-muted-foreground">Process and track payments to reviewers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>

                  {/* Payment Tabs */}
                  <div className="mb-6">
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
                      <nav className="flex w-full">
                        {["Pending", "Paid", "All Payments"].map((tab, index) => (
                          <button
                            key={tab}
                            className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm ${
                              index === 0 ? 'rounded-l-md' : index === 2 ? 'rounded-r-md' : ''
                            } ${
                              index === 0
                                ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search by reviewer name or email..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="ml-4">
                      Deselect All
                    </Button>
                  </div>

                  {/* Empty State */}
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No pending payments</h3>
                    <p className="text-gray-500 mb-6">Payments that need to be processed will appear here</p>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "Metrics" && (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Performance Metrics</h2>
                  <p className="text-muted-foreground">Monitor and analyze marketplace performance</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                </div>
              </div>

              {/* Metrics Navigation */}
              <div className="mb-8">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
                  <nav className="flex w-full">
                    {[
                      { name: "Overview", icon: BarChart3, title: "Overview Metrics", subtitle: "Summary of key marketplace metrics" },
                      { name: "Performance", icon: BarChart3, title: "Performance Metrics", subtitle: "System and response time analytics" },
                      { name: "Task Metrics", icon: FileCheck, title: "Task Metrics", subtitle: "Task completion and processing analytics" },
                      { name: "SLA Compliance", icon: CheckCircle, title: "SLA Compliance", subtitle: "Service level agreement monitoring" }
                    ].map((tab, index) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.name}
                          onClick={() => setMetricsTab(tab.name)}
                          className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm ${
                            index === 0 ? 'rounded-l-md' : index === 3 ? 'rounded-r-md' : ''
                          } ${
                            metricsTab === tab.name
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

              {/* Current Tab Content */}
              {(() => {
                const currentTab = [
                  { name: "Overview", icon: BarChart3, title: "Overview Metrics", subtitle: "Summary of key marketplace metrics" },
                  { name: "Performance", icon: BarChart3, title: "Performance Metrics", subtitle: "System and response time analytics" },
                  { name: "Task Metrics", icon: FileCheck, title: "Task Metrics", subtitle: "Task completion and processing analytics" },
                  { name: "SLA Compliance", icon: CheckCircle, title: "SLA Compliance", subtitle: "Service level agreement monitoring" }
                ].find(tab => tab.name === metricsTab);

                return (
                  <>
                    {/* Time Period Selector */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{currentTab?.title}</h3>
                        <p className="text-sm text-muted-foreground">{currentTab?.subtitle}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
                          <nav className="flex">
                            {["Day", "Week", "Month"].map((period, index) => (
                              <button
                                key={period}
                                className={`px-3 py-1.5 font-medium text-sm ${
                                  index === 1
                                    ? "bg-white text-blue-600 shadow-sm border border-gray-200 rounded"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                              >
                                {period}
                              </button>
                            ))}
                          </nav>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Chart */}
                    <Card className="bg-white border-border mb-8">
                      <CardContent className="p-6">
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                          <div className="text-center">
                            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <div className="text-sm text-gray-500">Chart visualization would appear here</div>
                            <div className="flex items-center justify-between mt-8">
                              <div className="text-sm text-gray-600">Average: 324</div>
                              <div className="text-sm text-green-600">+24% from previous period</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                );
              })()}

              {/* Prometheus Metrics */}
              <Card className="bg-white border-border mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Prometheus Metrics</h3>
                        <p className="text-sm text-muted-foreground">Available metrics for monitoring and visualization</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Documentation
                    </Button>
                  </div>

                  {/* Metrics Table */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                      <div>METRIC NAME</div>
                      <div>DESCRIPTION</div>
                      <div>TYPE</div>
                      <div>STATUS</div>
                      <div>ACTIONS</div>
                    </div>

                    {/* Table Rows */}
                    {[
                      {
                        name: "expert_marketplace_task_completion_time",
                        description: "Time taken to complete tasks",
                        type: "histogram",
                        status: "healthy",
                        statusColor: "bg-green-100 text-green-800"
                      },
                      {
                        name: "expert_marketplace_queue_size",
                        description: "Number of tasks in queue",
                        type: "gauge",
                        status: "healthy",
                        statusColor: "bg-green-100 text-green-800"
                      },
                      {
                        name: "expert_marketplace_error_rate",
                        description: "Task processing error rate",
                        type: "counter",
                        status: "warning",
                        statusColor: "bg-yellow-100 text-yellow-800"
                      },
                      {
                        name: "expert_marketplace_expert_availability",
                        description: "Number of available experts",
                        type: "gauge",
                        status: "healthy",
                        statusColor: "bg-green-100 text-green-800"
                      },
                      {
                        name: "expert_marketplace_sla_breach_count",
                        description: "Count of SLA breaches",
                        type: "counter",
                        status: "critical",
                        statusColor: "bg-red-100 text-red-800"
                      }
                    ].map((metric, index) => (
                      <div key={index} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 text-sm">
                        <div className="font-mono text-gray-900">{metric.name}</div>
                        <div className="text-gray-600">{metric.description}</div>
                        <div className="text-gray-600">{metric.type}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${metric.statusColor}`}>
                            {metric.status}
                          </span>
                        </div>
                        <div>
                          <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Available Metrics for Monitoring */}
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Available Metrics for Monitoring</h3>
                        <p className="text-sm text-muted-foreground">Configure alerts and monitoring settings</p>
                      </div>
                    </div>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      New Alert
                    </Button>
                  </div>

                  {/* Monitoring Settings */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Task Queue Size",
                        description: "Alerts when task queue exceeds threshold",
                        status: "Enabled"
                      },
                      {
                        name: "Expert Response Time",
                        description: "Monitors average time to accept tasks",
                        status: "Enabled"
                      },
                      {
                        name: "SLA Compliance",
                        description: "Alerts on potential SLA breaches",
                        status: "Enabled"
                      },
                      {
                        name: "Error Rate",
                        description: "Monitors error rate in task processing",
                        status: "Disabled"
                      },
                      {
                        name: "System Load",
                        description: "Alerts on system resource utilization",
                        status: "Enabled"
                      }
                    ].map((monitor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{monitor.name}</h4>
                          <p className="text-sm text-gray-600">{monitor.description}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            monitor.status === "Enabled" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-600"
                          }`}>
                            {monitor.status}
                          </span>
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "Dashboard" && (
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
          )}
        </div>
      </div>
    </div>
  );
}