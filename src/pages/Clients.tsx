import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";
import ad3InfotechLogo from "@/assets/client-ad3-infotech.jpg";
import dropsChemicalsLogo from "@/assets/client-drops-chemicals.jpg";

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
    { name: "AD3 Infotech", industry: "Technology", logo: ad3InfotechLogo },
    { name: "Drops Chemicals", industry: "Chemical Manufacturing", logo: dropsChemicalsLogo },
    { name: "TechCorp", industry: "Technology" },
    { name: "Global Logistics", industry: "Supply Chain" },
    { name: "StartUp Inc", industry: "E-commerce" },
    { name: "Manufacturing Co", industry: "Manufacturing" },
    { name: "Consulting Firm", industry: "Professional Services" },
    { name: "Retail Chain", industry: "Retail" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We're proud to partner with amazing companies across diverse industries to deliver exceptional results.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "7", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="font-sans text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center py-16 bg-secondary/50 rounded-3xl animate-fade-in">
            <h2 className="font-sans text-4xl font-bold mb-6">
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