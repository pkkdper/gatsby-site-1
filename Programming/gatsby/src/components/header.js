import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";
const Header = () => {
  const data = useStaticQuery(graphql`
{
    site {
        siteMetadata {
            title
          }
    }
}
`);
return (
    <header>
        <h1>{data.site.metaData.title}</h1>
    </header>
)
};

export default  Header;