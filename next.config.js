
const endpoint = 'https://demo2086895.mockable.io';
console.info('WSEndpoint:', endpoint);

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${endpoint}/:slug*`, // Matched parameters can be used in the destination
      },
    ]
  }
}
