module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
              {
                allBlogPost(sort: {fields: date, order: DESC}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Nakah's Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Nakah's blog`,
    author: "Hakan Altinbasak",
    siteUrl: "https://nakah.dev",
    social: [
      {
        name: `twitter`,
        url: `https://mobile.twitter.com/nakah`,
      },
      {
        name: `github`,
        url: `https://github.com/nakah`,
      },
      {
        name: `rss`,
        url: `https://nakah.dev/rss.xml`,
      },
    ],
  },
}
