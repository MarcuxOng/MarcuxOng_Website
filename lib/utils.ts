import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PortfolioData } from "./types";
import portfolioData from "../data/portfolio-data.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(page: string): string {
  return `/${page.toLowerCase()}`;
}

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}