import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "kavach",
    title: "Kavach",
    description:
      "Parametric income insurance for delivery workers: live weather and AQI triggers pay out automatically, with ML-priced premiums and fraud scoring.",
    thumbnail: "/projects/kavach.png",
    techStack: ["Python", "FastAPI", "scikit-learn", "React", "Supabase", "Vercel"],
    featured: true,
    githubUrl: "https://github.com/VGAJI469/Kavach1.0",
    liveUrl: "https://kavach1-0.vercel.app/",
    isOpenSource: true,
  },
  {
    id: "ai-enterprise-council",
    title: "AI Enterprise Council",
    description:
      "Five AI agents (CEO, CFO, Legal, Marketing, PR) debate a decision with credibility-weighted voting, RAG and sycophancy guards, all on local LLMs.",
    thumbnail: "/projects/ai-enterprise-council.png",
    techStack: ["Python", "FastAPI", "Ollama", "ChromaDB", "LangChain"],
    featured: true,
    isOpenSource: true,
    githubUrl: "https://github.com/VGAJI469/Ai-council-for-enterprise",
    // TODO(vansh): Add a live URL if you deploy AI Enterprise Council
    // liveUrl: "",
  },
  {
    id: "khelyuva",
    title: "KhelYuva",
    description:
      "Team of 5: webcam pose tracking (MediaPipe) that counts reps and scores form live, plus athlete/coach dashboards. Top 50 nationally at Smart India Hackathon.",
    thumbnail: "/projects/khelyuva.png",
    techStack: ["JavaScript", "MediaPipe Pose", "Supabase", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/VGAJI469/KhelYuva",
    liveUrl: "https://khel-yuva-ttwc.vercel.app/khelyuva.html",
    isOpenSource: true,
  },
];
