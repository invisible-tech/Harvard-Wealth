import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth0Session, setupAuth0Routes, requireAuth } from './auth0';

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup Auth0 session middleware
  setupAuth0Session(app);

  // Setup Auth0 routes
  setupAuth0Routes(app);

  // Protected routes example
  app.get("/api/protected", requireAuth, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
