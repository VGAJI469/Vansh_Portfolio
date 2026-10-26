import { Photo } from "@/types/portfolio";

// Repurposed as an Achievements Gallery.
// TODO(vansh): Add a screenshot or certificate image to /public/achievements/ for each entry.
// Recommended size: 1200×675 (16:9) or square 800×800.
export const photos: Photo[] = [
  {
    id: "achievement-sih",
    // TODO(vansh): Replace URL with /achievements/sih.jpg once you upload the certificate/photo
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    caption: "Top 50 Nationally — Smart India Hackathon (KhelYuva)",
    date: "May 2025",
    location: "Smart India Hackathon 2025",
  },
  {
    id: "achievement-innoquestCritical",
    // TODO(vansh): Replace URL with /achievements/innoquest.jpg
    url: "https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=800&q=80",
    caption: "Winner — InnoQuest Ideathon (Living Buildings 2.0)",
    date: "Nov 2025",
    location: "InnoQuest Ideathon",
  },
  {
    id: "achievement-samsung-prism",
    // TODO(vansh): Replace URL with /achievements/samsung.jpg
    url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80",
    caption: "4th Place Nationally — Samsung PRISM Metaverse Ideathon (Crimson Knight)",
    date: "Apr 2026",
    location: "Samsung PRISM",
  },
  {
    id: "achievement-aws",
    // TODO(vansh): Replace URL with /achievements/aws-cert.jpg (your actual certificate)
    url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    caption: "AWS Certified AI Practitioner",
    date: "2026",
    location: "Amazon Web Services",
  },
];
