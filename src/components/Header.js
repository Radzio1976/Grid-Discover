import React from 'react';
import MagnifyingGlass from '../images/magnifying-glass.png';
import Text from '../images/text.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="left-nav">
                    <ul>
                        <li>Discover</li>
                    </ul>
                </nav>
                <nav className="middle-nav">
                    <ul>
                        <li>Home</li>
                        <li>Adventures</li>
                        <li>Budget</li>
                        <li>Luxury</li>
                        <li>Couples</li>
                        <li>Food</li>
                    </ul>
                </nav>
                <div className="icons">
                    <img className="mag-glass" src={MagnifyingGlass} alt=""></img>
                    <img className="hamburger-menu" src={Text} alt=""></img>
                </div>
            </header>
        )
    }
}

export default Header;