import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function AgenticEngine() {
  return (
    <div className="content-fade-in">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white border-border p-8 text-center">
          <CardContent className="p-0">
            <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Agentic Engine
            </h3>
            <p className="text-muted-foreground">
              Deploy and manage AI agents for automated decision making.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
