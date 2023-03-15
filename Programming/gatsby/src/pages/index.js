import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Component1 from "../components/component1";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tut.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/pexels-céline-7325997.jpg"
      />
      </Layout>
      <Component1></Component1>
    </>
  );
};
export const Head = () => <title>Home Page</title>;
export default IndexPage;
