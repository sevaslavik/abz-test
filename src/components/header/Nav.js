import React, {useState} from "react";
import {Col} from "reactstrap";
import NavListItem from "./NavListItem";
import {items} from "./items";

function Nav() {
    const listItems = items.map((item, index) => {
        return <NavListItem key={index} value={item} />;
    });
    const [open, isOpen] = useState("open-menu")
    return (
        <Col md={{ size: 9, order: 3, offset: 0}} >
            <button className="hamburger-btn" onClick={() => isOpen(open == "open-menu" ? "close-menu" : "open-menu")}>&equiv;</button>
            <nav className={"nav " + open}>
                <ul className="nav-list">
                    {listItems}
                </ul>
            </nav>
        </Col>
    );
}

export default Nav;

