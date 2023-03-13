import * as React from "react";
import Component1 from "../components/component1";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <><Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  <Component1></Component1></>
  );
};
export const Head = () => <title>Home Page</title>;
export default IndexPage;
