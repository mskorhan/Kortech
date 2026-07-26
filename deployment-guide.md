# KorTech Service Website Deployment Guide

## Deploying to kortechservice.com

### Option 1: Static Website (Recommended for simplicity)

If you want to deploy just the frontend without the backend authentication system:

#### Step 1: Build the Frontend
```bash
npm run build
```

#### Step 2: Upload to Your Web Host
1. Upload all contents of the `dist` folder to your domain's root directory
2. Make sure `index.html` is in the root of your domain
3. Ensure your logo file `transparent-logo-1.png` is accessible

#### Step 3: Configure Your Web Server
Add this to your `.htaccess` file (for Apache) or equivalent for other servers:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle React Router
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### Option 2: Full Stack Deployment (Frontend + Backend)

If you want the complete system with authentication:

#### Step 1: Choose a Hosting Provider
- **VPS/Dedicated Server**: DigitalOcean, Linode, AWS EC2
- **Platform as a Service**: Heroku, Railway, Render
- **Shared Hosting with Node.js**: Some shared hosts support Node.js

#### Step 2: Server Setup (VPS Example)
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Clone your project
git clone your-repository-url
cd kortechservice-website

# Install dependencies
npm install

# Build the frontend
npm run build

# Set up environment variables
cp .env.production .env
# Edit .env with your actual values

# Start the server with PM2
pm2 start server/index.js --name "kortechservice"
pm2 startup
pm2 save
```

#### Step 3: Configure Nginx (Reverse Proxy)
```nginx
server {
    listen 80;
    server_name kortechservice.com www.kortechservice.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name kortechservice.com www.kortechservice.com;

    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;

    # Serve static files
    location / {
        try_files $uri $uri/ @backend;
    }

    # API routes to backend
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Fallback to backend for SPA routing
    location @backend {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option 3: Serverless Deployment

#### Netlify (Frontend Only)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

#### Vercel (Frontend + Serverless Functions)
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect the Vite configuration
3. Add environment variables in Vercel dashboard

### Database Setup (For Full Stack)

#### Option 1: PostgreSQL (Recommended)
```bash
# Install PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Create database and user
sudo -u postgres createdb kortechservice
sudo -u postgres createuser --interactive
```

#### Option 2: MongoDB
```bash
# Install MongoDB or use MongoDB Atlas (cloud)
# Update your backend to use MongoDB instead of in-memory storage
```

#### Option 3: SQLite (Simple)
```bash
# SQLite is file-based, no server setup needed
# Good for small to medium traffic
```

### Security Considerations

1. **SSL Certificate**: Use Let's Encrypt for free SSL
2. **Environment Variables**: Never commit secrets to git
3. **Database Security**: Use strong passwords and limit access
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **CORS**: Configure CORS properly for your domain

### Monitoring and Maintenance

1. **Uptime Monitoring**: Use services like UptimeRobot
2. **Error Tracking**: Implement error logging (Sentry, LogRocket)
3. **Analytics**: Add Google Analytics
4. **Backups**: Regular database backups
5. **Updates**: Keep dependencies updated

### DNS Configuration

Point your domain to your server:
```
A Record: @ -> Your Server IP
A Record: www -> Your Server IP
```

### Testing Deployment

1. Test all pages load correctly
2. Test contact forms work
3. Test authentication (if using backend)
4. Test on mobile devices
5. Check page load speeds
6. Verify SSL certificate

### Maintenance Commands

```bash
# Update the application
git pull origin main
npm install
npm run build
pm2 restart kortechservice

# View logs
pm2 logs kortechservice

# Monitor server
pm2 monit
```

## Need Help?

If you need assistance with deployment, consider:
1. Hiring a DevOps consultant
2. Using managed hosting services
3. Contacting your hosting provider's support

The static website option (Option 1) is the simplest and most cost-effective for most small businesses.