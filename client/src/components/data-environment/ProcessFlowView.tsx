import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  FileText, 
  Building2, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  ArrowRight,
  ZoomIn,
  ZoomOut,
  Info
} from "lucide-react";

// Mock process flow data for investment management
const processFlowData = {
  flowTypes: ['Deal Flow Process', 'Portco Integration', 'Exit Strategy'],
  dealFlow: {
    name: 'Deal Flow Process',
    description: 'End-to-end flow of an investment opportunity from sourcing to closing',
    steps: [
      {
        id: 'deal_sourcing',
        name: 'Deal Sourcing',
        description: 'Initial identification and screening of investment opportunities',
        status: 'completed',
        timestamp: '2023-10-15 09:15:32',
        duration: '10 minutes',
        metrics: {
          volume: 1250,
          avgCompletionTime: '8 minutes',
          errorRate: '3%'
        },
        dataCompleteness: {
          percentage: 92,
          missingElements: [
            { field: 'Market Analysis', count: 145, impact: 'Medium' },
            { field: 'Competitive Landscape', count: 78, impact: 'Low' }
          ],
          requiredFields: ['Company ID', 'Deal Date', 'Industry Code', 'Financials', 'Management Team'],
          completedFields: ['Company ID', 'Deal Date', 'Industry Code', 'Financials', 'Management Team'],
          optionalFields: ['Market Analysis', 'Competitive Landscape', 'Additional Notes']
        },
        entities: [
          { type: 'Company', id: 'CO12345', name: 'Tech Innovators Inc' },
          { type: 'Deal', id: 'DL54321', value: '$50M' }
        ],
        documents: [
          { name: 'Deal Memo', id: 'DOC-001', size: '2.3 MB' }
        ]
      },
      {
        id: 'due_diligence',
        name: 'Due Diligence',
        description: 'Comprehensive analysis of investment opportunity',
        status: 'completed',
        timestamp: '2023-10-15 09:25:45',
        duration: '15 minutes',
        metrics: {
          volume: 1250,
          avgCompletionTime: '12 minutes',
          errorRate: '8%'
        },
        dataCompleteness: {
          percentage: 78,
          missingElements: [
            { field: 'Legal Review', count: 245, impact: 'High' },
            { field: 'Financial Projections', count: 189, impact: 'Medium' },
            { field: 'Market Size', count: 115, impact: 'Low' }
          ],
          requiredFields: ['Financial Statements', 'Legal Documents', 'Market Analysis', 'Management Background', 'Risk Assessment'],
          completedFields: ['Financial Statements', 'Legal Documents', 'Management Background'],
          optionalFields: ['Financial Projections', 'Market Size', 'Competitive Analysis']
        },
        entities: [
          { type: 'Company', id: 'CO12345', name: 'Tech Innovators Inc' },
          { type: 'Deal', id: 'DL54321', value: '$50M' }
        ],
        issues: [
          { type: 'warning', message: 'Missing financial projections', count: 2 }
        ]
      },
      {
        id: 'investment_committee',
        name: 'Investment Committee Review',
        description: 'Review and approval by investment committee',
        status: 'completed',
        timestamp: '2023-10-15 09:45:22',
        duration: '20 minutes',
        metrics: {
          volume: 1200,
          avgCompletionTime: '18 minutes',
          errorRate: '5%'
        },
        dataCompleteness: {
          percentage: 85,
          missingElements: [
            { field: 'Committee Notes', count: 126, impact: 'Medium' },
            { field: 'Approval Status', count: 42, impact: 'High' }
          ],
          requiredFields: ['Committee Members', 'Voting Record', 'Approval Status', 'Investment Terms', 'Risk Assessment'],
          completedFields: ['Committee Members', 'Voting Record', 'Investment Terms', 'Risk Assessment'],
          optionalFields: ['Committee Notes', 'Follow-up Actions', 'Timeline']
        },
        entities: [
          { type: 'Deal', id: 'DL54321', value: '$50M' },
          { type: 'Committee', id: 'IC98765', name: 'Investment Committee' }
        ]
      },
      {
        id: 'deal_negotiation',
        name: 'Deal Negotiation',
        description: 'Finalize terms and conditions of investment',
        status: 'in_progress',
        timestamp: '2023-10-15 10:15:30',
        duration: '30 minutes (in progress)',
        metrics: {
          volume: 1150,
          avgCompletionTime: '35 minutes',
          errorRate: '10%'
        },
        dataCompleteness: {
          percentage: 62,
          missingElements: [
            { field: 'Term Sheet', count: 324, impact: 'Critical' },
            { field: 'Valuation Model', count: 217, impact: 'High' },
            { field: 'Investment Structure', count: 185, impact: 'High' },
            { field: 'Exit Strategy', count: 156, impact: 'Medium' }
          ],
          requiredFields: ['Term Sheet', 'Valuation Model', 'Investment Structure', 'Exit Strategy', 'Governance Terms'],
          completedFields: ['Governance Terms'],
          optionalFields: ['Additional Clauses', 'Special Conditions', 'Milestone Payments']
        },
        entities: [
          { type: 'Deal', id: 'DL54321', value: '$50M' },
          { type: 'Term Sheet', id: 'TS98765', status: 'Draft' }
        ],
        issues: [
          { type: 'error', message: 'Valuation not agreed', count: 1 }
        ]
      },
      {
        id: 'closing',
        name: 'Deal Closing',
        description: 'Finalize and execute investment agreement',
        status: 'pending',
        timestamp: 'Pending',
        duration: 'Pending',
        metrics: {
          volume: 1050,
          avgCompletionTime: '20 minutes',
          errorRate: '2%'
        },
        dataCompleteness: {
          percentage: 40,
          missingElements: [
            { field: 'Closing Documents', count: 385, impact: 'Critical' },
            { field: 'Payment Schedule', count: 298, impact: 'High' },
            { field: 'Legal Approvals', count: 246, impact: 'Medium' },
            { field: 'Bank Details', count: 198, impact: 'High' }
          ],
          requiredFields: ['Closing Documents', 'Payment Schedule', 'Legal Approvals', 'Bank Details', 'Signatures'],
          completedFields: ['Signatures', 'Legal Approvals'],
          optionalFields: ['Additional Agreements', 'Post-Closing Actions', 'Integration Plan']
        },
        entities: [
          { type: 'Deal', id: 'DL54321', value: '$50M' },
          { type: 'Closing', id: 'CL00000', status: 'Pending' }
        ]
      }
    ]
  }
};

export default function ProcessFlowView() {
  const [flowType, setFlowType] = useState('Deal Flow Process');
  const [selectedStep, setSelectedStep] = useState(processFlowData.dealFlow.steps[0]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleStepClick = (step: typeof processFlowData.dealFlow.steps[0]) => {
    setSelectedStep(step);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'in_progress':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'pending':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    }
  };

  const getStepIcon = (stepId: string) => {
    switch (stepId) {
      case 'deal_sourcing':
        return <User className="h-6 w-6" />;
      case 'due_diligence':
        return <FileText className="h-6 w-6" />;
      case 'investment_committee':
        return <Building2 className="h-6 w-6" />;
      case 'deal_negotiation':
        return <FileText className="h-6 w-6" />;
      case 'closing':
        return <DollarSign className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Process Flow Visualization</h2>
          <p className="text-muted-foreground">Track data flow through investment processes and identify bottlenecks</p>
        </div>
        <div className="flex gap-2">
          <Select value={flowType} onValueChange={setFlowType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select flow type" />
            </SelectTrigger>
            <SelectContent>
              {processFlowData.flowTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 1.8))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.6))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Process Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>{processFlowData.dealFlow.name}</CardTitle>
          <p className="text-muted-foreground">{processFlowData.dealFlow.description}</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto pb-4">
            <div 
              className="flex items-center space-x-4 min-w-max px-4 py-6"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'left center' }}
            >
              {processFlowData.dealFlow.steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md border-2 ${
                      selectedStep.id === step.id 
                        ? 'border-blue-500 shadow-lg' 
                        : getStatusColor(step.status).includes('border') 
                          ? getStatusColor(step.status) 
                          : 'border-gray-200'
                    }`}
                    onClick={() => handleStepClick(step)}
                  >
                    <CardContent className="p-4 min-w-[200px]">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`p-3 rounded-full ${getStatusColor(step.status)}`}>
                          {getStepIcon(step.id)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{step.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(step.status)}
                          <Badge 
                            variant={
                              step.status === 'completed' ? 'default' :
                              step.status === 'in_progress' ? 'secondary' :
                              step.status === 'error' ? 'destructive' : 'outline'
                            }
                          >
                            {step.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < processFlowData.dealFlow.steps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Step Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStepIcon(selectedStep.id)}
              {selectedStep.name} Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Step Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(selectedStep.status)}
                    <span className="capitalize">{selectedStep.status.replace('_', ' ')}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timestamp:</span>
                  <span>{selectedStep.timestamp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{selectedStep.duration}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Performance Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volume:</span>
                  <span>{selectedStep.metrics.volume.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Completion:</span>
                  <span>{selectedStep.metrics.avgCompletionTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Error Rate:</span>
                  <span className="text-red-600">{selectedStep.metrics.errorRate}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Completeness</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Overall Completeness</span>
                  <span className="text-sm font-medium">{selectedStep.dataCompleteness.percentage}%</span>
                </div>
                <Progress value={selectedStep.dataCompleteness.percentage} className="h-2" />
              </div>
            </div>

            {selectedStep.issues && selectedStep.issues.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Issues</h4>
                <div className="space-y-2">
                  {selectedStep.issues.map((issue, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm">{issue.message}</span>
                      <Badge variant="outline" className="text-xs">{issue.count}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Quality Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Missing Elements</h4>
              <div className="space-y-2">
                {selectedStep.dataCompleteness.missingElements.map((element, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">{element.field}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{element.count}</span>
                      <Badge 
                        variant={
                          element.impact === 'Critical' ? 'destructive' :
                          element.impact === 'High' ? 'secondary' :
                          element.impact === 'Medium' ? 'outline' : 'default'
                        }
                        className="text-xs"
                      >
                        {element.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Required Fields</h4>
              <div className="space-y-1">
                {selectedStep.dataCompleteness.requiredFields.map((field, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Entities Involved</h4>
              <div className="space-y-2">
                {selectedStep.entities.map((entity, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <span className="text-sm font-medium">{(entity as any).name || entity.id}</span>
                      <p className="text-xs text-muted-foreground">{entity.type}</p>
                    </div>
                    {entity.value && (
                      <Badge variant="outline">{entity.value}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}