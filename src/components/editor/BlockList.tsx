import BlockItem from "./BlockItem";

export default function BlockList(props: any) {
  const { blocks } = props;

  return (
    <div className="space-y-4">
      {blocks.map((block: any, i: number) => (
        <div
          key={block.id}
          className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:border-gray-600 transition"
        >
          <BlockItem index={i} block={block} {...props} />
        </div>
      ))}
    </div>
  );
}
