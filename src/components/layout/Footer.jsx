import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Про нас</h4>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            Ми створюємо зручні інтерфейси для керування списками користувачів.
          </p>
        </div>

        <div className="footer-col">
          <h4>Навігація</h4>
          <ul>
            <li><a href="#">Головна сторінка</a></li>
            <li><a href="#">Всі користувачі</a></li>
            <li><a href="#">Статистика</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Контакти</h4>
          <ul>
            <li><a href="#">support@userapp.com</a></li>
            <li><a href="#">+38 (044) 123-45-67</a></li>
            <li><a href="#">Київ, Україна</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UserApp. Всі права захищено.
      </div>
    </footer>
  );
};

export default Footer;