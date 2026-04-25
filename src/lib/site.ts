// Centralised site contact info — easy to update in one place.
export const SITE = {
  name: "Learning World Montessori",
  tagline: "An OFSTED registered Montessori in Croydon, UK",
  // No phone/email is publicly listed on the original site — replace these with the real ones.
  phone: "+44 0000 000 000",
  whatsapp: "447000000000", // international format, no '+' or spaces
  email: "info@learningworldmontessori.co.uk",
  address: "Coombe Road, Croydon, UK (near Lloyd Park, where Park Hill Road meets Coombe Road)",
  whatsappMessage: "Hello, I would like to enquire about admissions.",
};

export const waLink = () =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
