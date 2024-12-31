import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Techstack.css';  // Make sure you update the CSS file accordingly
import Angularlogo from '../../Assets/Technology/angular-icon.png';
import htmllogo from  '../../Assets/Technology/html-5.png';
import bootstraplogo from '../../Assets/Technology/bootstrap-5-logo-icon.png';   
import serverlogo from  '../../Assets/Technology/cloud-server.png';
import csslogo from   '../../Assets/Technology/css-3.png';
import sqllogo from    '../../Assets/Technology/database.png';
import gitlogo from   '../../Assets/Technology/git-icon.png'; 
import figmalogo from   '../../Assets/Technology/figma-icon.png';
import javalogo from    '../../Assets/Technology/java-programming-language-icon.png';
import jslogo from   '../../Assets/Technology/js.png';
import nodelogo from   '../../Assets/Technology/node-js-icon.png';
import reactlogo from  '../../Assets/Technology/react-js-icon.png';

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="tech-icons-row">
        {[
          { src: htmllogo, label: "HTML5" },
          { src: csslogo, label: "CSS3" },
          { src: jslogo, label: "JavaScript" },
          { src: reactlogo, label: "React" },
          { src: nodelogo, label: "Node.js" },
          { src: Angularlogo, label: "Angular" },
          { src: gitlogo, label: "Git" },
          { src: javalogo, label: "Java" },
          { src: sqllogo, label: "SQL" },
          { src: serverlogo, label: "Server" },
          { src: bootstraplogo, label: "Bootstrap" },
          { src: figmalogo, label: "Figma" },
        ].map((tech, index) => (
          <div key={index} className="tech-icon">
            <img alt={tech.label} src={tech.src} className="tech-icon-img" />
            <span className="tech-icon-label">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;