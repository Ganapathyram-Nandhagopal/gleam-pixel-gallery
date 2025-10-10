import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold gradient-text">
            Designer
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/clients" 
              className={({ isActive }) => 
                isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Clients
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Blog
            </NavLink>
            <NavLink to="/contact">
              <Button variant="premium" size="sm">
                Contact
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
