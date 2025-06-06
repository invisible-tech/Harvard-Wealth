import logoSvg from "@/assets/logo.svg";
import platformIconSvg from "@/assets/platform-icon.svg";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <img 
        src={platformIconSvg} 
        alt="Platform Icon" 
        className={`w-6 h-6 ${className}`}
      />
    );
  }

  return (
    <img 
      src={logoSvg} 
      alt="Invisible Platform" 
      className={`h-10 ${className}`}
    />
  );
}

// Example of using inline SVG directly in component
export function InlineSvgExample() {
  return (
    <div className="flex items-center gap-4">
      {/* Inline SVG */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-blue-500"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
      </svg>
      
      {/* Using imported SVG file */}
      <Logo variant="icon" />
      
      {/* Using custom SVG component */}
      <div className="text-green-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>
  );
}