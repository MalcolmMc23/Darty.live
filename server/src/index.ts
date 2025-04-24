import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import { generateToken, getLiveKitUrl } from './token';
import { findMatch, cancelMatch, trackRoom, removeRoom, getStats } from './matching';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

/**
 * Find a match for a user
 * POST /api/match
 */
app.post('/api/match', (req, res) => {
  // Generate a random user ID if not provided
  const userId = req.body.userId || uuidv4();
  
  // Try to find a match
  const matchedUserId = findMatch(userId);
  
  if (matchedUserId) {
    // Match found - create a new room for both users
    const roomName = `room-${uuidv4().substring(0, 8)}`;
    
    // Generate token for the requesting user
    const token = generateToken(roomName, userId);
    
    // Track this room
    trackRoom(roomName, [userId, matchedUserId]);
    
    // Return room info
    res.json({
      token,
      url: getLiveKitUrl(),
      roomName,
      matched: true
    });
  } else {
    // No match found - user is in waiting state
    // We'll create a temporary waiting room
    const waitingRoomName = `waiting-${userId}`;
    const token = generateToken(waitingRoomName, userId);
    
    res.json({
      token,
      url: getLiveKitUrl(),
      roomName: waitingRoomName,
      matched: false,
      userId // Return the user ID so they can use it in subsequent requests
    });
  }
});

/**
 * Cancel a matching request
 * POST /api/cancel
 */
app.post('/api/cancel', (req, res) => {
  const { userId } = req.body;
  
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }
  
  const cancelled = cancelMatch(userId);
  res.json({ success: cancelled });
});

/**
 * Leave a room
 * POST /api/leave
 */
app.post('/api/leave', (req, res) => {
  const { roomName } = req.body;
  
  if (!roomName) {
    return res.status(400).json({ error: 'roomName is required' });
  }
  
  removeRoom(roomName);
  res.json({ success: true });
});

/**
 * Get server stats
 * GET /api/stats
 */
app.get('/api/stats', (req, res) => {
  res.json(getStats());
});

/**
 * Health check
 * GET /health
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 