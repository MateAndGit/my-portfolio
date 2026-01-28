// data/projects.ts

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
    title: "나만의 AI 여행 플래너",
    desc: "OpenAI API를 활용해 여행 동선을 자동으로 짜주는 서비스. 프롬프트 엔지니어링 최적화.",
    tech: ["Next.js", "Tailwind", "OpenAI"],
    imgUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    demoUrl: "https://your-main-project.vercel.app",
    notionUrl: "https://notion.so/your-log-1",
  },
  {
    id: 2,
    title: "이커머스 결제 시스템 (Backend)",
    desc: "대용량 트래픽 처리를 위한 MSA 기반 백엔드. 결제 동시성 제어 및 재고 관리 구현.",
    tech: ["Spring Boot", "Kafka", "MySQL"],
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // ERD나 서버 아키텍처 사진 추천
    demoUrl: "https://api.server.com/swagger",
    customLinkText: "API Docs", // 버튼 이름 변경
    notionUrl: "https://notion.so/your-log-2",
  },
  {
    id: 3,
    title: "실시간 채팅 서비스",
    desc: "Socket.io를 활용한 실시간 양방향 통신 구현. 읽음 처리 및 이미지 전송 기능.",
    tech: ["Node.js", "Socket.io", "React"],
    imgUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    demoUrl: "https://chat-app.vercel.app",
    notionUrl: "https://notion.so/your-log-3",
  },
];
