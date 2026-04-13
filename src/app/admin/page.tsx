"use client";

import Link from "next/link";
import { useState } from "react";
import { usePages } from "@/hooks/usePages";
import Modal from "@/components/ui/Modal";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminPage() {
  const { pages, addPage, deletePage, isLoaded } = usePages();
  console.log(pages)
  const [deleteTarget, setDeleteTarget] = useState<any>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageName, setPageName] = useState("");

  function handleCreate() {
    if (!pageName.trim()) return;

    addPage(pageName);
    setPageName("");
  }

  if (!isLoaded) {
  return <div className="p-6">Loading...</div>;
}

  return (

<div className="min-h-screen bg-gray-950 text-gray-100">

  {/* Centered Container */}
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    {/* Header */}
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100">
          Page Manager
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {pages.length} pages in this project
        </p>
      </div>

      {!isModalOpen && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
        >
          + Add Page
        </button>
      )}
    </div>

  {/* Add Page Input */}
{isModalOpen && (
  <Modal onClose={() => setIsModalOpen(false)}>
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg text-black font-semibold">
          Add New Page
        </h2>
        <p className="text-sm text-gray-500">
          Enter a name to create a new page.
        </p>
      </div>

      <button
        onClick={() => setIsModalOpen(false)}
        className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
      >
        ✕
      </button>
    </div>

    {/* Input */}
    <div className="mb-4">
      <label className="text-sm text-black font-medium">
        Page Name *
      </label>

<input
  value={pageName}
  onChange={(e) => setPageName(e.target.value)}
  placeholder="e.g. About Us"
  className="
    mt-2 w-full rounded-lg 
    bg-gray-50 
    border border-gray-300 
    px-3 py-2 text-sm text-gray-900 
    placeholder:text-gray-400

    focus:outline-none 
    focus:bg-white
    focus:ring-2 focus:ring-purple-500 
    focus:border-purple-500

    transition
  "
/>
    </div>

    {/* Actions */}
    <div className="flex justify-end gap-2">
<button
  onClick={() => {
    setIsModalOpen(false);
    setPageName("");
  }}
  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-200 transition"
>
  Cancel
</button>

<button
  onClick={() => {
    handleCreate();
    setIsModalOpen(false);
    
  }}
  disabled={!pageName.trim()}
  className={`px-4 py-2 rounded-lg text-sm transition ${
  pageName.trim()
    ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
    : "bg-purple-300 text-white cursor-not-allowed"
}`}
>
  Create Page
</button>
    </div>
  </Modal>
)}

{deleteTarget && (
  <Modal onClose={() => setDeleteTarget(null)}>
    <div className="flex gap-4">

      {/* Icon */}
      <div className="flex items-start justify-center">
        <div className="bg-red-100 text-red-600 p-3 rounded-xl">
          ⚠️
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-900">
            Delete Page
          </h2>

          <button
            onClick={() => setDeleteTarget(null)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-800">
            {deleteTarget.name}
          </span>{" "}
          (
          <span className="text-purple-600">
            /{deleteTarget.slug}
          </span>
          )? This cannot be undone.
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setDeleteTarget(null)}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              deletePage(deleteTarget.id);
              setDeleteTarget(null);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Delete Page
          </button>
        </div>
      </div>
    </div>
  </Modal>
)}

  {/* Table */}
<div className="mt-6 border border-gray-700 rounded-xl overflow-hidden bg-gray-900">

  {/* Header */}
  <div className="grid grid-cols-3 px-5 py-3 bg-gray-800 text-xs font-semibold text-gray-400 tracking-wide">
    <span>PAGE NAME</span>
    <span>ROUTE</span>
    <span className="text-right">ACTION</span>
  </div>

  {/* Rows */}
  {pages.length > 0 ? (
    pages.map((p: any) => (
      <div
        key={p.id}
        className="grid grid-cols-3 px-5 py-4 border-t border-gray-700 items-center hover:bg-gray-800 transition"
      >
        {/* Name */}
        <span className="font-medium text-gray-100">
          {p.name}
        </span>

        {/* Route */}
        <span>
          <span className="bg-purple-900/40 text-purple-300 px-2.5 py-1 rounded-md text-xs font-medium">
            /{p.slug}
          </span>
        </span>

        {/* Actions */}
        <div className="flex justify-end gap-2">

          {/* Edit */}
          <Link
            href={`/admin/${p.slug}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-blue-400 hover:bg-blue-900/30 transition"
          >
            <Pencil size={14} />
            Edit
          </Link>

          {/* Delete */}
<button
  onClick={() => setDeleteTarget(p)}
  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
>
  <Trash2 size={14} />
  Delete
</button>

        </div>
      </div>
    ))
  ) : (
    <div className="py-10 text-center text-sm text-gray-500">
      No pages found. Create your first page 🚀
    </div>
  )}
</div>
</div>
</div>

  );
}

