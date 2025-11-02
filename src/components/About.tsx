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
                With over 8 years of experience in UI/UX design, I've partnered with startups 
                and Fortune 500 companies to transform their digital visions into reality. 
                My approach combines aesthetic excellence with strategic thinking to deliver 
                products that users love and businesses trust.
              </p>
              <p>
                I believe the best design is invisible—it guides users naturally without friction, 
                creating delightful experiences that feel effortless. Every pixel, interaction, 
                and animation is crafted with purpose, ensuring beauty and functionality work in 
                perfect harmony.
              </p>
              <p>
                Whether it's reimagining complex workflows or designing from scratch, I bring 
                curiosity, empathy, and precision to every project. Let's create something 
                exceptional together.
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
