import { Badge } from "@/components/ui/badge";
import { Sprout, Truck, Users } from "lucide-react";

const produce = [
  {
    name: "Habanero Pepper",
    window: "Harvested and graded from active field blocks.",
    buyer: "Retail + Wholesale + Export",
    image: "/images/F9AD99D1-BE89-4519-B8FB-4769654EE0E3_4_5005_c.jpeg",
    alt: "Fresh green habanero peppers ready for sorting",
  },
  {
    name: "Kale",
    window: "Produced as part of seasonal leafy-vegetable planning.",
    buyer: "Retail + Wholesale",
    image: "/produce-real/kale.jpg",
    alt: "Fresh kale leaves bundled for market",
  },
  {
    name: "Tomatoes",
    window: "Managed under seasonal crop rotation and market demand.",
    buyer: "Retail + Wholesale",
    image: "/produce-real/tomatoes.jpg",
    alt: "Fresh red tomatoes in harvest display",
  },
  {
    name: "Broccoli & Cauliflower",
    window: "Scheduled in rotation programs with quality-focused handling.",
    buyer: "Wholesale + Export",
    image: "/produce-real/broccoli-cauliflower.jpg",
    alt: "Broccoli and cauliflower side by side",
  },
  {
    name: "Lettuce",
    window: "Grown for fast-cycle supply windows and consistent freshness.",
    buyer: "Retail + Wholesale",
    image: "/produce-real/lettuce.jpg",
    alt: "Lettuce heads harvested for market",
  },
  {
    name: "Cassava",
    window: "Field-grown root crop prepared for local and trade channels.",
    buyer: "Wholesale",
    image: "/produce-real/cassava.jpg",
    alt: "Cassava roots prepared after harvest",
  },
];

export const PopularFoods = () => {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-gray-300 text-center">SEASONAL PRODUCE</p>
        <h3 className="text-4xl font-bold my-4 text-white text-center">Our Seasonal Produce Portfolio</h3>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          Product images are now served from local assets for reliable loading. Habanero photos are from Emerald Plains fields, and the
          remaining produce images are verified product references.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <p className="font-semibold">Retail Buyers</p>
            </div>
            <p className="text-sm text-gray-300">Home orders and weekly kitchen supply through direct WhatsApp support.</p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Truck className="w-5 h-5 text-primary" />
              <p className="font-semibold">Wholesale Buyers</p>
            </div>
            <p className="text-sm text-gray-300">Structured volumes for markets, schools, hotels, and distributors.</p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-background/70 p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Sprout className="w-5 h-5 text-primary" />
              <p className="font-semibold">Export-Ready Mindset</p>
            </div>
            <p className="text-sm text-gray-300">Sorting, packing, and communication routines built for local and cross-border trade.</p>
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
