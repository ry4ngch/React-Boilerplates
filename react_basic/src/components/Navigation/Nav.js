import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/salient-nav';
import NavMenu from './NavMenu';
//import classNames from 'classnames';

const Nav = ({title, shift}) => {

    return (
		<div>
			<div id="overlay"></div>
			<nav className="navbar grayscale-scheme" {...(shift ? { 'data-effect': 'shift' } : {})}> {/* data-effect=shift */}
				<div className="hamburger">
					<div>
						{/* Middle Line */}
					</div> 
				</div>

				<a className="navbar-brand">
					<FontAwesomeIcon icon="circle-notch" size="2x" className="brand-icon"></FontAwesomeIcon>
					<span>{title}</span>
				</a>

				<NavMenu></NavMenu>
			</nav>
		</div>
    )
}

export default Nav;