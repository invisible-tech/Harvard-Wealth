import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Status badge variants following color guidelines
interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info";
  children: React.ReactNode;
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  const variants = {
    success: "bg-success text-white",
    warning: "bg-warning text-white", 
    error: "bg-error text-white",
    info: "bg-blue-500 text-white"
  };

  return (
    <Badge className={variants[status]}>
      {children}
    </Badge>
  );
}

// Status alert variants
interface StatusAlertProps {
  status: "success" | "warning" | "error" | "info";
  title?: string;
  children: React.ReactNode;
}

export function StatusAlert({ status, title, children }: StatusAlertProps) {
  const icons = {
    success: <CheckCircle className="h-4 w-4" />,
    warning: <AlertTriangle className="h-4 w-4" />,
    error: <XCircle className="h-4 w-4" />,
    info: <Info className="h-4 w-4" />
  };

  const variants = {
    success: "border-success text-success",
    warning: "border-warning text-warning",
    error: "border-error text-error",
    info: "border-blue-500 text-blue-600"
  };

  return (
    <Alert className={variants[status]}>
      {icons[status]}
      {title && <h4 className="font-medium">{title}</h4>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}

// System health indicator
interface HealthIndicatorProps {
  status: "healthy" | "warning" | "critical";
  label: string;
}

export function HealthIndicator({ status, label }: HealthIndicatorProps) {
  const statusMap = {
    healthy: { color: "bg-success", text: "Operational" },
    warning: { color: "bg-warning", text: "Degraded" },
    critical: { color: "bg-error", text: "Critical" }
  };

  const { color, text } = statusMap[status];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">({text})</span>
    </div>
  );
}

// Task status indicator
interface TaskStatusProps {
  status: "completed" | "in-progress" | "failed" | "pending";
  label: string;
}

export function TaskStatus({ status, label }: TaskStatusProps) {
  const statusConfig = {
    completed: { color: "text-success", bg: "bg-success/10", icon: CheckCircle },
    "in-progress": { color: "text-blue-500", bg: "bg-blue-500/10", icon: Info },
    failed: { color: "text-error", bg: "bg-error/10", icon: XCircle },
    pending: { color: "text-warning", bg: "bg-warning/10", icon: AlertTriangle }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.bg}`}>
      <Icon className={`h-4 w-4 ${config.color}`} />
      <span className={`text-sm font-medium ${config.color}`}>{label}</span>
    </div>
  );
}

// Metrics card with color-coded values
interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
}

export function MetricCard({ title, value, change, trend }: MetricCardProps) {
  const trendConfig = {
    up: change > 0 ? "text-success" : "text-error",
    down: change < 0 ? "text-success" : "text-error", 
    neutral: "text-muted-foreground"
  };

  const changeColor = trend === "neutral" ? trendConfig.neutral : 
    (change > 0 ? "text-success" : change < 0 ? "text-error" : "text-muted-foreground");

  return (
    <div className="bg-card p-4 rounded-lg border">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="flex items-end gap-2 mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${changeColor}`}>
          {change > 0 ? "+" : ""}{change}%
        </span>
      </div>
    </div>
  );
}