import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Edit, Trash2, Clock, Users, Target, AlertCircle, CheckCircle, XCircle, PlayCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { FavoriteItem, InsertFavoriteItem } from "@shared/schema";

const categories = [
  { id: 'data-generation', label: 'Data Generation', icon: '📊' },
  { id: 'ontology', label: 'Ontology', icon: '🧠' },
  { id: 'ingestion', label: 'Ingestion', icon: '📥' },
  { id: 'extraction', label: 'Extraction', icon: '📄' },
  { id: 'embeddings', label: 'Embeddings', icon: '🔍' },
  { id: 'query-interface', label: 'Query Interface', icon: '💬' },
  { id: 'containerization', label: 'Containerization', icon: '📦' },
  { id: 'demonstration', label: 'Demonstration', icon: '🎯' },
  { id: 'deployment', label: 'Deployment', icon: '🚀' },
  { id: 'performance', label: 'Performance', icon: '⚡' }
] as const;

const statusConfig = {
  active: { icon: PlayCircle, color: 'bg-blue-500', label: 'Active' },
  completed: { icon: CheckCircle, color: 'bg-green-500', label: 'Completed' },
  'in-progress': { icon: Clock, color: 'bg-yellow-500', label: 'In Progress' },
  failed: { icon: XCircle, color: 'bg-red-500', label: 'Failed' }
};

const priorityConfig = {
  high: { color: 'bg-red-100 text-red-800', label: 'High Priority' },
  medium: { color: 'bg-yellow-100 text-yellow-800', label: 'Medium Priority' },
  low: { color: 'bg-green-100 text-green-800', label: 'Low Priority' }
};

const complexityConfig = {
  beginner: { color: 'bg-green-100 text-green-800', label: 'Beginner' },
  intermediate: { color: 'bg-yellow-100 text-yellow-800', label: 'Intermediate' },
  advanced: { color: 'bg-red-100 text-red-800', label: 'Advanced' }
};

function FavoriteCard({ item, onEdit, onDelete }: { 
  item: FavoriteItem; 
  onEdit: (item: FavoriteItem) => void; 
  onDelete: (id: string) => void; 
}) {
  const StatusIcon = statusConfig[item.status].icon;
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${statusConfig[item.status].color}`} />
                <span className="text-sm text-muted-foreground">{statusConfig[item.status].label}</span>
              </div>
              <Badge variant="outline" className={priorityConfig[item.priority].color}>
                {priorityConfig[item.priority].label}
              </Badge>
              <Badge variant="secondary" className={complexityConfig[item.metadata.complexity].color}>
                {complexityConfig[item.metadata.complexity].label}
              </Badge>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={() => onEdit(item)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDelete(item.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{item.description}</CardDescription>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Estimated Time: {item.metadata.estimatedTime}</span>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-1">Tags:</div>
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-1">Dependencies:</div>
            <div className="text-sm text-muted-foreground">
              {item.metadata.dependencies.join(', ')}
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-1">Expected Outputs:</div>
            <div className="text-sm text-muted-foreground">
              {item.metadata.outputs.join(', ')}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CreateEditDialog({ 
  item, 
  open, 
  onOpenChange, 
  onSave 
}: { 
  item?: FavoriteItem; 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  onSave: (data: InsertFavoriteItem) => void;
}) {
  const [formData, setFormData] = useState<InsertFavoriteItem>({
    title: item?.title || '',
    description: item?.description || '',
    category: item?.category || 'data-generation',
    status: item?.status || 'active',
    priority: item?.priority || 'medium',
    tags: item?.tags || [],
    metadata: {
      complexity: item?.metadata.complexity || 'intermediate',
      estimatedTime: item?.metadata.estimatedTime || '',
      dependencies: item?.metadata.dependencies || [],
      outputs: item?.metadata.outputs || []
    }
  });

  const handleSave = () => {
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{item ? 'Edit Item' : 'Create New Item'}</DialogTitle>
          <DialogDescription>
            {item ? 'Update the details of this item' : 'Add a new item to your favorites'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value as any })}>
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.icon} {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as any })}>
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">Priority</Label>
            <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value as any })}>
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="complexity" className="text-right">Complexity</Label>
            <Select 
              value={formData.metadata.complexity} 
              onValueChange={(value) => setFormData({ 
                ...formData, 
                metadata: { ...formData.metadata, complexity: value as any }
              })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="estimatedTime" className="text-right">Estimated Time</Label>
            <Input
              id="estimatedTime"
              value={formData.metadata.estimatedTime}
              onChange={(e) => setFormData({ 
                ...formData, 
                metadata: { ...formData.metadata, estimatedTime: e.target.value }
              })}
              className="col-span-3"
              placeholder="e.g., 2-4 hours"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function Favorites() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [editingItem, setEditingItem] = useState<FavoriteItem | undefined>();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: favorites = [], isLoading } = useQuery({
    queryKey: ['/api/favorites'],
    queryFn: async () => {
      const response = await fetch('/api/favorites');
      if (!response.ok) throw new Error('Failed to fetch favorites');
      return response.json() as Promise<FavoriteItem[]>;
    }
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertFavoriteItem) => {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/favorites'] });
      toast({ title: "Success", description: "Item created successfully" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<FavoriteItem> }) => {
      const response = await fetch(`/api/favorites/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/favorites'] });
      toast({ title: "Success", description: "Item updated successfully" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete item');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/favorites'] });
      toast({ title: "Success", description: "Item deleted successfully" });
    }
  });

  const handleEdit = (item: FavoriteItem) => {
    setEditingItem(item);
  };

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleSave = (data: InsertFavoriteItem) => {
    if (editingItem) {
      updateMutation.mutate({ id: editingItem.id, data });
      setEditingItem(undefined);
    } else {
      createMutation.mutate(data);
    }
  };

  const filteredFavorites = activeTab === 'all' 
    ? favorites 
    : favorites.filter(item => item.category === activeTab);

  const getStatusCounts = () => {
    const counts = favorites.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return counts;
  };

  const statusCounts = getStatusCounts();
  const completionRate = favorites.length > 0 
    ? Math.round(((statusCounts.completed || 0) / favorites.length) * 100) 
    : 0;

  if (isLoading) {
    return <div className="flex items-center justify-center p-8">Loading favorites...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Favorites</h1>
          <p className="text-muted-foreground">Manage your favorite development tasks and workflows</p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Item
        </Button>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{favorites.length}</div>
              <div className="text-sm text-muted-foreground">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{statusCounts.completed || 0}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts['in-progress'] || 0}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{statusCounts.failed || 0}</div>
              <div className="text-sm text-muted-foreground">Failed</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion Rate</span>
              <span>{completionRate}%</span>
            </div>
            <Progress value={completionRate} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-11">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.icon}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredFavorites.map((item) => (
              <FavoriteCard
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span>{category.icon}</span>
                {category.label}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredFavorites.length} item{filteredFavorites.length !== 1 ? 's' : ''} in this category
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredFavorites.map((item) => (
                <FavoriteCard
                  key={item.id}
                  item={item}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <CreateEditDialog
        item={editingItem}
        open={!!editingItem || createDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setEditingItem(undefined);
            setCreateDialogOpen(false);
          }
        }}
        onSave={handleSave}
      />
    </div>
  );
}