import React, {useState} from "react";
import "./Header.css";
import { Jumbotron, Container } from "reactstrap";

const Header = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.data.title}</h1>
          <p className="lead">NASA Astronomy Picture of the Day</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
