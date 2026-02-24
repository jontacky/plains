import { Award, CheckCircle2 } from "lucide-react";

export const Introduction = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <img
            src="/images/tractor-lead.jpg"
            alt="Field setup with tractor at Emerald Plains"
            className="rounded-lg w-full"
          />
          <div className="absolute -bottom-8 -left-8 bg-primary/20 backdrop-blur-sm text-white p-6 rounded-lg flex items-center space-x-4 border border-primary/30">
            <Award className="w-12 h-12 text-primary" />
            <div>
              <p className="text-3xl font-bold">Family-Led</p>
              <p className="text-sm">Growing and supplying year-round</p>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-primary">OUR ROOTS</p>
          <h2 className="text-4xl font-bold my-4">A Family Farm with Professional Supply Standards</h2>
          <p className="font-semibold text-lg text-gray-300">Warm relationships at the farm gate, disciplined systems in the supply chain</p>
          <p className="mt-4 text-gray-400">
            We pair hands-on family supervision with modern irrigation, crop planning, and practical logistics. This helps us keep quality
            stable across seasons while serving both everyday households and high-volume trade buyers.
          </p>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Family-led cultivation with daily field supervision
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Packhouse routines aligned to wholesale and export workflows
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Traceable harvest lots, clean handling, and clear communication
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            Whether you need a weekly home basket or structured commercial volumes, we treat every order with the same care and accountability.
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
