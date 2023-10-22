import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='navbar__nav'>
                <div className="navbar__logo">
                    <Link to="/">
                        <h2 className='navbar__header'>New Post</h2>
                    </Link>
                </div>
                <ul className='navbar__list'>
                    <li className='navbar__item' title='Search'><a href='#'><BiSearch size='35px' color={'black'}/></a></li>
                    <li className='navbar__item' title='Menu'><a href='#'><AiOutlineMenu size='35px' color={'black'}/></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;