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



  const httpServer = createServer(app);
  return httpServer;
}
