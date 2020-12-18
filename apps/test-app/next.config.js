const withTM = require('next-transpile-modules')([]);
const { locales, defaultLocale } = require('./i18n.json')

const endpoint = 'https://demo2086895.mockable.io';
console.info('WSEndpoint:', endpoint);

module.exports = withTM({
  i18n: { locales, defaultLocale },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${endpoint}/:slug*`, // Matched parameters can be used in the destination
      },
    ]
  }
});
