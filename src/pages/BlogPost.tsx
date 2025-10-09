import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  const relatedPosts = [
    {
      id: 2,
      title: "Building Design Systems That Scale",
      category: "Design Systems",
    },
    {
      id: 3,
      title: "Color Psychology in UI Design",
      category: "UI Design",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <article className="max-w-4xl mx-auto px-6 md:px-12">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary">Design Theory</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The Art of Minimalist Design
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>Mar 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-pink-500 via-blue-500 to-green-500 rounded-3xl" />

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Minimalist design is more than just removing elements—it's about finding the perfect balance 
                between form and function, creating experiences that feel effortless and intuitive.
              </p>

              <h2 className="text-3xl font-bold mt-12">The Philosophy Behind Minimalism</h2>
              <p>
                At its core, minimalist design is about intentionality. Every element on the screen should 
                serve a purpose, whether functional or aesthetic. This approach forces designers to make 
                deliberate choices about what to include and, more importantly, what to leave out.
              </p>

              <h2 className="text-3xl font-bold mt-12">Less is More</h2>
              <p>
                This famous architectural principle applies perfectly to digital design. By reducing visual 
                clutter and focusing on essential elements, we create interfaces that are easier to understand 
                and more pleasant to use. White space becomes an active design element, not empty space to be filled.
              </p>

              <h2 className="text-3xl font-bold mt-12">Key Principles</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Start with content and build the design around it</li>
                <li>Use white space strategically to create visual hierarchy</li>
                <li>Limit your color palette to create cohesion</li>
                <li>Choose typography that is both readable and beautiful</li>
                <li>Remove decorative elements that don't add value</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12">Real-World Application</h2>
              <p>
                Companies like Apple have mastered minimalist design, creating products that feel premium and 
                accessible. Their interfaces guide users naturally through tasks without overwhelming them with 
                options or unnecessary embellishments.
              </p>

              <p>
                The challenge lies in knowing when enough is enough. Too much minimalism can make an interface 
                feel cold or confusing. The goal is to find that sweet spot where simplicity enhances rather 
                than hinders the user experience.
              </p>
            </div>
          </div>

          <div className="mt-24 space-y-8">
            <h3 className="text-2xl font-bold">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="group cursor-pointer hover-lift border-0">
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500" />
                    <CardContent className="p-6 space-y-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <h4 className="text-lg font-semibold group-hover:gradient-text transition-all">
                        {post.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
