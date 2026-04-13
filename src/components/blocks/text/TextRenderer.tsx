export default function TextRenderer({ block }: any) {
  return (
    <p className="text-lg leading-relaxed text-gray-800">
      {block.props.content}
    </p>
  );
}

// export default function TextRenderer({ block }: any) {
//   return <p className="text-lg">{block.props.content}</p>;
// }