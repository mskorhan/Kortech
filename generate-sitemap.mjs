#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the App.tsx file to extract routes
const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
const appContent = fs.readFileSync(appTsxPath, 'utf-8');

// Extract routes from the App.tsx file
const routeRegex = /<Route\s+path="([^"]+)"/g;
const routes = [];
let match;

while ((match = routeRegex.exec(appContent)) !== null) {
  const route = match[1];
  // Skip wildcard routes and dynamic routes
  if (!route.includes('*') && !route.includes(':')) {
    routes.push(route);
  }
}

// Define priority and change frequency for different route types
const getRouteMetadata = (route) => {
  if (route === '/') {
    return { priority: '1.0', changefreq: 'weekly' };
  } else if (route === '/services' || route === '/contact' || route === '/about') {
    return { priority: '0.9', changefreq: 'monthly' };
  } else if (route.startsWith('/blog/')) {
    return { priority: '0.7', changefreq: 'monthly' };
  } else if (route.includes('computer-repair') || route.includes('hdmi-repair') || route.includes('data-recovery')) {
    return { priority: '0.9', changefreq: 'monthly' };
  } else if (route === '/pricing' || route === '/mail-in-form') {
    return { priority: '0.8', changefreq: 'monthly' };
  } else if (route === '/recycling' || route === '/terms' || route === '/privacy-policy') {
    return { priority: '0.5', changefreq: 'yearly' };
  } else {
    return { priority: '0.6', changefreq: 'monthly' };
  }
};

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://www.kortechservice.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Sort routes for better organization
  const sortedRoutes = routes.sort((a, b) => {
    // Home page first
    if (a === '/') return -1;
    if (b === '/') return 1;
    
    // Main pages next
    const mainPages = ['/about', '/services', '/pricing', '/contact'];
    const aIsMain = mainPages.includes(a);
    const bIsMain = mainPages.includes(b);
    
    if (aIsMain && !bIsMain) return -1;
    if (!aIsMain && bIsMain) return 1;
    
    // Then alphabetical
    return a.localeCompare(b);
  });

  // Add each route to sitemap
  sortedRoutes.forEach(route => {
    const metadata = getRouteMetadata(route);
    const url = `${baseUrl}${route}`;
    
    sitemapContent += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority}</priority>
  </url>
`;
  });

  sitemapContent += `</urlset>`;
  
  return sitemapContent;
};

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Generated ${routes.length} URLs`);
console.log(`📍 Saved to: ${sitemapPath}`);