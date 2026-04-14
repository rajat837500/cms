export default function TextEditor({ block, updateBlock }: any) {
  return (
    <input
      value={block.props.content}
      onChange={(e) =>
        updateBlock(block.id, { content: e.target.value })
      }
      placeholder="Enter text..."
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}
