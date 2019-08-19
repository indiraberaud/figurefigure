const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Figure Figure',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    'svgo',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131386344-1',
        anonymize: false,
        respectDNT: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer(),
        ],
        precision: 8,
        includePaths: [
          `${__dirname}/node_modules`,
          `${__dirname}/sass`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json',
  ],
};
