import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8 animate-fade-in">
        <div className="space-y-2">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Designing{" "}
            <span className="gradient-text">Premium</span>
            <br />
            Experiences
          </h1>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          A passionate designer and developer crafting premium digital experiences with a focus on ERP solutions and modern web applications.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4 text-base text-muted-foreground leading-relaxed px-4">
          <p>
            I graduated with a degree in Commerce, specializing in Computer Applications 🎓. This laid the foundation for my journey into the world of ERP solutions. I initially kick-started my career as an ERPNext Implementation Consultant 🛠️, where I gained invaluable experience and insight into the ERP landscape.
          </p>
          <p>
            With comprehensive knowledge and hands-on experience in ERPNext Implementation, Business Development 📈, Project Management 📊, and Consulting 💡, I have the skill set to deliver high-quality ERP solutions tailored to meet the unique needs of each client.
          </p>
          <p>
            At present, my role is laser-focused on spearheading business development initiatives 🚀. I am keenly concentrated on the Manufacturing 🏭, Service 📞, and Healthcare 🏥 sectors, where I aim to implement ERP solutions that streamline operations, enhance productivity, and drive business growth.
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-2">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            variant="premium"
            className="group"
            asChild
          >
            <Link to="/services">
              View My Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
