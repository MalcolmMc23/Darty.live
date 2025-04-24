"use client";

import { useState } from "react";
import { Room, LocalParticipant } from "livekit-client";

interface VideoControlsProps {
  room: Room | null;
  onLeave: () => void;
}

export default function VideoControls({ room, onLeave }: VideoControlsProps) {
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const localParticipant = room?.localParticipant;

  const toggleMicrophone = async () => {
    if (!localParticipant) return;

    if (isMicrophoneMuted) {
      await localParticipant.setMicrophoneEnabled(true);
    } else {
      await localParticipant.setMicrophoneEnabled(false);
    }

    setIsMicrophoneMuted(!isMicrophoneMuted);
  };

  const toggleCamera = async () => {
    if (!localParticipant) return;

    if (isCameraOff) {
      await localParticipant.setCameraEnabled(true);
    } else {
      await localParticipant.setCameraEnabled(false);
    }

    setIsCameraOff(!isCameraOff);
  };

  const handleLeave = () => {
    if (room) {
      room.disconnect();
    }
    onLeave();
  };

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-gray-800 bg-opacity-75 p-3 rounded-full shadow-lg">
      <button
        onClick={toggleMicrophone}
        className={`p-3 rounded-full ${
          isMicrophoneMuted ? "bg-red-500" : "bg-gray-600"
        }`}
        aria-label={isMicrophoneMuted ? "Unmute microphone" : "Mute microphone"}
      >
        {isMicrophoneMuted ? (
          <MicOffIcon className="w-6 h-6 text-white" />
        ) : (
          <MicIcon className="w-6 h-6 text-white" />
        )}
      </button>

      <button
        onClick={toggleCamera}
        className={`p-3 rounded-full ${
          isCameraOff ? "bg-red-500" : "bg-gray-600"
        }`}
        aria-label={isCameraOff ? "Turn camera on" : "Turn camera off"}
      >
        {isCameraOff ? (
          <VideoOffIcon className="w-6 h-6 text-white" />
        ) : (
          <VideoIcon className="w-6 h-6 text-white" />
        )}
      </button>

      <button
        onClick={handleLeave}
        className="p-3 rounded-full bg-red-500"
        aria-label="Leave chat"
      >
        <PhoneOffIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

// Simple icon components
function MicIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function MicOffIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        stroke-dasharray="2 2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
      />
    </svg>
  );
}

function VideoIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function VideoOffIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14"
      />
    </svg>
  );
}

function PhoneOffIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3l18 18"
      />
    </svg>
  );
}
