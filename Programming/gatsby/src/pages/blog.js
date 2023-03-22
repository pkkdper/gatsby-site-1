import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h1>{node.frontmatter.title}</h1>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => {
  <Seo title="My blog Posts" />;
};
export default Blog;
