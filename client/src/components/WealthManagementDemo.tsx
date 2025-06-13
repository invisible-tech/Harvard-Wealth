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
  Calendar
} from "lucide-react";
import { useState } from "react";

export default function WealthManagementDemo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

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
            />
            <Button>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {queryExamples.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(example)}
                  className="text-xs h-auto py-2 px-3 whitespace-normal text-left"
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
                        <Button size="sm" variant="outline">
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
    </div>
  );
}