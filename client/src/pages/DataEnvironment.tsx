import { Card, CardContent } from "@/components/ui/card";
import { Server } from "lucide-react";

export default function DataEnvironment() {
  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white border-border p-8 text-center">
          <CardContent className="p-0">
            <Server className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Data Environment
            </h3>
            <p className="text-muted-foreground">
              Manage your data sources, connections, and environment configurations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
