import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Users, 
  GitBranch, 
  Play, 
  BarChart3,
  ExternalLink,
  Filter,
  TrendingUp,
  Calendar,
  Plus
} from "lucide-react";
import { useState } from "react";

export default function AgenticEngine() {
  const [activeTab, setActiveTab] = useState("Engine Overview");

  const teams = [
    {
      name: "Content Generation Team",
      description: "Specialized agents for creating various types of content",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      agents: "12",
      tasks: "8,715",
      successRate: "88%",
      updated: "3 days ago"
    },
    {
      name: "Customer Support Team", 
      description: "AI agents trained to handle customer inquiries and support tickets",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      agents: "8",
      tasks: "3,427",
      successRate: "92%",
      updated: "2 days ago"
    },
    {
      name: "Document Review Team",
      description: "Team of agents that review and extract information from documents",
      status: "Testing",
      statusColor: "bg-yellow-100 text-yellow-800",
      agents: "5",
      tasks: "1,204",
      successRate: "85%",
      updated: "1 week ago"
    },
    {
      name: "Financial Analysis Team",
      description: "Team focused on financial data analysis and reporting",
      status: "Development",
      statusColor: "bg-purple-100 text-purple-800",
      agents: "4",
      tasks: "562",
      successRate: "78%",
      updated: "5 hours ago"
    },
    {
      name: "Legal Document Analysis",
      description: "Team specialized in reviewing and analyzing legal documents",
      status: "Testing",
      statusColor: "bg-yellow-100 text-yellow-800",
      agents: "7",
      tasks: "893",
      successRate: "89%",
      updated: "6 days ago"
    },
    {
      name: "Market Research Team",
      description: "Agents that gather and analyze market trends and competitor data",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      agents: "9",
      tasks: "2,156",
      successRate: "94%",
      updated: "1 day ago"
    },
    {
      name: "Translation Team",
      description: "Multilingual agents providing translation and localization services",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      agents: "14",
      tasks: "6,249",
      successRate: "96%",
      updated: "4 days ago"
    }
  ];

  const getSuccessRateColor = (rate: string) => {
    const percentage = parseInt(rate);
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const tabs = [
    { name: "Engine Overview", icon: Bot },
    { name: "Teams", icon: Users },
    { name: "Workflows", icon: GitBranch },
    { name: "Runs", icon: Play },
    { name: "Metrics", icon: BarChart3 }
  ];

  const statsCards = [
    {
      title: "Active Teams",
      value: "24",
      description: "Teams currently running",
      icon: Users,
      iconColor: "text-blue-600"
    },
    {
      title: "Total Tasks",
      value: "47,234",
      description: "Tasks completed this month",
      icon: Filter,
      iconColor: "text-green-600"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      description: "Average across all teams",
      icon: TrendingUp,
      iconColor: "text-purple-600"
    }
  ];

  const marketThemes = [
    {
      title: "AI-Powered Customer Service",
      description: "Growing trend in automated customer support solutions with improved NLP capabilities",
      category: "Technology",
      categoryColor: "bg-blue-100 text-blue-800",
      type: "Rising",
      timeAgo: "2 hours ago"
    },
    {
      title: "Sustainability in Supply Chain",
      description: "Companies increasingly focusing on eco-friendly logistics and green supply chain management",
      category: "Environment",
      categoryColor: "bg-green-100 text-green-800",
      type: "Trending",
      timeAgo: "4 hours ago"
    }
  ];

  const workflows = [
    {
      name: "Contract Review and Analysis",
      description: "Review legal documents and highlight...",
      type: "Legal",
      typeColor: "bg-orange-100 text-orange-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 7,
      avgTime: "6m 35s",
      totalRuns: "286",
      success: "90%",
      lastRun: "4 hours ago"
    },
    {
      name: "Customer Inquiry Resolution",
      description: "Handle and resolve customer support...",
      type: "Support",
      typeColor: "bg-blue-100 text-blue-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 5,
      avgTime: "2m 12s",
      totalRuns: "1,423",
      success: "88%",
      lastRun: "26 minutes ago"
    },
    {
      name: "Data Backup and Verification",
      description: "Automated backup and integrity verificatio...",
      type: "Infrastructure",
      typeColor: "bg-gray-100 text-gray-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 5,
      avgTime: "8m 12s",
      totalRuns: "156",
      success: "99%",
      lastRun: "12 hours ago"
    },
    {
      name: "Document Processing Pipeline",
      description: "Extract, classify, and process document...",
      type: "Data Processing",
      typeColor: "bg-purple-100 text-purple-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 8,
      avgTime: "3m 24s",
      totalRuns: "847",
      success: "96%",
      lastRun: "1 hour ago"
    },
    {
      name: "Email Classification and Routing",
      description: "Sort, classify, and route emails to...",
      type: "Communication",
      typeColor: "bg-cyan-100 text-cyan-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 4,
      avgTime: "42s",
      totalRuns: "2,156",
      success: "95%",
      lastRun: "5 minutes ago"
    },
    {
      name: "Financial Report Generation",
      description: "Analyze financial data and generate...",
      type: "Reporting",
      typeColor: "bg-indigo-100 text-indigo-800",
      status: "Inactive",
      statusColor: "bg-red-100 text-red-800",
      steps: 10,
      avgTime: "4m 48s",
      totalRuns: "312",
      success: "92%",
      lastRun: "3 days ago"
    },
    {
      name: "Social Media Sentiment Analysis",
      description: "Analyze social media content for brand...",
      type: "Marketing",
      typeColor: "bg-pink-100 text-pink-800",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
      steps: 6,
      avgTime: "1m 48s",
      totalRuns: "573",
      success: "89%",
      lastRun: "37 minutes ago"
    }
  ];

  const renderContent = () => {
    if (activeTab === "Teams") {
      return (
        <div>
          {/* Teams Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Agentic Teams Library</h2>
              <p className="text-sm text-muted-foreground">Create and manage specialized agent teams for different tasks and workflows</p>
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Team
            </Button>
          </div>

          {/* Teams Table */}
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
                        Stage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Agents
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Runs
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Success %
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Updated
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teams.map((team, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <Users className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {team.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {team.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={team.statusColor}>
                            {team.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {team.agents}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {team.tasks}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className={`h-2 rounded-full ${getSuccessRateColor(team.successRate)}`}
                                style={{ width: team.successRate }}
                              />
                            </div>
                            <span className="text-sm font-medium">{team.successRate}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {team.updated}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
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
      );
    }

    if (activeTab === "Workflows") {
      return (
        <div>
          {/* Workflows Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Client Workflows</h2>
              <p className="text-sm text-muted-foreground">Automated processes and agent workflows customized for your organization</p>
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>

          {/* Workflows Table */}
          <Card className="bg-white border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Workflow
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Steps
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg. Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Runs
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Success
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Run
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {workflows.map((workflow, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <GitBranch className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {workflow.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {workflow.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={workflow.typeColor}>
                            {workflow.type}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={workflow.statusColor}>
                            {workflow.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {workflow.steps}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {workflow.avgTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {workflow.totalRuns}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className={`h-2 rounded-full ${getSuccessRateColor(workflow.success)}`}
                                style={{ width: workflow.success }}
                              />
                            </div>
                            <span className="text-sm font-medium">{workflow.success}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {workflow.lastRun}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
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
      );
    }

    // Default Engine Overview content
    return (
      <div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                      <p className="text-sm text-muted-foreground mt-1">
                        {card.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className={`${card.iconColor} h-6 w-6`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Agentic Teams Table */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Agentic Teams</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="default" size="sm">
                All
              </Button>
              <Button variant="outline" size="sm">
                Teams
              </Button>
              <Button variant="outline" size="sm">
                Workflows
              </Button>
              <Button variant="outline" size="sm">
                High Metrics
              </Button>
            </div>
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
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Success Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Updated
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teams.map((team, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <Users className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {team.name}
                              </div>
                              <div className="text-sm text-muted-foreground max-w-md">
                                {team.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={team.statusColor}>
                            {team.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground mt-1">
                            {team.agents} agents
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {team.tasks} runs
                          </div>
                          <div className="flex items-center mt-1">
                            <div className={`w-2 h-2 rounded-full mr-2 ${getSuccessRateColor(team.successRate)}`} />
                            <span className="text-sm font-medium">{team.successRate}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {team.updated}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
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

        {/* Recently Detected Market Themes */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-foreground">Recently Detected Market Themes</h3>
            </div>
            <Button variant="outline" size="sm">
              View All Insights
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketThemes.map((theme, index) => (
              <Card key={index} className="bg-white border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={theme.categoryColor}>
                      {theme.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{theme.timeAgo}</span>
                    </div>
                  </div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {theme.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className={`h-3 w-3 ${theme.type === 'Rising' ? 'text-green-600' : 'text-blue-600'}`} />
                      <span className={`text-xs font-medium ${theme.type === 'Rising' ? 'text-green-600' : 'text-blue-600'}`}>
                        {theme.type}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="content-fade-in">
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

        {renderContent()}
      </div>
    </div>
  );
}