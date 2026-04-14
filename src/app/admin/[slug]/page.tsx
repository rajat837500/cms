"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useBlocks } from "@/hooks/useBlocks";
import AddBlockPanel from "@/components/editor/AddBlockPanel";
import BlockList from "@/components/editor/BlockList";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function EditorPage() {
  const { slug } = useParams();
  const { page, ...actions } = useBlocks(slug as string);
  const [showPanel, setShowPanel] = useState(false);

  if (!page) return <div className="p-6">No page found</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Centered Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          {/* Left */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Editing Page Content
            </p>

            <h1 className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-100">
              {page.name}
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Back Button */}
            <Link
              href="/admin"
              className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              ← Back
            </Link>

            {/* Preview Button */}
            <Link
              href={`/preview/${page.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium 
                         bg-purple-600 hover:bg-purple-700 text-white transition"
            >
               Preview
            </Link>

          </div>
        </div>

        {showPanel && (
          <Modal onClose={() => setShowPanel(false)}>
            <div className="p-4">
        
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Add Block
                </h2>
        
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer transition"
                >
                  ✕
                </button>
              </div>
        
              {/* Panel */}
              <AddBlockPanel
                addBlock={(type: string) => {
                  actions.addBlock(type);
                  setShowPanel(false); // auto close after add
                }}
              />
            </div>
          </Modal>
        )}

        {/* Add Block */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setShowPanel(true)}
            className="px-4 py-2 rounded-lg text-sm font-medium 
                       bg-purple-600 hover:bg-purple-700 text-white transition cursor-pointer"
          >
            + Add Block
          </button>
        </div>

        {/* Empty State */}
        {page.blocks.length === 0 && (
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 text-center">
            <div className="text-4xl mb-3">🧱</div>
            <p className="text-gray-400 mb-4">
              Start building your page
            </p>
        
            <button
              onClick={() => setShowPanel(true)}
              className="bg-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
            >
              Add your first block
            </button>
          </div>
        )}

        {/* Blocks */}
        <div className="space-y-4">
          <BlockList blocks={page.blocks} {...actions} />
        </div>

      </div>
    </div>
  );
}
