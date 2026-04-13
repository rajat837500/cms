import { Trash2, ArrowUp, ArrowDown, Type, Image as ImageIcon, Square } from "lucide-react";
import TextEditor from "../blocks/text/TextEditor";
import ImageEditor from "../blocks/image/ImageEditor";
import ButtonEditor from "../blocks/button/ButtonEditor";

export default function BlockItem({
  block,
  index,
  updateBlock,
  deleteBlock,
  moveUp,
  moveDown,
}: any) {
  function renderEditor() {
    if (block.type === "text") {
      return <TextEditor block={block} updateBlock={updateBlock} />;
    }

    if (block.type === "image") {
      return <ImageEditor block={block} updateBlock={updateBlock} />;
    }

    if (block.type === "button") {
      return <ButtonEditor block={block} updateBlock={updateBlock} />;
    }

    return null;
  }

  function getIcon() {
    if (block.type === "text") return <Type size={14} />;
    if (block.type === "image") return <ImageIcon size={14} />;
    if (block.type === "button") return <Square size={14} />;
  }

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-800 border-b border-gray-700 rounded-t-xl">
        
        {/* Left */}
        <div className="flex items-center gap-2 text-sm text-gray-300">
          {getIcon()}
          <span className="capitalize">{block.type} block</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 text-gray-400">

          <button
            onClick={() => moveUp(index)}
            className="p-1.5 rounded hover:bg-gray-700 hover:text-white transition"
          >
            <ArrowUp size={14} />
          </button>

          <button
            onClick={() => moveDown(index)}
            className="p-1.5 rounded hover:bg-gray-700 hover:text-white transition"
          >
            <ArrowDown size={14} />
          </button>

          <button
            onClick={() => deleteBlock(block.id)}
            className="p-1.5 rounded hover:bg-red-500/20 text-red-400 hover:text-red-300 transition"
          >
            <Trash2 size={14} />
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {renderEditor()}
      </div>

    </div>
  );
}

// import TextEditor from "../blocks/text/TextEditor";
// import ImageEditor from "../blocks/image/ImageEditor";
// import ButtonEditor from "../blocks/button/ButtonEditor";

// export default function BlockItem({
//   block,
//   index,
//   updateBlock,
//   deleteBlock,
//   moveUp,
//   moveDown,
// }: any) {
//   function renderEditor() {
//     if (block.type === "text") {
//       return (
//         <TextEditor block={block} updateBlock={updateBlock} />
//       );
//     }

//     if (block.type === "image") {
//       return (
//         <ImageEditor block={block} updateBlock={updateBlock} />
//       );
//     }

//     if (block.type === "button") {
//       return (
//         <ButtonEditor block={block} updateBlock={updateBlock} />
//       );
//     }

//     return null;
//   }

//   return (
//     <div className="card p-4">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-3">
//     <span className="font-medium capitalize">
//       {block.type} block
//     </span>

//     <button
//       onClick={() => deleteBlock(block.id)}
//       className="text-red-500 text-sm"
//     >
//       Delete
//     </button>
//   </div>

//   {/* Editor */}
//   <div className="mb-3">
//     {renderEditor()}
//   </div>

//   {/* Controls */}
//   <div className="flex gap-2 text-sm text-gray-600">
//     <button onClick={() => moveUp(index)}>↑ Move</button>
//     <button onClick={() => moveDown(index)}>↓ Move</button>
//   </div>
// </div>
//   );
// }

// import TextEditor from "../blocks/text/TextEditor";
// import ImageEditor from "../blocks/image/ImageEditor";

// export default function BlockItem({
//   block,
//   index,
//   updateBlock,
//   deleteBlock,
//   moveUp,
//   moveDown,
// }: any) {
//   function renderEditor() {
//     if (block.type === "text")
//       return <TextEditor block={block} updateBlock={updateBlock} />;
//     if (block.type === "image")
//       return <ImageEditor block={block} updateBlock={updateBlock} />;
//   }

//   return (
//     <div className="border p-4 rounded bg-white">
//       <div className="mb-2 font-semibold">{block.type} block</div>

//       {renderEditor()}

//       <div className="flex gap-2 mt-3">
//         <button onClick={() => moveUp(index)}>↑</button>
//         <button onClick={() => moveDown(index)}>↓</button>
//         <button onClick={() => deleteBlock(block.id)}>Delete</button>
//       </div>
//     </div>
//   );
// }