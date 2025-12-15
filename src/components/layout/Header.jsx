import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">UserApp</a>
        
        <nav className="nav-links">
          <a href="#" className="nav-link">Головна</a>
          <a href="#" className="nav-link">Користувачі</a>
          <a href="#" className="nav-link">Про проект</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;