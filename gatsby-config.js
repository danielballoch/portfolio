module.exports = {
  siteMetadata: {
    title: 'Daniel Balloch - Web Developer',
    titleTemplate: 'Daniel Balloch - Web Developer',
    description: 'Web design and development including eccomerce, blogs, marketing and business solutions. Affordable pricing and customer oriented attitude. Responsive mobile friendly products with CMS integrations and cutting edge hosting technologys. Contact Daniel Balloch, based in Hamilton New Zealand for a free website quote',
    siteUrl:'https://www.danbwebdesign.com',
    image: 'src/images/gatsby-icon.png',
    twitterUsername: '@danielballoch_'
    
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
          name: 'images',
        },
      },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'danbwebdesign',
        short_name: 'danb',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-v2-plugin-page-transitions',
    'gatsby-plugin-sitemap',
    
    
  ],
}
