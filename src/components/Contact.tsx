import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground">
                I'm always open to new opportunities and collaborations. 
                Feel free to reach out through the form or connect with me on social media.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <form className="space-y-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Input placeholder="Your Name" className="rounded-xl" />
            <Input type="email" placeholder="Your Email" className="rounded-xl" />
            <Textarea 
              placeholder="Tell me about your project..." 
              className="rounded-xl min-h-32 resize-none"
            />
            <Button variant="premium" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
