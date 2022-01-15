import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { Container, Row, Col } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"

import '../App.css';
import '../styles/chatview.css';


const CreateSessionView = () => {
    const [activity, setActivity] = useState("Select activity")


    return (

        <Container fluid>
            <h1 style={{ color: "black", padding: 28, fontSize: 32 }}>Create a Session</h1>
            <Container>
                <Row>
                    <Col sm={1}>
                        <FaUserCircle />
                    </Col>
                    <Col sm={1}>
                        <FaUserCircle />
                    </Col>

                </Row>

            </Container>


            <Form>
                <Container fluid>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Time</Form.Label>
                            <br />
                            <Form.Control type="text" placeholder="Enter time of activity" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <br />
                            <Form.Control type="text" placeholder="Enter date of activity" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Duration</Form.Label>
                            <br />
                            <Form.Control type="text" placeholder="Enter duration of activity" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {activity}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setActivity("Cardio")}>Cardio</Dropdown.Item>
                                <Dropdown.Item onClick={() => setActivity("Strength training")}>Strength training</Dropdown.Item>
                                <Dropdown.Item onClick={() => setActivity("Yoga")}>Yoga</Dropdown.Item>
                                <Dropdown.Item onClick={() => setActivity("Cycling")}>Cycling</Dropdown.Item>
                                <Dropdown.Item onClick={() => setActivity("Swimming")}>Swimming</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>

                    <Row>
                        <Button variant="primary" onClick={() => alert("Clicked")}>
                            Create Activity
                        </Button>
                    </Row>
                </Container>
            </Form>


        </Container >
    )
}

export default CreateSessionView; 