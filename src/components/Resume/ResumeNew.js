import React from "react";
import { Container, Row } from "react-bootstrap";

import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './Resume.css';
import pdf from '../../Assets/ecvRahulHadiyalResume.pdf'


function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        
        <Row className="resume-content justify-content-center">
          <h2 className="resume-title">My Resume</h2>
          <p className="resume-description">
            Here you can find a brief overview of my professional experience and skills.
            Please download my CV for more detailed information.
          </p>
        </Row>

        <Row className="justify-content-center">
          <a
            href= {pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <i className="fa fa-download"></i>
            &nbsp;Download CV
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;