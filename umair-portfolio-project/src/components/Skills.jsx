import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'HTML / CSS / Bootstrap', level: 50},
    { name: 'JavaScript (ES6+)', level: 30 },
    { name: 'React.js', level: 40 },
    { name: 'Python', level: 50 },
    { name: 'MySQL / MongoDB', level: 20 },
    { name: 'WordPress', level: 65 },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-custom">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="mb-3">My Skills</h2>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">{skill.name}</span>
                  <span className="text-secondary">{skill.level}%</span>
                </div>
                <ProgressBar now={skill.level} variant="info" style={{ height: '8px' }} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
