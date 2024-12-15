import React from 'react';
import Nav from './navbar';

const Header = ({title}) => {
    return (
        <div className='header'>
            <div className='container'>
                <Nav title={title}></Nav>
            </div>
        </div>
    )
}

export default Header;