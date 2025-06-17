import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Network, 
  Database, 
  Building2, 
  FileText, 
  TrendingUp, 
  Users,
  Settings,
  ZoomIn,
  ZoomOut,
  Filter
} from "lucide-react";

// Mock ontology data for wealth management
const ontologyData = {
  rootEntities: [
    'Portfolio Management System',
    'Investment Analytics Platform',
    'Risk Management Database',
    'Portco Performance Metrics',
    'Portco Financial Data',
    'Portco Operational Data',
    'Deal Flow Management System',
    'Due Diligence Repository',
    'LP Reporting Portal',
    'Compliance Monitoring System',
    'Market Intelligence Platform',
    'ESG Metrics Platform'
  ],
  entityDetails: {
    'Portfolio Management System': {
      name: 'Portfolio Management System',
      color: '#1976d2',
      description: 'Central system for managing private equity portfolio companies',
      instances: 45231,
      fields: [
        { name: 'portco_id', type: 'string', description: 'Unique identifier for portfolio company' },
        { name: 'company_name', type: 'string', description: 'Portfolio company name' },
        { name: 'investment_stage', type: 'string', description: 'Investment stage (Growth, Buyout, etc.)' }
      ],
      relationships: [
        { entity: 'Investment Analytics Platform', type: 'analyzed by', cardinality: 'N:1', description: 'Portfolio company analyzed by Investment Analytics' }
      ]
    },
    'Investment Analytics Platform': {
      name: 'Investment Analytics Platform',
      color: '#388e3c',
      description: 'Advanced analytics and performance tracking for portfolio companies',
      instances: 12890,
      fields: [
        { name: 'analysis_id', type: 'string', description: 'Unique identifier for analysis' },
        { name: 'portco_id', type: 'string', description: 'Portfolio company identifier' },
        { name: 'performance_score', type: 'number', description: 'Performance score' }
      ],
      relationships: [
        { entity: 'Portfolio Management System', type: 'analyzes', cardinality: 'N:1', description: 'Analysis for portfolio company' },
        { entity: 'Risk Management Database', type: 'related to', cardinality: 'N:N', description: 'Analysis related to Risk Management' }
      ]
    },
    'Risk Management Database': {
      name: 'Risk Management Database',
      color: '#fbc02d',
      description: 'Risk assessment and monitoring for portfolio companies',
      instances: 23456,
      fields: [
        { name: 'risk_id', type: 'string', description: 'Unique identifier for risk assessment' },
        { name: 'risk_category', type: 'string', description: 'Risk category' }
      ],
      relationships: [
        { entity: 'Investment Analytics Platform', type: 'related to', cardinality: 'N:N', description: 'Risk data related to Investment Analytics' }
      ]
    }
  }
};

// Add default entities for missing ones
ontologyData.rootEntities.forEach(entityName => {
  if (!ontologyData.entityDetails[entityName]) {
    ontologyData.entityDetails[entityName] = {
      name: entityName,
      color: '#757575',
      description: 'Data system for wealth management operations',
      instances: 10000,
      fields: [
        { name: 'id', type: 'string', description: 'Unique identifier' },
        { name: 'name', type: 'string', description: 'Entity name' }
      ],
      relationships: []
    };
  }
});

export default function OntologyView() {
  const [selectedEntity, setSelectedEntity] = useState(ontologyData.rootEntities[0]);
  const [showFields, setShowFields] = useState(true);
  const [showInstances, setShowInstances] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  const getEntityDetails = (entityName: string) => {
    return ontologyData.entityDetails[entityName] || ontologyData.entityDetails[ontologyData.rootEntities[0]];
  };

  const selectedEntityDetails = getEntityDetails(selectedEntity);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Data Ontology & Schema</h2>
          <p className="text-muted-foreground">Visual representation of data relationships and entity structures</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedEntity} onValueChange={setSelectedEntity}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select entity" />
            </SelectTrigger>
            <SelectContent>
              {ontologyData.rootEntities.map((entity) => (
                <SelectItem key={entity} value={entity}>{entity}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Configure
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ontology Graph */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                Entity Relationship Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                <div className="relative z-10 text-center">
                  <Network className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Ontology Graph</h3>
                  <p className="text-muted-foreground mb-4">
                    Visual representation of data entity relationships and schema structures
                  </p>
                  <div className="flex gap-4 justify-center mb-4">
                    <Button variant="outline" size="sm" onClick={() => setShowFields(!showFields)}>
                      <FileText className="h-4 w-4 mr-1" />
                      {showFields ? 'Hide' : 'Show'} Fields
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowInstances(!showInstances)}>
                      <Database className="h-4 w-4 mr-1" />
                      {showInstances ? 'Hide' : 'Show'} Instances
                    </Button>
                  </div>
                </div>
                
                {/* Simulated node network */}
                <div className="absolute inset-4">
                  <div className="grid grid-cols-4 gap-4 h-full">
                    {ontologyData.rootEntities.slice(0, 12).map((entity, index) => {
                      const details = getEntityDetails(entity);
                      const isSelected = entity === selectedEntity;
                      return (
                        <div
                          key={entity}
                          className={`flex items-center justify-center cursor-pointer transition-all ${
                            isSelected ? 'scale-110' : 'hover:scale-105'
                          }`}
                          onClick={() => setSelectedEntity(entity)}
                          style={{ transform: `scale(${zoomLevel})` }}
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                              isSelected ? 'ring-4 ring-blue-300' : ''
                            }`}
                            style={{ backgroundColor: details.color }}
                          >
                            <Database className="h-6 w-6" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 pointer-events-none">
                    <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#e5e7eb" strokeWidth="2" />
                    <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#e5e7eb" strokeWidth="2" />
                    <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#e5e7eb" strokeWidth="2" />
                    <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#e5e7eb" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Entity Details */}
        <div className="space-y-4">
          {/* Selected Entity Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Entity Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{selectedEntityDetails.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedEntityDetails.description}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedEntityDetails.color }}
                  ></div>
                  <span className="text-sm font-medium">Entity Color</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Instances</span>
                  <Badge>{selectedEntityDetails.instances.toLocaleString()}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fields */}
          {showFields && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Fields ({selectedEntityDetails.fields.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedEntityDetails.fields.map((field, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-sm">{field.name}</h5>
                        <Badge variant="outline" className="text-xs">{field.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{field.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Relationships */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                Relationships ({selectedEntityDetails.relationships.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedEntityDetails.relationships.length > 0 ? (
                  selectedEntityDetails.relationships.map((relationship, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-sm">{relationship.entity}</h5>
                        <Badge variant="outline" className="text-xs">{relationship.cardinality}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{relationship.type}</p>
                      <p className="text-xs text-muted-foreground">{relationship.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No relationships defined for this entity
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Entity Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Entities</span>
                  <span className="font-medium">{ontologyData.rootEntities.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Fields</span>
                  <span className="font-medium">{selectedEntityDetails.fields.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Relationships</span>
                  <span className="font-medium">{selectedEntityDetails.relationships.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Quality</span>
                  <Badge variant="default">95%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}