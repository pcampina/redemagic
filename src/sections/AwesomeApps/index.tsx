import React from 'react';

import FactItem from '../../components/FactItem';

import { Container } from './styles';

import awesomeAppsImage from '../../assets/images/awesome-apps.svg';
import speedImage from '../../assets/images/speed.png';
import prototypingImage from '../../assets/images/prototyping.png';
import vectorImage from '../../assets/images/vector.png';

const AwesomeApps: React.FC = () => (
  <>
    <Container id="awesome-apps">
      <div className="container">
        <div className="awesome-apps--image">
          <img src={awesomeAppsImage} alt="Awesome Apps" />
        </div>

        <div className="awesome-apps--content">
          <h3>Awesome apps features</h3>

          <span className="section-description">
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </span>

          <div className="apps-facts">
            <FactItem
              image={speedImage}
              title="Fast Performance"
              color="#f55767"
            >
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </FactItem>

            <FactItem
              image={prototypingImage}
              title="Prototyping"
              color="#2563ff"
            >
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </FactItem>

            <FactItem
              image={vectorImage}
              title="Vector Editing"
              color="#40975f"
            >
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </FactItem>
          </div>
        </div>
      </div>
    </Container>
  </>
);

export default AwesomeApps;
