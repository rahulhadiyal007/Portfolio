import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by  Rahul Hadiyal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} R.HADIYAL</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rahulhadiyal007"
                className="icon-colour"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rahul-hadiyal-56229a23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="icon-colour"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rahul.hadiyal_007?igsh=d3E1eW9zd29objk0"
                className="icon-colour"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;