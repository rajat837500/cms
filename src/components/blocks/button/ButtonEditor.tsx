export default function ButtonEditor({ block, updateBlock }: any) {
  return (
    <div className="space-y-3">

      <input
        value={block.props.text}
        onChange={(e) =>
          updateBlock(block.id, { text: e.target.value })
        }
        placeholder="Button text"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        value={block.props.url}
        onChange={(e) =>
          updateBlock(block.id, { url: e.target.value })
        }
        placeholder="Button link (https://...)"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

    </div>
  );
}

// export default function ButtonEditor({ block, updateBlock }: any) {
//   return (
//     <div className="space-y-2">
//       <input
//         value={block.props.text}
//         onChange={(e) =>
//           updateBlock(block.id, { text: e.target.value })
//         }
//         placeholder="Button text"
//         className="input"
//       />

//       <input
//         value={block.props.url}
//         onChange={(e) =>
//           updateBlock(block.id, { url: e.target.value })
//         }
//         placeholder="Button link (https://...)"
//         className="input"
//       />
//     </div>
//   );
// }