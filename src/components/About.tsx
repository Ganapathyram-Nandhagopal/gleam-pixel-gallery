import { Badge } from "@/components/ui/badge";

const skills = [
  "Figma", "Sketch", "Adobe XD", "Principle", "After Effects",
  "Framer", "Webflow", "React", "Tailwind CSS", "Typography"
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
                I'm a UI/UX designer passionate about creating digital experiences 
                that are both beautiful and functional. With over 8 years of experience, 
                I've helped startups and Fortune 500 companies bring their visions to life.
              </p>
              <p>
                My design philosophy centers around simplicity, clarity, and delight. 
                I believe great design should be invisible—users shouldn't have to think, 
                they should just enjoy using the product.
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
