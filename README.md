# 🪂 SkyVenture - Indoor Skydiving Facility Template

A modern, fully responsive static website template for indoor skydiving facilities, featuring a complete public website and admin dashboard UI.

## 🎯 Project Overview

SkyVenture is a production-ready static HTML template designed for indoor skydiving businesses. Built with HTML5, CSS3, Bootstrap, Tailwind CSS, and Vanilla JavaScript, this template requires no backend infrastructure and can be deployed instantly to any static hosting platform.

## ✨ Features

### Public Website
- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Modern UI/UX** - Clean, vibrant design with glassmorphism effects
- **Dark Mode** - Built-in light/dark theme toggle
- **SEO Optimized** - Semantic HTML, proper meta tags, and structured content
- **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels
- **RTL Support** - Ready for right-to-left languages
- **Fast Loading** - Optimized assets and minimal dependencies

### Public Pages
1. **Home** - Hero section, features, packages, testimonials, CTA
2. **About Us** - Facility story, mission/vision, instructor profiles, safety standards
3. **Experiences/Flights** - Flight durations, experience levels, what's included
4. **Packages & Pricing** - Beginner, training, group, and membership packages
5. **Training** - Training programs, skill progression, safety briefing content
6. **Gallery** - Image grid with category filters
7. **Booking** - Multi-step booking form (date, package, details, confirmation)
8. **Contact** - Contact form, location map, operating hours
9. **404 Page** - Custom branded error page
10. **Coming Soon** - Maintenance/launch page with countdown

### Admin Dashboard (Static UI)
- **Glassmorphism Design** - Modern frosted glass aesthetic
- **Dashboard Overview** - Stats cards, recent bookings, system status
- **Flight Bookings** - Booking management table with search/filter
- **Training Videos** - Video upload UI and management
- **Package Management** - Create and manage flight packages
- **Users** - Customer list and booking history
- **Messages** - Contact form submissions inbox
- **Settings** - Facility configuration UI

All dashboard data is static/placeholder-based using JavaScript for demonstration purposes.

## 🛠 Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, flexbox, grid
- **Tailwind CSS** - Utility-first styling
- **Bootstrap 5** - Components (tables, modals, forms)
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS
- **Font Awesome 6** - Icon library
- **Google Fonts** - Bebas Neue (headings), Inter (body)

## 📁 Project Structure

```
indoor-skydiving-template/
├── static-website/
│   ├── index.html                   # Homepage
│   ├── 404.html                     # Error page
│   ├── coming-soon.html             # Launch page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css           # Main stylesheet
│   │   │   ├── dark-mode.css       # Dark theme
│   │   │   └── rtl.css             # RTL support
│   │   ├── js/
│   │   │   ├── main.js             # Core functionality
│   │   │   └── dashboard.js        # Dashboard logic
│   │   ├── images/                 # Image assets
│   │   └── videos/                 # Video assets
│   └── pages/
│       ├── about.html
│       ├── experiences.html
│       ├── packages.html
│       ├── training.html
│       ├── gallery.html
│       ├── booking.html
│       ├── contact.html
│       └── dashboard/
│           ├── dashboard.html      # Admin overview
│           ├── bookings.html       # Bookings management
│           ├── videos.html         # Video management
│           ├── packages.html       # Package management
│           ├── users.html          # User management
│           ├── messages.html       # Messages inbox
│           └── settings.html       # Settings panel
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd indoor-skydiving-template/static-website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server -p 8000
   
   # PHP
   php -S localhost:8000
   ```

3. **View the Site**
   - Open `http://localhost:8000` in your browser

### File Organization
- All HTML files use relative paths
- CSS files are modular and can be customized independently
- JavaScript is vanilla ES6+ with no build process required

## 🌐 Deployment

This template can be deployed to any static hosting platform:

### Netlify

1. **Drag & Drop**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag the `static-website` folder to the deploy zone
   - Done! Your site is live

2. **Git-based Deployment**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   cd static-website
   netlify deploy --prod
   ```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd static-website
vercel --prod
```

### GitHub Pages

1. Create a repository
2. Push the `static-website` folder contents to the `main` branch
3. Go to Settings → Pages
4. Select source: `main` branch, `/` (root)
5. Save and wait for deployment

### Other Platforms
- **AWS S3** - Upload to S3 bucket with static hosting enabled
- **Firebase Hosting** - `firebase init` and deploy
- **Surge.sh** - `surge static-website/`
- **Any web host** - Upload via FTP/SFTP

## 🎨 Customization Guide

### Colors & Branding

Edit `/assets/css/style.css` - CSS Variables section:

```css
:root {
  --color-primary: #0066FF;        /* Main brand color */
  --color-secondary: #FF6B35;      /* Accent color */
  --color-background: #FFFFFF;     /* Background */
  --color-text: #1E293B;           /* Text color */
  /* ... more variables ... */
}
```

### Typography

Change fonts in `/assets/css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-heading: 'Your Heading Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Content

1. **Text Content** - Edit HTML files directly
2. **Images** - Replace images in `/assets/images/`
3. **Navigation** - Update menu in each HTML file's `<nav>` section
4. **Footer** - Modify footer content in any HTML file

### Dashboard Data

Edit `/assets/js/dashboard.js` to customize:
- Statistics values
- Booking data
- Package information
- User lists
- Messages

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG 2.1 AA
- Screen reader friendly
- Focus indicators

## 🔧 Features Breakdown

### JavaScript Functionality

**main.js** provides:
- Theme toggle (light/dark mode)
- Mobile menu toggle
- Navbar scroll effects
- Active navigation highlighting
- Smooth scrolling for anchor links
- Form validation
- Gallery filtering
- Multi-step form navigation
- Modal functionality
- Notification system

**dashboard.js** provides:
- Sidebar toggle
- Data rendering for tables
- Search/filter functionality
- Status toggles
- File upload preview
- Table interactions

### CSS Architecture

- **Custom Properties** - Easy theming via CSS variables
- **Mobile-First** - Responsive breakpoints
- **Utility Classes** - Common spacing, color, display utilities
- **Component-Based** - Cards, buttons, forms, badges
- **Glassmorphism** - Modern frosted glass effects
- **Animations** - Smooth transitions and hover effects

## 📄 License

This template is provided as-is for commercial and personal use.

## 🙏 Credits

- **Design System** - Custom vibrant & energetic theme
- **Icons** - Font Awesome 6
- **Fonts** - Google Fonts (Bebas Neue, Inter)
- **CSS Framework** - Bootstrap 5, Tailwind CSS
- **Images** - Unsplash (demo images)

## 📞 Support

For questions, customization requests, or support:
- Email: support@skyventure.com
- Documentation: [Link to docs]

## 🔄 Version History

### v1.0.0 (2024)
- Initial release
- Complete public website (10 pages)
- Full admin dashboard (7 pages)
- Dark mode support
- RTL support
- Mobile responsive
- SEO optimized

---

**Built with ❤️ for Indoor Skydiving Facilities**

*Fly Without Limits* 🪂
#   S k y - v e n t u r e  
 #   S k y - v e n t u r e  
 