import React from "react";
import {Col} from "reactstrap";

function Logo(props) {
    return (
        <Col md={3}>
            <div className="logo">
                <img src={props.src}/>
            </div>
        </Col>
    );
}

export default Logo;