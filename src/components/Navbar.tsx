import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) => (
    <>
      <NavLink 
        to="/" 
        onClick={onLinkClick}
        className={({ isActive }) => 
          `${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors ${mobile ? "text-lg py-2 block" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        onClick={onLinkClick}
        className={({ isActive }) => 
          `${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors ${mobile ? "text-lg py-2 block" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink 
        to="/services" 
        onClick={onLinkClick}
        className={({ isActive }) => 
          `${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors ${mobile ? "text-lg py-2 block" : ""}`
        }
      >
        Services
      </NavLink>
      <NavLink 
        to="/clients" 
        onClick={onLinkClick}
        className={({ isActive }) => 
          `${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors ${mobile ? "text-lg py-2 block" : ""}`
        }
      >
        Clients
      </NavLink>
      <NavLink 
        to="/blog" 
        onClick={onLinkClick}
        className={({ isActive }) => 
          `${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors ${mobile ? "text-lg py-2 block" : ""}`
        }
      >
        Blog
      </NavLink>
      <NavLink to="/contact" onClick={onLinkClick}>
        <Button variant="premium" size="sm" className={mobile ? "w-full" : ""}>
          Contact
        </Button>
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold gradient-text">
            #Ganapathyram
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks mobile onLinkClick={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
