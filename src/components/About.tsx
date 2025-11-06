import { Badge } from "@/components/ui/badge";

const skills = [
  "ERP Implementation", "Business Analyst", "ERPNext", "Odoo", 
  "OFBiz", "Frappe Framework", "Figma"
];

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I graduated with a degree in Commerce, specializing in Computer Applications 🎓. This laid the foundation for my journey into the world of ERP solutions. I initially kick-started my career as an ERPNext Implementation Consultant 🛠️, where I gained invaluable experience and insight into the ERP landscape.
              </p>
              <p>
                With comprehensive knowledge and hands-on experience in ERPNext Implementation, Business Development 📈, Project Management 📊, and Consulting 💡, I have the skill set to deliver high-quality ERP solutions tailored to meet the unique needs of each client.
              </p>
              <p>
                At present, my role is laser-focused on spearheading business development initiatives 🚀. I am keenly concentrated on the Manufacturing 🏭, Service 📞, and Healthcare 🏥 sectors, where I aim to implement ERP solutions that streamline operations, enhance productivity, and drive business growth.
              </p>
              <p>
                My multidisciplinary expertise ensures that I can offer end-to-end solutions, right from project inception to successful implementation 🌐.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tools & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
