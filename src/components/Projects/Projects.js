import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import bookstore from "../../Assets/Projects/bookstore.png";
import contactman from "../../Assets/Projects/contactman.png";
import crud from "../../Assets/Projects/crud.png";
import tictactoe from "../../Assets/Projects/tic.png";
import './Project.css';

function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div className="project-card-inner">
              <img src={bookstore} alt="Bookstore Project" className="project-image" />
              <h3 className="project-title">BookStore</h3>
              <p className="project-description">
                This website allows you to buy books from anywhere, saving your time and
                effort of visiting a bookstore. It provides a convenient platform where you
                can browse and purchase a wide range of books online.
              </p>
              <div className="project-buttons">
                <a href="https://github.com/your-repo/bookstore" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://demo-link.com/bookstore" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-inner">
              <img src={contactman} alt="Contact Manager Project" className="project-image" />
              <h3 className="project-title">Contact Manager</h3>
              <p className="project-description">
                The Contact Manager Web Application is a user-friendly tool designed to
                efficiently store, manage, and retrieve contact information. Built using
                ReactJS.
              </p>
              <div className="project-buttons">
                <a href="https://github.com/your-repo/contact-manager" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://demo-link.com/contact-manager" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-inner">
              <img src={crud} alt="CRUD Application Project" className="project-image" />
              <h3 className="project-title">CRUD Application</h3>
              <p className="project-description">
                The CRUD Application is a dynamic web tool designed for managing data
                through Create, Read, Update, and Delete operations. Built using HTML, CSS,
                and JavaScript.
              </p>
              <div className="project-buttons">
                <a href="https://github.com/your-repo/crud-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://demo-link.com/crud-app" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-inner">
              <img src={tictactoe} alt="Tic Tac Toe Project" className="project-image" />
              <h3 className="project-title">Tic Tac Toe</h3>
              <p className="project-description">
                The Tic Tac Toe Game is an interactive and responsive web application built
                with ReactJS. It allows two players to compete in a classic 3x3 grid format
                with real-time updates and highlights the winner or a tie.
              </p>
              <div className="project-buttons">
                <a href="https://github.com/your-repo/tic-tac-toe" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://demo-link.com/tic-tac-toe" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
