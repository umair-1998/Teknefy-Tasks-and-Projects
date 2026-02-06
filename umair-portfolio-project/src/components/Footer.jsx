import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-secondary text-center border-top border-secondary">
            <Container>
                <Row>
                    <Col>
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Muhammad Umair. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
