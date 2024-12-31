import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAHUL HADIYAL</strong>
              </h1>

              <div className="type-container">
                <Type />
              </div>
            </Col>

            <Col md={5} className="image-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;