import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    img: "/akuse.png",
    title: "Akuse Project",
    category: "Agriculture",
    showOverlay: true,
  },
  {
    img: "/brewniase.png",
    title: "Brewniase (Oti Region) Project",
    category: "Community Farming",
    showOverlay: true,
  },
  {
    img: "/accra.png",
    title: "Accra Urban Garden Project",
    category: "Urban Agriculture",
    showOverlay: true,
  },
  {
    img: "/tamale.png",
    title: "Tamale Project",
    category: "Rural Agriculture",
    showOverlay: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm uppercase tracking-widest text-gray-400">RECENTLY COMPLETED WORK</p>
        <h3 className="text-4xl font-bold my-4 text-white">Explore Our Projects</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden border-none">
                    <CardContent className="relative p-0 aspect-[4/5]">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                      {project.showOverlay && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                          <p className="text-sm text-gray-300">{project.category}</p>
                          <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">{project.title}</h4>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-primary bg-transparent border-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-4 text-primary bg-transparent border-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};