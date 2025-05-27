import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ModelEvaluations() {
  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white border-border p-8 text-center">
          <CardContent className="p-0">
            <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Model Evaluations
            </h3>
            <p className="text-muted-foreground">
              Assess and compare the performance of your AI models.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
