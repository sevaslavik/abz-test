import React from "react";

function NavListItem(props) {
    return (
        <li className="nav-list__item">
            <a href="#sing-up-now" className="nav-list__link">{ props.value }</a>
        </li>
    );
}

export default NavListItem;