"use client";

import { useState } from "react";
import UploadBox from "@/components/UploadBox";
import StyleSelector from "@/components/StyleSelector";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState("");

  const handleGenerate = () => {
    console.log(file, style);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        AI Poster Generator 🚀
      </h1>

      <UploadBox setFile={setFile} />
      <StyleSelector setStyle={setStyle} />

      <button
        onClick={handleGenerate}
        className="mt-6 px-6 py-2 bg-purple-600 rounded"
      >
        Generate Poster
      </button>
    </main>
  );
}