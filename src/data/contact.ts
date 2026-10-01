import type { ContactLink } from "@/lib/types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "jeffmbita69@gmail.com",
    href: "mailto:jeffmbita69@gmail.com",
    type: "email",
    copyable: true,
  },
  {
    label: "Phone",
    value: "+254 745 888 904",
    href: "tel:+254745888904",
    type: "phone",
  },
  {
    label: "WhatsApp",
    value: "WhatsApp",
    href: "https://wa.me/254745888904",
    type: "whatsapp",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeff-mbita-a91672241",
    href: "https://www.linkedin.com/in/jeff-mbita-a91672241/",
    type: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Mbitajeff",
    href: "https://github.com/Mbitajeff",
    type: "github",
  },
  {
    label: "Medium",
    value: "medium.com/@jeffmbita69",
    href: "https://medium.com/@jeffmbita69",
    type: "medium",
  },
  {
    label: "Dev.to",
    value: "dev.to/mbitajeff",
    href: "https://dev.to/mbitajeff",
    type: "devto",
  },
  {
    label: "X (Twitter)",
    value: "@jeffmbita",
    href: "https://x.com/jeffmbita", // TODO: confirm your X handle
    type: "x",
  },
  {
    label: "Instagram",
    value: "@Jey_nbita",
    href: "https://instagram.com/Jey_nbita",
    type: "instagram",
  },
  {
    label: "Book a call",
    value: "Request a meeting via email",
    href: "mailto:jeffmbita69@gmail.com?subject=Meeting%20Request%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Jeff%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20with%20you.%0A%0AMy%20preferred%20times%20are%3A%0A%0A%5BPlease%20add%20your%20preferred%20dates%20and%20times%5D%0A%0ALooking%20forward%20to%20connecting%21",
    type: "calendar",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/jeff-mbita-resume.pdf",
    type: "resume",
    download: true,
  },
];
