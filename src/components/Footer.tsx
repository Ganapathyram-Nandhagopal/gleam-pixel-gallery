import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const [showBrochure, setShowBrochure] = useState(false);

  return (
    <>
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Ganapathyram Nandhagopal. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <button 
              onClick={() => setShowBrochure(true)} 
              className="hover:text-foreground transition-colors"
            >
              Brochure
            </button>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <Link to="/contact.html" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

      <Dialog open={showBrochure} onOpenChange={setShowBrochure}>
        <DialogContent className="max-w-5xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Company Brochure</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
            <iframe 
              loading="lazy" 
              className="absolute w-full h-full top-0 left-0 border-none"
              src="https://www.canva.com/design/DAG3z0wGq-I/zMtETqmKyXk-9Pe1wXYNoA/view?embed" 
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <a 
            href="https://www.canva.com/design/DAG3z0wGq-I/zMtETqmKyXk-9Pe1wXYNoA/view?utm_content=DAG3z0wGq-I&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
          >
            Black White and Orange Modern Pitch Deck Presentation by Ganapathy
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
