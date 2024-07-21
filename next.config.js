const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  devIndicators: {
    autoPrerender: false,
  }

};

module.exports = withPlugins([optimizedImages], nextConfiguration);
