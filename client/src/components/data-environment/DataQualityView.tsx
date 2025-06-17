import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  RotateCcw,
  Download,
  TrendingUp,
  Filter
} from "lucide-react";

// Mock data for data quality metrics
const mockDataQualityMetrics = {
  overall: {
    score: 87,
    trend: '+2.3%',
    lastUpdated: '2023-10-15T14:30:00Z'
  },
  dimensions: [
    { name: 'Completeness', score: 92, trend: '+1.5%', issues: 12 },
    { name: 'Accuracy', score: 85, trend: '-0.8%', issues: 28 },
    { name: 'Consistency', score: 90, trend: '+3.2%', issues: 15 },
    { name: 'Timeliness', score: 78, trend: '+4.1%', issues: 32 },
    { name: 'Uniqueness', score: 95, trend: '+0.5%', issues: 8 },
    { name: 'Validity', score: 82, trend: '+2.7%', issues: 24 }
  ]
};

// Mock data for data quality issues (PORTFOLIO COMPANY/INVESTMENT CONTEXT)
const mockDataQualityIssues = [
  {
    id: 'DQ-101',
    entity: 'Portfolio Company',
    field: 'investmentValue',
    rule: 'Investment value must be positive',
    severity: 'Critical',
    count: 5,
    status: 'Open',
    trend: '-10%',
    lastDetected: '2023-10-14T09:15:00Z'
  },
  {
    id: 'DQ-102',
    entity: 'Portfolio Company',
    field: 'complianceStatus',
    rule: 'ESG compliance status must be valid',
    severity: 'High',
    count: 12,
    status: 'In Progress',
    trend: '-3%',
    lastDetected: '2023-10-15T11:30:00Z'
  },
  {
    id: 'DQ-103',
    entity: 'Investment',
    field: 'fundCode',
    rule: 'Fund code must be valid format',
    severity: 'Medium',
    count: 7,
    status: 'Open',
    trend: '+2%',
    lastDetected: '2023-10-15T08:45:00Z'
  },
  {
    id: 'DQ-104',
    entity: 'Portfolio Company',
    field: 'companyEmail',
    rule: 'Email must be valid format',
    severity: 'Low',
    count: 18,
    status: 'Open',
    trend: '-1%',
    lastDetected: '2023-10-14T16:20:00Z'
  },
  {
    id: 'DQ-105',
    entity: 'Investment',
    field: 'valuation',
    rule: 'Valuation must be greater than zero',
    severity: 'High',
    count: 3,
    status: 'Resolved',
    trend: '-100%',
    lastDetected: '2023-10-13T14:10:00Z'
  },
  {
    id: 'DQ-106',
    entity: 'Portfolio Company',
    field: 'companyName',
    rule: 'Company name must not be empty',
    severity: 'Medium',
    count: 9,
    status: 'In Progress',
    trend: '-8%',
    lastDetected: '2023-10-15T10:05:00Z'
  }
];

// Mock data for entity quality scores
const mockEntityQualityScores = [
  { entity: 'Portfolio Company', score: 91, issues: 28, criticalIssues: 1 },
  { entity: 'Investment', score: 88, issues: 17, criticalIssues: 0 },
  { entity: 'Deal', score: 84, issues: 22, criticalIssues: 2 },
  { entity: 'ESG Metrics', score: 93, issues: 8, criticalIssues: 0 },
  { entity: 'Performance', score: 89, issues: 12, criticalIssues: 0 }
];

export default function DataQualityView() {
  const [selectedEntity, setSelectedEntity] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Filter issues based on selected filters
  const filteredIssues = mockDataQualityIssues.filter(issue => {
    if (selectedEntity !== 'All' && issue.entity !== selectedEntity) return false;
    if (selectedSeverity !== 'All' && issue.severity !== selectedSeverity) return false;
    if (selectedStatus !== 'All' && issue.status !== selectedStatus) return false;
    return true;
  });

  // Handle refresh data
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  // Get severity icon and color
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'High':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'Medium':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'Low':
        return <AlertTriangle className="h-4 w-4 text-green-500" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <Badge variant="destructive">Open</Badge>;
      case 'In Progress':
        return <Badge variant="secondary">In Progress</Badge>;
      case 'Resolved':
        return <Badge variant="default">Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTrendIndicator = (trend: string) => {
    const value = parseFloat(trend);
    const color = value > 0 ? 'text-red-500' : 'text-green-500';
    const arrow = value > 0 ? '↑' : '↓';
    return <span className={`text-sm ${color}`}>{trend} {arrow}</span>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Data Quality Dashboard</h2>
          <p className="text-muted-foreground">Monitor and manage data quality across portfolio operations</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh} 
            disabled={isLoading}
          >
            {isLoading ? <RotateCcw className="h-4 w-4 animate-spin" /> : <RotateCcw className="h-4 w-4" />}
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            Trends
          </Button>
        </div>
      </div>

      {/* Overall Quality Score */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Overall Data Quality Score</h3>
              <div className="relative inline-flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {mockDataQualityMetrics.overall.score}%
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Trend: {mockDataQualityMetrics.overall.trend} | Last updated: {new Date(mockDataQualityMetrics.overall.lastUpdated).toLocaleString()}
              </p>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Quality Dimensions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mockDataQualityMetrics.dimensions.map((dimension) => (
                  <Card key={dimension.name} className="border">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">{dimension.name}</h4>
                      <div className="flex items-center mb-2">
                        <Progress 
                          value={dimension.score} 
                          className="flex-1 mr-2"
                        />
                        <span className="text-sm font-medium">
                          {dimension.score}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Issues: {dimension.issues}
                        </span>
                        <span className={dimension.trend.startsWith('+') ? 'text-red-500' : 'text-green-500'}>
                          {dimension.trend}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Entity Quality Scores */}
      <Card>
        <CardHeader>
          <CardTitle>Entity Quality Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Entity</th>
                  <th className="text-left p-2">Quality Score</th>
                  <th className="text-left p-2">Total Issues</th>
                  <th className="text-left p-2">Critical Issues</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockEntityQualityScores.map((entity) => (
                  <tr key={entity.entity} className="border-b">
                    <td className="p-2">{entity.entity}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Progress value={entity.score} className="w-20" />
                        <span className="text-sm">{entity.score}%</span>
                      </div>
                    </td>
                    <td className="p-2">{entity.issues}</td>
                    <td className="p-2">
                      <Badge variant={entity.criticalIssues > 0 ? 'destructive' : 'default'}>
                        {entity.criticalIssues}
                      </Badge>
                    </td>
                    <td className="p-2">
                      {entity.criticalIssues > 0 ? (
                        <Badge variant="destructive">Needs Attention</Badge>
                      ) : (
                        <Badge variant="default">Good</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Data Quality Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <Select value={selectedEntity} onValueChange={setSelectedEntity}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by entity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Entities</SelectItem>
                <SelectItem value="Portfolio Company">Portfolio Company</SelectItem>
                <SelectItem value="Investment">Investment</SelectItem>
                <SelectItem value="Deal">Deal</SelectItem>
                <SelectItem value="ESG Metrics">ESG Metrics</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Severities</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <Card key={issue.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getSeverityIcon(issue.severity)}
                      <div>
                        <h4 className="font-medium">{issue.rule}</h4>
                        <p className="text-sm text-muted-foreground">
                          {issue.entity} • {issue.field}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last detected: {new Date(issue.lastDetected).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-medium">Count: {issue.count}</p>
                        {getTrendIndicator(issue.trend)}
                      </div>
                      {getStatusBadge(issue.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}