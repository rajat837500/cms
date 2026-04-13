"use client";

import { useEffect, useState } from "react";
import { getPages, savePages } from "@/lib/storage";
import { generateId, generateSlug } from "@/lib/utils";

export function usePages() {
  const [pages, setPages] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Load only on client
  useEffect(() => {
    const stored = getPages();
    setPages(stored);
    setIsLoaded(true);
  }, []);

  function addPage(name: string) {
    const newPage = {
      id: generateId(),
      name,
      slug: generateSlug(name),
      blocks: [],
    };

    const updated = [...pages, newPage];
    setPages(updated);
    savePages(updated);
  }

  function deletePage(id: string) {
    const updated = pages.filter((p: any) => p.id !== id);
    setPages(updated);
    savePages(updated);
  }

  return { pages, addPage, deletePage, isLoaded };
}

// "use client";

// import { useState } from "react";
// import { getPages, savePages } from "@/lib/storage";
// import { generateId, generateSlug } from "@/lib/utils";

// export function usePages() {
//   const [pages, setPages] = useState(getPages());

//   function addPage(name: string) {
//     const newPage = {
//       id: generateId(),
//       name,
//       slug: generateSlug(name),
//       blocks: [],
//     };

//     const updated = [...pages, newPage];
//     setPages(updated);
//     savePages(updated);
//   }

//   function deletePage(id: string) {
//     const updated = pages.filter((p: any) => p.id !== id);
//     setPages(updated);
//     savePages(updated);
//   }

//   return { pages, addPage, deletePage };
// }

// "use client";

// import { useState } from "react";
// import { getPages, savePages } from "@/lib/storage";
// import { generateId, generateSlug } from "@/lib/utils";

// export function usePages() {
//   const [pages, setPages] = useState(getPages());

//   function addPage(name: string) {
//     const newPage = {
//       id: generateId(),
//       name,
//       slug: generateSlug(name),
//       blocks: [],
//     };

//     const updated = [...pages, newPage];
//     setPages(updated);
//     savePages(updated);
//   }

//   return { pages, addPage };
// }