# KorTech Service Website - Static Version

A modern, professional static website for KorTech Service - Computer Repair Charlotte NC.

## Features

- **Static Website**: No backend dependencies, ready for upload to any web server
- **Responsive Design**: Works perfectly on all devices
- **Professional Pages**: Home, About, Services, Pricing, Contact, Recycling, Terms, and Mail-In Form
- **Contact Integration**: Direct phone, text, and email links for immediate customer contact
- **SEO Optimized**: Fully optimized for Charlotte computer repair searches
- **Print-Ready Forms**: Professional mail-in repair forms that print beautifully

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with all static files ready for upload.

## Deployment to Bluehost

### Upload to Your Domain
1. Run `npm run build`
2. Upload all contents of the `dist` folder to your domain's root directory (public_html)
3. Ensure your logo file `transparent-logo-1.png` is accessible
4. The `.htaccess` file is included for proper routing

### File Structure After Build
```
dist/                    # Upload this entire folder's contents to public_html
├── index.html          # Main HTML file
├── assets/             # CSS, JS, and other assets
├── transparent-logo-1.png  # Company logo
├── .htaccess          # Apache server configuration
└── _redirects         # Netlify redirects (not needed for Bluehost)
```

## Pages Included

### Main Pages:
- **Home**: Main landing page with services overview and CTAs
- **About**: Company history, values, and team information
- **Services**: Detailed service offerings and process
- **Pricing**: Service packages and transparent pricing
- **Contact**: Contact information, map, and business details
- **Recycling**: Free electronics recycling program
- **Terms & Conditions**: Shipping and service terms
- **Mail-In Form**: Professional shipping form for mail-in repairs

### Key Features:
- **Static Google Reviews**: Shows 4.8★ rating and review count
- **Contact Forms**: Email integration via mailto links
- **Print-Ready Forms**: Professional mail-in repair forms
- **Mobile Responsive**: Perfect on all screen sizes
- **Fast Loading**: Optimized for speed and performance

## Contact Integration

All contact methods work without backend:
- **Phone**: `tel:704-246-7642` (direct dial)
- **Text**: `sms:980-888-5300` (direct SMS)
- **Email**: `mailto:info@kortechservice.com` (opens email client)
- **Forms**: Use mailto with pre-filled subject and body

## Business Information

- **Phone**: 704-246-7642
- **Text/Mobile**: 980-888-5300
- **Email**: info@kortechservice.com
- **Address**: 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270
- **Hours**: Mon-Fri 9AM-6PM, Sat 11AM-4PM, Sun Closed

## Google Reviews Integration

### Current Implementation
The website includes a Google Reviews component that displays:
- Current rating: 4.8/5 stars
- Total reviews: 96 reviews
- Business information and hours

### For Live Google Reviews
To implement truly live Google reviews that update automatically, you'll need:

1. **Google Places API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Places API
   - Create an API key
   - Restrict the key to your domain

2. **Backend Implementation** (recommended):
   ```javascript
   // Example backend endpoint
   app.get('/api/google-reviews', async (req, res) => {
     const response = await fetch(
       `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}`
     );
     const data = await response.json();
     res.json(data.result);
   });
   ```

3. **Update the Component**:
   - Replace the fallback data in `LiveGoogleReviews.tsx`
   - Point the fetch call to your backend endpoint
   - The component will automatically refresh every 30 minutes

### Manual Updates
Until you implement the API, you can manually update the review count in:
- `src/components/LiveGoogleReviews.tsx` (line 25: `user_ratings_total`)
- `src/components/FiveStarReviews.tsx` (line 15: `user_ratings_total`)

### Security Note
Never expose your Google Places API key in frontend code. Always use a backend proxy to make API calls.

## Server Configuration

The included `.htaccess` file provides:
- HTTPS redirect
- React Router support (for client-side routing)
- Compression enabled
- Cache headers for performance
- Security headers

## SEO Features

- **Meta tags** optimized for Charlotte computer repair
- **Schema markup** for local business
- **Optimized page titles** and descriptions
- **Fast loading times**
- **Mobile-responsive design**
- **Clean URLs** with proper routing

## Performance

- **Optimized for fast loading**
- **Minimal dependencies** (React, React Router, Lucide icons)
- **Compressed assets**
- **Efficient image loading**
- **Mobile-first responsive design**

## Support

This is a static website with no backend dependencies. The website includes:
- Professional design and branding
- All necessary business pages
- Contact forms that work via email
- Print-ready mail-in forms
- Google Maps integration
- Social media links
- SEO optimization

The website is production-ready and optimized for search engines and user experience.