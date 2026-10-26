import { Profile, SocialLink } from "@/types/portfolio";

export const profile: Profile = {
  name: "Vansh Gajiwala",
  role: "AI/ML & Full-Stack Developer",
  bio: "B.Tech CSE (AI & ML) student at SRM Institute of Science and Technology (CGPA 9.28/10). I build multi-agent AI systems, RAG pipelines and full-stack products, from a local-LLM decision platform to a parametric insurance app for gig workers. Top 50 nationally at Smart India Hackathon; AWS Certified AI Practitioner.",
  avatar: "/avatar.jpg",
  email: "gajiwalavansh@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  resumeUrl: "https://www.notion.so/RESUME-3790f0e185a280aab8fcf135e57355a0?source=copy_link",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/VGAJI469",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/vansh-gajiwala",
    icon: "linkedin",
  },
  // Email app is auto-generated from profile.email — no entry needed here.
];
