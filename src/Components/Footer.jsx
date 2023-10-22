import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='footer__footer'>
                <h2 className='footer__header'>
                    Copyright {new Date().getFullYear()} News Portal
                </h2>
            </footer>
        </div>
    );
};

export default Footer;