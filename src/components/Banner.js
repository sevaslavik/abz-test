import React from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

function Banner() {
    return (
        <div className="banner">
            <Container fluid={true}>
                    <Row>
                        <Col md={7}>
                            <h1 className="banner__title">Test Assignment For Frontend Developer Position</h1>
                            <p className="banner__description">
                                We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
                            </p>
                            <a href="#sing-up-now" className="sing-up">Sing Up Now</a>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Banner;