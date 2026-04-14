import { Type, Image as ImageIcon, Square } from "lucide-react";

export default function AddBlockPanel({ addBlock }: any) {
  return (
    <div className="flex flex-wrap gap-3">

      {/* Text */}
      <button
        onClick={() => addBlock("text")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
                   bg-gray-800 border border-gray-700 
                   text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer"
      >
        <Type size={16} />
        Text
      </button>

      {/* Image */}
      <button
        onClick={() => addBlock("image")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
                   bg-gray-800 border border-gray-700 
                   text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer"
      >
        <ImageIcon size={16} />
        Image
      </button>

      {/* Button */}
      <button
        onClick={() => addBlock("button")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
                   bg-gray-800 border border-gray-700 
                   text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer"
      >
        <Square size={16} />
        Button
      </button>

    </div>
  );
}
