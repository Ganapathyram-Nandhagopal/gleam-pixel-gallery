import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Mail, MessageCircle, FileText, LogOut, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: Comment[];
}

interface BlogComments {
  [blogId: string]: Comment[];
}

interface NewsletterSubscriber {
  email: string;
  name: string;
  timestamp: Date;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [allComments, setAllComments] = useState<BlogComments>({});
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simple password check (NOT secure for production)
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    const authStatus = localStorage.getItem("admin-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    // Load all blog comments
    const comments: BlogComments = {};
    for (let i = 1; i <= 7; i++) {
      const blogComments = localStorage.getItem(`blog-comments-${i}`);
      if (blogComments) {
        const parsed = JSON.parse(blogComments);
        comments[i] = parsed.map((c: any) => ({
          ...c,
          timestamp: new Date(c.timestamp)
        }));
      }
    }
    setAllComments(comments);

    // Load newsletter subscribers
    const subs = localStorage.getItem("newsletter-subscribers");
    if (subs) {
      const parsed = JSON.parse(subs);
      setSubscribers(parsed.map((s: any) => ({
        ...s,
        timestamp: new Date(s.timestamp)
      })));
    }
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin-auth", "true");
      setIsAuthenticated(true);
      loadData();
      toast({
        title: "Welcome!",
        description: "You are now logged in as admin.",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    setIsAuthenticated(false);
    setPassword("");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  const handleDeleteComment = (blogId: string, commentId: string) => {
    const updatedComments = allComments[blogId].filter(c => c.id !== commentId);
    const newAllComments = { ...allComments, [blogId]: updatedComments };
    setAllComments(newAllComments);
    localStorage.setItem(`blog-comments-${blogId}`, JSON.stringify(updatedComments));
    
    toast({
      title: "Comment deleted",
      description: "The comment has been removed.",
    });
  };

  const handleExportSubscribers = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Name,Email,Date\n"
      + subscribers.map(s => `${s.name},${s.email},${s.timestamp.toLocaleDateString()}`).join("\n");
    
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "newsletter-subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export successful",
      description: "Subscribers list has been downloaded.",
    });
  };

  const getTotalComments = () => {
    return Object.values(allComments).reduce((total, comments) => total + comments.length, 0);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 pt-24">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Enter the admin password to continue
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              />
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Demo password: admin123
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">
                Manage your blog content, comments, and subscribers
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Comments</p>
                    <p className="text-3xl font-bold mt-2">{getTotalComments()}</p>
                  </div>
                  <MessageCircle className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
                    <p className="text-3xl font-bold mt-2">{subscribers.length}</p>
                  </div>
                  <Mail className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Blog Posts</p>
                    <p className="text-3xl font-bold mt-2">7</p>
                  </div>
                  <FileText className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Management Tabs */}
          <Tabs defaultValue="comments" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            </TabsList>

            <TabsContent value="comments" className="space-y-4">
              {Object.entries(allComments).map(([blogId, comments]) => (
                comments.length > 0 && (
                  <Card key={blogId}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Blog Post #{blogId} - {comments.length} Comments
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="border border-border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="space-y-1">
                              <p className="font-semibold">{comment.author}</p>
                              <p className="text-xs text-muted-foreground">
                                {comment.timestamp.toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteComment(blogId, comment.id)}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{comment.content}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="secondary">{comment.likes} likes</Badge>
                            {comment.replies.length > 0 && (
                              <Badge variant="outline">{comment.replies.length} replies</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              ))}
              {getTotalComments() === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                    <p className="text-muted-foreground">No comments yet</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="subscribers" className="space-y-4">
              {subscribers.length > 0 && (
                <div className="flex justify-end mb-4">
                  <Button onClick={handleExportSubscribers}>
                    <Mail className="mr-2 h-4 w-4" />
                    Export to CSV
                  </Button>
                </div>
              )}
              
              <Card>
                <CardContent className="p-6">
                  {subscribers.length > 0 ? (
                    <div className="space-y-3">
                      {subscribers.map((subscriber, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                          <div>
                            <p className="font-medium">{subscriber.name}</p>
                            <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {subscriber.timestamp.toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <Mail className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                      <p className="text-muted-foreground">No subscribers yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
