# Deployment Guide - TechVision IT Solutions Website

This guide covers deploying your Next.js website to various hosting platforms.

## 📦 Pre-Deployment Checklist

- [ ] Test the site locally (`npm run dev`)
- [ ] Build the site successfully (`npm run build`)
- [ ] Update environment variables (if any)
- [ ] Update company information (contact details, social links)
- [ ] Replace placeholder images with actual images
- [ ] Update the base URL in `app/sitemap.ts`
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option as it's built by the Next.js team.

#### Steps:

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure project:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add any required variables

### Option 3: AWS Amplify

1. Connect your Git repository
2. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Option 4: DigitalOcean App Platform

1. Create a new app
2. Connect your repository
3. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

### Option 5: Traditional VPS (Ubuntu)

#### Requirements:
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

#### Steps:

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and Build**
   ```bash
   git clone YOUR_REPO_URL
   cd N-Site
   npm install
   npm run build
   ```

3. **Install PM2**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "techvision" -- start
   pm2 startup
   pm2 save
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL Certificate** (Let's Encrypt)
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## 🔧 Environment Variables

If you add any environment variables later, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact form (if you add email functionality)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@yourdomain.com
```

## 📊 Post-Deployment Setup

### 1. Google Analytics (Optional)

Add to `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

### 2. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 3. Performance Monitoring

- Enable Vercel Analytics (if using Vercel)
- Set up Google PageSpeed Insights monitoring
- Configure uptime monitoring (UptimeRobot, Pingdom, etc.)

## 🔍 SEO Checklist

After deployment:

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Test structured data with Google Rich Results Test
- [ ] Check meta tags with Facebook Sharing Debugger
- [ ] Verify Open Graph images
- [ ] Test site speed with PageSpeed Insights
- [ ] Check mobile-friendliness with Google Mobile-Friendly Test

## 🔒 Security Recommendations

1. **Enable HTTPS** (SSL Certificate)
2. **Security Headers** - Add to `next.config.ts`:
   ```typescript
   async headers() {
     return [
       {
         source: '/:path*',
         headers: [
           {
             key: 'X-Frame-Options',
             value: 'DENY',
           },
           {
             key: 'X-Content-Type-Options',
             value: 'nosniff',
           },
           {
             key: 'X-XSS-Protection',
             value: '1; mode=block',
           },
         ],
       },
     ];
   }
   ```

3. **Regular Updates**
   ```bash
   npm update
   npm audit fix
   ```

## 📈 Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component (already implemented)
   - Convert images to WebP format
   - Compress images before uploading

2. **Caching**
   - Leverage Vercel's Edge Network (automatic)
   - Configure cache headers if needed

3. **Code Splitting**
   - Already handled by Next.js automatically
   - Use dynamic imports for heavy components if needed

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Try building again
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart the development server after adding variables
- Rebuild the project for production

## 📞 Support

For deployment issues:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- Project issues: Contact the development team

---

**Last Updated**: October 2025
