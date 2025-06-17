import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewView from '@/components/data-environment/OverviewView';
import CustomerProductView from '@/components/data-environment/CustomerProductView';
import DataQualityView from '@/components/data-environment/DataQualityView';
import GeospatialView from '@/components/data-environment/GeospatialView';
import OntologyView from '@/components/data-environment/OntologyView';
import ProcessFlowView from '@/components/data-environment/ProcessFlowView';

export default function DataEnvironment() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Data Environment</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive data management and analytics platform for portfolio company operations
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio 360</TabsTrigger>
            <TabsTrigger value="quality">Data Quality</TabsTrigger>
            <TabsTrigger value="geospatial">Geospatial</TabsTrigger>
            <TabsTrigger value="ontology">Ontology</TabsTrigger>
            <TabsTrigger value="process">Process Flow</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <OverviewView />
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <CustomerProductView />
          </TabsContent>

          <TabsContent value="quality" className="mt-6">
            <DataQualityView />
          </TabsContent>

          <TabsContent value="geospatial" className="mt-6">
            <GeospatialView />
          </TabsContent>

          <TabsContent value="ontology" className="mt-6">
            <OntologyView />
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <ProcessFlowView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
