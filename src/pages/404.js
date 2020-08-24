import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Woah. Hold your Terriers.</h1>
      <h2>Unfortunately, you went somewhere that didn't exist. Intresting, Right? We'll report your discoveries, and in the mean time, you can go home.</h2>
      <a>
      You Can go Now.
      </a>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
