"use client";

export default function StyleSelector({ setStyle }: any) {
  const styles = ["Luxury", "Neon", "Minimal", "Social"];

  return (
    <div className="flex gap-3 mt-6">
      {styles.map((style) => (
        <button
          key={style}
          onClick={() => setStyle(style)}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-purple-600"
        >
          {style}
        </button>
      ))}
    </div>
  );
}