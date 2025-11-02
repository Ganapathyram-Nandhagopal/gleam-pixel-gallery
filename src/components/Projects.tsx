import { Card, CardContent } from "@/components/ui/card";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectBanking from "@/assets/project-banking.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectFitness from "@/assets/project-fitness.jpg";
import projectMusic from "@/assets/project-music.jpg";
import projectTravel from "@/assets/project-travel.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "A modern shopping experience with seamless checkout flow",
    image: projectEcommerce,
  },
  {
    id: 2,
    title: "Banking Mobile App",
    category: "App Design",
    description: "Secure and intuitive financial management on the go",
    image: projectBanking,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Data visualization that tells a compelling story",
    image: projectDashboard,
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "Product Design",
    description: "Motivating users to achieve their health goals",
    image: projectFitness,
  },
  {
    id: 5,
    title: "Music Streaming",
    category: "Web Design",
    description: "Immersive audio experience with smart recommendations",
    image: projectMusic,
  },
  {
    id: 6,
    title: "Travel Booking",
    category: "App Design",
    description: "Simplifying the journey from dream to destination",
    image: projectTravel,
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
              className="group cursor-pointer hover-lift border-0 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
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
