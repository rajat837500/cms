export function generateId() {
  return Date.now().toString();
}

export function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}