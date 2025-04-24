import { Room, RoomEvent, LocalParticipant, RemoteParticipant, Track } from 'livekit-client';

// API endpoint URL - change to your deployed server URL in production
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Connect to a LiveKit room
 * @param url LiveKit server URL
 * @param token JWT token for authentication
 * @returns Connected Room instance
 */
export const connectToRoom = async (url: string, token: string): Promise<Room> => {
  const room = new Room({
    // Optional room options
    adaptiveStream: true,
    dynacast: true,
  });

  try {
    await room.connect(url, token);
    console.log('Connected to LiveKit room');
    return room;
  } catch (error) {
    console.error('Error connecting to LiveKit room:', error);
    throw error;
  }
};

/**
 * Publish local camera and microphone tracks
 * @param participant LocalParticipant instance
 * @returns Published tracks
 */
export const publishTracks = async (participant: LocalParticipant) => {
  try {
    // This will handle camera and microphone permissions and publishing
    return await participant.enableCameraAndMicrophone();
  } catch (error) {
    console.error('Error publishing tracks:', error);
    throw error;
  }
};

/**
 * Leave the room and clean up resources
 * @param room Room instance to disconnect from
 * @param roomName Optional room name to notify the server
 */
export const leaveRoom = async (room: Room, roomName?: string) => {
  if (room) {
    room.disconnect();
    console.log('Disconnected from room');
    
    // Notify the server if roomName is provided
    if (roomName) {
      try {
        await fetch(`${API_BASE_URL}/api/leave`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ roomName })
        });
      } catch (error) {
        console.error('Error notifying server about leaving:', error);
      }
    }
  }
};

/**
 * Find a random match by connecting to a LiveKit room
 * @returns Token and room information
 */
export const findRandomMatch = async (): Promise<{ 
  token: string; 
  url: string; 
  roomName: string;
  matched: boolean;
  userId?: string;
}> => {
  try {
    // Get user ID from local storage if it exists
    const userId = localStorage.getItem('darty_user_id');
    
    // Call our backend API to find a match
    const response = await fetch(`${API_BASE_URL}/api/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId ? { userId } : {})
    });
    
    if (!response.ok) {
      throw new Error('Failed to find a match');
    }
    
    const data = await response.json();
    
    // Save user ID in local storage for future requests
    if (data.userId) {
      localStorage.setItem('darty_user_id', data.userId);
    }
    
    return data;
  } catch (error) {
    console.error('Error finding match:', error);
    throw error;
  }
};

/**
 * Cancel a pending match
 * @param userId User ID to cancel the match for
 */
export const cancelMatch = async (userId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    });
    
    if (!response.ok) {
      throw new Error('Failed to cancel match');
    }
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error canceling match:', error);
    return false;
  }
}; 