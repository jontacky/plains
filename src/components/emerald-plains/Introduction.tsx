import { Award, CheckCircle2 } from "lucide-react";

export const Introduction = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <img
            src="/field.png"
            alt="Family in a cornfield"
            className="rounded-lg w-full"
          />
          <div className="absolute -bottom-8 -left-8 bg-primary/20 backdrop-blur-sm text-white p-6 rounded-lg flex items-center space-x-4 border border-primary/30">
            <Award className="w-12 h-12 text-primary" />
            <div>
              <p className="text-3xl font-bold">10</p>
              <p className="text-sm">Projects Completed and ongoing</p>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-primary">OUR INTRODUCTION</p>
          <h3 className="text-4xl font-bold my-4">Sustainable Farming, Trusted Quality</h3>
          <p className="font-semibold text-lg text-gray-300">Building a healthier future with nature’s best harvests</p>
          <p className="mt-4 text-gray-400">
            At Emerald Plains, we combine tradition and innovation to deliver nutrient-rich crops and sustainable solutions for communities and markets alike.
          </p>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Wholesome produce grown with care
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Sustainably meeting tomorrow’s demand
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Fresh, natural, and chemical-free
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            Our team is dedicated to supporting communities across Ghana with innovative and sustainable farming practices. From seed to harvest, we ensure every step adds value to both farmers and consumers.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Learn More About Our Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};