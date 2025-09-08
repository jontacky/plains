import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-400">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Emerald Plains.</h2>
            <p className="text-sm">
              Emerald Plains is committed to sustainable agriculture, producing fresh, high-quality, and nutrient-rich crops for local and international markets. Our mission is to nurture nature while delivering consistent quality from our fields to the consumer's plate.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Youtube /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">New Projects</a></li>
              <li><a href="#" className="hover:text-primary">Our Services</a></li>
              <li><a href="#" className="hover:text-primary">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <form className="mt-4 flex">
              <Input type="email" placeholder="Enter your mail here..." className="bg-background border-none rounded-r-none" />
              <Button type="submit" size="icon" className="bg-primary rounded-l-none">
                <Send className="w-4 h-4 text-primary-foreground" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © Emerald Plains. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};