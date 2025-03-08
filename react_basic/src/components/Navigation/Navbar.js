import React from 'react';
import Nav, {NavMenu} from '../../utils/Salient/UI/Navigation/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <Nav title="Salient" shift={true} navSlideDown={false} brandLogo={<FontAwesomeIcon icon="circle-notch" size="2x" className="brand-icon"></FontAwesomeIcon>}>
            <NavMenu>
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
                <li data-tooltip="UI" data-dropdown>
                    <a>
                        <FontAwesomeIcon className="navlink-icon" icon="caret-down"></FontAwesomeIcon>
                        <span className="navlink-text">Features</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Tables</a></li>
                        <li><a className="dropdown-item" href="#">Accordian</a></li>
                        <li><a className="dropdown-item" href="#">Tabs</a></li>
                        <li><a className="dropdown-item" href="#">Buttons</a></li>
                        <li><a className="dropdown-item" href="#">Breadcrumbs</a></li>
                        <li><a className="dropdown-item" href="#">Modal</a></li>
                        <li><a className="dropdown-item" href="#">Card</a></li>
                        <li><a className="dropdown-item" href="#">Treeview</a></li>
                        <li><a className="dropdown-item" href="#">Timeline</a></li>
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
            </NavMenu>
        </Nav>
    )
}

export default Navbar;

