/**
 * Script to generate sitemap.xml dynamically
 * Run this as part of your build process: node scripts/generate-sitemap.js
 *
 * This script:
 * 1. Fetches blog posts from Contentful
 * 2. Includes all static pages
 * 3. Generates a complete sitemap.xml with proper lastmod dates
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('contentful');

const DOMAIN = 'https://cgapsicologia.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Static pages that should always be in the sitemap
const staticPages = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/servicios',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/terapia-online',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/contacto',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/sobre-mi',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    priority: 0.85,
    changefreq: 'weekly',
  },
];

async function getBlogPosts() {
  try {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    if (!spaceId || !accessToken) {
      console.warn('⚠️  Contentful credentials not found. Using default blog posts only.');
      return [];
    }

    const client = createClient({
      space: spaceId,
      accessToken,
    });

    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 1000,
      order: '-sys.updatedAt',
    });

    return entries.items.map(item => ({
      slug: item.fields.slug,
      lastmod: item.sys.updatedAt.split('T')[0],
      priority: 0.8,
      changefreq: 'monthly',
    }));
  } catch (error) {
    console.error('❌ Error fetching from Contentful:', error.message);
    return [];
  }
}

function generateSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    const lastmod = page.lastmod || today;
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${page.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

async function main() {
  console.log('🚀 Generating sitemap.xml...\n');

  // Get blog posts from Contentful
  const blogPosts = await getBlogPosts();

  // Combine static pages with blog posts
  const blogPages = blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    lastmod: post.lastmod,
    priority: 0.8,
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...blogPages];

  // Generate sitemap XML
  const sitemap = generateSitemap(allPages);

  // Write to file
  fs.writeFileSync(OUTPUT_PATH, sitemap);

  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📊 Total URLs: ${allPages.length}`);
  console.log(`📝 Static pages: ${staticPages.length}`);
  console.log(`📚 Blog posts: ${blogPosts.length}`);
  console.log(`📁 Output: ${OUTPUT_PATH}\n`);
}

main().catch(error => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});
