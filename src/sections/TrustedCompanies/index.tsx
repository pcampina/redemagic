import React from 'react';

import { Container } from './styles';

import southWestImage from '../../assets/images/companies/southwest.png';
import anubisImage from '../../assets/images/companies/anubis.png';
import alonzoImage from '../../assets/images/companies/alonzo.png';
import premiumExpressImage from '../../assets/images/companies/premium-express.png';
import maniacImage from '../../assets/images/companies/maniac.png';

const TrustedCompanies: React.FC = () => (
  <>
    <Container>
      <div className="container">
        <h4>Trusted by companies</h4>

        <div className="companies">
          <a href="/">
            <img src={southWestImage} alt="SouthWeast Company" />
          </a>
          <a href="/">
            <img src={anubisImage} alt="Anubis Entertainment" />
          </a>
          <a href="/">
            <img src={alonzoImage} alt="Alonzo Casseta" />
          </a>
          <a href="/">
            <img src={premiumExpressImage} alt="Premium Express" />
          </a>
          <a href="/">
            <img src={maniacImage} alt="Maniac" />
          </a>
        </div>
      </div>
    </Container>
  </>
);

export default TrustedCompanies;
