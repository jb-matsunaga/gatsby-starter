module.exports = {
  siteMetadata: {
    title: 'M-TECHDESIGN',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#121212',
        display: 'minimal-ui',
        icon: 'src/images/sticker.png', 
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
