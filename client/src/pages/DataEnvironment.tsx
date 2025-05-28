import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Activity, 
  GitBranch, 
  Table, 
  FileText, 
  Zap, 
  Globe 
} from "lucide-react";

export default function DataEnvironment() {
  const statsCards = [
    {
      title: "Total Data Sources",
      value: "47",
      change: "+5",
      changeText: "this month",
      icon: Database,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      title: "Data Processed", 
      value: "2.4TB",
      change: "+12%",
      changeText: "from last week",
      icon: Activity,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      title: "Active Pipelines",
      value: "23", 
      change: "+3",
      changeText: "since yesterday",
      icon: GitBranch,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    }
  ];

  const dataTypes = [
    {
      title: "Structured Data",
      description: "Relational databases and tables",
      sources: "12 sources",
      status: "Healthy",
      statusColor: "bg-gray-100 text-gray-800",
      icon: Table,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      title: "Unstructured Data",
      description: "Documents, logs, and media files",
      sources: "8 sources",
      status: "Warning",
      statusColor: "bg-gray-100 text-gray-800",
      icon: FileText,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      title: "Real-time Streams",
      description: "Live data feeds and events",
      sources: "15 sources",
      status: "Active",
      statusColor: "bg-gray-100 text-gray-800",
      icon: Zap,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      title: "API & Services",
      description: "External APIs and web services",
      sources: "12 sources",
      status: "Stable",
      statusColor: "bg-gray-100 text-gray-800",
      icon: Globe,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    }
  ];

  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {card.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {card.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`${card.iconColor} h-6 w-6`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-600 font-medium">
                      {card.change}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {card.changeText}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Data Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataTypes.map((dataType, index) => {
            const Icon = dataType.icon;
            return (
              <Card key={index} className="bg-white border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${dataType.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`${dataType.iconColor} h-5 w-5`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {dataType.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {dataType.description}
                        </p>
                      </div>
                    </div>
                    <Badge className={dataType.statusColor}>
                      {dataType.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {dataType.sources}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
