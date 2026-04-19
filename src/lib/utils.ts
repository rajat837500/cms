import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateId() {
  return Date.now().toString();
}

export function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}