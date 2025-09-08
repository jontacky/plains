import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">CONTACT NOW</p>
          <h3 className="text-4xl font-bold my-4 text-white">GET IN TOUCH NOW</h3>
          <p className="text-gray-400">
            Reach out to Emerald Plains for inquiries, partnerships, or support. We’d love to hear from you and will respond promptly.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">PHONE</p>
                <p className="text-gray-400">+233 267 063 162</p>
                <p className="text-gray-400">+233 249 814 890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">EMAIL</p>
                <p className="text-gray-400">contact@emeraldplains.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">ADDRESS</p>
                <p className="text-gray-400">Emerald Plains HQ, Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Input type="text" placeholder="Phone Number" className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Input type="email" placeholder="Your Email" className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Textarea placeholder="Your Message" className="bg-secondary border-none text-white placeholder:text-gray-500 min-h-[150px]" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center space-x-16 mt-24 text-gray-600">
        <div className="flex items-center gap-2">
          <Facebook className="w-8 h-8" />
          <span className="text-2xl font-semibold">Facebook</span>
        </div>
        <div className="flex items-center gap-2">
          <Twitter className="w-8 h-8" />
          <span className="text-2xl font-semibold">Twitter</span>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="w-8 h-8" />
          <span className="text-2xl font-semibold">Instagram</span>
        </div>
      </div>
    </section>
  );
};