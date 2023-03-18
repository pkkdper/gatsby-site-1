import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => {
  <Seo title="My blog Posts" />;
};
export default Blog;
