import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100 bg-dark-custom pt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start order-2 order-md-1">
            <h5 className="text-accent mb-2 text-uppercase letter-spacing-2">Hello, I'm</h5>
            <h1 className="display-1 mb-3">Muhammad Umair</h1>
            <h3 className="text-secondary mb-4 fw-light">Software Engineer</h3>
            <p className="lead text-secondary mb-5 opacity-75">
              Eager to contribute to innovative projects and collaborate with experienced teams to build a solid foundation for my career.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <Button variant="info" href="#projects">View My Work</Button>
              <Button variant="outline-info" href="#contact">Contact Me</Button>
            </div>
            <div className="mt-5 d-flex justify-content-center justify-content-md-start gap-4">
              <a href="mailto:m.umair.se25@gmail.com" className="text-decoration-none text-secondary fs-4 d-flex align-items-center hover-accent">
                <FaEnvelope className="me-2" /> <span>m.umair.se25@gmail.com</span>
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center order-1 order-md-2 mb-5 mb-md-0">
             <div className="profile-img-container">
                <img src="/profile.png" alt="Muhammad Umair" className="profile-img" />
             </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
