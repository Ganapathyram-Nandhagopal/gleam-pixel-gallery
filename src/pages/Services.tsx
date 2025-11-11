import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Code2, Briefcase, Cog, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "ERP Implementation",
      description: "Expert implementation of ERPNext and Odoo tailored to your business needs. Streamline your operations with powerful, open-source ERP solutions.",
      features: [
        "ERPNext Setup & Configuration",
        "Odoo Implementation",
        "Data Migration",
        "System Integration",
        "Training & Support",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic consulting to optimize your business processes and leverage technology for maximum efficiency and growth.",
      features: [
        "Process Optimization",
        "Digital Transformation",
        "Technology Strategy",
        "Workflow Analysis",
        "Change Management",
      ],
    },
    {
      icon: Code2,
      title: "ERP Development & Customization",
      description: "Custom ERP development and modifications using the powerful Frappe Framework to meet your unique business requirements.",
      features: [
        "Custom Module Development",
        "Frappe Framework Expertise",
        "API Integration",
        "Custom Reports & Dashboards",
        "Performance Optimization",
      ],
    },
    {
      icon: Monitor,
      title: "Web/App Development",
      description: "Modern, responsive web and mobile applications built with cutting-edge technologies for exceptional user experiences.",
      features: [
        "React & TypeScript",
        "Progressive Web Apps",
        "Mobile-First Design",
        "API Development",
        "UI/UX Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive solutions for modern businesses—from ERP implementation to custom web development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover-lift border animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-foreground text-background">
                    <service.icon size={32} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <NavLink to="/contact.html">
                    <Button variant="premium" className="w-full">
                      Get Started
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-32 text-center">
            <h2 className="font-sans text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {["Discovery", "Strategy", "Execution", "Support"].map((step, index) => (
                <div key={index} className="animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-2">{step}</h3>
                  <p className="text-muted-foreground text-sm">
                    {index === 0 && "Understanding your needs and goals"}
                    {index === 1 && "Planning the perfect solution"}
                    {index === 2 && "Bringing your vision to life"}
                    {index === 3 && "Ongoing maintenance and growth"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center py-16 bg-secondary/50 rounded-3xl animate-fade-in">
            <h2 className="font-sans text-4xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>
            <NavLink to="/contact.html">
              <Button variant="premium" size="lg">
                Contact Us Today
              </Button>
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;