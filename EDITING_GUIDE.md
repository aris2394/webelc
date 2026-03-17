# ✏️ Edelweiss Learning Center - Editing & Customization Guide

## 🎯 Quick Edit Guide

### Changing Text Content

#### Homepage Title
**File**: `src/app/page.tsx`

Find the line:
```tsx
<p className="text-[#293C88] font-poppins text-3xl font-bold ...">
  A Safe Place to Learn, Grow, and Shine
</p>
```

Edit to your desired text.

#### Program Page Titles
**Files**:
- `src/app/program/elite-academia/page.tsx`
- `src/app/program/english-course/page.tsx`
- `src/app/program/playteracy/page.tsx`
- `src/app/program/ipdc/page.tsx`

Find white container with program name and update text.

#### Footer Contact Info
**File**: `src/components/Footer.tsx`

Find lines with:
- Email: `info@edelweiss.com`
- Phone: `+62...`
- Address: `Jatibening Estate...`

Update to your information.

---

## 🎨 Changing Colors

### Brand Colors
**File**: `src/app/globals.css` (if using CSS variables)

Current colors:
```
Blue:        #293C88
Yellow:      #FED700
Gray:        #868686
Light Yellow: #FFF4BA
Light Gray:  #F5F5F5
```

To change, find and replace these hex codes throughout the project.

### Quick Color Change Example
To change blue from `#293C88` to `#1a2a5c`:
```bash
grep -r "#293C88" src/
# Then update each occurrence
```

Or in VS Code:
1. Click "Edit" → "Replace" (Ctrl+H)
2. Find: `#293C88`
3. Replace: `#1a2a5c`
4. Click "Replace All"

---

## 🖼️ Changing Images

### Logo
**Current**: ElitePng112.png  
**File**: `src/components/Navbar.tsx` and `src/components/Footer.tsx`

Replace with your logo:
```tsx
// Old
<img src="/ElitePng112.png" className="w-[180px] h-[55px] ..." />

// New
<img src="/your-logo.png" className="w-[180px] h-[55px] ..." />
```

Steps:
1. Save your logo to `/public/your-logo.png`
2. Find the line above and update filename
3. Adjust width/height if needed

### Hero Slider Images
**File**: `src/components/HeroSlider.tsx`

Find slider image references:
```tsx
<img src="/Rectangle48.png" ... />
```

Replace with your images. Keep the same dimensions (recommend 1920x678px).

### Program Page Decorative Images
**File**: `src/app/program/[program]/page.tsx`

Find lines like:
```tsx
<img src="/ElitePng1217.png" className="w-[136px] h-[118px] ..." />
```

Replace `/ElitePng1217.png` with your image path.

### Footer Icons
**File**: `src/components/Footer.tsx`

Social icons (Instagram, Email, Phone):
```tsx
<img src="/ElitePng151.png" className="w-[60px] h-[60px] ..." />
```

Replace with your icons. Or convert to SVG icons (preferred).

---

## 🔤 Changing Font

### Current Font
**Font**: Poppins (Google Fonts)  
**File**: `src/app/layout.tsx`

To change to another font (e.g., Inter):
```tsx
// Old
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// New
import { Inter } from "next/font/google";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
```

Then update className in HTML tag.

---

## 📱 Adding New Pages

### Create New Page
1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`

**Template**:
```tsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Your content here */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="text-[#293C88] font-poppins text-4xl font-bold">
          Page Title
        </h1>
      </div>
      
      <Footer />
    </div>
  );
}
```

### Add to Navigation Menu
**File**: `src/components/Navbar.tsx`

Find the nav menu and add your link:
```tsx
<a href="/new-page" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
  New Page
</a>
```

---

## 🔗 Adding Navigation Links

### Add Link to Dropdown Menu
**File**: `src/components/Navbar.tsx`

For "Tentang Kami" dropdown, find:
```tsx
{/* Tentang Kami Dropdown */}
<div className="relative">
  <button className="...">Tentang Kami...</button>
  <div className="hidden ... group-hover:block">
    <a href="/visi-misi">Visi dan Misi</a>
    <a href="/foundation">Yayasan</a>
    <a href="/kurikulum">Kurikulum</a>
    {/* Add new link here */}
  </div>
</div>
```

### Add Link to Footer
**File**: `src/components/Footer.tsx`

Find the appropriate section and add:
```tsx
<a href="/your-page" className="text-white font-poppins text-base hover:text-[#FED700]">
  Your Link Text
</a>
```

---

## 📝 Editing Program Pages

### Elite Academia
**File**: `src/app/program/elite-academia/page.tsx`

Main sections:
1. Hero (white container with title)
2. Komitmen Kami (commitment)
3. Why Choose (4 feature cards)
4. Our Strengths (3 strength cards)
5. Learning Programs
6. Grade Levels

To edit feature cards, find:
```tsx
<div className="shrink-0 w-[638px] h-[165px] ...">
  {/* Edit card content here */}
</div>
```

### English Course
**File**: `src/app/program/english-course/page.tsx`

Main sections:
1. Hero
2. Why Choose English Course (4 cards)
3. Level Program (4 levels)

To edit level cards:
```tsx
{/* Level cards in 2x2 grid */}
<div className="w-[calc(50%-15px)]">
  {/* Level 1 content */}
</div>
```

### Playteracy
**File**: `src/app/program/playteracy/page.tsx`

Main sections:
1. Hero
2. Why Choose Playteracy (4 cards)
3. 5-Step Process
4. Level Program (4 levels)

To edit steps:
```tsx
{/* Step 1 */}
<div className="flex flex-col items-center">
  <div className="w-[60px] h-[60px] rounded-full bg-[#293C88] flex items-center justify-center">
    <p className="text-[#FED700] font-bold text-2xl">1</p>
  </div>
  <p className="mt-4">Step text here</p>
</div>
```

---

## 🎯 Changing Styling

### Change Button Colors
Find button classes and modify:
```tsx
// Old
<button className="bg-[#293C88] text-white ...">

// New
<button className="bg-[#FED700] text-[#293C88] ...">
```

### Change Section Background
```tsx
// Old
<div className="bg-[#FFF4BA] w-full ...">

// New
<div className="bg-[#FFFFFF] w-full ...">
```

### Change Text Size
```tsx
// Old
<h1 className="text-4xl font-bold">

// New
<h1 className="text-6xl font-bold">
```

Common Tailwind sizes: `text-sm`, `text-base`, `text-lg`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`

---

## 📐 Adjusting Spacing

### Padding
```tsx
// px = horizontal padding
// py = vertical padding
<div className="px-4 py-8"> {/* 4 units horizontal, 8 units vertical */}
</div>
```

### Margin
```tsx
// mx = horizontal margin
// my = vertical margin
<div className="mx-2 my-4">
</div>
```

### Gap (in flex/grid)
```tsx
<div className="flex gap-6"> {/* 6 units gap between items */}
</div>
```

---

## 🖥️ Responsive Design

### Tailwind Breakpoints
- **sm**: 640px
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large screens)

### Example
```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Full width on mobile, 1/2 on tablet, 1/3 on desktop */}
</div>
```

### Hide on Mobile
```tsx
<div className="hidden md:block">
  {/* Hidden on mobile, shown on tablet+ */}
</div>
```

---

## 🔍 Finding Specific Content

### Find Text in All Files
```bash
cd /var/www/html/elc-baru
grep -r "search text" src/
```

### Find Image Usage
```bash
grep -r "ElitePng1217.png" src/
```

### Find Color Usage
```bash
grep -r "#293C88" src/
```

---

## 💾 Saving Changes

### After Editing
1. Save file (Ctrl+S)
2. Development server auto-reloads
3. Check browser at `http://localhost:3000`

### Deploy Changes
```bash
npm run build
npm run start
# or
vercel deploy --prod
```

---

## 🚨 Common Issues & Fixes

### Images Not Showing
**Problem**: Image not loading  
**Solution**:
- Check file is in `/public/` folder
- Check filename spelling (case-sensitive)
- Check path: `/filename.png` (not `./filename.png`)

### Styling Not Applied
**Problem**: Colors/spacing not changing  
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `npm run dev`)
- Check class name spelling

### Dropdown Not Working
**Problem**: Menu dropdown not opening  
**Solution**:
- Check for JavaScript errors in console
- Verify group/hover classes are present
- Test on different browser

### Build Error
**Problem**: `npm run build` fails  
**Solution**:
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Common Tailwind Classes

### Sizing
- `w-full` - 100% width
- `w-[300px]` - Custom width
- `h-[200px]` - Custom height

### Colors
- `text-[#293C88]` - Text color
- `bg-[#FFF4BA]` - Background color
- `border-[#FED700]` - Border color

### Positioning
- `absolute`, `relative`, `fixed`, `sticky`
- `top-0`, `left-0`, `right-0`, `bottom-0`

### Flex
- `flex`, `flex-col`, `flex-wrap`
- `justify-center`, `items-center`
- `gap-4`

### Grid
- `grid`, `grid-cols-2`, `grid-cols-3`
- `gap-6`

### Hover & Transitions
- `hover:text-[#FED700]` - Color change on hover
- `transition-colors` - Smooth transition

---

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Google Fonts**: https://fonts.google.com
- **Poppins Font**: https://fonts.google.com/specimen/Poppins

---

## 📞 Need Help?

### Check These Files
- `README.md` - Project overview
- `FEATURE_DOCUMENTATION.md` - Feature details
- `PROJECT_STATUS_MARCH_2026.md` - Project status
- `DEPLOY_GUIDE.md` - Deployment info

### Git Version Control
```bash
# See what changed
git status

# Undo changes to a file
git checkout src/app/page.tsx

# See change history
git log
```

---

**Last Updated**: March 13, 2026  
**Version**: 1.0  
**Status**: Production Ready

**Happy Editing! 🎉**
