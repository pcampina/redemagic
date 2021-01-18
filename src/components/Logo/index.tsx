import React from 'react';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <a href="/">
          <p>
            <span>App</span>
            Lab
          </p>
        </a>
      </div>
    </Container>
  );
};

export default Logo;
