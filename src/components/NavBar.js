import React, { useState } from 'react';
import { Link } from 'gatsby';

import './NavBar.css';

import Toggle from './Toggle';

import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

import { rhythm, scale } from '../utils/typography';

function NavBar({ title, location, toggle }) {
  const [opened, setOpened] = useState(false);

  const closeMenu = () => {
    const scrollY = document.body.style.top;

    //menu close
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setOpened(false);
  };

  const openMenu = () => {
    //menu open
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.display = 'block';
    document.body.style.width = '100%';
    setOpened(true);
  };

  const handleMenuClick = () => {
    if (opened) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <h1
            style={{
              ...scale(0.5),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--textTitle)',
                fontSize: '1.1rem',
              }}
              onClick={closeMenu}
              to={'/'}
              className="no-select"
            >
              {title}
            </Link>
          </h1>

          <ul className={opened ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/through-the-lens/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
                partiallyActive={true}
              >
                Through the Lens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tech-blog/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
                partiallyActive={true}
              >
                Tech
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/road-to-195/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
                partiallyActive={true}
              >
                Road to 195
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {toggle}
          <div
            className={`menu-btn-1 no-select menu-btn-1-controller ${
              opened && 'active'
            }`}
            onClick={handleMenuClick}
          >
            <span></span>
          </div>

          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
