import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
        { data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
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
          slug
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
