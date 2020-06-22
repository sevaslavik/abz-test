import React from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import ManLapTop from "../assets/man-laptop-v1.svg"

function AboutMe() {
    return (
        <div className="about-me">
            <Container fluid={true}>
                <Row>
                    <Col md={12}>
                        <h1 className="about-me__title">Let's get acquainted</h1>
                    </Col>
                    <Col md={6}>
                        <img src={ManLapTop} className="about-me__image"/>
                    </Col>
                    <Col md={6}>
                        <h2 className="about-me__subtitle">I am cool frontend developer</h2>
                        <p className="about-me__description">
                            We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
                        </p>
                        <p className="about-me__description">
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.
                        </p>
                        <a href="#sing-up-now" className="sing-up">Sing Up Now</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;