/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hexicom.in',   // <-- change to your real domain
  generateRobotsTxt: true,              // also create robots.txt automatically
  sitemapSize: 7000,                     // optional, splits big sitemaps
  changefreq: 'weekly',
  priority: 0.7,
};
