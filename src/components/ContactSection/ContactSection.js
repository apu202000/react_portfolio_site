import React, {Component, Fragment} from 'react';
import  {Container, Row, Col, Form, Button, } from "react-bootstrap";


class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group >
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription" >#312/4L, lalkuthi 1st Colony, Mirpur-1</p>
                            <p className="serviceDescription" >Email: apu202000@gmail.com</p>
                            <p className="serviceDescription" >Phone: +8801743912613</p>

                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ContactSection;