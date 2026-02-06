import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">Experience</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="card-custom p-4 mb-4 rounded">
              <div className="d-flex justify-content-between flex-wrap align-items-center mb-3">
                <h4 className="mb-0 fw-bold">Luqman General Stores and Fertilizer Dealer</h4>
                <span className="text-info badge bg-dark border border-info rounded-pill">Mar 2025 – Aug 2025</span>
              </div>
              <h5 className="text-secondary mb-3">Retail Store Manager</h5>
              <p className="text-secondary">
                Managed day-to-day operations of a retail store, including inventory control, supplier coordination, cash handling, and customer service. 
                Gained hands-on experience in small business management, financial planning, and team supervision.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
