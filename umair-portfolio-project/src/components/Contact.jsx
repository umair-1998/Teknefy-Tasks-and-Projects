import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-custom">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">Get In Touch</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} className="mb-5 mb-md-0">
             <h4 className="mb-4 display-6">Contact Information</h4>
             <div className="d-flex align-items-center mb-4">
                 <FaPhone className="text-accent me-4 fs-4" />
                 <span className="fs-5">(+92) 322 634 0362</span>
             </div>
             <div className="d-flex align-items-center mb-4">
                 <FaEnvelope className="text-accent me-4 fs-4" />
                 <a href="mailto:m.umair.se25@gmail.com" className="text-decoration-none text-light fs-5">m.umair.se25@gmail.com</a>
             </div>
             <div className="d-flex align-items-center mb-4">
                 <FaMapMarkerAlt className="text-accent me-4 fs-4" />
                 <span className="fs-5">Mohallah Titwaal, Garan, Balakot, Pakistan</span>
             </div>
          </Col>
          <Col md={6}>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Name" className="bg-dark text-light border-secondary" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" placeholder="Email" className="bg-dark text-light border-secondary" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" className="bg-dark text-light border-secondary" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message" className="bg-dark text-light border-secondary" />
              </Form.Group>
              <Button variant="info" type="submit" className="w-100">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
