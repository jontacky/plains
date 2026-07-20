import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { brandContact, buildWhatsAppUrl, contactLinks } from "@/lib/contact";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = (formData.get("name") as string)?.trim() || "Website visitor";
    const organisation = (formData.get("organisation") as string)?.trim() || "Not shared";
    const interest = (formData.get("interest") as string)?.trim() || "General strategic conversation";
    const phone = (formData.get("phone") as string)?.trim() || "Not shared";
    const email = (formData.get("email") as string)?.trim() || "Not shared";
    const message = (formData.get("message") as string)?.trim() || "I would like to explore an aligned relationship with Emerald Plains.";

    const composedMessage = [
      `Hello Emerald Plains, this is ${name}.`,
      `Organisation: ${organisation}`,
      `Area of interest: ${interest}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Inquiry: ${message}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(composedMessage), "_blank", "noopener,noreferrer");
    setStatus("Opening WhatsApp with your message. If it does not open, use the WhatsApp First button.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">CONNECT WITH EMERALD PLAINS</p>
          <h3 className="text-4xl font-bold my-4 text-white">Start a Strategic Conversation</h3>
          <p className="text-gray-400">
            We welcome thoughtful conversations with organisations whose capabilities, markets, or long-term objectives align with our strategic direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href={contactLinks.call}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={contactLinks.email}>
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">PHONE</p>
                <a href={contactLinks.call} className="text-gray-400 hover:text-primary">
                  {brandContact.phonePrimary}
                </a>
                <p className="text-gray-500">{brandContact.phoneSecondary}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">EMAIL</p>
                <a href={contactLinks.email} className="text-gray-400 hover:text-primary">
                  {brandContact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-white">ADDRESS</p>
                <p className="text-gray-400">Akuse, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-white">Name</Label>
                <Input id="contact-name" name="name" type="text" autoComplete="name" required className="bg-secondary border-white/10 text-white h-14" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-organisation" className="text-white">Organisation</Label>
                <Input id="contact-organisation" name="organisation" type="text" autoComplete="organization" className="bg-secondary border-white/10 text-white h-14" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-white">Phone</Label>
                <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" required className="bg-secondary border-white/10 text-white h-14" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-white">Business email</Label>
                <Input id="contact-email" name="email" type="email" autoComplete="email" className="bg-secondary border-white/10 text-white h-14" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-interest" className="text-white">Area of interest</Label>
              <select id="contact-interest" name="interest" required defaultValue="" className="flex h-14 w-full rounded-md border border-white/10 bg-secondary px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="" disabled>Select an area</option>
                <option>Production and agronomy</option>
                <option>Structured farmer participation</option>
                <option>Post-harvest and packaging</option>
                <option>Logistics and distribution</option>
                <option>Market access</option>
                <option>Offtake</option>
                <option>Technology and traceability</option>
                <option>Processing and value addition</option>
                <option>Research or institutional collaboration</option>
                <option>Other strategic collaboration</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message" className="text-white">Tell us about the potential alignment</Label>
              <Textarea id="contact-message" name="message" required className="bg-secondary border-white/10 text-white min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg">
              CONTINUE ON WHATSAPP
            </Button>
            <p className="text-xs leading-relaxed text-gray-500">Submitting prepares your message and opens WhatsApp. Emerald Plains will review the conversation for strategic alignment.</p>
          </form>
          {status && <p className="mt-4 text-sm text-primary" role="status">{status}</p>}
        </div>
      </div>
    </section>
  );
};
