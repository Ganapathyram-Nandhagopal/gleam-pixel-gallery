import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Cog, Briefcase, Code2, Monitor, Check, ArrowRight } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Cog,
      label: "ERP",
      title: "ERP Implementation",
      features: [
        "ERPNext Setup & Configuration",
        "Odoo Implementation",
        "Data Migration & Cleanup",
        "System Integration",
        "User Training & Support",
        "Go-Live Assistance",
      ],
    },
    {
      icon: Briefcase,
      label: "Consulting",
      title: "Business Consulting",
      features: [
        "Process Optimization",
        "Digital Transformation",
        "Technology Strategy",
        "Workflow Analysis",
        "Change Management",
        "Performance Improvement",
      ],
    },
    {
      icon: Code2,
      label: "Development",
      title: "ERP Development",
      features: [
        "Custom Module Development",
        "Frappe Framework Expertise",
        "API Integration",
        "Custom Reports & Dashboards",
        "Performance Optimization",
        "Third-party Integrations",
      ],
    },
    {
      icon: Monitor,
      label: "Web/App",
      title: "Web/App Development",
      features: [
        "React & TypeScript Apps",
        "Progressive Web Apps",
        "Mobile-First Design",
        "API Development",
        "UI/UX Design",
        "Maintenance & Support",
      ],
    },
  ];

  const currentService = services[activeService];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              My Services
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions tailored to transform your operations and drive growth
            </p>
          </div>

          {/* Icon Selector */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 p-2 rounded-full border border-border bg-card shadow-sm">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`relative flex flex-col items-center transition-all duration-300 ${
                      isActive ? "scale-105" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-foreground text-background"
                          : "bg-transparent text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Label */}
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {currentService.label}
            </span>
          </div>

          {/* Service Card */}
          <Card className="border border-border bg-card shadow-lg animate-fade-in">
            <CardContent className="p-6 sm:p-8 md:p-10">
              {/* Title with Arrow */}
              <div className="flex items-center gap-3 mb-8">
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-foreground">
                  {currentService.title}
                </h2>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Get Started Button */}
              <NavLink to="/contact.html">
                <Button 
                  className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-6 text-base"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
