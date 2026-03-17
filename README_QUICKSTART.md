# 🚀 Edelweiss Learning Center - Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git (optional)

### Installation

```bash
# Navigate to project directory
cd /var/www/html/elc-baru

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm run dev

# Open browser and navigate to
http://localhost:3000
```

### Production Build

```bash
# Build optimized production version
npm run build

# Start production server
npm start
```

## 📱 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/visi-misi` | Vision & Mission |
| `/foundation` | Foundation/Yayasan |
| `/kurikulum` | Curriculum |
| `/kontak` | Contact |
| `/artikel` | Articles/Blog |
| `/program` | Program Listing |
| `/program/elite-academia` | Elite Academia Detail |
| `/program/english-course` | English Course Detail |
| `/program/playteracy` | Playteracy Detail |
| `/program/ipdc` | IPDC Detail |

## 🛠️ Development

### Add New Page

1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` file
3. Add React component with proper structure

Example:
```tsx
export default function NewPage() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
      <Footer />
    </div>
  )
}
```

### Update Styling

- Edit Tailwind classes directly in JSX
- Custom colors defined in `tailwind.config.ts`
- Use color variables: `#293C88`, `#FED700`, etc.

### Add Images

1. Place images in `/public/` folder
2. Reference in components: `src="/image-name.png"`
3. Use `object-contain` or `object-cover` for sizing

## 📂 Project Structure

```
src/
  app/          - All pages (App Router)
  components/   - Reusable components
public/         - Static assets & images
```

## 🎨 Design System

**Colors:**
- Primary Blue: `#293C88`
- Primary Yellow: `#FED700`
- Gray: `#868686`

**Font:**
- Family: Poppins
- Sizes: 40px (h1), 32px (h2), 24px (h3), 16px (body)

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for testing
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel dashboard
# Auto-deploys on push
```

### Self-Hosted
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t elc-website .
docker run -p 3000:3000 elc-website
```

## 🔗 Links

- **Live Site:** (To be deployed)
- **GitHub:** (Repository link)
- **Documentation:** See `FINAL_SUMMARY.md`
- **Status:** ✅ Ready for Deployment

## 📞 Support

For questions or issues, refer to:
- `FINAL_SUMMARY.md` - Complete project overview
- `DEVELOPMENT_STATUS.md` - Development details
- `LOGO_UPDATE_SUMMARY.md` - Recent changes

## ✅ Checklist

- [x] All pages created
- [x] Components built
- [x] Styling complete
- [x] Images added
- [x] TypeScript validation passed
- [x] Build successful
- [x] Responsive design verified
- [x] Ready for deployment

---

**Status:** ✅ Complete & Ready for Deployment  
**Version:** 1.1.0  
**Last Updated:** March 13, 2026
