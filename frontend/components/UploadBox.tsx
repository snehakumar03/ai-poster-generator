"use client";

export default function UploadBox({ setFile }: any) {
  return (
    <div className="mt-6">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        className="p-2 bg-gray-800 rounded"
      />
    </div>
  );
}