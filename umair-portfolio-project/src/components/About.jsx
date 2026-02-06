import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">About Me</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="text-secondary text-center lead">
              Software Engineer seeking a full-time position to apply and grow my skills. 
              I am passionate about creating clean, efficient, and user-friendly web applications.
              with a background in Software Engineering from COMSATS University Islamabad, 
              I have a solid foundation in programming and web technologies.
            </p>
            <Row className="mt-5 text-center">
              <Col md={4} className="mb-4">
                 <h4 className="fw-bold">Nationality</h4>
                 <p className="text-secondary">Pakistani</p>
              </Col>
              <Col md={4} className="mb-4">
                 <h4 className="fw-bold">Location</h4>
                 <p className="text-secondary">Balakot, Pakistan</p>
              </Col>
              <Col md={4} className="mb-4">
                 <h4 className="fw-bold">Languages</h4>
                 <p className="text-secondary">English, Urdu</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
