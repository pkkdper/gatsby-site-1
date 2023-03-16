import * as  React from "react";
import Seo from "../components/seo";

const Blog = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};
export const Head = () => {<Seo title="My blog Posts"/>}
export default Blog;