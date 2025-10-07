import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PortfolioData } from "./types";
import portfolioDataRaw from "../data/portfolio-data.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(page: string): string {
  return `/${page.toLowerCase()}`;
}

export function getPortfolioData(): PortfolioData {
  // Ensure proper type conversion for the JSON data to prevent deployment errors
  const portfolioData: PortfolioData = {
    ...portfolioDataRaw,
    languages: portfolioDataRaw.languages.map(lang => ({
      ...lang,
      level: typeof lang.level === 'number' ? lang.level : Number(lang.level)
    })),
    experiences: portfolioDataRaw.experiences.map(exp => ({
      ...exp,
      current: typeof exp.current === 'boolean' ? exp.current : Boolean(exp.current)
    }))
  } as PortfolioData;
  
  return portfolioData;
}