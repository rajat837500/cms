"use client";

import { useState } from "react";
import { getPages, savePages } from "@/lib/storage";
import { generateId } from "@/lib/utils";

export function useBlocks(slug: string) {
  const [pages, setPages] = useState(getPages());

  const page = pages.find((p: any) => p.slug === slug);

  function updatePage(blocks: any[]) {
    const updated = pages.map((p: any) =>
      p.slug === slug ? { ...p, blocks } : p
    );

    setPages(updated); // 🔥 IMPORTANT
    savePages(updated);
  }

  function addBlock(type: string) {
    const newBlock = {
      id: generateId(),
      type,
      props: type === "text" ? { content: "" } : { url: "" },
    };

    updatePage([...(page?.blocks || []), newBlock]);
  }

  function updateBlock(id: string, newProps: any) {
    const updated = page.blocks.map((b: any) =>
      b.id === id ? { ...b, props: { ...b.props, ...newProps } } : b
    );

    updatePage(updated);
  }

  function deleteBlock(id: string) {
    updatePage(page.blocks.filter((b: any) => b.id !== id));
  }

  function moveUp(index: number) {
    if (index === 0) return;

    const arr = [...page.blocks];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];

    updatePage(arr);
  }

  function moveDown(index: number) {
    if (index === page.blocks.length - 1) return;

    const arr = [...page.blocks];
    [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];

    updatePage(arr);
  }

  return { page, addBlock, updateBlock, deleteBlock, moveUp, moveDown };
}
