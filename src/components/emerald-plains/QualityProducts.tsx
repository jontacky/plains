import { LineChart, Leaf } from "lucide-react";

export const QualityProducts = () => {
  return (
    <section id="modern-agriculture" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <img
            src="/images/nursery-overview.jpg"
            alt="Seedling nursery at Emerald Plains"
            className="rounded-lg w-full"
          />
          <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
            <Leaf className="w-10 h-10 text-primary" />
          </div>
        </div>
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-primary">MODERN AGRICULTURE</p>
          <h3 className="text-4xl font-bold my-4">Providing High Quality Products</h3>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Our Agriculture Growth</h4>
                <p className="text-gray-400 mt-2">
                  We are scaling through structured field layout, nursery planning, mulching, and drip-ready bed preparation to keep
                  output more consistent across planting cycles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Making Healthy Foods</h4>
                <p className="text-gray-400 mt-2">
                  We focus on clean handling, field monitoring, and careful sorting before dispatch so homes, retailers, and trade buyers
                  receive produce that is fresh, safe, and market-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
