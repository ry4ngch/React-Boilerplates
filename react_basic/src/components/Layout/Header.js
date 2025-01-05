import React from 'react';
import Nav from '../Navigation/Nav';

const Header = ({title, shift, navSlideDown}) => {
    return (
        <div className='header'>
            <div className='container'>
                <Nav title={title} shift={shift} navSlideDown={navSlideDown}></Nav>
            </div>
        </div>
    )
}

export default Header;