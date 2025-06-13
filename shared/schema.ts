// Simple user type for authentication
export interface User {
  id: number;
  username: string;
  password: string;
}

export interface InsertUser {
  username: string;
  password: string;
}

// Favorites functionality schema
export interface FavoriteItem {
  id: string;
  title: string;
  description: string;
  category: 'data-generation' | 'ontology' | 'ingestion' | 'extraction' | 'embeddings' | 'query-interface' | 'containerization' | 'demonstration' | 'deployment' | 'performance';
  status: 'active' | 'completed' | 'in-progress' | 'failed';
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  createdAt: string;
  lastUpdated: string;
  metadata: {
    complexity: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime: string;
    dependencies: string[];
    outputs: string[];
  };
}

export interface InsertFavoriteItem {
  title: string;
  description: string;
  category: FavoriteItem['category'];
  status: FavoriteItem['status'];
  priority: FavoriteItem['priority'];
  tags: string[];
  metadata: FavoriteItem['metadata'];
}
