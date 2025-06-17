import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  FileText, 
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Target,
  Shield,
  Leaf,
  Building,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function HarvardVisualization() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("YTD");
  const [selectedView, setSelectedView] = useState("portfolio");

  const portfolioMetrics = {
    totalValue: "$52.8B",
    ytdReturn: "+8.2%",
    oneYearReturn: "+12.4%",
    fiveYearReturn: "+9.8%",
    volatility: "11.3%",
    sharpeRatio: "1.42"
  };

  const assetAllocation = [
    { name: "Public Equity", value: 32, amount: "$16.9B", color: "#3B82F6" },
    { name: "Private Equity", value: 23, amount: "$12.1B", color: "#10B981" },
    { name: "Hedge Funds", value: 15, amount: "$7.9B", color: "#F59E0B" },
    { name: "Real Estate", value: 12, amount: "$6.3B", color: "#EF4444" },
    { name: "Fixed Income", value: 8, amount: "$4.2B", color: "#8B5CF6" },
    { name: "Commodities", value: 6, amount: "$3.2B", color: "#06B6D4" },
    { name: "Cash & Other", value: 4, amount: "$2.1B", color: "#6B7280" }
  ];

  const topManagers = [
    { name: "Bridgewater Associates", allocation: "$3.2B", performance: "+11.2%", risk: "Medium" },
    { name: "Renaissance Technologies", allocation: "$2.8B", performance: "+15.7%", risk: "High" },
    { name: "Two Sigma", allocation: "$2.4B", performance: "+9.8%", risk: "Medium" },
    { name: "Citadel", allocation: "$2.1B", performance: "+13.4%", risk: "High" },
    { name: "AQR Capital", allocation: "$1.9B", performance: "+7.2%", risk: "Low" }
  ];

  const esgMetrics = [
    { category: "Environmental", score: 87, trend: "up" },
    { category: "Social", score: 82, trend: "up" },
    { category: "Governance", score: 91, trend: "neutral" },
    { category: "Overall ESG", score: 86, trend: "up" }
  ];

  const recentTransactions = [
    { date: "2024-06-15", type: "Investment", manager: "Sequoia Capital", amount: "+$250M", asset: "Private Equity" },
    { date: "2024-06-14", type: "Redemption", manager: "Millennium", amount: "-$180M", asset: "Hedge Fund" },
    { date: "2024-06-13", type: "Investment", manager: "Blackstone", amount: "+$320M", asset: "Real Estate" },
    { date: "2024-06-12", type: "Rebalancing", manager: "Internal", amount: "$0", asset: "Multi-Asset" }
  ];

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 p-6 overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Harvard Management Company
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Endowment Portfolio Analytics & Visualization
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {["1M", "3M", "6M", "YTD", "1Y", "3Y", "5Y"].map((period) => (
              <Button
                key={period}
                variant={selectedTimeframe === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeframe(period)}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Assets</p>
                  <p className="text-xl font-bold">{portfolioMetrics.totalValue}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">YTD Return</p>
                  <p className="text-xl font-bold text-green-600">{portfolioMetrics.ytdReturn}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">1Y Return</p>
                  <p className="text-xl font-bold text-green-600">{portfolioMetrics.oneYearReturn}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Volatility</p>
                  <p className="text-xl font-bold">{portfolioMetrics.volatility}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-red-600" />
                <div>
                  <p className="text-sm text-gray-600">Sharpe Ratio</p>
                  <p className="text-xl font-bold">{portfolioMetrics.sharpeRatio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Last Updated</p>
                  <p className="text-sm font-medium">Jun 16, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="managers">Managers</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="esg">ESG</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Asset Allocation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Asset Allocation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assetAllocation.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: asset.color }}
                        />
                        <span className="text-sm font-medium">{asset.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">{asset.amount}</div>
                        <div className="text-xs text-gray-500">{asset.value}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Geographic Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">North America</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-24" />
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Europe</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={28} className="w-24" />
                      <span className="text-sm font-medium">28%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Asia Pacific</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={18} className="w-24" />
                      <span className="text-sm font-medium">18%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Emerging Markets</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={9} className="w-24" />
                      <span className="text-sm font-medium">9%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="managers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Top Investment Managers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topManagers.map((manager, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{manager.name}</h4>
                        <p className="text-sm text-gray-600">Allocation: {manager.allocation}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-green-600">{manager.performance}</span>
                        <Badge variant={manager.risk === "High" ? "destructive" : manager.risk === "Medium" ? "default" : "secondary"}>
                          {manager.risk} Risk
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance vs Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Performance Chart</p>
                    <p className="text-xs">vs S&P 500, Policy Portfolio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk-Return Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                  <div className="text-center text-gray-500">
                    <Activity className="h-12 w-12 mx-auto mb-2" />
                    <p>Risk-Return Scatter</p>
                    <p className="text-xs">Efficient Frontier Analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="esg" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>ESG Scorecard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {esgMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.category}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={metric.score} className="w-24" />
                        <span className="text-sm font-bold">{metric.score}</span>
                        {metric.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : metric.trend === "down" ? (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        ) : (
                          <div className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Sustainable Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$18.2B</div>
                    <div className="text-sm text-gray-600">ESG-Aligned Investments</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">34%</div>
                    <div className="text-sm text-gray-600">Portfolio ESG Coverage</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">A-</div>
                    <div className="text-sm text-gray-600">Overall ESG Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Recent Transactions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        transaction.type === "Investment" ? "bg-green-500" : 
                        transaction.type === "Redemption" ? "bg-red-500" : "bg-blue-500"
                      }`} />
                      <div>
                        <div className="font-medium text-sm">{transaction.manager}</div>
                        <div className="text-xs text-gray-500">{transaction.asset}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${
                        transaction.amount.startsWith("+") ? "text-green-600" : 
                        transaction.amount.startsWith("-") ? "text-red-600" : "text-gray-600"
                      }`}>
                        {transaction.amount}
                      </div>
                      <div className="text-xs text-gray-500">{transaction.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}