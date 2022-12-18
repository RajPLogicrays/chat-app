import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Registration() {

    const [chatUser, setChatUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handlChange = (e) => {
        e.preventDefault();
        setChatUser(chatUser => ({ ...chatUser, [e.target.name]: e.target.value }))
    }

    const singUpUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/chat-user', chatUser);
        setChatUser({ name: '', email: '', password: '' });
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={5} className="login_form_box">
                    <div className="form__title">
                        <h2>Sign Up</h2>
                    </div>
                    <Form onSubmit={singUpUser} >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="name" name="name" value={chatUser.name} onChange={handlChange} placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={chatUser.email} onChange={handlChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={chatUser.password} onChange={handlChange} placeholder="Password" />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br/>
                    <div className="already_registration">
                        <h4>
                            Already have an account? <Link to="/login" className="text-light">Sign In Now</Link>
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Registration;