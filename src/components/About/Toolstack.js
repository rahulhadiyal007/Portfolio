// Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";


// Importing tools logos
import vscode from '../../Assets/Tool/visual-studio-code-icon.png';
import vs from '../../Assets/Tool/vs.png';
import postman from '../../Assets/Tool/postman-icon.png';
import Github from '../../Assets/Tool/social.png';
import chatgpt from '../../Assets/Tool/openai-icon.png';
import blackbox from '../../Assets/Tool/blackbox-ai-logo.png';

function Toolstack() {
  return (
   
     <div className="techstack-container">
     <div className="tech-icons-row">
       {[
         { src: vscode, label: "VSCode" },
         { src: vs, label: "vsstudio" },
         { src: postman, label: "postman" },
         { src: Github, label: "github" },
         { src: chatgpt, label: "chatgpt" },
         { src: blackbox, label: "blackbox" },
       ].map((tech, index) => (
         <div key={index} className="tech-icon">
           <img alt={tech.label} src={tech.src} className="tech-icon-img" />
         </div>
       ))}
     </div>
   </div>
  );
}

export default Toolstack;
