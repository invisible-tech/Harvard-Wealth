import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Temporarily disabled auth for testing
  
  // Mock auth routes for testing
  app.get("/api/auth/user", (req, res) => {
    res.status(401).json({ message: "Not authenticated" });
  });

  app.get("/api/auth/login", (req, res) => {
    res.json({ message: "Auth disabled for testing" });
  });

  app.get("/api/auth/logout", (req, res) => {
    res.json({ message: "Auth disabled for testing" });
  });

  // Protected routes example (now unprotected for testing)
  app.get("/api/protected", (req, res) => {
    res.json({ message: "This route is accessible without auth during testing" });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Proxy endpoint for external visualization
  app.get("/api/proxy/harvard-viz", async (req, res) => {
    try {
      const response = await fetch('https://harvard-wealth-management-bav37zs66-invisible-prototypes.vercel.app/visualize');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      const content = await response.text();
      
      // Set appropriate headers
      res.setHeader('Content-Type', contentType || 'text/html');
      res.setHeader('X-Frame-Options', 'SAMEORIGIN');
      res.setHeader('Cache-Control', 'no-cache');
      
      res.send(content);
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch external visualization',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
