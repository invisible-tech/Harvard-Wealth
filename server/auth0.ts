import type { Express, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import session from 'express-session';

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// Setup session middleware for Auth0
export function setupAuth0Session(app: Express) {
  app.use(session({
    secret: process.env.AUTH0_SECRET || 'fallback-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }));
}

export function setupAuth0Routes(app: Express) {
  // Auth0 login route - redirect to Auth0
  app.get('/api/auth/login', (req: Request, res: Response) => {
    const authUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/authorize?` +
      `response_type=code&` +
      `client_id=${process.env.AUTH0_CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(process.env.AUTH0_BASE_URL + '/api/auth/callback')}&` +
      `scope=openid%20profile%20email`;
    
    res.redirect(authUrl);
  });

  // Auth0 callback route
  app.get('/api/auth/callback', async (req: Request, res: Response) => {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).json({ message: 'No authorization code received' });
    }

    try {
      // Exchange code for tokens
      const tokenResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          code,
          redirect_uri: process.env.AUTH0_BASE_URL + '/api/auth/callback',
        }),
      });

      const tokens = await tokenResponse.json();
      
      if (tokens.access_token) {
        // Get user info
        const userResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
          },
        });
        
        const user = await userResponse.json();
        
        // Store user in session
        (req.session as any).user = user;
        (req.session as any).accessToken = tokens.access_token;
        
        res.redirect('/');
      } else {
        res.status(401).json({ message: 'Failed to get access token' });
      }
    } catch (error) {
      console.error('Auth callback error:', error);
      res.status(500).json({ message: 'Authentication failed' });
    }
  });

  // Auth0 logout route
  app.get('/api/auth/logout', (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destroy error:', err);
      }
      
      const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?` +
        `client_id=${process.env.AUTH0_CLIENT_ID}&` +
        `returnTo=${encodeURIComponent(process.env.AUTH0_BASE_URL || 'http://localhost:5000')}`;
      
      res.redirect(logoutUrl);
    });
  });

  // Get user session
  app.get('/api/auth/user', (req: Request, res: Response) => {
    const user = (req.session as any)?.user;
    if (user) {
      res.json({ user });
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  });
}

export function requireAuth(req: Request, res: Response, next: any) {
  const user = (req.session as any)?.user;
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}