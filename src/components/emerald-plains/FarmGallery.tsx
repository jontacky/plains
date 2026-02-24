import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { buildWhatsAppUrl } from "@/lib/contact";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide";
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/greenhouse-build-1.jpg",
    alt: "Emerald Plains team setting up a nursery greenhouse",
    caption: "Building protected nursery space for seedlings",
    span: "wide",
  },
  {
    src: "/images/greenhouse-build-2.jpg",
    alt: "Farm team and family at greenhouse build site",
    caption: "Family-led construction and supervision on site",
  },
  {
    src: "/images/mulch-worker-red.jpg",
    alt: "Worker preparing mulched beds in field",
    caption: "Manual checks during mulching and bed setup",
  },
  {
    src: "/images/transplant-close.jpg",
    alt: "Team transplanting seedlings into mulched rows",
    caption: "Transplanting seedlings into prepared beds",
  },
  {
    src: "/images/transplant-worker-yellow.jpg",
    alt: "Close field activity during transplanting",
    caption: "Hands-on transplanting for uniform field stand",
  },
  {
    src: "/images/tractor-front.jpg",
    alt: "Tractor and team preparing field operations",
    caption: "Mechanized field preparation before planting",
    span: "tall",
  },
  {
    src: "/images/pepper-field-worker-red.jpg",
    alt: "Farm team member checking pepper row growth",
    caption: "Routine field checks in active pepper blocks",
    span: "tall",
  },
  {
    src: "/images/nursery-side-angled.jpg",
    alt: "Seedling trays lined inside nursery structure",
    caption: "Nursery trays raised for healthy early growth",
    span: "tall",
  },
];

export const FarmGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryMessage =
    "Hello Emerald Plains, I have seen your farm gallery. Please share today's availability, grading options, and pricing.";

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">FAMILY FARM GALLERY</p>
            <h3 className="text-4xl font-bold my-4 text-white">Real Moments from Our Fields and Harvest Team</h3>
            <p className="text-gray-300 max-w-2xl">
              From planting to picking and packing, these are day-to-day moments from our farm. No stock images.
            </p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={buildWhatsAppUrl(galleryMessage)} target="_blank" rel="noreferrer">
              Ask for Today&apos;s Availability
            </a>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[12rem]">
          {galleryItems.map((item) => {
            const sizeClass =
              item.span === "tall" ? "row-span-2" : item.span === "wide" ? "lg:col-span-2 row-span-2" : "row-span-1";

            return (
              <button
                type="button"
                key={item.src}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card ${sizeClass}`}
                aria-label={`Open image: ${item.caption}`}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-white">{item.caption}</p>
                    <Maximize2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-3 bg-background border-border">
            <DialogTitle className="sr-only">Farm gallery image preview</DialogTitle>
            <DialogDescription className="sr-only">
              Enlarged farm image with caption.
            </DialogDescription>
            {selectedImage && (
              <div className="space-y-3">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[75vh] object-contain rounded-md"
                />
                <p className="text-sm text-gray-300 px-1">{selectedImage.caption}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
