/** @type {import('next-sitemap').IConfig} */
const addedUrls = new Set();

module.exports = {
  siteUrl: 'https://www.hexicom.in',
  generateRobotsTxt: true,
    sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // convert Next.js paths to lowercase
     let newPath = path.toLowerCase();

    // Map messy URLs to clean, SEO-friendly URLs
    if (newPath === '/about/about') newPath = '/about';
    if (newPath === '/contactpage/contactpage') newPath = '/contact';
    if (newPath === '/homepage/homepage') newPath = '/';
    if (newPath === '/service/servicepage') newPath = '/services';

     if (addedUrls.has(newPath)) return null;
    addedUrls.add(newPath);

    return {
      loc: newPath, // lowercase path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
