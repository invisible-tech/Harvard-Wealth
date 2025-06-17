import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  RotateCcw,
  BarChart3,
  Settings
} from "lucide-react";

export default function OverviewView() {
  // Data sources for wealth management
  const dataSources = [
    {
      name: 'Portfolio Management System',
      description: 'Central system for managing private equity portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 45231,
    },
    {
      name: 'Investment Analytics Platform',
      description: 'Advanced analytics and performance tracking for portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 12890,
    },
    {
      name: 'Risk Management Database',
      description: 'Risk assessment and monitoring for portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 23456,
    },
    {
      name: 'Portco Performance Metrics',
      description: 'Key performance indicators and metrics for portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 15432,
    },
    {
      name: 'Portco Financial Data',
      description: 'Financial statements and metrics for portfolio companies',
      connectionStatus: 'Needs Attention',
      healthStatus: 'amber',
      recordCount: 9823,
    },
    {
      name: 'Portco Operational Data',
      description: 'Operational metrics and KPIs for portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 34567,
    },
    {
      name: 'Deal Flow Management System',
      description: 'Pipeline and deal tracking for potential investments',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 234567,
    },
    {
      name: 'Due Diligence Repository',
      description: 'Due diligence documents and analysis for potential investments',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 11234,
    },
    {
      name: 'LP Reporting Portal',
      description: 'Limited Partner reporting and communications platform',
      connectionStatus: 'Needs Attention',
      healthStatus: 'amber',
      recordCount: 982345,
    },
    {
      name: 'Compliance Monitoring System',
      description: 'Regulatory compliance and monitoring for portfolio companies',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 15432,
    },
    {
      name: 'Market Intelligence Platform',
      description: 'Market research and competitive analysis tools',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 22345,
    },
    {
      name: 'ESG Metrics Platform',
      description: 'Environmental, Social, and Governance metrics tracking',
      connectionStatus: 'Healthy',
      healthStatus: 'green',
      recordCount: 345678,
    }
  ];

  // Data quality rules
  const bronzeRules = [
    { name: 'Financial Data Timeliness', status: 'Active', type: 'System', progress: 100 },
    { name: 'Portco Data Completeness', status: 'Active', type: 'System', progress: 100 },
    { name: 'Financial Statement Format', status: 'Active', type: 'System', progress: 100 },
    { name: 'Valuation Model Validation', status: 'In Progress', type: 'System', progress: 72 }
  ];

  const silverRules = [
    { name: 'Company Name Standardization', status: 'Active', type: 'Business', progress: 100 },
    { name: 'Financial Metric Validation', status: 'Active', type: 'Business', progress: 100 },
    { name: 'Investment Date Format Check', status: 'Active', type: 'Business', progress: 100 },
    { name: 'Portco ID Validation', status: 'In Progress', type: 'Business', progress: 85 }
  ];

  const goldRules = [
    { name: 'Portfolio Company Golden Record', status: 'Active', type: 'Business', progress: 100 },
    { name: 'Investment Master Record', status: 'Active', type: 'Business', progress: 100 },
    { name: 'Deal Consolidated View', status: 'In Progress', type: 'Business', progress: 63 },
    { name: 'Cross-system Record Linking', status: 'In Progress', type: 'System', progress: 79 }
  ];

  // Metrics
  const metrics = {
    bronze: {
      records: '8.2M',
      batchProcessingTime: '42 min',
      issues: 26458,
      resolvedIssues: 24531,
      progressPercentage: 92
    },
    silver: {
      records: '7.9M',
      batchProcessingTime: '1h 15min',
      issues: 14329,
      resolvedIssues: 12984,
      progressPercentage: 78
    },
    gold: {
      records: '7.8M',
      batchProcessingTime: '55 min',
      issues: 4892,
      resolvedIssues: 4518,
      progressPercentage: 84
    }
  };

  const getStatusBadge = (status: string, healthStatus: string) => {
    const variant = healthStatus === 'green' ? 'default' : 'secondary';
    const color = healthStatus === 'green' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
    
    return (
      <Badge className={color}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Data Capture & Ingestion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Capture & Ingestion
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Connected enterprise systems and data sources
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataSources.map((source, index) => (
              <Card key={index} className="border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 rounded-md">
                        <Database className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{source.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {source.description}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(source.connectionStatus, source.healthStatus)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Records: {source.recordCount.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle>Data Quality Pipeline</CardTitle>
          <p className="text-sm text-muted-foreground">
            Automated data processing and quality management across bronze, silver, and gold data layers
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bronze Layer */}
            <Card className="border-l-4 border-l-orange-500 bg-orange-50/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-orange-600">Bronze</CardTitle>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Records</p>
                    <p className="font-semibold">{metrics.bronze.records}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Batch Time</p>
                    <p className="font-semibold">{metrics.bronze.batchProcessingTime}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quality Score</span>
                    <span>{metrics.bronze.progressPercentage}%</span>
                  </div>
                  <Progress value={metrics.bronze.progressPercentage} className="h-2" />
                </div>

                <div className="space-y-2">
                  {bronzeRules.map((rule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="truncate">{rule.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={rule.progress} className="w-16 h-2" />
                        <Badge variant={rule.status === 'Active' ? 'default' : 'secondary'}>
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Silver Layer */}
            <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-blue-600">Silver</CardTitle>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Records</p>
                    <p className="font-semibold">{metrics.silver.records}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Batch Time</p>
                    <p className="font-semibold">{metrics.silver.batchProcessingTime}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quality Score</span>
                    <span>{metrics.silver.progressPercentage}%</span>
                  </div>
                  <Progress value={metrics.silver.progressPercentage} className="h-2" />
                </div>

                <div className="space-y-2">
                  {silverRules.map((rule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="truncate">{rule.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={rule.progress} className="w-16 h-2" />
                        <Badge variant={rule.status === 'Active' ? 'default' : 'secondary'}>
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gold Layer */}
            <Card className="border-l-4 border-l-yellow-500 bg-yellow-50/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-yellow-600">Gold</CardTitle>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Records</p>
                    <p className="font-semibold">{metrics.gold.records}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Batch Time</p>
                    <p className="font-semibold">{metrics.gold.batchProcessingTime}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quality Score</span>
                    <span>{metrics.gold.progressPercentage}%</span>
                  </div>
                  <Progress value={metrics.gold.progressPercentage} className="h-2" />
                </div>

                <div className="space-y-2">
                  {goldRules.map((rule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="truncate">{rule.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={rule.progress} className="w-16 h-2" />
                        <Badge variant={rule.status === 'Active' ? 'default' : 'secondary'}>
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}