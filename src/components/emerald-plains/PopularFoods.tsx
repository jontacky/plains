import { Badge } from "@/components/ui/badge";
import { Building2, Handshake, Route } from "lucide-react";

const produce = [
  {
    name: "Habanero Pepper",
    window: "Harvested and graded from active field blocks.",
    buyer: "Fresh produce",
    image: "/images/F9AD99D1-BE89-4519-B8FB-4769654EE0E3_4_5005_c.jpeg",
    alt: "Fresh green habanero peppers ready for sorting",
  },
  {
    name: "Kale",
    window: "Produced as part of seasonal leafy-vegetable planning.",
    buyer: "Seasonal planning",
    image: "/produce-real/kale.jpg",
    alt: "Fresh kale leaves bundled for market",
  },
  {
    name: "Tomatoes",
    window: "Managed under seasonal crop rotation and market demand.",
    buyer: "Seasonal planning",
    image: "/produce-real/tomatoes.jpg",
    alt: "Fresh red tomatoes in harvest display",
  },
  {
    name: "Broccoli & Cauliflower",
    window: "Scheduled in rotation programs with quality-focused handling.",
    buyer: "Market-led production",
    image: "/produce-real/broccoli-cauliflower.jpg",
    alt: "Broccoli and cauliflower side by side",
  },
  {
    name: "Lettuce",
    window: "Grown for fast-cycle supply windows and consistent freshness.",
    buyer: "Fresh produce",
    image: "/produce-real/lettuce.jpg",
    alt: "Lettuce heads harvested for market",
  },
  {
    name: "Cassava",
    window: "Field-grown root crop prepared for local and trade channels.",
    buyer: "Field crop",
    image: "/produce-real/cassava.jpg",
    alt: "Cassava roots prepared after harvest",
  },
];

export const PopularFoods = () => {
  return (
    <section id="products" className="scroll-mt-28 py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-gray-300 text-center">SEASONAL PRODUCE</p>
        <h3 className="text-4xl font-bold my-4 text-white text-center">Our Seasonal Produce Portfolio</h3>
        <p className="text-center text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our portfolio reflects a phased approach to short-cycle vegetables, longer-term crops, and structured supply development. Crop decisions are guided by agronomic fit, production economics, and market demand.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="w-5 h-5 text-primary" />
              <p className="font-semibold">Company-Managed Production</p>
            </div>
            <p className="text-sm text-gray-300">Strengthening crop discipline, water reliability, field supervision, and measurable yield.</p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Handshake className="w-5 h-5 text-primary" />
              <p className="font-semibold">Structured Farmer Participation</p>
            </div>
            <p className="text-sm text-gray-300">Expanding controlled supply through selected growers, training, supervision, and coordination.</p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Route className="w-5 h-5 text-primary" />
              <p className="font-semibold">Market-Linked Planning</p>
            </div>
            <p className="text-sm text-gray-300">Connecting planting and harvest decisions to buyer channels and post-harvest capacity.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {produce.map((item) => (
            <article key={item.name} className="bg-background rounded-lg p-6 border border-border">
              <div className="mb-4 overflow-hidden rounded-lg border border-border bg-card/60">
                <img src={item.image} alt={item.alt} className="w-full h-36 object-cover" loading="lazy" />
              </div>
              <h4 className="text-lg font-semibold text-white">{item.name}</h4>
              <p className="text-sm text-gray-300 mt-2">{item.window}</p>
              <Badge className="mt-4 bg-primary text-primary-foreground hover:bg-primary">{item.buyer}</Badge>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
