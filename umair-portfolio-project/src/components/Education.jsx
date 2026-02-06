import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">Education & Training</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="timeline-item mb-4 border-start border-info ps-4 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle bg-info rounded-circle" style={{ width: '12px', height: '12px' }}></div>
              <h5 className="fw-bold">Bachelor in Software Engineering</h5>
              <p className="text-info mb-1">COMSATS University Islamabad, Abbottabad Campus</p>
              <p className="text-muted small">03/2021 – 03/2025</p>
            </div>
            
            <div className="timeline-item mb-4 border-start border-info ps-4 position-relative">
               <div className="position-absolute top-0 start-0 translate-middle bg-info rounded-circle" style={{ width: '12px', height: '12px' }}></div>
               <h5 className="fw-bold">F.Sc Pre-Engineering</h5>
               <p className="text-info mb-1">Board of Intermediate and Secondary Education Abbottabad</p>
               <p className="text-muted small">Equivalent to A Levels</p>
            </div>

            <div className="timeline-item mb-4 border-start border-info ps-4 position-relative">
               <div className="position-absolute top-0 start-0 translate-middle bg-info rounded-circle" style={{ width: '12px', height: '12px' }}></div>
               <h5 className="fw-bold">Certifications in Accounting</h5>
               <p className="text-info mb-1">ACCA</p>
               <p className="text-muted small">Management Accounting & Financial Accounting</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
