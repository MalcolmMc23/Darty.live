"use client";

import { useState, useEffect } from "react";

interface WaitingRoomProps {
  onCancel: () => void;
}

export default function WaitingRoom({ onCancel }: WaitingRoomProps) {
  const [waitTime, setWaitTime] = useState(0);

  // Update wait time counter
  useEffect(() => {
    const interval = setInterval(() => {
      setWaitTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white p-8 rounded-lg">
      <div className="mb-8 w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="text-sm font-mono">{formatTime(waitTime)}</div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Finding a peer...</h2>
      <p className="text-gray-400 mb-8 text-center">
        We're looking for someone to chat with you. This might take a moment.
      </p>

      <button
        onClick={onCancel}
        className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}
