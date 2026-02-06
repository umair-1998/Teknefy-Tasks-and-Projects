import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-custom">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">Projects</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="card-custom h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-4 mb-3">Accommodation Booking App</Card.Title>
                <div className="mb-3">
                  <Badge bg="info" className="me-2 text-dark">React Native</Badge>
                  <Badge bg="info" className="me-2 text-dark">Firebase</Badge>
                </div>
                <Card.Text className="text-secondary">
                  Designed and developed a cross-platform booking app inspired by Airbnb and Booking.com. 
                  Features include real-time listings, secure user authentication, and seamless booking management.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
