import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Twitter, Linkedin, Facebook, Share2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogMinimalist from "@/assets/blog-minimalist.jpg";
import blogDesignSystems from "@/assets/blog-design-systems.jpg";
import blogColorPsychology from "@/assets/blog-color-psychology.jpg";
import blogMicrointeractions from "@/assets/blog-microinteractions.jpg";
import blogAccessibility from "@/assets/blog-accessibility.jpg";
import blogAiDesign from "@/assets/blog-ai-design.jpg";
import blogErpInventory from "@/assets/blog-erp-inventory.jpg";

const blogPostsData = [
  {
    id: "1",
    title: "The Art of Minimalist Design",
    category: "Design Theory",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: blogMinimalist,
    content: "Minimalist design is more than just removing elements—it's about finding the perfect balance between form and function, creating experiences that feel effortless and intuitive."
  },
  {
    id: "2",
    title: "Building Design Systems That Scale",
    category: "Design Systems",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    image: blogDesignSystems,
    content: "A comprehensive guide to creating consistent, maintainable design systems for growing products."
  },
  {
    id: "3",
    title: "Color Psychology in UI Design",
    category: "UI Design",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    image: blogColorPsychology,
    content: "Understanding how colors influence user behavior and emotional responses in digital interfaces."
  },
  {
    id: "4",
    title: "Microinteractions That Delight",
    category: "UX Design",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    image: blogMicrointeractions,
    content: "Small details that make a big difference in user experience and product satisfaction."
  },
  {
    id: "5",
    title: "Designing for Accessibility",
    category: "Accessibility",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    image: blogAccessibility,
    content: "Creating inclusive digital experiences that work for everyone, regardless of ability."
  },
  {
    id: "6",
    title: "The Future of AI in Design",
    category: "Technology",
    date: "Feb 15, 2025",
    readTime: "10 min read",
    image: blogAiDesign,
    content: "How artificial intelligence is transforming the design process and what it means for creators."
  },
  {
    id: "7",
    title: "Inventory Mismatch & Stock Losses — How ERP Brings 100% Stock Accuracy",
    category: "ERP & Business",
    date: "Mar 20, 2025",
    readTime: "12 min read",
    image: blogErpInventory,
    content: "Inventory mismatch is one of the most common and costly problems businesses face today. Whether you run a trading business, retail shop, manufacturing unit, or distribution company, stock inaccuracy directly impacts profit, customer satisfaction, and cash flow."
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const currentPost = blogPostsData.find(post => post.id === id) || blogPostsData[0];
  
  const relatedPosts = blogPostsData
    .filter(post => post.id !== id)
    .slice(0, 2);

  useEffect(() => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // Update Open Graph meta tags for social sharing
    const ogTags = [
      { property: 'og:title', content: currentPost.title },
      { property: 'og:description', content: currentPost.content },
      { property: 'og:image', content: `https://ganapathyram.vercel.app${currentPost.image}` },
      { property: 'og:url', content: `https://ganapathyram.vercel.app/blog/${id}` },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: currentPost.title },
      { name: 'twitter:description', content: currentPost.content },
      { name: 'twitter:image', content: `https://ganapathyram.vercel.app${currentPost.image}` }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(
        tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`
      );
      
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    document.title = `${currentPost.title} | Ganapathyram Nandhagopal`;
  }, [currentPost, id]);

  const shareUrl = `https://ganapathyram.vercel.app/blog/${id}`;
  const shareTitle = currentPost.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch(platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      toast({
        title: "Link copied!",
        description: "Blog post URL has been copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <article className="max-w-4xl mx-auto px-6 md:px-12">
          <Link to="/blog.html">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className={`space-y-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
            <div className="space-y-4">
              <Badge variant="secondary">{currentPost.category}</Badge>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {currentPost.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{currentPost.date}</span>
                <span>•</span>
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-xl leading-relaxed text-muted-foreground">
                {currentPost.content}
              </p>

              {id === "7" ? (
                // ERP Blog Post Content
                <>
                  <p>
                    In this blog, let's understand: Why inventory mismatches happen, how much loss they create, 
                    live table-based ERP entry examples showing how ERP fixes the problem, and how businesses 
                    achieve near 100% stock accuracy with ERP.
                  </p>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ What Is Inventory Mismatch?</h2>
                  <p>
                    Inventory mismatch means the physical stock in your warehouse does not match the system 
                    stock recorded in your software/spreadsheet.
                  </p>
                  
                  <p className="font-semibold">Common causes:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Manual data entry errors</li>
                    <li>Missing GRN (Goods Receipt Note)</li>
                    <li>Unrecorded stock issues</li>
                    <li>Wrong packing / wrong bin</li>
                    <li>Theft or misplacement</li>
                    <li>Wrong UOM conversion (box vs piece)</li>
                    <li>Expired or damaged items not recorded</li>
                  </ul>
                  <p>Even a 5% mismatch affects profitability significantly.</p>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ Live Example: How Inventory Mismatch Happens (Without ERP)</h2>
                  <p>Let's take an example item: <strong>Bluetooth Speaker</strong>.</p>
                  <p>
                    <strong>Scenario:</strong> Warehouse receives 100 units. Packing team takes 10 units 
                    urgently without updating Excel.
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">Step</th>
                          <th className="border border-border px-4 py-2 text-left">Activity</th>
                          <th className="border border-border px-4 py-2 text-left">Physical Stock</th>
                          <th className="border border-border px-4 py-2 text-left">System Stock</th>
                          <th className="border border-border px-4 py-2 text-left">Issue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2">1</td>
                          <td className="border border-border px-4 py-2">Supplier delivers 100 units</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2">0</td>
                          <td className="border border-border px-4 py-2">No entry made</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">2</td>
                          <td className="border border-border px-4 py-2">Storekeeper updates Excel</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2">OK</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">3</td>
                          <td className="border border-border px-4 py-2">Packing team takes 10 units, forgets to update Excel</td>
                          <td className="border border-border px-4 py-2">90</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2 text-destructive font-semibold">Mismatch (10 units)</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">4</td>
                          <td className="border border-border px-4 py-2">Sales team books order for 100 units</td>
                          <td className="border border-border px-4 py-2">90</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2">Wrong confirmation</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">5</td>
                          <td className="border border-border px-4 py-2">Warehouse finds only 90 units physically</td>
                          <td className="border border-border px-4 py-2">90</td>
                          <td className="border border-border px-4 py-2">100</td>
                          <td className="border border-border px-4 py-2 text-destructive font-semibold">Customer delay, business loss</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="font-semibold">📌 Direct Loss</p>
                  <p>If each unit costs ₹120:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Loss = 10 × 120 = ₹1,200 (immediate)</li>
                    <li>Plus: lost sales because stock was promised but not available</li>
                  </ul>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ How ERP Eliminates Inventory Mismatch</h2>
                  <p>
                    ERP ensures that every movement of stock is recorded as a document, eliminating manual 
                    errors completely. Below is the same scenario inside an ERP system.
                  </p>

                  <h3 className="font-sans text-2xl font-bold mt-8">🔹 1. Purchase Receipt Entry (GRN)</h3>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">ERP Document</th>
                          <th className="border border-border px-4 py-2 text-left">Field</th>
                          <th className="border border-border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2" rowSpan={5}>Purchase Receipt</td>
                          <td className="border border-border px-4 py-2">Supplier</td>
                          <td className="border border-border px-4 py-2">ABC Electronics</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Item</td>
                          <td className="border border-border px-4 py-2">Bluetooth Speaker</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Quantity Received</td>
                          <td className="border border-border px-4 py-2">100 units</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Stock Location</td>
                          <td className="border border-border px-4 py-2">WH1-Rack-A</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">System Stock After Posting</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">100 units</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="font-semibold">ERP Advantage:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✔ No manual entry</li>
                    <li>✔ Instant stock update</li>
                    <li>✔ Valuation + Ledger updated automatically</li>
                  </ul>

                  <h3 className="font-sans text-2xl font-bold mt-8">🔹 2. Sales Order Entry</h3>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">ERP Document</th>
                          <th className="border border-border px-4 py-2 text-left">Field</th>
                          <th className="border border-border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2" rowSpan={4}>Sales Order</td>
                          <td className="border border-border px-4 py-2">Customer</td>
                          <td className="border border-border px-4 py-2">SmartX Retail</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Item</td>
                          <td className="border border-border px-4 py-2">Bluetooth Speaker</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Ordered Qty</td>
                          <td className="border border-border px-4 py-2">10 units</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Available Stock</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">100 units</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>ERP ensures the sales team only sees live real-time stock.</p>

                  <h3 className="font-sans text-2xl font-bold mt-8">🔹 3. Delivery Note / Stock Issue Entry</h3>
                  <p>Warehouse cannot remove stock without a delivery entry.</p>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">ERP Document</th>
                          <th className="border border-border px-4 py-2 text-left">Field</th>
                          <th className="border border-border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2" rowSpan={4}>Delivery Note</td>
                          <td className="border border-border px-4 py-2">Item</td>
                          <td className="border border-border px-4 py-2">Bluetooth Speaker</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Quantity Issued</td>
                          <td className="border border-border px-4 py-2">10 units</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Picked By</td>
                          <td className="border border-border px-4 py-2">Warehouse Staff</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">System Stock After Posting</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">90 units</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="font-semibold">ERP Advantage:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✔ No stock movement without approval</li>
                    <li>✔ Physical stock = System stock</li>
                    <li>✔ Eliminates mismatch</li>
                  </ul>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ ERP Prevents Unauthorised Movement</h2>
                  <p>If packing team tries to take 10 units without entry:</p>
                  <p className="bg-destructive/10 border border-destructive p-4 rounded-lg text-destructive font-semibold">
                    ERP Alert: "Stock cannot be removed — no Delivery Note created."
                  </p>
                  <p>This completely eliminates loss due to informal stock movements.</p>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ What if a Mismatch Still Occurs? (Stock Reconciliation)</h2>
                  <p>Let's say during audit, actual stock is 89 units instead of 90.</p>
                  
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">Field</th>
                          <th className="border border-border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2">Item</td>
                          <td className="border border-border px-4 py-2">Bluetooth Speaker</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">System Qty</td>
                          <td className="border border-border px-4 py-2">90</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Physical Qty</td>
                          <td className="border border-border px-4 py-2">89</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Difference</td>
                          <td className="border border-border px-4 py-2 text-destructive">-1 (Shortage)</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Reason</td>
                          <td className="border border-border px-4 py-2">Damage / Missing</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Adjusted By</td>
                          <td className="border border-border px-4 py-2">Warehouse Manager</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Updated System Stock</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">89</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="font-semibold">ERP Advantage:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✔ Tracks shortage reason</li>
                    <li>✔ Updates stock + accounting</li>
                    <li>✔ Creates audit trail for investigation</li>
                  </ul>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ Manual System vs ERP — Clear Comparison</h2>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left">Process</th>
                          <th className="border border-border px-4 py-2 text-left">Manual System</th>
                          <th className="border border-border px-4 py-2 text-left">ERP System</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2">Stock Entry</td>
                          <td className="border border-border px-4 py-2">Entered in Excel</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Auto-updated through GRN</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Internal Movements</td>
                          <td className="border border-border px-4 py-2">Not tracked</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Stock Transfer document</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Sales Dispatch</td>
                          <td className="border border-border px-4 py-2">Taken informally</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Delivery Note required</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Accuracy</td>
                          <td className="border border-border px-4 py-2">Low (70–80%)</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">High (98–100%)</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Accounting Impact</td>
                          <td className="border border-border px-4 py-2">Not updated</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Live valuation</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Audit Trail</td>
                          <td className="border border-border px-4 py-2">None</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Full history</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Theft/Damage</td>
                          <td className="border border-border px-4 py-2">Goes unnoticed</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Mandatory reason tracking</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2">Mismatch Frequency</td>
                          <td className="border border-border px-4 py-2">Very high</td>
                          <td className="border border-border px-4 py-2 text-primary font-semibold">Almost zero</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ Real Case Study Result</h2>
                  <p className="font-semibold">Company: FMCG Distributor – Tamil Nadu</p>
                  
                  <p className="font-semibold mt-4">Before ERP:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>❌ Mismatch 20–25%</li>
                    <li>❌ Repeated stock-outs</li>
                    <li>❌ Dead stock worth ₹1 lakh</li>
                  </ul>

                  <p className="font-semibold mt-4">After ERP:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✔ Mandatory GRN + Delivery Notes</li>
                    <li>✔ Barcode scanning</li>
                    <li>✔ FIFO picking</li>
                    <li>✔ Monthly stock audit via ERP</li>
                  </ul>

                  <p className="font-semibold mt-4">Final Result:</p>
                  <ul className="space-y-2 text-primary font-semibold">
                    <li>📌 Mismatch dropped to 1–2%</li>
                    <li>📌 Savings approx ₹1.8 lakhs in 3 months</li>
                    <li>📌 100% customer order fulfillment</li>
                  </ul>

                  <h2 className="font-sans text-3xl font-bold mt-12">⭐ Conclusion</h2>
                  <p>Inventory mismatch is a silent profit-killer. But with a structured ERP:</p>
                  <ul className="space-y-2 text-primary font-semibold">
                    <li>✔ Every movement is tracked</li>
                    <li>✔ Real-time stock accuracy</li>
                    <li>✔ Zero manual errors</li>
                    <li>✔ Transparent warehouse operations</li>
                    <li>✔ Faster order processing</li>
                  </ul>
                  <p>This is how businesses achieve near 100% stock accuracy and drastically reduce losses.</p>
                </>
              ) : (
                // Default blog post content (for other posts)
                <>
                  <h2 className="font-sans text-3xl font-bold mt-12">The Philosophy Behind Minimalism</h2>
                  <p>
                    At its core, minimalist design is about intentionality. Every element on the screen should 
                    serve a purpose, whether functional or aesthetic. This approach forces designers to make 
                    deliberate choices about what to include and, more importantly, what to leave out.
                  </p>

                  <h2 className="font-sans text-3xl font-bold mt-12">Less is More</h2>
                  <p>
                    This famous architectural principle applies perfectly to digital design. By reducing visual 
                    clutter and focusing on essential elements, we create interfaces that are easier to understand 
                    and more pleasant to use. White space becomes an active design element, not empty space to be filled.
                  </p>

                  <h2 className="font-sans text-3xl font-bold mt-12">Key Principles</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Start with content and build the design around it</li>
                    <li>Use white space strategically to create visual hierarchy</li>
                    <li>Limit your color palette to create cohesion</li>
                    <li>Choose typography that is both readable and beautiful</li>
                    <li>Remove decorative elements that don't add value</li>
                  </ul>

                  <h2 className="font-sans text-3xl font-bold mt-12">Real-World Application</h2>
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
                </>
              )}
            </div>
          </div>

          {/* Social Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Share2 className="h-5 w-5" />
                <span className="font-medium">Share this article</span>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyLink}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Copy link"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('linkedin')}
                  className="hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                  className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-24 space-y-8">
            <h3 className="font-sans text-2xl font-bold">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="group cursor-pointer hover-lift border-0">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
