import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <p>
          Developed with
          <span>❤</span>
          by Pablo Campina
        </p>
      </div>
    </Container>
  );
};

export default Footer;
