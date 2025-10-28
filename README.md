# TechVision IT Solutions - Professional IT Company Website

A modern, professional website built for TechVision IT Solutions, showcasing comprehensive IT services including web development, PC building & repair, IT support, and consulting services.

## 🚀 Features

- **Modern Design**: Clean, professional interface following 2025 web design best practices
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 16 for optimal loading speeds
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, sitemap, and robots.txt
- **Accessible**: WCAG 2.1 compliant for inclusive user experience
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **7 Complete Pages**: Homepage, Services, About, Portfolio, Blog, Contact, and FAQ

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Fonts**: Inter (body), Poppins (headings)

## 📋 Pages

1. **Homepage** - Hero section, services overview, stats, testimonials, and CTAs
2. **Services** - Detailed service offerings with features and technologies
3. **About** - Company story, values, timeline, and team members
4. **Portfolio** - Case studies and successful projects showcase
5. **Blog** - Tech insights and resources (article listings)
6. **Contact** - Contact form with company information
7. **FAQ** - Comprehensive frequently asked questions

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust and reliability
- **Secondary**: Slate gray - Professional and clean
- **Accent**: Red - CTAs and highlights

### Typography
- **Body**: Inter - Clean, readable sans-serif
- **Headings**: Poppins - Modern, bold headings

### Key Components
- Responsive navigation with mobile menu
- Service cards with hover effects
- Testimonial cards
- Animated hero sections
- Contact forms with validation
- Accordion FAQ sections

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd N-Site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
N-Site/
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── faq/            # FAQ page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── sitemap.ts      # Dynamic sitemap
├── components/
│   ├── Button.tsx      # Reusable button component
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── ServiceCard.tsx # Service display card
│   └── TestimonialCard.tsx # Testimonial card
├── public/
│   ├── images/         # Image assets
│   └── robots.txt      # SEO robots file
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.ts      # Next.js configuration
```

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component for automatic optimization
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic code splitting via Next.js
- **Static Generation**: Pre-rendered pages for faster load times
- **Lazy Loading**: Components and images load on demand

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG 2.1 AA standards
- Focus indicators on all interactive elements
- Screen reader friendly

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Updating Company Information

1. **Company Name**: Update in `components/Header.tsx` and `components/Footer.tsx`
2. **Contact Details**: Modify in `components/Footer.tsx` and `app/contact/page.tsx`
3. **Social Links**: Edit in `components/Footer.tsx`

### Changing Colors

Edit the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ },
}
```

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file in the new folder
3. Update navigation links in `components/Header.tsx`
4. Update sitemap in `app/sitemap.ts`

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD) ready
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML5 markup

## 🔐 Security

- No exposed API keys
- HTTPS ready
- Content Security Policy compatible
- XSS protection via React
- CSRF protection on forms (implement backend)

## 📞 Support

For questions or support, contact:
- **Email**: info@techvision.com
- **Phone**: +1 (234) 567-890
- **Website**: https://techvision-it.com

## 📝 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. For contributions, please contact the development team.

---

**Built with ❤️ by TechVision IT Solutions**
