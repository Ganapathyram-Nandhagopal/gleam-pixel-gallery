import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Instagram, MessageCircle, BookOpen } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ganapathyram.n@gmail.com",
      link: "mailto:ganapathyram.n@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6383236424",
      link: "tel:+916383236424",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 6383236424",
      link: "https://wa.me/916383236424",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, link: "https://www.linkedin.com/in/ganapathyramnandhagopal/", label: "LinkedIn" },
    { icon: Instagram, link: "https://www.instagram.com/kavin.117/", label: "Instagram" },
    { icon: Mail, link: "mailto:ganapathyram.n@gmail.com", label: "Email" },
    { icon: Phone, link: "tel:+916383236424", label: "Phone" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
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
                <h2 className="font-sans text-2xl sm:text-3xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6" action="mailto:ganapathyram.n@gmail.com" method="post" encType="text/plain">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input name="name" placeholder="Your name" className="h-12" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input name="email" type="email" placeholder="your@email.com" className="h-12" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input name="subject" placeholder="What's this about?" className="h-12" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      placeholder="Tell me about your project..." 
                      className="min-h-[200px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up">
              <div>
                <h3 className="font-sans text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center text-background flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="font-medium hover:text-primary transition-colors"
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
                <h3 className="font-sans text-2xl font-bold mb-6">Follow Me</h3>
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

          {/* Calendar Booking Section */}
          <div className="animate-fade-in">
            <div className="bg-card border rounded-3xl p-6 sm:p-8 md:p-12">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Book an Appointment</h2>
              <p className="text-sm sm:text-base text-muted-foreground text-center mb-6 sm:mb-8 px-4">
                Schedule a consultation to discuss your project
              </p>
              <div className="w-full mx-auto overflow-hidden rounded-xl sm:rounded-2xl border shadow-lg">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ16-lrn9WUNXCyRbFkCelSzD-4953UiRIX-cf0NZx_AbIop0Tc8hLzdZZweAdvjyXm37fvHBcM3?gv=true"
                  style={{ border: 0, display: 'block' }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="yes"
                  className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;