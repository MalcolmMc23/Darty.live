/**
 * Simple in-memory queue for matching users
 */
interface WaitingUser {
  id: string;
  timestamp: number;
}

// Queue of users waiting to be matched
const waitingUsers: WaitingUser[] = [];

// Keep track of active rooms
const activeRooms: Map<string, string[]> = new Map();

/**
 * Find a match for a user or add them to the waiting queue
 * @param userId User ID to find a match for
 * @returns Matched user ID or null if no match is found
 */
export function findMatch(userId: string): string | null {
  // Clean up stale waiting users (waiting more than 2 minutes)
  const now = Date.now();
  const staleThreshold = 2 * 60 * 1000; // 2 minutes
  
  // Remove stale users
  const freshUsers = waitingUsers.filter(
    user => now - user.timestamp < staleThreshold
  );
  
  // Clear the array and add back the fresh users
  waitingUsers.length = 0;
  waitingUsers.push(...freshUsers);
  
  // Check if there's already a match
  const matchIndex = waitingUsers.findIndex(user => user.id !== userId);
  
  if (matchIndex >= 0) {
    // Match found - remove from waiting queue
    const match = waitingUsers.splice(matchIndex, 1)[0];
    console.log(`Matched ${userId} with ${match.id}`);
    return match.id;
  } else {
    // No match found - add to waiting queue if not already there
    const existingIndex = waitingUsers.findIndex(user => user.id === userId);
    if (existingIndex === -1) {
      waitingUsers.push({
        id: userId,
        timestamp: now
      });
      console.log(`Added ${userId} to waiting queue. Queue size: ${waitingUsers.length}`);
    }
    return null;
  }
}

/**
 * Remove a user from the waiting queue
 * @param userId User ID to remove
 * @returns True if user was removed, false if not found
 */
export function cancelMatch(userId: string): boolean {
  const index = waitingUsers.findIndex(user => user.id === userId);
  if (index !== -1) {
    waitingUsers.splice(index, 1);
    console.log(`Removed ${userId} from waiting queue`);
    return true;
  }
  return false;
}

/**
 * Track an active room with its participants
 * @param roomName Room name
 * @param userIds User IDs in the room
 */
export function trackRoom(roomName: string, userIds: string[]): void {
  activeRooms.set(roomName, userIds);
  console.log(`Room ${roomName} created with users: ${userIds.join(', ')}`);
}

/**
 * Remove a room from tracking
 * @param roomName Room name to remove
 */
export function removeRoom(roomName: string): void {
  if (activeRooms.has(roomName)) {
    activeRooms.delete(roomName);
    console.log(`Room ${roomName} removed`);
  }
}

/**
 * Get statistics about the matching system
 * @returns Statistics object
 */
export function getStats(): {
  waitingCount: number;
  activeRoomsCount: number;
} {
  return {
    waitingCount: waitingUsers.length,
    activeRoomsCount: activeRooms.size
  };
} 