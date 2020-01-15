var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken, snipcart } = process.env

module.exports = {
  siteMetadata: {
    title: `OneShopper`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@rohitguptab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `hjrtokoxkcdl`,
        accessToken: `ffZ9BZB5wkTrCYNvy5mbA3jaNhbZNVkkgE4m6JwI8ls`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "Zjg4Y2Y3NmEtYWI1OS00NmE3LWEzMzktYTAxYTBlYzNkYTQ1NjM3MTI2Mjk5OTMzNjQ4OTIx",
        autopop: true,
      },
    },
  ],
}
