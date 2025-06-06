import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Simple user type for authentication
export interface User {
  id: number;
  username: string;
  password: string;
}

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
