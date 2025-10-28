# Resend Email Setup Instructions

## Overview
Your contact form is now configured to send emails using Resend. I can see you've already added your API key to `.env.local`!

## What Has Been Implemented

### ✅ Completed Tasks:
1. **Email addresses updated** throughout the site to `ad@adservice.al`
2. **Resend package installed** (`npm install resend`)
3. **API route created** at `/app/api/send-email/route.ts`
4. **Contact form updated** with:
   - Loading state (shows spinner while sending)
   - Error handling (shows error messages)
   - Success message (shows thank you message)
5. **Environment variables configured** in `.env.local`

## Important Next Steps

### 1. Verify Your Domain in Resend

To send emails from your own domain (`ad@adservice.al`), you need to verify it in Resend:

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter your domain: `adservice.al`
4. Add the DNS records to your Hostinger domain settings:
   - **SPF Record** - for email authentication
   - **DKIM Records** - for email signatures
   - **DMARC Record** - for email policy

### 2. Update the "From" Email Address

Once your domain is verified, update the API route:

**File**: `app/api/send-email/route.ts`
**Line 93**: Change from:
```typescript
from: 'AD Services Contact Form <onboarding@resend.dev>',
```

To:
```typescript
from: 'AD Services Contact Form <noreply@adservice.al>',
```

### 3. Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the contact form
3. Submit it
4. Check your email at `ad@adservice.al` for the message

### 4. Monitor Email Sending

- View sent emails in Resend Dashboard: https://resend.com/emails
- Check API logs for any errors
- Free tier allows 100 emails per day

## How It Works

1. **User fills out form** → Contact page (`app/contact/page.tsx`)
2. **Form submits** → Sends POST request to `/api/send-email`
3. **API validates data** → Checks required fields and email format
4. **Email sent via Resend** → Uses your API key to send email
5. **Response returned** → Shows success or error message to user

## Environment Variables

Your `.env.local` file contains:
```env
RESEND_API_KEY=re_JRC3nFg9_FjhsfpYgjkddzpTjgcmaWhU1
CONTACT_EMAIL=ad@adservice.al
```

**⚠️ IMPORTANT**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Troubleshooting

### Email not sending?
1. Check console for errors: Open browser DevTools → Console
2. Verify API key is correct in `.env.local`
3. Check Resend dashboard for errors
4. Make sure you haven't exceeded daily limit (100 emails/day on free tier)

### Domain verification issues?
1. DNS records can take up to 48 hours to propagate
2. Use Hostinger's DNS management to add records
3. Verify records using: https://resend.com/domains

### Still having issues?
- Check API route logs in terminal where dev server is running
- Test API directly: Send POST to `http://localhost:3000/api/send-email` with test data
- Contact Resend support if domain verification fails

## Email Template

The email sent includes:
- **Subject**: "New Contact Form Submission from [Name]"
- **To**: ad@adservice.al
- **Reply-To**: User's email address
- **Body**: Formatted HTML with all form data:
  - Name
  - Email
  - Phone (if provided)
  - Service interested in
  - Message
  - Timestamp (Albania timezone)

## Production Deployment

When deploying to production:
1. Add environment variables to your hosting platform (Vercel/Netlify/etc)
2. Make sure domain is verified in Resend
3. Update the "from" address to use your verified domain
4. Test thoroughly before going live

## Resend Free Tier Limits
- 100 emails per day
- 3,000 emails per month
- Perfect for small to medium contact forms
- Upgrade if you need more: https://resend.com/pricing

## Support Resources
- Resend Documentation: https://resend.com/docs
- Resend API Reference: https://resend.com/docs/api-reference
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
