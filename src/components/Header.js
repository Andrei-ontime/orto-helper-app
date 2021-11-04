import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='logo' />
      <nav className='menu'>
        <ul className='menu__items'>
          <li className='menu-item'>
            <a href='#'>Орта</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Краситель</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Цвета</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
