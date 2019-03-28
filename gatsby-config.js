require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'M-TECH DESIGN (MTNG)',
    siteUrl: 'https://mtng.tokyo/',
    description: 'M-TECH DESIGN (MTNG) is Frontend Engineer & Track Maker. I like React!!!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/assets/docs`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#121212',
        display: 'minimal-ui',
        icon: 'assets/images/sticker.png', 
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136477688-1',
      },
    },
    {
      resolve: 'gatsby-source-twitter',
      options: {      
        q: 'mtng45',
        credentials: {
          consumer_key: `${process.env.TWITTER_CONSUMER_KEY}`,
          consumer_secret: `${process.env.TWITTER_CONSUMER_SECRET}`,
          bearer_token: `${ process.env.TWITTER_BEARER_TOKEN }`,
        },
        tweet_mode: 'extended'
      },
    },
  ],
}
