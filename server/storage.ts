import { users, type User, type InsertUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  validateUser(username: string, password: string): Promise<User | undefined>;
  getUser(id: number): Promise<User | undefined>;
}

export class MemStorage implements IStorage {
  private readonly adminUser: User = {
    id: 1,
    username: "admin",
    password: "rocketship"
  };

  async getUser(id: number): Promise<User | undefined> {
    return id === 1 ? this.adminUser : undefined;
  }

  async validateUser(username: string, password: string): Promise<User | undefined> {
    if (username === "admin" && password === "rocketship") {
      return this.adminUser;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
