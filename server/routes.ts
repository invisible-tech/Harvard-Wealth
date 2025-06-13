import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { InsertFavoriteItem } from "@shared/schema";

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

  // Favorites API routes
  app.get("/api/favorites", async (req, res) => {
    try {
      const { category } = req.query;
      let favorites;
      
      if (category && typeof category === 'string') {
        favorites = await storage.getFavoritesByCategory(category as any);
      } else {
        favorites = await storage.getFavorites();
      }
      
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch favorites" });
    }
  });

  app.get("/api/favorites/:id", async (req, res) => {
    try {
      const favorite = await storage.getFavoriteById(req.params.id);
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      res.json(favorite);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch favorite" });
    }
  });

  app.post("/api/favorites", async (req, res) => {
    try {
      const favoriteData: InsertFavoriteItem = req.body;
      const newFavorite = await storage.createFavorite(favoriteData);
      res.status(201).json(newFavorite);
    } catch (error) {
      res.status(500).json({ error: "Failed to create favorite" });
    }
  });

  app.patch("/api/favorites/:id", async (req, res) => {
    try {
      const updates = req.body;
      const updatedFavorite = await storage.updateFavorite(req.params.id, updates);
      if (!updatedFavorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      res.json(updatedFavorite);
    } catch (error) {
      res.status(500).json({ error: "Failed to update favorite" });
    }
  });

  app.delete("/api/favorites/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteFavorite(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete favorite" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
