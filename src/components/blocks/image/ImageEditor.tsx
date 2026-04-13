export default function ImageEditor({ block, updateBlock }: any) {
  return (
    <input
      value={block.props.url}
      onChange={(e) =>
        updateBlock(block.id, { url: e.target.value })
      }
      placeholder="Image URL"
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}

// export default function ImageEditor({ block, updateBlock }: any) {
//   return (
//     <input
//       value={block.props.url}
//       onChange={(e) =>
//         updateBlock(block.id, { url: e.target.value })
//       }
//       className="border p-2 w-full"
//       placeholder="Image URL"
//     />
//   );
// }