import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "The ERP implementation transformed our entire operation. We've seen a 40% increase in efficiency and our team loves the new system.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Global Logistics",
      content: "Outstanding consulting and implementation. The custom Frappe solutions perfectly match our complex workflow requirements.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartUp Inc",
      content: "From web design to ERP setup, every deliverable exceeded expectations. Professional, responsive, and truly expert in their field.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CTO, Manufacturing Co",
      content: "The Odoo implementation and custom development work was flawless. Our production tracking has never been more accurate.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Managing Partner, Consulting Firm",
      content: "Excellent business consulting and strategy. They helped us identify inefficiencies we didn't even know existed.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Director, Retail Chain",
      content: "The custom ERPNext modules developed for us have become integral to our daily operations. Highly recommend their services.",
      rating: 5,
    },
  ];

  const clients = [
    { name: "TechCorp", industry: "Technology" },
    { name: "Global Logistics", industry: "Supply Chain" },
    { name: "StartUp Inc", industry: "E-commerce" },
    { name: "Manufacturing Co", industry: "Manufacturing" },
    { name: "Consulting Firm", industry: "Professional Services" },
    { name: "Retail Chain", industry: "Retail" },
    { name: "Healthcare Plus", industry: "Healthcare" },
    { name: "Finance Group", industry: "Finance" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to partner with amazing companies across diverse industries to deliver exceptional results.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="font-serif text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Client Logos Grid */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">
              Featured <span className="gradient-text">Clients</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-2xl border bg-card flex flex-col items-center justify-center p-6 hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))] mb-3"></div>
                  <h3 className="font-semibold text-center mb-1">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-center mb-12">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-2xl p-8 hover-lift animate-slide-up"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[hsl(var(--gradient-yellow))] text-[hsl(var(--gradient-yellow))]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))]"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center py-16 bg-secondary/50 rounded-3xl animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Join Our <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business? Let's create something amazing together.
            </p>
            <NavLink to="/contact">
              <Button variant="premium" size="lg">
                Start Your Project
              </Button>
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;