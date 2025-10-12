import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  const experience = [
    { year: "2024-Present", title: "Founder", company: "Bude Global Enterprise" },
    { year: "2023-2024", title: "ERP Functional Consultant", company: "Frutter Software Labs" },
    { year: "2021-2023", title: "Freelancer", company: "Business Branding & Designing" },
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
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
              A passionate designer and developer crafting premium digital experiences with a focus on ERP solutions and modern web applications.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="animate-slide-up">
              <h2 className="font-sans text-3xl font-bold mb-6">My Story</h2>
              <p className="text-muted-foreground mb-4">
                I graduated with a degree in Commerce, specializing in Computer Applications 🎓. This laid the foundation for my journey into the world of ERP solutions. I initially kick-started my career as an ERPNext Implementation Consultant 🛠️, where I gained invaluable experience and insight into the ERP landscape.
              </p>
              <p className="text-muted-foreground mb-4">
                With comprehensive knowledge and hands-on experience in ERPNext Implementation, Business Development 📈, Project Management 📊, and Consulting 💡, I have the skill set to deliver high-quality ERP solutions tailored to meet the unique needs of each client.
              </p>
              <p className="text-muted-foreground">
                At present, my role is laser-focused on spearheading business development initiatives 🚀. I am keenly concentrated on the Manufacturing 🏭, Service 📞, and Healthcare 🏥 sectors, where I aim to implement ERP solutions that streamline operations, enhance productivity, and drive business growth.
              </p>
              <p className="text-muted-foreground mt-4">
                My multidisciplinary expertise ensures that I can offer end-to-end solutions, right from project inception to successful implementation 🌐.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20 animate-slide-up">
            <h2 className="font-sans text-3xl font-bold mb-8">Experience</h2>
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
            <h2 className="font-sans text-3xl font-bold mb-8">Skills & Expertise</h2>
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
            <h2 className="font-sans text-4xl font-bold mb-6">
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