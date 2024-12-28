import React from 'react';

const Footer = (props) => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
            <p>&copy; {currentYear} Ryan Goh. All rights reserved.</p>
        </div>
    );
}

export default Footer;