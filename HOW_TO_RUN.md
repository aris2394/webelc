# RUNNING THE PROJECT - EDELWEISS LEARNING CENTER

## 🚀 START DEVELOPMENT SERVER

```bash
cd /var/www/html/elc-baru
npm install              # Install dependencies (if needed)
npm run dev             # Start development server
```

The website will be available at: `http://localhost:3000`

## 📦 BUILD FOR PRODUCTION

```bash
cd /var/www/html/elc-baru
npm run build           # Build production version
npm run start           # Start production server
```

## 🔍 PROJECT STRUCTURE

```
elc-baru/
├── src/
│   ├── app/
│   │   ├── artikel/              → News/Article page
│   │   ├── foundation/           → About/Foundation page
│   │   ├── kontak/               → Contact page
│   │   ├── kurikulum/            → Curriculum page (UPDATED)
│   │   ├── program/
│   │   │   ├── elite-academia/   → Program page
│   │   │   ├── english-course/   → Program page
│   │   │   ├── ipdc/             → IPDC page (UPDATED)
│   │   │   └── playteracy/       → Playteracy page (UPDATED)
│   │   ├── visi-misi/            → Vision & Mission page
│   │   ├── layout.tsx            → Root layout
│   │   ├── page.tsx              → Homepage
│   │   └── globals.css           → Global styles
│   ├── components/
│   │   ├── Navbar.tsx            → Navigation (UPDATED)
│   │   └── Footer.tsx            → Footer
│   └── styles/
├── public/                       → Static assets (images)
├── package.json                  → Dependencies
├── tsconfig.json                 → TypeScript config
├── next.config.ts               → Next.js config
├── tailwind.config.ts           → Tailwind config
└── README.md                     → Documentation

```

## 🔧 AVAILABLE COMMANDS

### Development
```bash
npm run dev              # Start dev server (port 3000)
npm run build            # Create production build
npm run start            # Start production server
npm run lint             # Run ESLint
```

## 📝 CONFIGURATION FILES

### package.json
- Dependencies: React, Next.js, Tailwind CSS
- Scripts: dev, build, start, lint

### tsconfig.json
- TypeScript configuration
- Path aliases: `@/` → `src/`

### next.config.ts
- Next.js optimization settings
- Image optimization enabled

### tailwind.config.ts
- Poppins font configuration
- Color and spacing customization

## 🎨 DESIGN SYSTEM

### Colors
```
Primary Blue:    #293C88
Yellow Accent:   #FED700
Light Yellow:    #FFF4BA
Gray Text:       #868686
Dark Gray:       #293C88
```

### Typography
- Font: Poppins (Google Fonts)
- Responsive sizes via Tailwind classes

### Spacing
- Uses Tailwind default spacing
- px-6 for horizontal padding (container)
- py-16 for vertical padding (sections)

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:    < 640px   (sm)
Tablet:    640px+    (md)
Desktop:   1024px+   (lg)
Large:     1280px+   (xl)
```

## 🖼️ IMAGES LOCATION

All images are stored in: `/var/www/html/elc-baru/public/`

**Important Images:**
- `Rectangle110*.png` - News images
- `Rectangle112-114.png` - IPDC images
- `Rectangle108-109.png` - Kurikulum images
- `LogoElits1.png` - ELITS logo
- `Image1-3.png` - Brand logos

## 🔗 NAVIGATION ROUTES

All routes from `/src/app/*/page.tsx`:

```
GET  /                          → Homepage
GET  /program/elite-academia    → Elite Academia
GET  /program/english-course    → English Course
GET  /program/playteracy        → Playteracy (UPDATED)
GET  /program/ipdc              → IPDC (UPDATED)
GET  /kurikulum                 → Curriculum (UPDATED)
GET  /artikel                   → News/Articles (UPDATED)
GET  /foundation                → Foundation
GET  /kontak                    → Contact
GET  /visi-misi                 → Vision & Mission
```

## ✅ VERIFICATION STEPS

1. **Check Build**
   ```bash
   npm run build
   # Should complete with no errors
   ```

2. **Test Routes**
   ```bash
   # Open in browser:
   http://localhost:3000
   http://localhost:3000/program/playteracy
   http://localhost:3000/program/ipdc
   http://localhost:3000/kurikulum
   http://localhost:3000/artikel
   ```

3. **Check Images**
   - All images should load correctly
   - No broken image links

4. **Responsive Test**
   - Resize browser window
   - Check mobile device view
   - Verify layout adapts

## 🐛 TROUBLESHOOTING

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart
npm run dev
```

### Missing dependencies
```bash
# Reinstall packages
rm -rf node_modules
npm install
```

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images not loading
- Check `/public` folder has all images
- Verify image filenames match src attribute
- Check file permissions (should be readable)

## 📊 PERFORMANCE TIPS

1. Images are optimized
2. CSS is minimized
3. Code splitting is automatic
4. Lazy loading is enabled
5. Cache headers are set

## 🔐 SECURITY

- No hardcoded secrets
- XSS protection via React
- CSRF prevention built-in
- Dependencies updated regularly

## 📞 SUPPORT

For issues:
1. Check build output
2. Review console errors
3. Verify file paths
4. Check image locations
5. Review console logs

---

**Last Updated:** March 17, 2026
**Status:** ✅ Ready to Run
