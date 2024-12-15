import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/salient';
//import classNames from 'classnames';

const Nav = ({title}) => {

    return (
		<div>
			{/*<div className="overlay"></div>*/}
			<nav className="navbar grayscale-scheme" data-effect="shift"> {/* data-effect=shift */}
				<div className="hamburger">
					<div>
						{/* Middle Line */}
					</div> 
				</div>

				<a className="navbar-brand">
					<FontAwesomeIcon icon="circle-notch" size="2x"></FontAwesomeIcon>
					<span>{title}</span>
				</a>

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
				</ul>

				<div className="search pos-right" data-toggle="hide"></div>
				<div className="search-box hide">
					<i className="search"></i>
					<input type="text" placeholder="Search here..." />
				</div>
			</nav>
		</div>
    )
}

export default Nav;