import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUserSign] = useState({
        email: "",
        password: "",
    });

    const handlChange = (e) => {
        e.preventDefault();
        setUserSign((useState) => ({ ...useState, [e.target.name]: e.target.value }))
    }

    const [data, setUsers] = useState([]);

    const AllData = () => {
        axios.get('http://localhost:3001/chat-user')
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(() => {
                alert("Somthing is wrong");
            })
    }

    useEffect(() => {
        AllData();
    }, [])
    
    console.log(data);

    const navigate = useNavigate();

    const handlSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        setUserSign({ email: '', password: '' });
        navigate("/");
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={5} className="login_form_box">
                    <div className="form__title">
                        <h2>Sign In</h2>
                    </div>
                    <Form onSubmit={handlSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handlChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handlChange} placeholder="Password" />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br />
                    <div className="create_new_account">
                        <h4>Create an new account ? <Link to="/registration" className="text-light">Sign In</Link></h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;