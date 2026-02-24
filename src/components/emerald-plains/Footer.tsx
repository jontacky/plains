import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brandContact, buildWhatsAppUrl, contactLinks } from "@/lib/contact";
import { Mail, MessageCircle, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Modern Agriculture", href: "#modern-agriculture" },
  { label: "Footprint", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get("email") as string)?.trim();
    const message = `Hello Emerald Plains, please add ${email || "my email"} to your produce update list.`;
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <footer className="bg-secondary text-gray-400">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Emerald Plains</h2>
            <p className="text-sm">
              Family-grown vegetables from Ghana, supplied with reliable standards for homes, retailers, and trade partners.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href={contactLinks.call}>
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a href={contactLinks.email}>
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Harvest and Trade Updates</h3>
            <p className="text-sm">Enter your email and continue on WhatsApp to subscribe to produce and supply updates.</p>
            <form className="mt-4 flex gap-2" onSubmit={onSubscribe}>
              <Input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="bg-background border-none"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © {new Date().getFullYear()} {brandContact.name}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
            <a href={contactLinks.call} className="hover:text-white">
              Call
            </a>
            <a href={contactLinks.email} className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
