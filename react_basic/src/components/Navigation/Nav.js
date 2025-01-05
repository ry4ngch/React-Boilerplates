import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/Salient/salient-nav';
import NavMenu from './NavMenu';
//import classNames from 'classnames';

const Nav = ({title, shift, navSlideDown}) => {

    return (
		<div>
			<div id="overlay"></div>
			<nav className="navbar grayscale-scheme" {...(shift && !navSlideDown ? { 'data-effect': 'shift' } : {})}> {/* data-effect=shift */}
				<div className="hamburger">
					<div>
						{/* Middle Line */}
					</div> 
				</div>

				<a className="navbar-brand">
					<FontAwesomeIcon icon="circle-notch" size="2x" className="brand-icon"></FontAwesomeIcon>
					<span>{title}</span>
				</a>

				<NavMenu navSlideDown={navSlideDown}></NavMenu>
			</nav>
		</div>
    )
}

export default Nav;