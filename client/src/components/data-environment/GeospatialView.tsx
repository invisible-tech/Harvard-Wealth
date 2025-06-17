import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Map, 
  MapPin, 
  Building2, 
  TrendingUp, 
  BarChart3,
  Globe,
  ZoomIn,
  ZoomOut,
  Layers
} from "lucide-react";

// Mock geospatial data for wealth management
const mockGeospatialData = {
  portfolioOffices: [
    {
      id: 1,
      name: 'Bain Capital - Boston HQ',
      address: '200 Clarendon Street, Boston, MA 02116',
      coordinates: { lat: 42.3500, lng: -71.0780 },
      portfolioCount: 1243,
      avgInvestmentSize: 250000000,
      riskScore: 82,
      region: 'North America',
      recentInvestments: [
        { id: 'INV-2024-001', type: 'Private Equity', value: 'High', status: 'Active', date: '2024-06-01', company: 'Tech Innovators Inc.' },
        { id: 'INV-2024-002', type: 'Venture Capital', value: 'Medium', status: 'Active', date: '2024-05-28', company: 'AI Solutions Ltd.' },
        { id: 'INV-2024-003', type: 'Growth Equity', value: 'High', status: 'Pending', date: '2024-05-25', company: 'Green Energy Corp' },
        { id: 'INV-2024-004', type: 'Real Estate', value: 'Medium', status: 'Active', date: '2024-05-22', company: 'Urban Development LLC' }
      ]
    },
    {
      id: 2,
      name: 'Sequoia Capital - Menlo Park',
      address: '2800 Sand Hill Road, Menlo Park, CA 94025',
      coordinates: { lat: 37.4275, lng: -122.1697 },
      portfolioCount: 978,
      avgInvestmentSize: 180000000,
      riskScore: 75,
      region: 'North America',
      recentInvestments: [
        { id: 'INV-2024-005', type: 'Venture Capital', value: 'High', status: 'Active', date: '2024-05-30', company: 'CloudTech Solutions' },
        { id: 'INV-2024-006', type: 'Private Equity', value: 'High', status: 'Active', date: '2024-05-27', company: 'Healthcare Plus' },
        { id: 'INV-2024-007', type: 'Growth Equity', value: 'High', status: 'Active', date: '2024-05-20', company: 'FinTech Innovations' },
        { id: 'INV-2024-008', type: 'ESG', value: 'Medium', status: 'Pending', date: '2024-05-18', company: 'Sustainable Energy Co' }
      ]
    },
    {
      id: 3,
      name: 'General Atlantic - London',
      address: '20 St James\'s Street, London SW1A 1ES',
      coordinates: { lat: 51.5074, lng: -0.1378 },
      portfolioCount: 832,
      avgInvestmentSize: 300000000,
      riskScore: 68,
      region: 'Europe',
      recentInvestments: [
        { id: 'INV-2024-009', type: 'Private Equity', value: 'High', status: 'Active', date: '2024-05-29', company: 'European Retail Group' },
        { id: 'INV-2024-010', type: 'Infrastructure', value: 'Medium', status: 'Active', date: '2024-05-26', company: 'Transport Solutions' },
        { id: 'INV-2024-011', type: 'Real Estate', value: 'Low', status: 'Active', date: '2024-05-23', company: 'Property Development Ltd' },
        { id: 'INV-2024-012', type: 'ESG', value: 'Medium', status: 'Active', date: '2024-05-19', company: 'Green Infrastructure Co' }
      ]
    }
  ],
  investmentHotspots: [
    { id: 1, location: 'Silicon Valley', coordinates: { lat: 37.3875, lng: -122.0575 }, investmentIntensity: 91, investmentType: 'Venture Capital', portfolioCompanies: 120, totalInvestments: 340, investmentDate: '2024-05-15' },
    { id: 2, location: 'London Tech Hub', coordinates: { lat: 51.5074, lng: -0.1278 }, investmentIntensity: 78, investmentType: 'Private Equity', portfolioCompanies: 45, totalInvestments: 110, investmentDate: '2024-05-10' },
    { id: 3, location: 'Singapore Financial District', coordinates: { lat: 1.2847, lng: 103.8519 }, investmentIntensity: 65, investmentType: 'Growth Equity', portfolioCompanies: 30, totalInvestments: 75, investmentDate: '2024-05-05' },
    { id: 4, location: 'Dubai International Financial Centre', coordinates: { lat: 25.2048, lng: 55.2708 }, investmentIntensity: 72, investmentType: 'Real Estate', portfolioCompanies: 60, totalInvestments: 150, investmentDate: '2024-05-12' }
  ]
};

export default function GeospatialView() {
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [mapType, setMapType] = useState('portfolio');
  const [showHotspots, setShowHotspots] = useState(true);

  const handleOfficeSelect = (officeId: number) => {
    setSelectedOffice(officeId);
    setSelectedHotspot(null);
  };

  const handleHotspotSelect = (hotspotId: number) => {
    setSelectedHotspot(hotspotId);
    setSelectedOffice(null);
  };

  const getSelectedOffice = () => {
    return mockGeospatialData.portfolioOffices.find(office => office.id === selectedOffice);
  };

  const getSelectedHotspot = () => {
    return mockGeospatialData.investmentHotspots.find(hotspot => hotspot.id === selectedHotspot);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Geospatial Investment Analysis</h2>
          <p className="text-muted-foreground">Geographic visualization of portfolio companies and investment activity</p>
        </div>
        <div className="flex gap-2">
          <Select value={mapType} onValueChange={setMapType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select map type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portfolio">Portfolio Distribution</SelectItem>
              <SelectItem value="density">Investment Density</SelectItem>
              <SelectItem value="risk">Risk Exposure</SelectItem>
              <SelectItem value="esg">ESG Impact</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <ZoomIn className="h-4 w-4 mr-1" />
            Zoom In
          </Button>
          <Button variant="outline" size="sm">
            <ZoomOut className="h-4 w-4 mr-1" />
            Zoom Out
          </Button>
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4 mr-1" />
            Layers
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Interactive Investment Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
                <div className="relative z-10 text-center">
                  <Globe className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
                  <p className="text-muted-foreground mb-4">
                    Geographic visualization of portfolio companies and investment hotspots
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Show Offices
                    </Button>
                    <Button variant="outline" size="sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Show Hotspots
                    </Button>
                  </div>
                </div>
                
                {/* Simulated map markers */}
                <div className="absolute top-20 left-32 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-32 left-24 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-28 right-28 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-24 left-40 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Panel */}
        <div className="space-y-4">
          {/* Portfolio Offices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Portfolio Offices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockGeospatialData.portfolioOffices.map((office) => (
                  <div 
                    key={office.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedOffice === office.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleOfficeSelect(office.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{office.name}</h4>
                      <Badge>{office.region}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{office.address}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Portfolio:</span>
                        <span className="ml-1 font-medium">{office.portfolioCount}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Risk:</span>
                        <span className="ml-1 font-medium">{office.riskScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Investment Hotspots */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Investment Hotspots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockGeospatialData.investmentHotspots.map((hotspot) => (
                  <div 
                    key={hotspot.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedHotspot === hotspot.id ? 'border-green-500 bg-green-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleHotspotSelect(hotspot.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{hotspot.location}</h4>
                      <Badge variant="outline">{hotspot.investmentType}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Intensity:</span>
                        <span className="ml-1 font-medium">{hotspot.investmentIntensity}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Companies:</span>
                        <span className="ml-1 font-medium">{hotspot.portfolioCompanies}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Location Details */}
          {(selectedOffice || selectedHotspot) && (
            <Card>
              <CardHeader>
                <CardTitle>Location Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedOffice && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">{getSelectedOffice()?.name}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Portfolio Count:</span>
                        <span className="font-medium">{getSelectedOffice()?.portfolioCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Investment:</span>
                        <span className="font-medium">
                          ${(getSelectedOffice()?.avgInvestmentSize || 0) / 1000000}M
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Risk Score:</span>
                        <span className="font-medium">{getSelectedOffice()?.riskScore}</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Recent Investments</h5>
                      <div className="space-y-2">
                        {getSelectedOffice()?.recentInvestments.slice(0, 3).map((investment) => (
                          <div key={investment.id} className="text-sm p-2 bg-gray-50 rounded">
                            <div className="font-medium">{investment.company}</div>
                            <div className="text-muted-foreground">{investment.type} • {investment.date}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedHotspot && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">{getSelectedHotspot()?.location}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment Type:</span>
                        <span className="font-medium">{getSelectedHotspot()?.investmentType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Intensity:</span>
                        <span className="font-medium">{getSelectedHotspot()?.investmentIntensity}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Companies:</span>
                        <span className="font-medium">{getSelectedHotspot()?.portfolioCompanies}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Investments:</span>
                        <span className="font-medium">{getSelectedHotspot()?.totalInvestments}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}