import React from 'react';

import Logo from '../Logo';
import NavMenu from '../NavMenu';
import ButtonCTA from '../ButtonCTA';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Logo />
        <NavMenu />
        <ButtonCTA href="#try-for-free" bgcolor="#2500f9">
          Try for free
        </ButtonCTA>
      </div>
    </Container>
  );
};

export default Header;
