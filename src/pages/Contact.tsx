import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Twitter, Github, MessageCircle, BookOpen } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@designer.com",
      link: "mailto:hello@designer.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Github, link: "#", label: "GitHub" },
    { icon: BookOpen, link: "/blog", label: "Blog" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-slide-up">
              <div className="bg-card border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input placeholder="Your name" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" className="h-12" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="min-h-[200px] resize-none"
                    />
                  </div>

                  <Button variant="premium" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-blue))] flex items-center justify-center text-white flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="font-medium hover:text-[hsl(var(--gradient-pink))] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover-lift"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="animate-fade-in">
            <div className="aspect-[21/9] rounded-3xl bg-gradient-to-br from-[hsl(var(--gradient-blue)/0.1)] to-[hsl(var(--gradient-pink)/0.1)] border flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;