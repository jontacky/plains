import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, contactLinks } from "@/lib/contact";
import { Leaf } from "lucide-react";

export const Hero = () => {
  const buyerMessage =
    "Hello Emerald Plains, I want to buy fresh vegetables. Please share current availability, pricing, and volume options.";

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/D415FEB6-2289-4CEF-A88D-E33E67F0A3CA_1_105_c.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto text-left text-white px-4">
        <p className="text-lg text-primary">Family-Grown Vegetables for Homes and Trade Partners</p>
        <h1 className="text-4xl md:text-6xl font-bold my-4 leading-tight flex items-center">
          Family-Grown. Trade-Ready.
          <Leaf className="w-12 h-12 text-primary ml-4 hidden md:block" />
        </h1>
        <p className="max-w-2xl text-gray-200">
          At Emerald Plains, we farm as a family and supply as professionals. Households get produce they trust, while distributors,
          retailers, and trade partners get consistent volumes, clear specifications, and dependable delivery windows.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <a href={buildWhatsAppUrl(buyerMessage)} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black">
            <a href={contactLinks.call}>Call Sales Desk</a>
          </Button>
          <Button asChild variant="secondary" className="px-8 py-6 text-lg">
            <a href={contactLinks.email}>Email Trade Desk</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
