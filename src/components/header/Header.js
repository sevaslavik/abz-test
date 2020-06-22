import React from 'react';
import { Container, Row, Col} from "reactstrap";
import Logo from "./Logo";
import Nav from "./Nav"
import LogoSrc from "../../assets/logo.svg";

function Header() {
    return (
        <Container fluid={true}>
            <header className="header">
                <Row>
                    <Logo src={LogoSrc} />
                    <Nav  />
                </Row>
            </header>
        </Container>
    );
}

export default Header;