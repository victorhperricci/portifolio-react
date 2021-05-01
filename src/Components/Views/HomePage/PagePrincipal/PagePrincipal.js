import React from "react";
import { PagePrincipalContainer } from "./style";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import TextApresentation from "./TextApresentation";

const PagePrincipal = () => {
  return (
    <PagePrincipalContainer>
      <TextApresentation />
      <Link className="link" to="/contato" data-aos-anchor=".sobre">
        <div className="bgc"></div>
        <p>Me Contate !</p>
      </Link>
      <LinkScroll
        className="link-sobre"
        to="sobre"
        smooth={true}
        duration={1000}
      >
        <p>↓</p>
      </LinkScroll>
    </PagePrincipalContainer>
  );
};

export default PagePrincipal;
