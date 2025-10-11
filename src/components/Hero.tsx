import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8 animate-fade-in">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          Designing{" "}
          <span className="gradient-text">Premium</span>
          <br />
          Experiences
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          Crafting intuitive, user-centered digital products that blend creativity with purpose
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            variant="premium"
            className="group"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
