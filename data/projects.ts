export interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  imgUrl: string;
  demoUrl?: string;
  notionUrl?: string;
  customLinkText?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Opener-maket ",
    desc: "Open Market Service with Buyer & Seller Features",
    tech: ["Spring Boot", "MySQL"],
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    notionUrl: "https://dev.to/jonghwayoo03_dev",
  },
  {
    id: 2,
    title: "Sunflower Shop: Digital English Learning Hub",
    desc: "A specialized e-commerce landing page for selling English educational PDFs. Integrated with WhatsApp for direct sales and customer engagement in the Argentine market.",
    tech: ["HTML", "CSS", "JavaScript"],
    imgUrl: "/SunflowerShop.png",
    demoUrl: "https://mateandgit.github.io/sunflower",
    customLinkText: "Live Demo",
  },
  {
    id: 3,
    title: "Custom Digital Resume Production",
    desc: "Offering professional, high-performance web resume development services. I build customized, interactive resume sites like this sample to help professionals stand out in the digital job market.",
    tech: ["HTML", "CSS"],
    imgUrl: "/Resume.png",
    demoUrl: "https://mateandgit.github.io/english-with-cande",
    customLinkText: "Live Demo",
  },
];
