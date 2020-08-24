/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <h2>
      The Lakeland Terrier is a small, lovable terrier.
      </h2>
      <h3>
      Some History...
      </h3>
      <p>
      The Lakeland Terrier, also Known as the Patterton Terrier, was bred to hunt foxes and otters in the Lake District. The look somewhat like <a href="http://wikipedia.com/welsh-terrier">Welsh</a> or the <a href='http://wikipedia.com/airedale'>Airedale Terrier</a>.
      </p>
      <h3>
      Coat
      </h3>
      <p>
      The Lakeland is non-shedding, and has a soft coat as a puppy. However, as it ages, wire will start to come in. The AKC Standards state that the dog must be plucked, however, clippering is fine, but the coat may fade and curl.
      </p>
      <h3>
      Tempermant
      </h3>
      <p>
      The Lakeland Terrier is friendly, bold and agreeable, however, as with any terrier, a bit stubborn. The AKC advises early socilization as well as puppy classes.
      </p>
    </div>
  )
}

export default Bio
