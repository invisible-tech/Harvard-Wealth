import { type User, type InsertUser, type FavoriteItem, type InsertFavoriteItem } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  validateUser(username: string, password: string): Promise<User | undefined>;
  getUser(id: number): Promise<User | undefined>;
  
  // Favorites functionality
  getFavorites(): Promise<FavoriteItem[]>;
  getFavoriteById(id: string): Promise<FavoriteItem | undefined>;
  getFavoritesByCategory(category: FavoriteItem['category']): Promise<FavoriteItem[]>;
  createFavorite(item: InsertFavoriteItem): Promise<FavoriteItem>;
  updateFavorite(id: string, updates: Partial<FavoriteItem>): Promise<FavoriteItem | undefined>;
  deleteFavorite(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private readonly adminUser: User = {
    id: 1,
    username: "admin",
    password: "rocketship"
  };

  private favorites: FavoriteItem[] = [
    {
      id: "1",
      title: "Synthetic Data Generation Scripts",
      description: "Create scripts to generate structured JSON and CSV datasets reflecting private investments, fund returns, and manager data using faker, reportlab, openpyxl, and docx.",
      category: "data-generation",
      status: "active",
      priority: "high",
      tags: ["python", "faker", "json", "csv", "synthetic-data"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "intermediate",
        estimatedTime: "2-4 hours",
        dependencies: ["faker", "reportlab", "openpyxl", "docx"],
        outputs: ["structured-datasets", "pdf-documents", "excel-files"]
      }
    },
    {
      id: "2",
      title: "Ontology Definition",
      description: "Define ontology schemas using JSON-LD, OWL, or GraphQL and build functions to ingest and map synthetic structured data onto this ontology.",
      category: "ontology",
      status: "in-progress",
      priority: "high",
      tags: ["ontology", "json-ld", "owl", "graphql", "schema"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "advanced",
        estimatedTime: "4-6 hours",
        dependencies: ["json-ld", "owl", "graphql"],
        outputs: ["ontology-schema", "mapping-functions"]
      }
    },
    {
      id: "3",
      title: "Data Ingestion Pipeline",
      description: "Build ingestion pipeline to map synthetic structured data onto ontology schemas with validation and error handling.",
      category: "ingestion",
      status: "active",
      priority: "medium",
      tags: ["pipeline", "etl", "validation", "mapping"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "intermediate",
        estimatedTime: "3-5 hours",
        dependencies: ["pandas", "pydantic", "fastapi"],
        outputs: ["validated-data", "error-reports"]
      }
    },
    {
      id: "4",
      title: "Extraction Engine for Unstructured Data",
      description: "Implement PDF and image parsing using PyPDF2 and Tesseract OCR to extract numerical data and narrative content from documents.",
      category: "extraction",
      status: "completed",
      priority: "high",
      tags: ["pdf", "ocr", "extraction", "pypdf2", "tesseract"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "intermediate",
        estimatedTime: "3-4 hours",
        dependencies: ["PyPDF2", "tesseract", "opencv"],
        outputs: ["extracted-text", "structured-data", "provenance-mapping"]
      }
    },
    {
      id: "5",
      title: "Embedding and Vector Store Setup",
      description: "Integrate OpenAI embeddings into LangChain pipelines and index extracted data into ChromaDB vector store for semantic querying.",
      category: "embeddings",
      status: "active",
      priority: "high",
      tags: ["embeddings", "langchain", "chromadb", "openai", "vector-store"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "advanced",
        estimatedTime: "4-6 hours",
        dependencies: ["langchain", "openai", "chromadb"],
        outputs: ["vector-embeddings", "searchable-index"]
      }
    },
    {
      id: "6",
      title: "Query Interface & Prompt Library",
      description: "Develop FastAPI endpoint for structured and semantic queries with robust prompt library for user interactions.",
      category: "query-interface",
      status: "in-progress",
      priority: "medium",
      tags: ["fastapi", "api", "prompts", "queries", "endpoints"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "intermediate",
        estimatedTime: "3-5 hours",
        dependencies: ["fastapi", "pydantic", "jinja2"],
        outputs: ["api-endpoints", "prompt-templates", "query-results"]
      }
    },
    {
      id: "7",
      title: "Containerization & Deployment",
      description: "Write Dockerfile defining environment dependencies and entry points, test containerized setup with Docker Compose.",
      category: "containerization",
      status: "active",
      priority: "medium",
      tags: ["docker", "containerization", "deployment", "compose"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "beginner",
        estimatedTime: "2-3 hours",
        dependencies: ["docker", "docker-compose"],
        outputs: ["dockerfile", "docker-compose.yml", "container-image"]
      }
    },
    {
      id: "8",
      title: "Interactive Demonstration & Validation",
      description: "Build interactive demo scripts showcasing data ingestion, real-time querying, provenance tracing, and performance benchmarking.",
      category: "demonstration",
      status: "failed",
      priority: "low",
      tags: ["demo", "validation", "benchmarking", "interactive"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "intermediate",
        estimatedTime: "4-6 hours",
        dependencies: ["jupyter", "streamlit", "plotly"],
        outputs: ["demo-notebooks", "performance-reports", "visualizations"]
      }
    },
    {
      id: "9",
      title: "Cloud Deployment and Helm Charts",
      description: "Export Docker container image and demonstrate deployment using Helm charts on Kubernetes clusters.",
      category: "deployment",
      status: "active",
      priority: "low",
      tags: ["kubernetes", "helm", "cloud", "deployment"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "advanced",
        estimatedTime: "5-8 hours",
        dependencies: ["kubernetes", "helm", "kubectl"],
        outputs: ["helm-charts", "k8s-manifests", "deployment-scripts"]
      }
    },
    {
      id: "10",
      title: "Performance and Scalability Testing",
      description: "Simulate scale scenarios showing graceful handling, robustness, latency optimization, and accuracy benchmarking.",
      category: "performance",
      status: "active",
      priority: "medium",
      tags: ["performance", "scalability", "testing", "benchmarking"],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      metadata: {
        complexity: "advanced",
        estimatedTime: "6-10 hours",
        dependencies: ["locust", "pytest", "prometheus"],
        outputs: ["performance-metrics", "scalability-reports", "optimization-recommendations"]
      }
    }
  ];

  async getUser(id: number): Promise<User | undefined> {
    return id === 1 ? this.adminUser : undefined;
  }

  async validateUser(username: string, password: string): Promise<User | undefined> {
    if (username === "admin" && password === "rocketship") {
      return this.adminUser;
    }
    return undefined;
  }

  // Favorites functionality implementation
  async getFavorites(): Promise<FavoriteItem[]> {
    return [...this.favorites];
  }

  async getFavoriteById(id: string): Promise<FavoriteItem | undefined> {
    return this.favorites.find(item => item.id === id);
  }

  async getFavoritesByCategory(category: FavoriteItem['category']): Promise<FavoriteItem[]> {
    return this.favorites.filter(item => item.category === category);
  }

  async createFavorite(item: InsertFavoriteItem): Promise<FavoriteItem> {
    const newItem: FavoriteItem = {
      id: Math.random().toString(36).substr(2, 9),
      ...item,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    this.favorites.push(newItem);
    return newItem;
  }

  async updateFavorite(id: string, updates: Partial<FavoriteItem>): Promise<FavoriteItem | undefined> {
    const index = this.favorites.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    
    this.favorites[index] = {
      ...this.favorites[index],
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    return this.favorites[index];
  }

  async deleteFavorite(id: string): Promise<boolean> {
    const index = this.favorites.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.favorites.splice(index, 1);
    return true;
  }
}

export const storage = new MemStorage();
