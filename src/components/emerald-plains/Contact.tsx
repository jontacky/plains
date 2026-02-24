import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brandContact, buildWhatsAppUrl, contactLinks } from "@/lib/contact";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = (formData.get("name") as string)?.trim() || "Prospective Buyer";
    const phone = (formData.get("phone") as string)?.trim() || "Not shared";
    const email = (formData.get("email") as string)?.trim() || "Not shared";
    const message = (formData.get("message") as string)?.trim() || "I would like to buy produce from Emerald Plains.";

    const composedMessage = [
      `Hello Emerald Plains, this is ${name}.`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Inquiry: ${message}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(composedMessage), "_blank", "noopener,noreferrer");
    setStatus("Opening WhatsApp with your message. If it does not open, use the WhatsApp First button.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary">CONTACT NOW</p>
          <h3 className="text-4xl font-bold my-4 text-white">Talk to Our Family Farm Team</h3>
          <p className="text-gray-400">
            Start with WhatsApp for the fastest response. We support home orders, wholesale planning, and export-focused trade conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp First
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href={contactLinks.call}>
                <Phone className="w-4 h-4 mr-2" />
                Call Second
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={contactLinks.email}>
                <Mail className="w-4 h-4 mr-2" />
                Email Third
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
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input name="name" type="text" placeholder="Your Name" required className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Input name="phone" type="text" placeholder="Phone Number" required className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Input name="email" type="email" placeholder="Your Email" className="bg-secondary border-none text-white placeholder:text-gray-500 h-14" />
            <Textarea name="message" placeholder="Tell us what produce, grade, and quantity you need" required className="bg-secondary border-none text-white placeholder:text-gray-500 min-h-[150px]" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg">
              SEND ON WHATSAPP
            </Button>
          </form>
          {status && <p className="mt-4 text-sm text-primary">{status}</p>}
        </div>
      </div>
    </section>
  );
};
