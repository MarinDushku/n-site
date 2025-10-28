# Hostinger Deployment Guide for AD Services Website

## ✅ Build Complete!
Your Next.js project has been successfully built for production.

## Deployment Options for Hostinger

Hostinger supports multiple deployment methods. Here are your options:

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

**Why Vercel?**
- Free tier available
- Made by Next.js creators
- Automatic deployments from Git
- Built-in environment variables support
- Perfect for Next.js apps
- No server configuration needed

### Steps:

1. **Push your code to GitHub:**
   ```bash
   cd "C:\Users\dushk\Desktop\N-Site"
   git init
   git add .
   git commit -m "Initial commit - AD Services website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Add Environment Variables:
     - `RESEND_API_KEY` = `re_ijdtLY9z_P1YYGsJhirZSKYc4d77EqCVn`
     - `CONTACT_EMAIL` = `ad@adservice.al`
   - Click "Deploy"

3. **Connect your domain (adservice.al):**
   - In Vercel dashboard → Settings → Domains
   - Add `adservice.al` and `www.adservice.al`
   - Update DNS in Hostinger with Vercel's nameservers

---

## Option 2: Deploy to Hostinger (Node.js Hosting)

**Requirements:**
- Hostinger VPS or Cloud Hosting (not shared hosting)
- Node.js support

### Steps:

1. **Upload files via FTP/SFTP:**
   - Upload entire project folder to Hostinger
   - Include: all files EXCEPT `node_modules` and `.next`

2. **SSH into your Hostinger server:**
   ```bash
   ssh your_username@your_server_ip
   ```

3. **Install dependencies:**
   ```bash
   cd /path/to/your/project
   npm install
   ```

4. **Create `.env.local` file on server:**
   ```bash
   nano .env.local
   ```

   Add:
   ```env
   RESEND_API_KEY=re_ijdtLY9z_P1YYGsJhirZSKYc4d77EqCVn
   CONTACT_EMAIL=ad@adservice.al
   ```

5. **Build the project:**
   ```bash
   npm run build
   ```

6. **Start the server:**
   ```bash
   npm start
   ```

7. **Set up PM2 (keeps app running):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ad-services" -- start
   pm2 startup
   pm2 save
   ```

8. **Configure Nginx/Apache** to proxy requests to port 3000

---

## Option 3: Static Export (Not Recommended)

⚠️ **WARNING**: Your contact form uses API routes which require a server. Static export won't work for the email functionality!

---

## What You Need After Deployment

### 1. Update Resend Domain Verification

Once your site is live at `adservice.al`:

1. Go to https://resend.com/domains
2. Add domain: `adservice.al`
3. Get DNS records from Resend
4. Add DNS records in Hostinger:
   - SPF Record
   - DKIM Records
   - DMARC Record
5. Wait for verification (5-30 minutes)

### 2. Update API Route

After domain is verified, update [app/api/send-email/route.ts](app/api/send-email/route.ts):

**Line 106**: Change from:
```typescript
from: 'AD Services Contact Form <onboarding@resend.dev>',
```

To:
```typescript
from: 'AD Services Contact Form <noreply@adservice.al>',
```

Then rebuild and redeploy.

---

## Files Already Configured

✅ `.env.local` - Contains your API keys (DO NOT commit to Git!)
✅ `.gitignore` - Protects sensitive files
✅ Production build - Ready in `.next` folder
✅ Contact form API - Configured and working

---

## Recommended: Vercel Deployment

For the easiest deployment with zero configuration:

1. **Create GitHub Account** (if you don't have one): https://github.com
2. **Create New Repository** on GitHub
3. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "AD Services website ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ad-services.git
   git push -u origin main
   ```

4. **Deploy to Vercel:** https://vercel.com/new
   - Import your GitHub repo
   - Add environment variables
   - Deploy!

5. **Point your domain:**
   - In Hostinger DNS, point `adservice.al` to Vercel
   - Or transfer nameservers to Vercel

---

## Need Help?

- **Vercel Docs**: https://nextjs.org/docs/deployment
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Hostinger Support**: Contact their support team for Node.js setup

---

## Final Checklist Before Going Live

- [ ] Domain verified in Resend
- [ ] Update API route to use `noreply@adservice.al`
- [ ] Environment variables set on production server
- [ ] Test contact form on live site
- [ ] Check all pages load correctly
- [ ] Verify emails are received at `ad@adservice.al`
- [ ] Test mobile responsiveness
- [ ] Check logo displays correctly
- [ ] Update any placeholder content

---

## Your Current Build Status

✅ Production build successful
✅ All pages optimized
✅ API route working
✅ Email integration configured
✅ Environment variables set
✅ Ready for deployment!

**Build Output:**
```
Route (app)
├ ○ /                    (Homepage)
├ ○ /about              (About page)
├ ○ /contact            (Contact page with form)
├ ○ /faq                (FAQ page)
├ ○ /services           (Services page)
├ ƒ /api/send-email    (Email API - requires server)
└ ○ /sitemap.xml        (SEO sitemap)

○ = Static (pre-rendered)
ƒ = Dynamic (server-side)
```

---

Good luck with your deployment! 🚀
