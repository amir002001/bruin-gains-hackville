import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import DatePicker from 'react-date-picker';

import '../App.css';
import '../styles/chatview.css';
import axios from "axios";


const CreateSessionView = () => {
    const [activity, setActivity] = useState("Select activity")
    const [duration, setDuration] = useState("Set duration")

    const [date, setDate] = useState(new Date())
    const postSession = () => {
        axios.post("http://localhost:3004/session",
            {
                "participants": [
                    { id: 2 },
                    { id: 4 }
                ],
                "Date": date,
                "workout-type": activity,
                "duration": duration
            })
    }

    return (

        <Container fluid>
            <h1 style={{ color: "black", padding: 28, fontSize: 32 }}>Create a Session</h1>
            <Container>
                <Row>
                    <Col sm={1} className="mx-2">
                        <FaUserCircle size={50} />
                    </Col>
                    <Col sm={1}>
                        <FaUserCircle size={50} className="mx-4" />
                    </Col>

                </Row>

            </Container>


            <Form>
                <Container fluid>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <br />
                            <DatePicker
                                onChange={setDate}
                                value={date}
                            />

                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label >Duration</Form.Label>
                            <br />
                            <Form.Control onChange={(e) => setDuration(e.target.value)} type="text" placeholder="Enter duration of activity" />
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

                    <Row >
                        <Button className="mt-3" variant="primary" onClick={postSession}>
                            Create Activity
                        </Button>
                    </Row>
                </Container>
            </Form>


        </Container >
    )
}

export default CreateSessionView; 