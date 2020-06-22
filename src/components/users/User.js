import React, {useState} from "react";
import Col from "reactstrap/es/Col";
import Tooltip from "reactstrap/es/Tooltip";

function User(props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <Col md={4}>
            <div className="users-card">
                <div className="users-card__image">
                    <img src={props.avatar}  />
                </div>
                <h2 className="users-card__title">{props.title}</h2>
                <span className="users-card__position" id={ props.id }>
                    <Tooltip placement="bottom" isOpen={tooltipOpen} autohide={false} target={ props.id } toggle={toggle}>
                        {props.position}
                    </Tooltip>
                    {props.position}
                </span>
                <span className="user-card__email">{props.email}</span>
                <span className="users-card__phone">{props.phone}</span>
            </div>
        </Col>
    );
}

export default User;