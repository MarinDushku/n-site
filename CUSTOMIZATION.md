# Customization Guide - TechVision IT Solutions

This guide will help you customize the website for your specific IT company.

## 🎨 Quick Customization Checklist

### 1. Company Branding

#### Update Company Name
**Files to edit:**
- `components/Header.tsx` - Line 48
- `components/Footer.tsx` - Line 52
- `app/layout.tsx` - Line 27-35 (metadata)
- All page `layout.tsx` files (metadata titles)

Replace `TechVision IT` with your company name.

#### Update Logo
Currently using an icon. To add a custom logo:
1. Place your logo in `public/images/logo.png`
2. Update `components/Header.tsx`:
   ```tsx
   import Image from 'next/image';

   // Replace the icon with:
   <Image
     src="/images/logo.png"
     alt="Company Logo"
     width={120}
     height={40}
   />
   ```

### 2. Contact Information

#### Update Contact Details
**File:** `components/Footer.tsx` and `app/contact/page.tsx`

Find and replace:
- Phone: `+1 (234) 567-890` → Your phone number
- Email: `info@techvision.com` → Your email
- Address: Update the full address
- Business hours: Update if different

### 3. Color Scheme

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Change these hex values
    500: '#3b82f6',  // Main brand color
    600: '#2563eb',  // Hover states
    700: '#1d4ed8',  // Active states
  },
  // ... other shades
}
```

### 4. Typography

**File:** `app/layout.tsx`

Change fonts:
```typescript
import { YourFont, YourHeadingFont } from 'next/font/google';

const bodyFont = YourFont({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = YourHeadingFont({
  subsets: ["latin"],
  variable: "--font-heading",
});
```

Update CSS variables in `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['var(--font-body)'],
  heading: ['var(--font-heading)'],
}
```

### 5. Services

**File:** `app/page.tsx` (Homepage) and `app/services/page.tsx`

#### Add/Remove Services
Edit the `services` array around line 17:
```typescript
const services = [
  {
    icon: <YourIcon className="w-full h-full" />,
    title: 'Your Service Name',
    description: 'Service description...',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    href: '/services#your-service',
  },
  // Add more services...
];
```

### 6. Team Members

**File:** `app/about/page.tsx`

Edit the `team` array around line 19:
```typescript
const team = [
  {
    name: 'Your Name',
    role: 'Your Title',
    specialization: 'Your Expertise',
    description: 'Brief bio...',
  },
  // Add more team members...
];
```

### 7. Portfolio Projects

**File:** `app/portfolio/page.tsx`

Edit the `projects` array around line 10:
```typescript
const projects = [
  {
    title: 'Project Name',
    client: 'Client Name',
    category: 'Category',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    results: ['Result 1', 'Result 2'],
  },
  // Add more projects...
];
```

### 8. Testimonials

**File:** `app/page.tsx`

Edit the `testimonials` array around line 59:
```typescript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Their Position',
    company: 'Company Name',
    content: 'Testimonial text...',
    rating: 5,
  },
  // Add more testimonials...
];
```

### 9. Social Media Links

**File:** `components/Footer.tsx`

Edit `socialLinks` array around line 23:
```typescript
const socialLinks = [
  { href: 'https://linkedin.com/your-profile', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/your-handle', icon: FiTwitter, label: 'Twitter' },
  // Add/remove social links...
];
```

### 10. Navigation Menu

**File:** `components/Header.tsx`

Edit `navLinks` array around line 21:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  // Add/remove menu items...
];
```

### 11. FAQ Questions

**File:** `app/faq/page.tsx`

Edit the `faqCategories` array around line 10 to add/modify questions.

### 12. Blog Posts

**File:** `app/blog/page.tsx`

Edit the `blogPosts` array around line 9 to add your blog articles.

## 🖼️ Adding Images

### Hero Images
1. Add images to `public/images/`
2. Update components to use Next.js Image:
   ```tsx
   import Image from 'next/image';

   <Image
     src="/images/your-image.jpg"
     alt="Description"
     width={1200}
     height={600}
     priority
   />
   ```

### Optimizing Images
- Use WebP format for best performance
- Recommended sizes:
  - Hero images: 1920x1080px
  - Service images: 800x600px
  - Team photos: 400x400px
  - Blog thumbnails: 600x400px

## 🔧 Advanced Customizations

### Adding a Newsletter Signup

1. **Install react-hook-form and validation:**
   ```bash
   npm install react-hook-form zod @hookform/resolvers
   ```

2. **Create newsletter component** in `components/Newsletter.tsx`

3. **Add backend endpoint** in `app/api/newsletter/route.ts`

### Adding a Contact Form Backend

Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Process form data
  // Send email using nodemailer or similar

  return NextResponse.json({ success: true });
}
```

Update `app/contact/page.tsx` to POST to this endpoint.

### Adding Google Analytics

1. **Get GA4 Measurement ID** from Google Analytics

2. **Add to `app/layout.tsx`:**
   ```tsx
   import Script from 'next/script';

   // In the component:
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${GA_ID}');
     `}
   </Script>
   ```

### Adding a Blog CMS

Consider integrating:
- **Sanity.io** - Headless CMS
- **Contentful** - Content management
- **MDX** - Markdown with React components

### Adding Live Chat

Popular options:
- **Tawk.to** (Free)
- **Intercom**
- **Crisp**
- **Drift**

Add the chat widget script in `app/layout.tsx`

## 🎯 Page-Specific Customizations

### Homepage
- **Hero Section**: Edit around line 132 in `app/page.tsx`
- **Stats**: Edit around line 197
- **Services Grid**: Edit around line 211
- **Testimonials**: Edit around line 293

### Services Page
- **Service Details**: Edit `services` array in `app/services/page.tsx`
- **Process Steps**: Edit `processSteps` array

### About Page
- **Company Story**: Edit text around line 53
- **Values**: Edit `values` array around line 37
- **Timeline**: Edit `milestones` array around line 60

## 📱 Responsive Design

The site is already mobile-responsive. To adjust breakpoints:

**File:** `tailwind.config.ts`
```typescript
theme: {
  screens: {
    'sm': '640px',   // Mobile landscape
    'md': '768px',   // Tablet
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large desktop
  }
}
```

## 🔍 SEO Customization

### Meta Tags
Edit in each page's `layout.tsx` file:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: 'your, keywords, here',
};
```

### Sitemap
Update base URL in `app/sitemap.ts`:
```typescript
const baseUrl = 'https://your-domain.com';
```

## 💡 Tips

1. **Test locally** after each change: `npm run dev`
2. **Build test** before deploying: `npm run build`
3. **Use version control**: Commit changes regularly
4. **Keep dependencies updated**: `npm update`
5. **Check mobile responsiveness**: Use browser dev tools
6. **Validate HTML**: Use W3C Validator
7. **Test accessibility**: Use Lighthouse in Chrome DevTools

## 🆘 Getting Help

- Check the main README.md for setup instructions
- See DEPLOYMENT.md for deployment guides
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Happy Customizing!** 🎉
