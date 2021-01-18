import React from 'react';

import { Container } from './styles';

const NavMenu: React.FC = () => {
  return (
    <Container>
      <ul className="main-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#awesome-apps">Awesome Apps</a>
        </li>
      </ul>
    </Container>
  );
};

export default NavMenu;
