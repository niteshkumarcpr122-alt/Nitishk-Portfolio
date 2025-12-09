# Deployment Guide

This guide will help you deploy your application to production.

## Prerequisites

- Node.js 20+ installed
- All dependencies installed (`npm install`)

## Build Process

The application uses a two-step build process:

1. **Client Build**: Vite builds the React frontend to `dist/public`
2. **Server Build**: esbuild bundles the Express server to `dist/index.cjs`

### Building for Production

```bash
npm run build
```

This will:
- Clean the `dist` directory
- Build the client application (Vite)
- Build the server application (esbuild)
- Output everything to the `dist` directory

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000

# Database Configuration (optional - only if using database features)
# DATABASE_URL=postgresql://user:password@host:port/database

# Node Environment (automatically set by npm scripts)
# NODE_ENV=production
```

### Required Variables

- **PORT** (optional): Port number for the server to listen on. Defaults to `5000` if not set.

### Optional Variables

- **DATABASE_URL**: PostgreSQL connection string. Only required if you're using database features (drizzle-orm).
- **NODE_ENV**: Automatically set to `production` by the start script, but can be overridden.

## Running in Production

After building, start the production server:

```bash
npm start
```

This will:
- Set `NODE_ENV=production`
- Start the Express server from `dist/index.cjs`
- Serve static files from `dist/public`
- Listen on the port specified by `PORT` environment variable (default: 5000)

## Deployment Platforms

### Option 1: Traditional VPS/Cloud Server (Recommended)

**Platforms**: DigitalOcean, AWS EC2, Linode, Hetzner, etc.

1. Build the application locally or on the server:
   ```bash
   npm run build
   ```

2. Install production dependencies (if needed):
   ```bash
   npm ci --production
   ```

3. Set environment variables on your server

4. Start the application:
   ```bash
   npm start
   ```

5. Use a process manager like PM2 to keep it running:
   ```bash
   npm install -g pm2
   pm2 start dist/index.cjs --name "your-app"
   pm2 save
   pm2 startup
   ```

6. Configure a reverse proxy (nginx) to point to your application

### Option 2: Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Node.js application
3. Set environment variables in Railway dashboard
4. Railway will run `npm run build` and `npm start` automatically

### Option 3: Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Set environment variables in the dashboard

### Option 4: Fly.io

1. Install flyctl: `npm install -g @fly/cli`
2. Run `fly launch` in your project directory
3. Follow the prompts
4. Set environment variables: `fly secrets set PORT=5000`
5. Deploy: `fly deploy`

### Option 5: Vercel (Serverless Functions)

**Note**: The current `vercel.json` is configured for static deployment only. For full-stack deployment on Vercel, you'll need to:

1. Convert Express routes to Vercel serverless functions, OR
2. Use Vercel's Node.js runtime with a custom server

The current setup is better suited for platforms that support long-running Node.js processes.

## Build Output Structure

```
dist/
├── index.cjs          # Bundled Express server
└── public/            # Static client files
    ├── index.html
    ├── assets/
    │   ├── index-*.js
    │   ├── index-*.css
    │   ├── form-libs-*.js
    │   ├── radix-ui-*.js
    │   └── three-libs-*.js
    └── [other static assets]
```

## Troubleshooting

### Build Errors

- **TypeScript errors**: Run `npm run check` to see TypeScript errors
- **Missing dependencies**: Ensure all dependencies are installed with `npm install`

### Runtime Errors

- **Port already in use**: Change the `PORT` environment variable
- **Cannot find dist/public**: Ensure you've run `npm run build` first
- **Database connection errors**: Check your `DATABASE_URL` if using database features

### Performance

- The build includes code splitting for better performance
- Large chunks (like three.js) are separated into their own files
- Consider using a CDN for static assets in production

## Production Checklist

- [ ] Run `npm run build` successfully
- [ ] Run `npm run check` (TypeScript validation) - no errors
- [ ] Test `npm start` locally
- [ ] Set all required environment variables
- [ ] Configure database (if using)
- [ ] Set up process manager (PM2, systemd, etc.)
- [ ] Configure reverse proxy (nginx, Caddy, etc.)
- [ ] Set up SSL/TLS certificates
- [ ] Configure firewall rules
- [ ] Set up monitoring and logging
- [ ] Test all API endpoints
- [ ] Test all frontend routes

## Notes

- The application serves both the API (`/api/*`) and the frontend from the same server
- Static files are served from `dist/public` in production
- The server listens on `0.0.0.0` to accept connections from any interface
- Development mode uses Vite's dev server, production uses static file serving

