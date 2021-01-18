import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10em 0;

    @media screen and (max-width: 960px) {
      padding: 6em 0;
    }

    h4 {
      font-size: 2em;
      color: #242f51;
      margin-bottom: 0 0 2em;
    }

    form {
      margin-top: 2em;
      display: flex;
      flex-direction: column;

      input {
        border: 2px solid #ccc;
        padding: 0.5em 1em;
        border-radius: 30px;
        margin-bottom: 1em;
        font-size: 1.4em;

        &:focus,
        &:active {
          border-color: #242f51;
        }
      }

      .error-msg {
        display: block;
        margin-bottom: 0.5em;
        text-align: center;
        color: #f55767;
        font-weight: 600;
        font-size: 0.8em;
      }

      button[type='submit'] {
        background: #2500f9;
        border: none;
        padding: 0.8em 1em;
        border-radius: 30px;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
