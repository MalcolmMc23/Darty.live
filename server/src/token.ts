import { AccessToken } from 'livekit-server-sdk';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// LiveKit API key and secret from environment or use defaults from livekit.yaml
const API_KEY = process.env.LIVEKIT_API_KEY || 'darty-api-key';
const API_SECRET = process.env.LIVEKIT_API_SECRET || 'darty-api-secret';

/**
 * Generate a LiveKit access token
 * @param roomName The room name to join
 * @param identity User identity (unique identifier)
 * @returns JWT token string
 */
export function generateToken(roomName: string, identity: string): string {
  const at = new AccessToken(API_KEY, API_SECRET, {
    identity,
  });
  
  // Add permission to join the room
  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true
  });
  
  // Generate JWT token
  return at.toJwt();
}

/**
 * Get the LiveKit server URL
 * @returns The WebSocket URL of the LiveKit server
 */
export function getLiveKitUrl(): string {
  const url = process.env.LIVEKIT_URL || 'ws://localhost:7880';
  
  // If we're in production (Railway) and the URL doesn't start with wss://
  // and is not localhost, convert it to wss://
  if (process.env.NODE_ENV === 'production' && 
      !url.startsWith('wss://') && 
      !url.includes('localhost')) {
    // Replace ws:// with wss:// or add wss:// if protocol missing
    return url.startsWith('ws://') ? url.replace('ws://', 'wss://') : `wss://${url}`;
  }
  
  return url;
} 