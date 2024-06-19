import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
           </ul>
        </nav>
      </header>
      <main className="layout__main">
        {children}
      </main>
      <footer className="layout__footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;

