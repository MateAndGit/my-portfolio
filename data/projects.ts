export interface Project {
  id: number;
  tech: string[];
  imgUrl: string;
  demoUrl?: string;
  notionUrl?: string;
  customLinkText?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    tech: ["Spring Boot", "MySQL"],
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demoUrl: "https://github.com/MateAndGit/opener-maket",
    customLinkText: "README",
    notionUrl:
      "https://dev.to/jonghwayoo03_dev/part-1-reliable-payment-transaction-1njd",
  },
  {
    id: 2,
    tech: ["HTML", "CSS", "JavaScript"],
    imgUrl: "/SunflowerShop.png",
    demoUrl: "https://mateandgit.github.io/sunflower",
    customLinkText: "Live Demo",
  },
  {
    id: 3,
    tech: ["HTML", "CSS"],
    imgUrl: "/Resume.png",
    demoUrl: "https://mateandgit.github.io/english-with-cande",
    customLinkText: "Live Demo",
  },
  {
    id: 4,
    tech: ["HTML", "CSS", "JavaScript"],
    imgUrl: "/Atenea.png",
    demoUrl: "https://mateandgit.github.io/atenea-personalizados/",
    customLinkText: "Live Demo",
  },
  {
    id: 5,
    tech: ["HTML", "CSS", "JavaScript"],
    imgUrl: "/Verde.png",
    demoUrl: "https://mateandgit.github.io/verdementa/",
    customLinkText: "Live Demo",
  },
];
