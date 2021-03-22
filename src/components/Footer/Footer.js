import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon  /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription" >#312/4L, lalkuthi 1st Colony, Mirpur-1</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} /> apu202000@gmail.com</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801743912613</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="#">About Me</a><br/>
                            <a  className="footerLink" href="#">My Resume</a><br/>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <a  className="footerLink" href="#">Refund Policy</a><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">Avik.com &copy; 2019-2020</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;