// app/components/FormClient.tsx
'use client';
import { useState } from 'react';

export default function FormClient() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      window.location.href = `/?url=${url}`;
    }
  };

  return (
    <>
   
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="url"
        placeholder="Enter URL"
        className="p-2 border rounded"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Fetch Video
      </button>
    </form>
    </>
  );
}
