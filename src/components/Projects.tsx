import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "A modern shopping experience with seamless checkout flow",
    color: "from-pink-500 to-blue-500",
  },
  {
    id: 2,
    title: "Banking Mobile App",
    category: "App Design",
    description: "Secure and intuitive financial management on the go",
    color: "from-blue-500 to-green-500",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Data visualization that tells a compelling story",
    color: "from-yellow-500 to-pink-500",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "Product Design",
    description: "Motivating users to achieve their health goals",
    color: "from-green-500 to-blue-500",
  },
  {
    id: 5,
    title: "Music Streaming",
    category: "Web Design",
    description: "Immersive audio experience with smart recommendations",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "Travel Booking",
    category: "App Design",
    description: "Simplifying the journey from dream to destination",
    color: "from-blue-500 to-yellow-500",
  },
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in">
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A collection of projects that showcase design excellence and user-centered thinking
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group cursor-pointer hover-lift border-0 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-64 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`} />
              <CardContent className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
