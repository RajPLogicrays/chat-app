import React from 'react';
import logo from '../images/logo.png'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        // <Navbar>
            <Container>
                <Row>
                    <Col md={3}>
                        <Image src={logo} width={100} height={100} />
                    </Col>
                    <Col md={9}>
                        <Nav as="ul">
                            <Nav.Item as="li">
                                <Link to="/">Home</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        // </Navbar>
    )
}

export default Header;