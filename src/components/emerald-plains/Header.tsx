import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Modern Agriculture", href: "#modern-agriculture" },
  { name: "Projects", href: "#projects" },
  // { name: "Services", href: "#services" },
  // { name: "News", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 lg:p-4 text-white">
      <div className="container mx-auto flex justify-between items-center rounded-2xl border border-white/25 bg-white/10 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <a href="#home" className="flex items-center space-x-3 group">
          <span className="inline-flex rounded-xl border border-white/35 bg-white/30 p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <img
              src="/logo.png"
              alt="Emerald Plains logo"
              className="h-14 w-14 shrink-0 object-contain"
              decoding="async"
              loading="eager"
            />
          </span>
          {/* <span className="text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">EMERALD&nbsp;PLAINS</span> */}
        </a>
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium drop-shadow ${link.name === "Home" ? "text-primary" : "text-white/90 hover:text-primary"}`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </nav>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg ${link.name === "Home" ? "text-primary" : "hover:text-primary"}`}
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
