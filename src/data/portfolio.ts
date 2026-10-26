import { PortfolioData } from "../types/portfolio";
import { profile, socialLinks } from "./profile";
import { skills } from "./skills";
import { projects } from "./projects";
import { experience } from "./experience";
import { playlist } from "./playlist";
import { notes } from "./notes";
import { photos } from "./photos";

export const portfolioData: PortfolioData = {
  profile,
  socialLinks,
  skills,
  projects,
  experience,
  theme: {
    wallpaperUrl: "/background/bg.png",
    bootLogo: {
      type: "icon", // for image, user image
      value: "Command" // if image, use value to example : /my-custom-logo.png
    }
  },
  playlist,
  notes,
  photos,
};
