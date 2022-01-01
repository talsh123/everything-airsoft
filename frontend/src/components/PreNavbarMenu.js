import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import phoneIcon from "../static/icons/phoneIcon.png";
import gunIcon from "../static/icons/gunIcon.png";
import locationIcon from "../static/icons/locationIcon.png";
import bulletProofVestIcon from "../static/icons/bulletProofVestIcon.png";
import ammunitionIcon from "../static/icons/ammunitionIcon.png";
import userIcon from "../static/icons/userIcon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PreNavbarMenu() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={locationIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>Find A Store</h6>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={phoneIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>555-5555555</h6>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <h6>Phone Support S-F 7am-5pm PST</h6>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={gunIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>Guns</h6>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={bulletProofVestIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>Accessories</h6>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={ammunitionIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>Ammunition</h6>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Location Icon"
                                    src={userIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{" "}
                                <h6>Sign In</h6>
                            </Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
