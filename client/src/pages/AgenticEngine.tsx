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
  Calendar
} from "lucide-react";
import { useState } from "react";

export default function AgenticEngine() {
  const [activeTab, setActiveTab] = useState("Engine Overview");

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
      value: "2",
      description: "Agent teams ready for deployment",
      icon: Users,
      iconColor: "text-blue-600"
    },
    {
      title: "Agentic Workflows",
      value: "2", 
      description: "Active process workflows",
      icon: GitBranch,
      iconColor: "text-green-600"
    },
    {
      title: "Team Success Rate",
      value: "93%",
      description: "Average task completion rate",
      icon: BarChart3,
      iconColor: "text-purple-600"
    }
  ];

  const teams = [
    {
      name: "Content Generation Team",
      description: "Specialized agents for creating various types of content",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      successRate: "88%",
      agents: 12,
      tasks: "8,715",
      updated: "3 days ago"
    },
    {
      name: "Customer Support Team", 
      description: "AI agents trained to handle customer inquiries and support tickets",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      successRate: "92%",
      agents: 8,
      tasks: "3,427",
      updated: "2 days ago"
    },
    {
      name: "Document Review Team",
      description: "Team of agents that review and extract information from documents",
      status: "Testing",
      statusColor: "bg-yellow-100 text-yellow-800",
      successRate: "85%",
      agents: 5,
      tasks: "1,204",
      updated: "1 week ago"
    },
    {
      name: "Financial Analysis Team",
      description: "Team focused on financial data analysis and reporting",
      status: "Development",
      statusColor: "bg-blue-100 text-blue-800",
      successRate: "78%",
      agents: 4,
      tasks: "562",
      updated: "8 hours ago"
    },
    {
      name: "Legal Document Analysis",
      description: "Team specialized in reviewing and analyzing legal documents",
      status: "Testing",
      statusColor: "bg-yellow-100 text-yellow-800",
      successRate: "89%",
      agents: 7,
      tasks: "893",
      updated: "6 days ago"
    },
    {
      name: "Market Research Team",
      description: "Agents that gather and analyze market trends and competitor data",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      successRate: "94%",
      agents: 9,
      tasks: "2,156",
      updated: "1 day ago"
    },
    {
      name: "Translation Team",
      description: "Multilingual agents providing translation and localization services",
      status: "Production",
      statusColor: "bg-green-100 text-green-800",
      successRate: "96%",
      agents: 14,
      tasks: "6,249",
      updated: "4 days ago"
    }
  ];

  const getSuccessRateColor = (rate: string) => {
    const percentage = parseInt(rate);
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const marketThemes = [
    {
      category: "Regulation",
      title: "AI Regulation Framework Proposed in EU Parliament",
      description: "New comprehensive framework for AI governance outlines strict requirements for high-risk AI systems and transparency obligations.",
      timeAgo: "2 days ago",
      categoryColor: "bg-purple-100 text-purple-800",
      type: "Rising"
    },
    {
      category: "Industry", 
      title: "Autonomous Agents Transforming Financial Services",
      description: "Leading banks report 40% efficiency improvements after deploying autonomous AI agents for customer support and fraud detection.",
      timeAgo: "4 days ago",
      categoryColor: "bg-blue-100 text-blue-800",
      type: "Steady"
    },
    {
      category: "Research",
      title: "Major Breakthrough in Agent Collaboration Frameworks", 
      description: "Researchers develop new multi-agent collaboration protocol that significantly improves task coordination between specialized AI agents.",
      timeAgo: "1 week ago",
      categoryColor: "bg-green-100 text-green-800",
      type: "Rising"
    },
    {
      category: "Industry",
      title: "Supply Chain Disruptions Mitigated by Predictive AI",
      description: "Companies implementing agent-based supply chain optimization report 35% reduction in disruption impact during recent logistics challenges.",
      timeAgo: "5 days ago", 
      categoryColor: "bg-blue-100 text-blue-800",
      type: "Rising"
    }
  ];

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
                            {team.agents}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted-foreground">
                            {team.tasks}
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
    </div>
  );
}
