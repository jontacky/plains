import { LineChart, Leaf } from "lucide-react";

export const QualityProducts = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ee4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Family gardening"
            className="rounded-lg w-full"
          />
          <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Organic_logo.svg/1200px-Organic_logo.svg.png" alt="Organic" className="rounded-full p-2" />
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
                  Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor
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
                  Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};