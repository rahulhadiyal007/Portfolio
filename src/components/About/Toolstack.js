// Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import './Toolstack.css';

// Importing tools logos
import vscode from '../../Assets/Tool/visual-studio-code-icon.png';
import vs from '../../Assets/Tool/vs.png';
import postman from '../../Assets/Tool/postman-icon.png';
import Github from '../../Assets/Tool/social.png';
import chatgpt from '../../Assets/Tool/openai-icon.png';
import blackbox from '../../Assets/Tool/blackbox-ai-logo.png';

function Toolstack() {
  return (
    <div className="techstack-container" >

    <Row className="tech-icons-row">
      <Col xs={6} md={2} className="tech-icon">
        <img alt="VS Code" src={vscode} className="tech-icon-img" />
      </Col>
      <Col xs={6} md={2} className="tech-icon">
        <img alt="VS" src={vs} className="tech-icon-img" />
      </Col>
      <Col xs={6} md={2} className="tech-icon">
        <img alt="Postman" src={postman} className="tech-icon-img" />
      </Col>
      <Col xs={6} md={2} className="tech-icon">
        <img alt="Github" src={Github} className="tech-icon-img" />
      </Col>
      <Col xs={6} md={2} className="tech-icon">
        <img alt="Github" src={chatgpt} className="tech-icon-img" />
      </Col>
      <Col xs={6} md={2} className="tech-icon">
        <img alt="Github" src={blackbox} className="tech-icon-img" />
      </Col>
    </Row>
    </div>
  );
}

export default Toolstack;
