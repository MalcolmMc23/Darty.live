# Darty.live - Omegle-like Random Video Chat

A web application that allows users to have random video chats with each other, similar to Omegle. Built with Next.js, LiveKit, and Express.

## Architecture

The application consists of three main components:

1. **Frontend**: Next.js app with React components for video chat
2. **Matching Server**: Express server that handles user matching
3. **LiveKit Server**: WebRTC SFU that handles media connections

## Prerequisites

- Node.js 18+ and pnpm
- Basic knowledge of React, Next.js, and TypeScript
- A public IP address or domain (for production deployment)

## Local Development Setup

### Option 1: Start All Services Together

The easiest way to start all services at once:

```bash
# Install dependencies first
pnpm install
cd server && pnpm install && cd ..

# Start everything with one command
pnpm dev:all
```

This will concurrently run:

- LiveKit server with your configuration
- The Express matching server in development mode
- The Next.js frontend in development mode

### Option 2: Start Services Individually

If you prefer to run services in separate terminals:

1. LiveKit Server

```bash
# For macOS
brew install livekit

# For Linux (check the LiveKit docs for your distro)
curl -sL https://get.livekit.io | bash
```

Start the LiveKit server with your configuration:

```bash
livekit-server --config livekit.yaml
```

2. Matching Server

Navigate to the server directory and install dependencies:

```bash
cd server
pnpm install
```

Start the server in development mode:

```bash
pnpm dev
```

3. Frontend

Install dependencies:

```bash
pnpm install
```

Start the Next.js dev server:

```bash
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## Configuration Files

### LiveKit Server (livekit.yaml)

The LiveKit server configuration file sets up the WebRTC server:

```yaml
port: 7880
rtc:
  tcp_port: 7882
  udp_port: 7882
  port_range_start: 50000
  port_range_end: 60000
  ice_lite: true
keys:
  darty-api-key: darty-api-secret
```

### Backend Server (.env)

Environment variables for the matching server:

```
LIVEKIT_URL=ws://localhost:7880
LIVEKIT_API_KEY=darty-api-key
LIVEKIT_API_SECRET=darty-api-secret
PORT=3001
```

### Frontend (.env.local)

Environment variables for the Next.js app:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Production Deployment

For production, you'll need:

1. A server with a public IP address
2. Domain name with SSL certificate
3. Proper firewall configuration to allow WebRTC traffic

Update the configuration files with production values:

1. Set `LIVEKIT_URL` to use wss:// (secure WebSocket)
2. Generate secure API keys
3. Configure TURN settings

## Project Structure

```
darty.live/
├── livekit.yaml             # LiveKit server configuration
├── server/                  # Matching server
│   ├── src/
│   │   ├── index.ts         # Express server setup
│   │   ├── matching.ts      # User matching logic
│   │   └── token.ts         # LiveKit token generation
│   ├── package.json
│   └── .env
├── src/                     # Next.js frontend
│   ├── app/
│   │   ├── page.tsx         # Landing page
│   │   └── chat/            # Video chat page
│   ├── components/          # React components
│   │   ├── VideoChat.tsx
│   │   ├── VideoControls.tsx
│   │   └── WaitingRoom.tsx
│   └── utils/
│       └── livekit.ts       # LiveKit client utilities
├── .env.local               # Frontend environment variables
└── package.json
```

## License

MIT

## Deployment with Railway

### Option 1: Deploy Using Railway Dashboard

1. Create a new project in Railway
2. Link your GitHub repository (MalcolmMc23/Darty.live)
3. Railway will detect the `railway.toml` configuration
4. It will create two services:
   - Frontend (Next.js app)
   - Server (Express backend)
5. Add the necessary environment variables:
   - For frontend: Set `NEXT_PUBLIC_API_URL` to your Railway server URL
   - For server: Add any required API keys

### Option 2: Deploy Using Railway CLI

1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Link project: `railway link`
4. Deploy project: `railway up`

The configuration in `railway.toml` will ensure both services are deployed correctly.
