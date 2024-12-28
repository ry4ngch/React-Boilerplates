import React from 'react';
import Nav from '../Navigation/Nav';

const Header = ({title, shift}) => {
    return (
        <div className='header'>
            <div className='container'>
                <Nav title={title} shift={shift}></Nav>
            </div>
        </div>
    )
}

export default Header;