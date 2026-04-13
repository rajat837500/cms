export default function ButtonRenderer({ block }: any) {
  const text = block?.props?.text;
  const url = block?.props?.url;

  if (!text) return null;

  return (
    <a
      href={url || "#"}
      className="inline-block bg-purple-600 text-white hover:bg-purple-700 
                 px-5 py-2.5 rounded-lg text-sm font-medium transition"
    >
      {text}
    </a>
  );
}

// export default function ButtonRenderer({ block }: any) {
//   const text = block?.props?.text;
//   const url = block?.props?.url;

//   if (!text) return null;

//   return (
//     <a
//       href={url || "#"}
//       className="inline-block bg-purple-600 text-white hover:bg-purple-700 cursor-pointer px-4 py-2 rounded-lg text-sm transition"
//     >
//       {text}
//     </a>
//   );
// }

// export default function ButtonRenderer({ block }: any) {
//   if (!block.props.text) return null;

//   return (
//     <a
//       href={block.props.url || "#"}
//       className="inline-block bg-black text-white px-4 py-2 rounded"
//     >
//       {block.props.text}
//     </a>
//   );
// }