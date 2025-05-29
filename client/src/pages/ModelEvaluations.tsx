import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  FileText, 
  TestTube, 
  GitBranch, 
  Settings,
  RefreshCw,
  Share,
  Plus,
  Search,
  Filter,
  Eye,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function ModelEvaluations() {
  const [activeTab, setActiveTab] = useState("Training");

  const tabs = [
    { name: "Training", icon: FileText },
    { name: "Models", icon: BarChart3 },
    { name: "Testing", icon: TestTube },
    { name: "Versioning", icon: GitBranch },
    { name: "Metrics", icon: BarChart3 },
    { name: "Advanced Features", icon: Settings }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Model Evaluations</h1>
          <p className="text-muted-foreground">Evaluate and analyze model performance</p>
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

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 mb-8">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            {activeTab === "Training" ? "Refresh" : 
             activeTab === "Models" ? "Refresh" :
             activeTab === "Testing" ? "Refresh" :
             activeTab === "Versioning" ? "Refresh" :
             activeTab === "Metrics" ? "Refresh" : "Refresh"}
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            {activeTab === "Metrics" ? "Export" : "Share"}
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            {activeTab === "Training" ? "New Model" :
             activeTab === "Models" ? "New Model" :
             activeTab === "Testing" ? "New Model" :
             activeTab === "Versioning" ? "New Version" :
             activeTab === "Advanced Features" ? "Add Custom Tool" : "New Model"}
          </Button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "Training" && (
          <div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Success Rate</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">87.5%</div>
                  <div className="text-sm text-green-600">+2.3%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Training Hours</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">183.4h</div>
                  <div className="text-sm text-red-600">-4.2%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Resource Utilization</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">67.8%</div>
                  <div className="text-sm text-green-600">+1.5%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Model Convergence</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">93.2%</div>
                  <div className="text-sm text-green-600">+0.8%</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Training Progress</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Training progress chart placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Resource Allocation</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Resource allocation chart placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Hyperparameter Tuning</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Hyperparameter tuning results placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Learning Rate Analysis</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Learning rate analysis placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Models" && (
          <div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Active Models</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">27</div>
                  <div className="text-sm text-green-600">+3</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Avg. Accuracy</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">91.2%</div>
                  <div className="text-sm text-green-600">+1.2%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Inference Time</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">127ms</div>
                  <div className="text-sm text-red-600">-15.3%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Memory Usage</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">2.4GB</div>
                  <div className="text-sm text-red-600">-0.5GB</div>
                </CardContent>
              </Card>
            </div>

            {/* Model Registry */}
            <Card className="bg-white border-border mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Model Registry</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search models..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Sort
                    </Button>
                  </div>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
                    <div>MODEL ID</div>
                    <div>NAME</div>
                    <div>TYPE</div>
                    <div>ACCURACY</div>
                    <div>STATUS</div>
                    <div>ACTIONS</div>
                  </div>

                  {[
                    { id: "mod-001", name: "Sentiment Analysis", type: "Classification", accuracy: "92.7%", status: "Production", statusColor: "bg-green-100 text-green-800" },
                    { id: "mod-002", name: "Customer Churn Predictor", type: "Regression", accuracy: "88.3%", status: "Production", statusColor: "bg-green-100 text-green-800" },
                    { id: "mod-003", name: "Document Classification", type: "Multi-label", accuracy: "90.1%", status: "Staging", statusColor: "bg-yellow-100 text-yellow-800" },
                    { id: "mod-004", name: "Time Series Forecaster", type: "Regression", accuracy: "86.5%", status: "Development", statusColor: "bg-blue-100 text-blue-800" },
                    { id: "mod-005", name: "Anomaly Detection", type: "Classification", accuracy: "94.2%", status: "Production", statusColor: "bg-green-100 text-green-800" }
                  ].map((model, index) => (
                    <div key={index} className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 text-sm">
                      <div className="font-mono text-gray-900">{model.id}</div>
                      <div className="text-gray-900">{model.name}</div>
                      <div className="text-gray-600">{model.type}</div>
                      <div className="text-gray-900">{model.accuracy}</div>
                      <div>
                        <Badge className={model.statusColor}>
                          {model.status}
                        </Badge>
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

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Model Architecture</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Model architecture diagram placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Feature Importance</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Feature importance chart placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Testing" && (
          <div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Test Coverage</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">94.3%</div>
                  <div className="text-sm text-green-600">+2.1%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Error Rate</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">2.8%</div>
                  <div className="text-sm text-green-600">-0.7%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">False Positives</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">1.5%</div>
                  <div className="text-sm text-green-600">-0.3%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Test Runtime</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">47m</div>
                  <div className="text-sm text-red-600">-12m</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Confusion Matrix</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Confusion matrix visualization placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Test Performance by Category</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Performance by category chart placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Error Analysis</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Error analysis dashboard placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Versioning" && (
          <div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Active Versions</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">8</div>
                  <div className="text-sm text-green-600">+1</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Avg. Lifecycle</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">46 days</div>
                  <div className="text-sm text-green-600">+4d</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Migration Rate</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">93.7%</div>
                  <div className="text-sm text-green-600">+1.4%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Rollbacks</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">2</div>
                  <div className="text-sm text-red-600">-1</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Version History</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Version history timeline placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Version Comparison</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Version comparison tool placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Deployment Timeline</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Deployment timeline chart placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Change Log</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Change log viewer placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Environment Distribution</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Environment distribution chart placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Metrics" && (
          <div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Latency (p95)</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">152ms</div>
                  <div className="text-sm text-red-600">-24ms</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Throughput</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">783 req/s</div>
                  <div className="text-sm text-green-600">+58 req/s</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">GPU Utilization</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">67.2%</div>
                  <div className="text-sm text-red-600">-3.4%</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Model Size</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">1.42GB</div>
                  <div className="text-sm text-red-600">-0.28GB</div>
                </CardContent>
              </Card>
            </div>

            {/* Time Period Selector */}
            <div className="mb-6">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-1 max-w-md">
                <nav className="flex w-full">
                  {["Day", "Week", "Month", "Quarter"].map((period, index) => (
                    <button
                      key={period}
                      className={`flex items-center justify-center flex-1 py-2.5 font-medium text-sm ${
                        index === 0 ? 'rounded-l-md' : index === 3 ? 'rounded-r-md' : ''
                      } ${
                        index === 0
                          ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Accuracy Over Time Chart */}
            <Card className="bg-white border-border mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Accuracy Over Time</h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                  <div className="text-center text-gray-500">Accuracy over time line chart placeholder</div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Precision & Recall</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">Precision and recall chart placeholder</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">ROC Curve</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-200">
                    <div className="text-center text-gray-500">ROC curve placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Advanced Features" && (
          <div>
            {/* Explainability Tools */}
            <Card className="bg-white border-border mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Explainability Tools</h3>
                <p className="text-sm text-muted-foreground mb-6">Access tools for model interpretation and explanation to understand model decisions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "SHAP Analysis", description: "Shapley value explanations" },
                    { name: "LIME Explainer", description: "Local interpretable model explanations" },
                    { name: "Feature Attribution", description: "Input feature importance analysis" }
                  ].map((tool, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fairness and Bias */}
            <Card className="bg-white border-border mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Fairness and Bias</h3>
                <p className="text-sm text-muted-foreground mb-6">Evaluate and mitigate bias in your models using specialized assessment tools.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Fairness Metrics", description: "Comprehensive bias assessment" },
                    { name: "Bias Detection", description: "Automated bias identification" },
                    { name: "Mitigation Strategies", description: "Bias reduction techniques" }
                  ].map((tool, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advanced Optimization */}
            <Card className="bg-white border-border mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Optimization</h3>
                <p className="text-sm text-muted-foreground mb-6">Apply cutting-edge techniques to optimize model performance and resource utilization.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Model Compression", description: "Reduce model size and complexity" },
                    { name: "Quantization", description: "Optimize numerical precision" },
                    { name: "Pruning Tools", description: "Remove unnecessary parameters" }
                  ].map((tool, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialized Toolkits */}
            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Specialized Toolkits</h3>
                <p className="text-sm text-muted-foreground mb-6">Access domain-specific tools and utilities for specialized model evaluation needs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "NLP Evaluation", description: "Natural language processing tools" },
                    { name: "Computer Vision Tools", description: "Image and video analysis" },
                    { name: "Time Series Analysis", description: "Temporal data evaluation" }
                  ].map((tool, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
