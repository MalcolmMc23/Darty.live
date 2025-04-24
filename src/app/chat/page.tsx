"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Room } from "livekit-client";
import { joinRoom } from "@/utils/livekit";
import VideoChat from "@/components/VideoChat";
import VideoControls from "@/components/VideoControls";
import WaitingRoom from "@/components/WaitingRoom";
import {
  connectToRoom,
  findRandomMatch,
  leaveRoom,
  publishTracks,
  cancelMatch,
} from "@/utils/livekit";

export default function ChatPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [status, setStatus] = useState<"connecting" | "waiting" | "chatting">(
    "connecting"
  );
  const [userId, setUserId] = useState<string | null>(null);
  const [roomName, setRoomName] = useState<string | null>(null);

  // Connect to LiveKit and find a match
  useEffect(() => {
    let mounted = true;

    const setupChat = async () => {
      try {
        setStatus("connecting");
        setError(null);

        // Find a random match - this calls our API to get a token from the server
        const matchData = await findRandomMatch();
        const {
          token,
          url,
          roomName: newRoomName,
          matched,
          userId: newUserId,
        } = matchData;

        // Save room info and user ID
        setRoomName(newRoomName);
        if (newUserId) {
          setUserId(newUserId);
        }

        // Connect to the room
        const newRoom = await connectToRoom(url, token);

        if (!mounted) {
          newRoom.disconnect();
          return;
        }

        setRoom(newRoom);
        console.log(`Connected to room: ${newRoomName}`);

        // If we already have a match, go to chatting state
        if (matched) {
          setStatus("chatting");
          // Publish local tracks immediately
          await publishTracks(newRoom.localParticipant);
        } else {
          // Start in waiting state if we're the first person in the room
          setStatus("waiting");

          // Set up event handlers for when someone joins
          newRoom.once("participantConnected", async () => {
            if (mounted) {
              setStatus("chatting");

              // Publish local tracks after partner joins
              await publishTracks(newRoom.localParticipant);
            }
          });
        }

        // Handle when partner disconnects
        newRoom.on("participantDisconnected", () => {
          if (mounted) {
            setError("Your chat partner has disconnected.");
          }
        });
      } catch (err) {
        if (mounted) {
          console.error("Error setting up chat:", err);
          setError("Failed to connect. Please try again.");
          setStatus("connecting");
        }
      }
    };

    setupChat();

    return () => {
      mounted = false;
      if (room && roomName) {
        leaveRoom(room, roomName);
      }
    };
  }, [room, roomName]);

  const handleFindNew = async () => {
    // Disconnect from current room
    if (room && roomName) {
      await leaveRoom(room, roomName);
      setRoom(null);
      setRoomName(null);
    }

    setStatus("connecting");

    // This will trigger the useEffect to run again and find a new match
    window.location.reload();
  };

  const handleLeave = async () => {
    if (room && roomName) {
      await leaveRoom(room, roomName);
    }
    router.push("/");
  };

  const handleCancel = async () => {
    if (room && roomName) {
      await leaveRoom(room, roomName);
    }

    // Cancel the pending match
    if (userId) {
      await cancelMatch(userId);
    }

    router.push("/");
  };

  return (
    <div className="w-full h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-full max-h-[80vh] rounded-xl overflow-hidden relative">
        {status === "connecting" && (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
              </div>
              <p className="text-xl font-medium">Connecting...</p>
              {error && <p className="text-red-400 mt-2">{error}</p>}
            </div>
          </div>
        )}

        {status === "waiting" && <WaitingRoom onCancel={handleCancel} />}

        {status === "chatting" && (
          <>
            <VideoChat room={room} />
            <VideoControls room={room} onLeave={handleLeave} />

            <button
              onClick={handleFindNew}
              className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}
