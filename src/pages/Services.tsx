import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Code, Briefcase, Settings, Laptop } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
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
      icon: Code,
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
      icon: Laptop,
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
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses—from ERP implementation to custom web development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))] text-white mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gradient-pink))] mt-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact">
                    <Button variant="premium">
                      Get Started
                    </Button>
                  </NavLink>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-[hsl(var(--gradient-blue)/0.1)] to-[hsl(var(--gradient-pink)/0.1)] hover-lift"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-32 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {["Discovery", "Strategy", "Execution", "Support"].map((step, index) => (
                <div key={index} className="animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{step}</h3>
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
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>
            <NavLink to="/contact">
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