import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign, 
  Building2,
  TrendingUp,
  Calendar,
  Search,
  Eye,
  BarChart3
} from "lucide-react";

// Mock portfolio company data
const portfolioCompanyData = {
  company: {
    id: 'PCO-00123',
    companyName: 'Tech Innovators Inc.',
    contact: {
      name: 'Alice Johnson',
      email: 'alice.johnson@techinnovators.com',
      phone: '(555) 321-9876',
      location: 'San Francisco, CA'
    },
    sector: 'Technology',
    investmentValue: '$250,000,000',
    status: 'Active',
    complianceStatus: 'Compliant',
    riskScore: 'Low',
    sourceRecords: {
      financial: {
        source: 'Portfolio Management System',
        id: 'PMS-200123',
        companyName: 'Tech Innovators Inc.',
        contact: 'Alice Johnson',
        email: 'alice.johnson@techinnovators.com',
        phone: '(555) 321-9876',
        location: 'San Francisco, CA',
        investmentValue: '$250,000,000',
        lastValuation: '2023-09-10',
        investmentDate: '2015-03-22',
        matchConfidence: 98,
        variants: ['Tech Innovators', 'Tech Innovators Inc'],
        sector: 'Technology'
      },
      operational: {
        source: 'Portco Performance Metrics',
        id: 'PPM-90012',
        companyName: 'Tech Innovators Inc.',
        contact: 'Alice Johnson',
        email: 'alice.johnson@techinnovators.com',
        phone: '(555) 321-9876',
        location: 'San Francisco, CA',
        investmentId: 'INV-2023-001',
        investmentValue: '$250,000,000',
        complianceStatus: 'Compliant',
        matchConfidence: 97,
        lastReporting: '2023-09-10',
        status: 'Active'
      },
      compliance: {
        source: 'Compliance Monitoring System',
        id: 'CMS-123456',
        companyName: 'Tech Innovators Inc.',
        contact: 'Alice Johnson',
        email: 'alice.johnson@techinnovators.com',
        phone: '(555) 321-9876',
        location: 'San Francisco, CA',
        complianceStatus: 'Compliant',
        matchConfidence: 96,
        investmentDate: '2015-03-15',
        status: 'Active'
      }
    },
    reconciliation: {
      conflictFields: ['companyName', 'location'],
      resolvedFields: ['email', 'phone'],
      matchingRules: ['Email Exact Match', 'Company Name Fuzzy Match'],
      consolidationDate: '2023-10-18',
      goldenRecord: true,
      dataQualityScore: 95,
      processingSteps: [
        'Initial data ingestion',
        'Standardization and cleansing',
        'Duplicate detection',
        'Record linking',
        'Survivorship rules application',
        'Golden record creation'
      ]
    },
    recentActivity: [
      { id: 'INV-2023-001', type: 'Investment Made', date: '2023-09-10', details: 'Series C funding round', source: 'Portfolio Management System' },
      { id: 'CMP-2023-002', type: 'Compliance Check', date: '2023-08-15', details: 'ESG compliance verified', source: 'Compliance Monitoring System' },
      { id: 'UPD-2023-003', type: 'Profile Update', date: '2023-07-20', details: 'Financial metrics updated', source: 'Investment Analytics Platform' }
    ],
    investments: [
      {
        id: 'INV-2023-001',
        date: '2023-09-10',
        type: 'Series C',
        status: 'Active',
        value: '$250,000,000',
        fund: 'Growth Fund III',
        riskLevel: 'Low',
        complianceStatus: 'Compliant'
      },
      {
        id: 'INV-2022-015',
        date: '2022-06-18',
        type: 'Series B',
        status: 'Completed',
        value: '$120,000,000',
        fund: 'Growth Fund II',
        riskLevel: 'Medium',
        complianceStatus: 'Compliant'
      },
      {
        id: 'INV-2021-008',
        date: '2021-03-12',
        type: 'Series A',
        status: 'Completed',
        value: '$80,000,000',
        fund: 'Growth Fund I',
        riskLevel: 'Low',
        complianceStatus: 'Compliant'
      }
    ]
  }
};

export default function CustomerProductView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSource, setActiveSource] = useState('golden');
  const [selectedTab, setSelectedTab] = useState('overview');

  // Get the current portfolio company data based on the selected source
  const getCurrentPortcoView = () => {
    if (activeSource === 'golden') {
      return portfolioCompanyData.company;
    } else {
      const sourceData = portfolioCompanyData.company.sourceRecords[activeSource as keyof typeof portfolioCompanyData.company.sourceRecords];
      if (!sourceData) return portfolioCompanyData.company;
      return {
        ...portfolioCompanyData.company,
        companyName: sourceData.companyName,
        contact: {
          name: sourceData.contact,
          email: sourceData.email,
          phone: sourceData.phone,
          location: sourceData.location
        },
        investmentValue: (sourceData as any).investmentValue || portfolioCompanyData.company.investmentValue,
        complianceStatus: (sourceData as any).complianceStatus || portfolioCompanyData.company.complianceStatus,
        sourceInfo: sourceData
      };
    }
  };

  const currentPortcoView = getCurrentPortcoView();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Portfolio Company Data 360</h2>
        <p className="text-muted-foreground">
          Unified view of portfolio company information across all data sources with master data management and reconciliation
        </p>
      </div>

      {/* Search and Source Selection */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search portfolio companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={activeSource} onValueChange={setActiveSource}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select data source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="golden">Golden Record</SelectItem>
                <SelectItem value="financial">Financial System</SelectItem>
                <SelectItem value="operational">Operational System</SelectItem>
                <SelectItem value="compliance">Compliance System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Company Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{currentPortcoView.companyName}</CardTitle>
              <p className="text-muted-foreground">Portfolio Company ID: {currentPortcoView.id}</p>
            </div>
            <div className="flex gap-2">
              <Badge variant={currentPortcoView.status === 'Active' ? 'default' : 'secondary'}>
                {currentPortcoView.status}
              </Badge>
              <Badge variant={currentPortcoView.complianceStatus === 'Compliant' ? 'default' : 'destructive'}>
                {currentPortcoView.complianceStatus}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-medium">{currentPortcoView.contact.name}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{currentPortcoView.contact.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Phone className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{currentPortcoView.contact.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{currentPortcoView.contact.location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="reconciliation">Data Quality</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Investment Value</span>
                  <span className="font-bold text-lg">{currentPortcoView.investmentValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sector</span>
                  <Badge>{currentPortcoView.sector}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Risk Score</span>
                  <Badge variant={currentPortcoView.riskScore === 'Low' ? 'default' : 'destructive'}>
                    {currentPortcoView.riskScore}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Revenue Growth</span>
                    <span className="font-medium text-green-600">+24.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">EBITDA Margin</span>
                    <span className="font-medium">18.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Employee Count</span>
                    <span className="font-medium">1,247</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="investments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Investment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentPortcoView.investments.map((investment) => (
                  <div key={investment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{investment.type}</h4>
                        <p className="text-sm text-muted-foreground">{investment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{investment.value}</p>
                      <p className="text-sm text-muted-foreground">{investment.fund}</p>
                    </div>
                    <Badge variant={investment.status === 'Active' ? 'default' : 'secondary'}>
                      {investment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reconciliation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Quality & Reconciliation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Data Quality Score</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{width: `${currentPortcoView.reconciliation.dataQualityScore}%`}}
                      ></div>
                    </div>
                    <span className="font-semibold">{currentPortcoView.reconciliation.dataQualityScore}%</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Processing Steps</h4>
                  <div className="space-y-2">
                    {currentPortcoView.reconciliation.processingSteps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Matching Rules Applied</h4>
                  <div className="flex gap-2">
                    {currentPortcoView.reconciliation.matchingRules.map((rule, index) => (
                      <Badge key={index} variant="outline">{rule}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentPortcoView.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{activity.type}</h4>
                      <p className="text-sm text-muted-foreground">{activity.details}</p>
                      <p className="text-xs text-muted-foreground">Source: {activity.source}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{activity.date}</p>
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