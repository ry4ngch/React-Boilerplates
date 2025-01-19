import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/Salient/salient-nav';

const Nav = (props) => {

    return (
		<div>
			<div id="overlay"></div>
			<nav className="navbar grayscale-scheme" {...(props.shift && !props.navSlideDown ? { 'data-effect': 'shift' } : {})}> {/* data-effect=shift */}
				<div className="hamburger">
					<div>
						{/* Middle Line */}
					</div> 
				</div>

				<a className="navbar-brand">
					<FontAwesomeIcon icon="circle-notch" size="2x" className="brand-icon"></FontAwesomeIcon>
					{props.title && <span>{props.title}</span>}
				</a>

				{props.children}
			</nav>
		</div>
    )
}

Nav.defaultProps = {
	navSlideDown: false,
	shift: true
}

export default Nav;