import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css'
import { AiFillHome } from 'react-icons/ai';
import { AiFillBook } from 'react-icons/ai';
import Logo from '../../../images/logoHimaPersis.png'

const Sidebar = () => {
    return (
        <main>
            <header className="header">
                <div className="header-toggle">
                    <GiHamburgerMenu/>
                </div>
            </header>
            <aside className="sidebar">
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav-logo">
                            <i className="nav-logo-icon"><AiFillHome/></i>
                            <span className="nav-logo-name">Home</span>
                        </Link>

                        <div className="nav-list">
                            <Link to="/sejarah" className="nav-link">
                                <i className="nav-link-icon"><AiFillBook/></i>
                                <span className="nav-link-name">Sejarah</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>
        </main>
    )
}

export default Sidebar