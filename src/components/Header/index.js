import React from 'react';
import Logo from '../../objects/Logo';
import Menu from '../../objects/Menu';
import Sobre from '../../objects/About';
import './styles.css';

const Header = () => {
  return (
    <header className='header-game'>
        <Logo />
        <Sobre />
        <Menu />
    </header>
  )
}

export default Header;