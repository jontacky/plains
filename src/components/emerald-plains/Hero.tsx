import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/farm1.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto text-left text-white px-4">
        <p className="text-lg text-primary">From Our Plains to Your Plate</p>
        <h2 className="text-4xl md:text-6xl font-bold my-4 leading-tight flex items-center">
          Nurturing Nature, Delivering Quality
          <Leaf className="w-12 h-12 text-primary ml-4 hidden md:block" />
        </h2>
        <p className="max-w-md text-gray-300">
          Emerald Plains is committed to sustainable agriculture, producing fresh, high-quality, and nutrient-rich crops for local and international markets. Our mission is to nurture nature while delivering consistent quality from our fields to the consumer's plate.
        </p>
        <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
          Explore Our Story
        </Button>
      </div>
    </section>
  );
};