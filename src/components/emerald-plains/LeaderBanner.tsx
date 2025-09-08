import { Button } from "@/components/ui/button";
import { LineChart } from "lucide-react";

export const LeaderBanner = () => {
  return (
    <section
      className="py-16 bg-primary/80"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/lined-paper.png')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center">
            <LineChart className="w-8 h-8 text-background" />
          </div>
          <h3 className="text-3xl font-semibold text-background">
            We are Leader in Agriculture Market
          </h3>
        </div>
        <Button className="mt-6 md:mt-0 bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg">
          DISCOVER MORE
        </Button>
      </div>
    </section>
  );
};