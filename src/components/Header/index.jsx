import React from 'react';
import './header.css';
import icons from '../../assets/image/Actions.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className='header-nav'>
                    <div className='header-nav__logo'>
                        <a href="!#">MOVEA</a>
                    </div>
                    <div>
                        <ul className='header-nav__links'>
                            <li>
                                <a href="!#">Movies</a>
                            </li>
                            <li>
                                <a href="!#">TV shows</a>
                            </li>
                            <li>
                                <a href="!#">Animations</a>
                            </li>
                        </ul>
                    </div>
                    <div className='header-nav__icons'>
                        <img src={icons} alt='icons' />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
