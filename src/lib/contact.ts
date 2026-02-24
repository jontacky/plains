const callDigits = "233267063162";
const whatsappDigits = "233249814890";

export const brandContact = {
  name: "Emerald Plains",
  location: "Akuse, Ghana",
  whatsappNumber: whatsappDigits,
  phonePrimary: "+233 267 063 162",
  phoneSecondary: "+233 249 814 890",
  email: "contact@emeraldplains.com",
};

export const contactLinks = {
  whatsapp: `https://wa.me/${whatsappDigits}`,
  call: `tel:+${callDigits}`,
  email: `mailto:${brandContact.email}`,
};

export const buildWhatsAppUrl = (message: string) =>
  `${contactLinks.whatsapp}?text=${encodeURIComponent(message)}`;
