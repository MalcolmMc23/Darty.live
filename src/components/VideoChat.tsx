"use client";

import { useRef, useEffect, useState } from "react";
import VideoControls from "./VideoControls";
import { Room, Track, Participant } from "livekit-client";

export interface VideoChatProps {
  room: Room | null;
  onLeave: () => void;
}

export default function VideoChat({ room, onLeave }: VideoChatProps) {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  // const [publication, setPublication] = useState<any>(null);
  // const [participant, setParticipant] = useState(null);
  const [hasRemoteParticipant, setHasRemoteParticipant] = useState(false);

  // Set up event listeners for tracks
  useEffect(() => {
    if (!room) return;

    // Track subscription handler
    const onTrackSubscribed = (
      track: Track,
      publication: any,
      participant: Participant
    ) => {
      if (track.kind === Track.Kind.Video) {
        track.attach(remoteVideoRef.current!);
      } else if (track.kind === Track.Kind.Audio) {
        track.attach();
      }
    };

    // Track unsubscription handler
    const onTrackUnsubscribed = (track: Track) => {
      track.detach();
    };

    // Setup local tracks
    const setupLocalTracks = async () => {
      try {
        // This will handle camera and microphone permissions and publishing
        await room.localParticipant.enableCameraAndMicrophone();

        // Attach local camera
        const localTrackPubs = room.localParticipant.getTrackPublications();
        for (const pub of localTrackPubs.values()) {
          const track = pub.track;
          if (
            track &&
            track.kind === Track.Kind.Video &&
            localVideoRef.current
          ) {
            track.attach(localVideoRef.current);
          }
        }
      } catch (error) {
        console.error("Error setting up local tracks:", error);
      }
    };

    // Set up event listeners
    room.on("trackSubscribed", onTrackSubscribed);
    room.on("trackUnsubscribed", onTrackUnsubscribed);

    // Setup local tracks
    setupLocalTracks();

    // Handle existing remote participants
    for (const participant of room.remoteParticipants.values()) {
      const trackPubs = participant.getTrackPublications();
      for (const pub of trackPubs.values()) {
        const track = pub.track;
        if (track) {
          if (track.kind === Track.Kind.Video && remoteVideoRef.current) {
            track.attach(remoteVideoRef.current);
          } else if (track.kind === Track.Kind.Audio) {
            track.attach();
          }
        }
      }
    }

    return () => {
      // Clean up
      room.off("trackSubscribed", onTrackSubscribed);
      room.off("trackUnsubscribed", onTrackUnsubscribed);

      // Detach all tracks
      const localVideoElement = localVideoRef.current;
      const remoteVideoElement = remoteVideoRef.current;
      if (localVideoElement) {
        localVideoElement.srcObject = null;
      }
      if (remoteVideoElement) {
        remoteVideoElement.srcObject = null;
      }
    };
  }, [room]);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Remote video (main view) */}
      <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden">
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Local video (picture-in-picture) */}
      <div className="absolute bottom-4 right-4 w-32 h-24 md:w-48 md:h-36 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
