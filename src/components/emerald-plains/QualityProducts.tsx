import { LineChart, ShieldCheck } from "lucide-react";

export const QualityProducts = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <img
            src="/images/nursery-overview.jpg"
            alt="Seedling nursery at Emerald Plains"
            className="rounded-lg w-full"
          />
          <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
        </div>
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-primary">OPERATIONAL DISCIPLINE</p>
          <h3 className="text-4xl font-bold my-4">Strengthening Reliable Supply</h3>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Production Built on Evidence</h4>
                <p className="text-gray-400 mt-2">
                  We are strengthening crop-level economics, irrigation control, field supervision, and yield tracking before expanding acreage faster than management capacity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Protecting Value After Harvest</h4>
                <p className="text-gray-400 mt-2">
                  Our post-harvest direction brings together harvest scheduling, batch recording, grading, packaging, dispatch, buyer coordination, and settlement discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
