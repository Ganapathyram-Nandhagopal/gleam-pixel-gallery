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
          Hi, I'm a UI/UX designer with 8+ years of experience creating beautiful, functional digital products. 
          I specialize in user-centered design that drives results for startups and Fortune 500 companies.
        </p>

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
