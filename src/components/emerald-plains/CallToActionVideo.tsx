import { buildWhatsAppUrl } from "@/lib/contact";
import { ArrowUpRight } from "lucide-react";

export const CallToActionVideo = () => {
  const partnershipMessage =
    "Hello Emerald Plains, I would like to discuss a potential partnership or offtake relationship. My area of interest is:";

  return (
    <section
      id="partnerships"
      className="relative scroll-mt-28 py-36 bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/transplant-team-wide.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center z-10">
        <p className="text-sm uppercase tracking-widest text-primary">PARTNERSHIPS & OFFTAKE</p>
        <h3 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Growing Through Strong Market Relationships
        </h3>
        <p className="mt-5 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Emerald Plains is open to exploring aligned relationships across production, technical collaboration, post-harvest systems, market access, and long-term offtake. We value partnerships that strengthen execution and create dependable agricultural supply.
        </p>
        <div className="mt-8 flex flex-col items-center gap-5">
          <a
            href={buildWhatsAppUrl(partnershipMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-7 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a Strategic Conversation <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-sm text-white/70">Production · Agronomy · Post-harvest · Logistics · Market access · Offtake · Value addition</p>
        </div>
      </div>
    </section>
  );
};
