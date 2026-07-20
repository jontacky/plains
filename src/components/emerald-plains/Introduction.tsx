import { Award, CheckCircle2 } from "lucide-react";

export const Introduction = () => {
  return (
    <section id="strategy" className="scroll-mt-28 py-24 bg-background">
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
              <p className="text-2xl font-bold">Built with Discipline</p>
              <p className="text-sm">From production to market-ready value</p>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-primary">OUR STRATEGIC DIRECTION</p>
          <h2 className="text-4xl font-bold my-4">More Than Farming Alone</h2>
          <p className="font-semibold text-lg text-gray-300">Building control across the agricultural value chain</p>
          <p className="mt-4 text-gray-400">
            Our long-term value will come from the ability to produce, preserve, move, and eventually process agricultural output with discipline. We are strengthening the systems that connect farm production to market-ready value.
          </p>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Reliable production built on crop planning and field supervision
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Post-harvest control that protects quality and reduces losses
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
              Phased value addition guided by proven supply and demand
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            Our immediate focus is to strengthen production and establish a dependable post-harvest operating system before expanding into processing and branded agricultural products.
          </p>
          <div className="mt-6">
            <a
              href="#partnerships"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Explore Partnership Areas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
