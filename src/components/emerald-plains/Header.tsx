import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  // { name: "Services", href: "#services" },
  // { name: "News", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 lg:p-8 bg-transparent text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group">
          <img
            src="/logo.png"
            alt="Emerald Plains logo"
            className="h-20 w-20 shrink-0 object-contain"
            decoding="async"
            loading="eager"
          />
          {/* <span className="text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">EMERALD&nbsp;PLAINS</span> */}
        </a>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium ${link.name === "Home" ? "text-primary" : "hover:text-primary"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};