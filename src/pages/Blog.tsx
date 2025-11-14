import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogMinimalist from "@/assets/blog-minimalist.jpg";
import blogDesignSystems from "@/assets/blog-design-systems.jpg";
import blogColorPsychology from "@/assets/blog-color-psychology.jpg";
import blogMicrointeractions from "@/assets/blog-microinteractions.jpg";
import blogAccessibility from "@/assets/blog-accessibility.jpg";
import blogAiDesign from "@/assets/blog-ai-design.jpg";
import blogErpInventory from "@/assets/blog-erp-inventory.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less is more in creating impactful digital experiences that resonate with users.",
    category: "Design Theory",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: blogMinimalist,
  },
  {
    id: 2,
    title: "Building Design Systems That Scale",
    excerpt: "A comprehensive guide to creating consistent, maintainable design systems for growing products.",
    category: "Design Systems",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    image: blogDesignSystems,
  },
  {
    id: 3,
    title: "Color Psychology in UI Design",
    excerpt: "Understanding how colors influence user behavior and emotional responses in digital interfaces.",
    category: "UI Design",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    image: blogColorPsychology,
  },
  {
    id: 4,
    title: "Microinteractions That Delight",
    excerpt: "Small details that make a big difference in user experience and product satisfaction.",
    category: "UX Design",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    image: blogMicrointeractions,
  },
  {
    id: 5,
    title: "Designing for Accessibility",
    excerpt: "Creating inclusive digital experiences that work for everyone, regardless of ability.",
    category: "Accessibility",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    image: blogAccessibility,
  },
  {
    id: 6,
    title: "The Future of AI in Design",
    excerpt: "How artificial intelligence is transforming the design process and what it means for creators.",
    category: "Technology",
    date: "Feb 15, 2025",
    readTime: "10 min read",
    image: blogAiDesign,
  },
  {
    id: 7,
    title: "Inventory Mismatch & Stock Losses — How ERP Brings 100% Stock Accuracy",
    excerpt: "Discover how ERP systems eliminate inventory mismatches and achieve near-perfect stock accuracy with real-world examples.",
    category: "ERP & Business",
    date: "Mar 20, 2025",
    readTime: "12 min read",
    image: blogErpInventory,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in">
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Design <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Thoughts, ideas, and lessons learned from years of crafting digital experiences
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card 
                  className="group cursor-pointer hover-lift h-full border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
