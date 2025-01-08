import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { contentData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHeaders(contentData: contentData) {
  if (contentData.type == "heading") {
    return contentData;
  }
}
