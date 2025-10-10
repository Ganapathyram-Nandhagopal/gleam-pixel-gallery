import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  const experience = [
    { year: "2020-Present", title: "Senior UI/UX Designer", company: "Design Studio" },
    { year: "2018-2020", title: "UI/UX Designer", company: "Tech Company" },
    { year: "2016-2018", title: "Junior Designer", company: "Creative Agency" },
  ];

  const skills = [
    "UI/UX Design",
    "Web Development",
    "ERP Implementation",
    "Business Consulting",
    "Figma",
    "React",
    "TypeScript",
    "ERPNext",
    "Odoo",
    "Frappe Framework",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
              A passionate designer and developer crafting premium digital experiences with a focus on ERP solutions and modern web applications.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
            <div className="animate-slide-up">
              <h2 className="font-serif text-3xl font-bold mb-6">My Story</h2>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in UI/UX design and development, I've had the privilege of working with diverse clients across various industries. My journey began with a passion for creating beautiful, functional interfaces and evolved into specializing in enterprise resource planning solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                I believe that great design isn't just about aesthetics—it's about solving real business problems. That's why I've dedicated myself to mastering both the creative and technical aspects of digital product development.
              </p>
              <p className="text-muted-foreground">
                Today, I help businesses transform their operations through custom ERP implementations, strategic consulting, and cutting-edge web applications.
              </p>
            </div>

            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))] rounded-2xl aspect-square"></div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20 animate-slide-up">
            <h2 className="font-serif text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-primary pl-6 py-2 hover:border-[hsl(var(--gradient-pink))] transition-colors"
                >
                  <p className="text-sm text-muted-foreground mb-1">{item.year}</p>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20 animate-slide-up">
            <h2 className="font-serif text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 bg-secondary/50 rounded-3xl animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business with innovative solutions? Let's discuss your project.
            </p>
            <NavLink to="/contact">
              <Button variant="premium" size="lg">
                Get in Touch
              </Button>
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;