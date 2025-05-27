import { Card, CardContent } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

export default function ProcessBuilder() {
  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white border-border p-8 text-center">
          <CardContent className="p-0">
            <GitBranch className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Process Builder
            </h3>
            <p className="text-muted-foreground">
              Design and orchestrate complex data processing workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
