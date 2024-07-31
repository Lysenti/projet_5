import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';
import logo from '../assets/logo.png'; 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__logo-nav">
          <img src={logo} alt="Kasa Logo" className="layout__logo" />
          <nav className="layout__nav">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À Propos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="layout__main">
        {children}
      </main>
      <footer className="layout__footer">
        <img src={logo} alt="Kasa Logo" className="layout__footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
