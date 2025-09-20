/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hexicom.in',
  generateRobotsTxt: true,
    sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // convert Next.js paths to lowercase
    return {
      loc: path.toLowerCase(), // lowercase path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
