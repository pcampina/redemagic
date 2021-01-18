import React from 'react';

import GlobalStyle from './assets/styles/global';

import Header from './components/Header';
import PressApp from './sections/PressApp';
import TrustedCompanies from './sections/TrustedCompanies';
import AwesomeApps from './sections/AwesomeApps';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <Header />
    <PressApp />
    <TrustedCompanies />
    <AwesomeApps />
    <Contact />
    <Footer />
  </>
);

export default App;
