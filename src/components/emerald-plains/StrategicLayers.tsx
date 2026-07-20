import { ArrowRight, Factory, Network, Sprout } from "lucide-react";

const layers = [
  {
    number: "01",
    title: "Production",
    unit: "Reliable agricultural supply",
    description:
      "Company-managed farms, long-term crop development, and structured farmer participation designed around known costs, yields, harvest windows, and market channels.",
    icon: Sprout,
    focus: "Current focus",
  },
  {
    number: "02",
    title: "Post-Harvest Operating System",
    unit: "Protecting value after harvest",
    description:
      "Harvest scheduling, intake, grading, packaging, aggregation, logistics coordination, buyer allocation, and settlement working as one controlled flow.",
    icon: Network,
    focus: "Current focus",
  },
  {
    number: "03",
    title: "Processing & Value Addition",
    unit: "Creating longer-life agricultural value",
    description:
      "A future layer for practical processing and branded products, introduced as reliable supply, measurable surplus, and proven market demand develop.",
    icon: Factory,
    focus: "Future layer",
  },
];

export const StrategicLayers = () => (
  <section id="operations" className="scroll-mt-28 bg-secondary py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary">OUR OPERATING ARCHITECTURE</p>
        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Three connected layers. One disciplined system.</h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">
          We are building in sequence—strengthening production and post-harvest control first, then using proven supply and market data to guide future value addition.
        </p>
      </div>

      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {layers.map(({ number, title, unit, description, icon: Icon, focus }) => (
          <article key={number} className="grid gap-6 py-9 md:grid-cols-[90px_1fr_1.35fr_auto] md:items-center">
            <div className="flex items-center gap-4 md:block">
              <span className="text-sm font-semibold text-primary">{number}</span>
              <Icon className="mt-3 h-7 w-7 text-primary md:block" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-primary">{focus}</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400">{unit}</p>
            </div>
            <p className="leading-relaxed text-gray-300">{description}</p>
            <a href="#partnerships" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white">
              Partnership areas <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
