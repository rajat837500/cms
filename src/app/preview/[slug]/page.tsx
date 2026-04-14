"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPages } from "@/lib/storage";

import TextRenderer from "@/components/blocks/text/TextRenderer";
import ImageRenderer from "@/components/blocks/image/ImageRenderer";
import ButtonRenderer from "@/components/blocks/button/ButtonRenderer";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const { slug } = useParams();

  const [page, setPage] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const pages = getPages();
    const found = pages.find((p: any) => p.slug === slug);
    setPage(found);
  }, [slug]);

  function renderBlock(block: any) {
    if (block.type === "text") {
      return <TextRenderer key={block.id} block={block} />;
    }

    if (block.type === "image") {
      return <ImageRenderer key={block.id} block={block} />;
    }

    if (block.type === "button") {
      return <ButtonRenderer key={block.id} block={block} />;
    }

    return null;
  }

  if (!page) {
    return <div className="p-6">No page found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
      
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Preview
            </p>
      
            <h1 className="text-3xl sm:text-4xl font-semibold mt-2">
              {page.name}
            </h1>
          </div>
      
          {/* Right */}
          <button
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push("/admin");
              }
            }}
            className="px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition cursor-pointer"
          >
            ← Back
          </button>
          
        </div>
          
        {/* Divider */}
        <div className="border-t border-gray-200 mb-10" />
          
        {/* Content */}
        {page.blocks.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            No content yet.
          </div>
        ) : (
          <div className="space-y-10">
            {page.blocks.map((block: any) => renderBlock(block))}
          </div>
        )}
    
      </div>
    </div>
  );
}
