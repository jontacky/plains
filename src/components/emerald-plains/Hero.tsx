import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";
import { ArrowDownRight } from "lucide-react";

export const Hero = () => {
  const partnershipMessage =
    "Hello Emerald Plains, I would like to explore a potential partnership or offtake conversation.";

  return (
    <section
      id="home"
      className="relative min-h-[760px] h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/D415FEB6-2289-4CEF-A88D-E33E67F0A3CA_1_105_c.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>
      <div className="relative container mx-auto text-left text-white px-4 pt-24">
        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          Building an Integrated Agricultural Value Chain
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-200">
          Emerald Plains is developing a disciplined agribusiness spanning production, post-harvest coordination, and future value addition—connecting reliable agricultural supply with stronger routes to market.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <a href="#strategy">
              Explore Our Strategy
              <ArrowDownRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black">
            <a href={buildWhatsAppUrl(partnershipMessage)} target="_blank" rel="noreferrer">Start a Conversation</a>
          </Button>
        </div>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/70">
          Open to aligned relationships across production, market access, technical collaboration, and long-term offtake.
        </p>
      </div>
    </section>
  );
};
