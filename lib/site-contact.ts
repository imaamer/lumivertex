/** Shared contact & location — footer, contact page, etc. */

export const SITE_CONTACT = {
  brandTagline: "LumiVertex, Converging Ideas into Possibilities",
  email: "contact@lumivertex.com",
  phoneDisplay: "+44 7459 365167",
  phoneTel: "+447459365167",
  whatsappDisplay: "+44 7459 365167",
  whatsappHref: "https://wa.me/447459365167",
  addressLines: ["202 King's Avenue", "Greenford", "UB6 9DE"] as const,
} as const;

const GOOGLE_MAPS_QUERY = encodeURIComponent(
  "202 King's Avenue, Greenford UB6 9DE, United Kingdom"
);

export const googleMapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`;

export const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed&hl=en`;
