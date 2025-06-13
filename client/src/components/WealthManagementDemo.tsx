import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  TrendingUp, 
  Upload,
  Eye,
  Download,
  BarChart3,
  Users,
  DollarSign,
  Calendar,
  Bot,
  Loader2,
  ExternalLink,
  X,
  BookOpen,
  ChevronDown,
  ChevronRight,
  History,
  Filter,
  Mail,
  Database,
  Link,
  Shield,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function WealthManagementDemo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [queryResult, setQueryResult] = useState<{
    result: string; 
    data: string[];
    sources: Array<{
      type: 'email' | 'pdf' | 'database' | 'report' | 'api';
      name: string;
      timestamp: string;
      confidence: number;
      icon: any;
    }>;
  } | null>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const [showPromptLibrary, setShowPromptLibrary] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const recentDocuments = [
    {
      id: "1",
      title: "Sequoia Capital Q4 2024 Report",
      type: "Manager Update",
      date: "2024-12-15",
      status: "processed",
      irr: "24.7%",
      aum: "$8.5B",
      keyInsights: ["Strong biotech portfolio performance", "3 successful exits", "ESG compliance rating: A+"]
    },
    {
      id: "2", 
      title: "Bain Capital Ventures Update",
      type: "Quarterly Report",
      date: "2024-12-10",
      status: "processing",
      irr: "18.3%",
      aum: "$3.2B",
      keyInsights: ["AI/ML investments up 40%", "2 IPO preparations", "New fund raising target: $4B"]
    },
    {
      id: "3",
      title: "General Atlantic Portfolio Review",
      type: "Annual Summary",
      date: "2024-12-08",
      status: "processed",
      irr: "16.9%",
      aum: "$12.1B",
      keyInsights: ["SaaS sector outperforming", "ESG integration complete", "Distribution: $1.2B"]
    }
  ];

  const promptLibrary = {
    "Performance Analysis": {
      icon: TrendingUp,
      color: "text-green-600",
      prompts: [
        "Show Harvard managers outperforming 15% IRR over the past 3 years",
        "Compare net IRR performance across private equity vintages 2019-2024",
        "Identify top quartile performers in our venture capital portfolio",
        "Analyze TVPI multiple progression for Fund VIII investments",
        "Which managers have consistently delivered alpha above benchmark?",
        "Show correlation between management fees and net performance",
        "Rank our real estate managers by risk-adjusted returns"
      ]
    },
    "Risk Management": {
      icon: Filter,
      color: "text-red-600", 
      prompts: [
        "Summarize private asset ESG risk commentary from last quarter",
        "Identify portfolio companies with elevated credit risk scores",
        "Show concentration risk across sectors and geographies",
        "Analyze liquidity timeline for our illiquid investments",
        "Which investments have missed their original exit timelines?",
        "Review counterparty risk exposure across prime brokers",
        "Summarize key person risk events in the past 12 months"
      ]
    },
    "Due Diligence": {
      icon: Search,
      color: "text-blue-600",
      prompts: [
        "Extract key terms from the latest Blackstone fund documentation",
        "Compare fee structures across similar vintage private equity funds",
        "Summarize investment committee concerns from recent proposals",
        "Analyze reference calls feedback for prospective managers",
        "Review operational due diligence findings for Fund XII",
        "What are the key differentiators in Apollo's new strategy?",
        "Compile background check results for new investment partners"
      ]
    },
    "Portfolio Construction": {
      icon: BarChart3,
      color: "text-purple-600",
      prompts: [
        "Which biotech investments have the highest return potential?",
        "Recommend optimal allocation across alternative asset classes",
        "Identify gaps in our emerging markets exposure",
        "Suggest rebalancing strategy for overweight technology positions",
        "Analyze portfolio diversification across investment styles",
        "Which sectors offer the best risk-return opportunity currently?",
        "Review our small-cap equity manager lineup effectiveness"
      ]
    },
    "Cash Flow Management": {
      icon: DollarSign,
      color: "text-emerald-600",
      prompts: [
        "List all managers with upcoming distribution schedules",
        "Project capital call requirements for the next 24 months",
        "Show net cash flow timing across our private investments",
        "Which funds are approaching their investment periods?",
        "Analyze distribution yield trends by asset class",
        "Calculate unfunded commitment exposure by vintage year",
        "Review liquidity requirements for upcoming board commitments"
      ]
    },
    "Compliance & Reporting": {
      icon: FileText,
      color: "text-orange-600",
      prompts: [
        "Generate quarterly board reporting package highlights",
        "Summarize regulatory compliance issues requiring attention",
        "Extract ILPA reporting requirements from partnership agreements",
        "Review transparency metrics across our manager relationships",
        "Compile environmental impact data for sustainability report",
        "What investments require updated tax documentation?",
        "Summarize fiduciary compliance status across all mandates"
      ]
    }
  };

  const queryExamples = [
    "Show Harvard managers outperforming 15% IRR over the past 3 years",
    "Summarize private asset ESG risk commentary from last quarter", 
    "Which biotech investments have the highest return potential?",
    "List all managers with upcoming distribution schedules"
  ];

  const portfolioMetrics = [
    { label: "Total AUM", value: "$53.2B", change: "+8.2%" },
    { label: "YTD Returns", value: "18.4%", change: "+2.1%" },
    { label: "Active Managers", value: "47", change: "+3" },
    { label: "Documents Processed", value: "1,248", change: "+12%" }
  ];

  const handleQuerySubmit = async () => {
    if (!searchQuery.trim()) return;
    
    setIsProcessing(true);
    setQueryResult(null);
    
    // Add to query history if not already present
    if (!queryHistory.includes(searchQuery)) {
      setQueryHistory(prev => [searchQuery, ...prev.slice(0, 9)]); // Keep last 10 queries
    }
    
    // Create a more dynamic query handler that processes the actual input
    setTimeout(() => {
      let response = {
        result: "AI Analysis Complete - Processing your investment query...",
        data: [
          "• Analyzing 47 active investment managers",
          "• Processing 1,248 recent documents", 
          "• Cross-referencing performance data",
          "• Generating insights based on your criteria",
          "• Results compiled from Harvard's portfolio database"
        ],
        sources: [
          { type: 'database', name: 'Harvard Portfolio Database', timestamp: '2024-12-15 14:30', confidence: 95, icon: Database },
          { type: 'report', name: 'Q4 Portfolio Summary', timestamp: '2024-12-10 09:15', confidence: 92, icon: FileText }
        ]
      };

      // Enhanced query matching for more dynamic responses
      const query = searchQuery.toLowerCase();
      
      if (query.includes("irr") || query.includes("performance") || query.includes("outperform")) {
        response = {
          result: "Found 8 managers exceeding 15% IRR threshold:",
          data: [
            "• Sequoia Capital: 24.7% IRR (3-year avg)",
            "• Bain Capital Ventures: 18.3% IRR (3-year avg)", 
            "• General Atlantic: 16.9% IRR (3-year avg)",
            "• TPG Capital: 15.2% IRR (3-year avg)",
            "• Additional 4 managers with IRR between 15.1-17.8%"
          ],
          sources: [
            { type: 'pdf', name: 'Sequoia_Q4_2024_Report.pdf', timestamp: '2024-12-15 10:30', confidence: 98, icon: FileText },
            { type: 'email', name: 'Michael Chen <mchen@baincapital.com>', timestamp: '2024-12-12 16:45', confidence: 94, icon: Mail },
            { type: 'pdf', name: 'General_Atlantic_Performance_Review.pdf', timestamp: '2024-12-08 14:20', confidence: 96, icon: FileText },
            { type: 'database', name: 'Harvard Performance Analytics DB', timestamp: '2024-12-15 08:00', confidence: 99, icon: Database }
          ]
        };
      } else if (query.includes("esg") || query.includes("risk") || query.includes("compliance")) {
        response = {
          result: "ESG Risk Analysis Summary (Q4 2024):",
          data: [
            "• 94% of portfolio companies maintain ESG compliance ratings above B+",
            "• 3 companies flagged for carbon footprint review",
            "• 12 new sustainable investment initiatives launched",
            "• Enhanced due diligence on 5 emerging market investments",
            "• Overall ESG portfolio score: 4.2/5.0"
          ],
          sources: [
            { type: 'report', name: 'ESG_Compliance_Q4_2024.pdf', timestamp: '2024-12-14 11:15', confidence: 97, icon: FileText },
            { type: 'email', name: 'Sarah Williams <swilliams@sustainalytics.com>', timestamp: '2024-12-13 09:30', confidence: 93, icon: Mail },
            { type: 'api', name: 'MSCI ESG Research API', timestamp: '2024-12-15 07:45', confidence: 96, icon: Link },
            { type: 'pdf', name: 'Carbon_Footprint_Assessment_2024.pdf', timestamp: '2024-12-11 13:20', confidence: 91, icon: FileText }
          ]
        };
      } else if (query.includes("biotech") || query.includes("pharma") || query.includes("drug")) {
        response = {
          result: "Top Biotech Investment Opportunities:",
          data: [
            "• Moderna Inc.: AI-driven vaccine development (Projected 28% IRR)",
            "• Ginkgo Bioworks: Synthetic biology platform (Projected 22% IRR)",
            "• 10x Genomics: Single-cell analysis tools (Projected 19% IRR)",
            "• Recursion Pharmaceuticals: AI drug discovery (Projected 25% IRR)",
            "• Portfolio allocation recommendation: 15-20% increase in biotech exposure"
          ],
          sources: [
            { type: 'email', name: 'Dr. James Liu <jliu@modernatx.com>', timestamp: '2024-12-14 15:22', confidence: 89, icon: Mail },
            { type: 'pdf', name: 'Biotech_Sector_Analysis_2024.pdf', timestamp: '2024-12-12 10:40', confidence: 95, icon: FileText },
            { type: 'api', name: 'PitchBook Private Market Data', timestamp: '2024-12-15 06:30', confidence: 92, icon: Link },
            { type: 'report', name: 'Healthcare Innovation Pipeline Report', timestamp: '2024-12-09 16:10', confidence: 94, icon: FileText }
          ]
        };
      } else if (query.includes("distribution") || query.includes("payout") || query.includes("return")) {
        response = {
          result: "Upcoming Distributions (Next 90 days):",
          data: [
            "• Sequoia Capital Fund XIV: $125M distribution (Feb 15)",
            "• Bain Capital Ventures IV: $89M distribution (Feb 28)",
            "• General Atlantic X: $203M distribution (Mar 10)",
            "• TPG Growth III: $156M distribution (Mar 22)",
            "• Total expected distributions: $573M"
          ],
          sources: [
            { type: 'email' as const, name: 'David Park <dpark@sequoiacap.com>', timestamp: '2024-12-14 12:15', confidence: 98, icon: Mail },
            { type: 'pdf' as const, name: 'Distribution_Schedule_Q1_2025.pdf', timestamp: '2024-12-13 09:45', confidence: 96, icon: FileText },
            { type: 'database' as const, name: 'Capital Calls & Distributions DB', timestamp: '2024-12-15 08:15', confidence: 99, icon: Database },
            { type: 'email' as const, name: 'Lisa Zhang <lzhang@tpg.com>', timestamp: '2024-12-12 14:30', confidence: 94, icon: Mail }
          ]
        };
      }

      setQueryResult(response);
      setIsProcessing(false);
    }, 2500);
  };

  const handleViewFullReport = (documentId: string) => {
    // Use iframe-friendly URLs that don't have authentication restrictions
    const reportUrls = {
      "1": "https://www.example.com/sample-report", // Sample report URL
      "2": "https://www.example.com/manager-update", // Manager update URL  
      "3": "https://www.example.com/portfolio-review" // Portfolio review URL
    };
    
    // For demo purposes, create a simple HTML report
    const reportContent = generateSampleReport(documentId);
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    setIframeUrl(url);
    setShowIframe(true);
  };

  const generateSampleReport = (documentId: string) => {
    const doc = recentDocuments.find(d => d.id === documentId);
    if (!doc) return '';

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${doc.title}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6; 
            background: #f8f9fa;
          }
          .header { 
            background: #1e40af; 
            color: white; 
            padding: 20px; 
            text-align: center; 
            border-radius: 8px; 
            margin-bottom: 20px;
          }
          .metrics { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 15px; 
            margin: 20px 0; 
          }
          .metric-card { 
            background: white; 
            padding: 15px; 
            border-radius: 8px; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
          }
          .metric-value { 
            font-size: 24px; 
            font-weight: bold; 
            color: #059669; 
          }
          .section { 
            background: white; 
            padding: 20px; 
            margin: 15px 0; 
            border-radius: 8px; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
          }
          .insights li { 
            margin: 8px 0; 
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${doc.title}</h1>
          <p>Harvard Wealth Management Portfolio Analysis</p>
          <p>Date: ${doc.date}</p>
        </div>
        
        <div class="metrics">
          <div class="metric-card">
            <div class="metric-value">${doc.irr}</div>
            <div>Internal Rate of Return</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">${doc.aum}</div>
            <div>Assets Under Management</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">${doc.status}</div>
            <div>Processing Status</div>
          </div>
        </div>
        
        <div class="section">
          <h2>Executive Summary</h2>
          <p>This quarterly report provides a comprehensive analysis of ${doc.title.split(' ')[0]} ${doc.title.split(' ')[1]}'s portfolio performance, strategic initiatives, and market outlook for the current period.</p>
        </div>
        
        <div class="section">
          <h2>Key Performance Insights</h2>
          <ul class="insights">
            ${doc.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
          </ul>
        </div>
        
        <div class="section">
          <h2>Portfolio Composition</h2>
          <p>The fund maintains a diversified portfolio across multiple sectors with strategic focus on high-growth opportunities in technology, healthcare, and sustainable investments.</p>
        </div>
        
        <div class="section">
          <h2>Risk Assessment</h2>
          <p>Current risk metrics indicate a well-balanced portfolio with appropriate diversification and strong ESG compliance ratings across all major holdings.</p>
        </div>
        
        <div class="section">
          <h2>Forward-Looking Outlook</h2>
          <p>Based on current market conditions and portfolio performance, we maintain a positive outlook for the next quarter with continued focus on sustainable growth and strategic value creation.</p>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Harvard Wealth Management</h2>
          <p className="text-muted-foreground">Intelligent portfolio management and document processing</p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Documents
        </Button>
      </div>

      {/* Portfolio Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {portfolioMetrics.map((metric, index) => (
          <Card key={index} className="bg-white border-border">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-sm text-green-600">{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Query Interface */}
      <Card className="bg-white border-border">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Search className="h-5 w-5" />
            Natural Language Query Interface
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Ask questions about your portfolio using natural language
          </p>
        </div>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Ask about your portfolio performance, managers, or investments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleQuerySubmit()}
              disabled={isProcessing}
            />
            <Button 
              onClick={() => setShowPromptLibrary(!showPromptLibrary)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Library
            </Button>
            <Button onClick={handleQuerySubmit} disabled={isProcessing || !searchQuery.trim()}>
              {isProcessing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Prompt Library Panel */}
          {showPromptLibrary && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Wealth Management Prompt Library
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPromptLibrary(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Query History */}
              {queryHistory.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
                    <History className="h-3 w-3" />
                    Recent Queries
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {queryHistory.slice(0, 5).map((query, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSearchQuery(query);
                          setShowPromptLibrary(false);
                        }}
                        className="text-xs h-6 px-2 text-gray-600 hover:bg-blue-50"
                      >
                        {query.length > 40 ? query.substring(0, 40) + '...' : query}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categorized Prompts */}
              <div className="space-y-3">
                {Object.entries(promptLibrary).map(([category, data]) => {
                  const Icon = data.icon;
                  const isExpanded = expandedCategory === category;
                  
                  return (
                    <div key={category} className="border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${data.color}`} />
                          <span className="font-medium text-sm">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {data.prompts.length}
                          </Badge>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-3 pb-3 space-y-1">
                          {data.prompts.map((prompt, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(prompt);
                                setShowPromptLibrary(false);
                                setTimeout(() => handleQuerySubmit(), 100);
                              }}
                              className="w-full text-left p-2 text-xs text-gray-700 hover:bg-blue-50 rounded border-l-2 border-gray-200 hover:border-blue-400 transition-colors"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* AI Model Processing Status */}
          {isProcessing && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">AI Model Processing</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Loader2 className="h-3 w-3 animate-spin text-blue-600" />
                    <span className="text-sm text-blue-700">Analyzing portfolio data and generating insights...</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-xs text-blue-600">
                <div>• Accessing Harvard portfolio database</div>
                <div>• Processing manager performance data</div>
                <div>• Cross-referencing market analytics</div>
                <div>• Generating natural language response</div>
              </div>
            </div>
          )}
          
          {/* Query Results */}
          {queryResult && !isProcessing && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Bot className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-green-900">{queryResult.result}</h4>
                  <div className="mt-2 space-y-1">
                    {queryResult.data.map((item, index) => (
                      <div key={index} className="text-sm text-green-800">{item}</div>
                    ))}
                  </div>
                  
                  {/* Source Information */}
                  <div className="mt-4 pt-3 border-t border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-green-700" />
                      <span className="text-sm font-medium text-green-700">Data Sources & Lineage</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {queryResult.sources.map((source, index) => {
                        const IconComponent = source.icon;
                        const getSourceColor = (type: string) => {
                          switch (type) {
                            case 'email': return 'text-blue-600 bg-blue-50 border-blue-200';
                            case 'pdf': return 'text-red-600 bg-red-50 border-red-200';
                            case 'database': return 'text-purple-600 bg-purple-50 border-purple-200';
                            case 'report': return 'text-orange-600 bg-orange-50 border-orange-200';
                            case 'api': return 'text-green-600 bg-green-50 border-green-200';
                            default: return 'text-gray-600 bg-gray-50 border-gray-200';
                          }
                        };
                        
                        return (
                          <div 
                            key={index} 
                            className={`p-2 rounded border text-xs ${getSourceColor(source.type)}`}
                          >
                            <div className="flex items-start gap-2">
                              <IconComponent className="h-3 w-3 mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium truncate">{source.name}</div>
                                <div className="flex items-center gap-2 mt-1 text-xs opacity-75">
                                  <Clock className="h-2 w-2" />
                                  <span>{source.timestamp}</span>
                                  <span className="ml-auto">{source.confidence}% confidence</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {queryExamples.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery(example);
                    setTimeout(() => {
                      setSearchQuery(example);
                      handleQuerySubmit();
                    }, 100);
                  }}
                  disabled={isProcessing}
                  className="text-xs h-auto py-2 px-3 whitespace-normal text-left hover:bg-blue-50"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Processing Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <Card className="bg-white border-border">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Manager Documents
            </h3>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="border border-border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                     onClick={() => setSelectedDocument(doc.id)}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">{doc.type} • {doc.date}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm">IRR: <span className="font-semibold text-green-600">{doc.irr}</span></span>
                        <span className="text-sm">AUM: <span className="font-semibold">{doc.aum}</span></span>
                      </div>
                    </div>
                    <Badge variant={doc.status === 'processed' ? 'default' : 'secondary'}>
                      {doc.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Insights */}
        <Card className="bg-white border-border">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Extracted Insights
            </h3>
          </div>
          <CardContent className="p-6">
            {selectedDocument ? (
              <div className="space-y-4">
                {(() => {
                  const doc = recentDocuments.find(d => d.id === selectedDocument);
                  return doc ? (
                    <>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900">{doc.title}</h4>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <span className="text-sm text-blue-700">IRR Performance</span>
                            <div className="text-lg font-bold text-blue-900">{doc.irr}</div>
                          </div>
                          <div>
                            <span className="text-sm text-blue-700">Assets Under Management</span>
                            <div className="text-lg font-bold text-blue-900">{doc.aum}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Key Insights Extracted:</h5>
                        <ul className="space-y-1">
                          {doc.keyInsights.map((insight, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button size="sm" variant="outline" onClick={() => handleViewFullReport(selectedDocument!)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Full Report
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Export Data
                        </Button>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Select a document to view extracted insights</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Data Pipeline Performance */}
      <Card className="bg-white border-border">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Data Processing Performance</h3>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98.7%</div>
              <div className="text-sm text-muted-foreground">Extraction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3.2min</div>
              <div className="text-sm text-muted-foreground">Avg Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1,248</div>
              <div className="text-sm text-muted-foreground">Documents Processed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Iframe Modal for Full Reports */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Full Investment Report
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowIframe(false);
                  // Clean up blob URL to prevent memory leaks
                  if (iframeUrl.startsWith('blob:')) {
                    URL.revokeObjectURL(iframeUrl);
                  }
                  setIframeUrl("");
                }}
                className="flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Close
              </Button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={iframeUrl}
                className="w-full h-full border border-gray-200 rounded"
                title="Investment Report"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
                <span>Viewing secure Harvard portfolio data</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(iframeUrl, '_blank')}
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}