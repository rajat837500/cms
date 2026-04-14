export default function ImageRenderer({ block }: any) {
  const url = block?.props?.url;

  if (!url || typeof url !== "string") return null;

  return (
    <div className="overflow-hidden rounded-xl">
      <img
        src={url}
        className="w-full h-auto object-cover"
        alt="image"
      />
    </div>
  );
}
