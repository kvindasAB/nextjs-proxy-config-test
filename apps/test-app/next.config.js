const withTM = require('next-transpile-modules')([]);

const endpoint = 'https://demo2086895.mockable.io';
console.info('WSEndpoint:', endpoint);

module.exports = withTM({
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${endpoint}/:slug*`, // Matched parameters can be used in the destination
      },
    ]
  }
});
