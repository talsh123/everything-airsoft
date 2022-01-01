import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EverythingAirsoftLogo from "../static/logos/EverythingAirsoftLogo.png";

export default function NavbarMenu() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="Everything Airsoft Logo"
                                    src={EverythingAirsoftLogo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{" "}
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#Show">Link</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
