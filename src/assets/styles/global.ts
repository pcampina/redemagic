import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    max-width: 100%;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    background: #fdfdfe;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    transition: 0.3s;
  }

  .container {
    width: 100%;
    max-width: 1170px;
    display: flex;

    @media screen and (max-width: 1024px) {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;
