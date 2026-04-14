
import defaultPages from "@/data/pages.json";

export function getPages() {
  if (typeof window === "undefined") return defaultPages;

  const stored = localStorage.getItem("pages");

  // First time → load default data
  if (!stored) {
    localStorage.setItem("pages", JSON.stringify(defaultPages));
    return defaultPages;
  }

  return JSON.parse(stored);
}

export function savePages(pages: any[]) {
  localStorage.setItem("pages", JSON.stringify(pages));
}