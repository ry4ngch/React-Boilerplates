import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    return (
        <React.Fragment>
            {/* Change the sd-slide-in to sd-slide-down className and vice versa */}
            {/* Ensure that data-effect=shift is removed in nav tag when sd-slide-down is used */}
            <ul className="navlinks sd-slide-in nav-collapse">
                <li data-tooltip="Home">
                    <a href="">
                    <FontAwesomeIcon className="navlink-icon" icon="home"></FontAwesomeIcon>
                    <span className="navlink-text">Home</span>
                    </a>
                </li>
                <li data-tooltip="About">
                    <a href="">
                    <FontAwesomeIcon className="navlink-icon" icon="info-circle"></FontAwesomeIcon>
                    <span className="navlink-text">About</span>
                    </a>
                </li>
                <li data-tooltip="Settings">
                    <a href="">
                    <FontAwesomeIcon className="navlink-icon" icon="sliders"></FontAwesomeIcon>
                    <span className="navlink-text">Settings</span>
                    </a>
                </li>
                <li data-tooltip="Dropdown" data-dropdown>
                    <a>
                        <FontAwesomeIcon className="navlink-icon" icon="caret-down"></FontAwesomeIcon>
                        <span className="navlink-text">Dropdown</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li data-tooltip="Dropdown" data-dropdown>
                    <a>
                        <FontAwesomeIcon className="navlink-icon" icon="caret-down"></FontAwesomeIcon>
                        <span className="navlink-text">Dropdown</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>

            <div className="search pos-right" data-toggle="hide"></div>
            <div className="search-box hide">
                <i className="search"></i>
                <input type="text" placeholder="Search here..." />
            </div>
        </React.Fragment>
    )
}

export default NavMenu;