import { buildWhatsAppUrl, contactLinks } from "@/lib/contact";
import { PlayCircle } from "lucide-react";

export const CallToActionVideo = () => {
  const videoMessage =
    "Hello Emerald Plains, please share your latest farm video updates, supply outlook, and available volumes.";

  return (
    <section
      id="field-updates"
      className="relative py-48 bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/transplant-team-wide.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center z-10">
        <p className="text-sm uppercase tracking-widest text-primary">MODERN AGRICULTURE</p>
        <h3 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Modern Agriculture You Can See Week by Week
        </h3>
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          We share field clips, harvest progress, and supply outlooks for families, wholesale buyers, and trade partners.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={buildWhatsAppUrl(videoMessage)}
            target="_blank"
            rel="noreferrer"
            className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Request farm update videos on WhatsApp"
          >
            <PlayCircle className="w-16 h-16 text-white" />
          </a>
          <p className="text-lg">Request this week&apos;s farm updates on WhatsApp</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={contactLinks.call} className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors">
              Call
            </a>
            <a href={contactLinks.email} className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
