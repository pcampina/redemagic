import styled from 'styled-components';

export const Container = styled.div`
  background: #09142e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: white;

      span {
        padding: 0 0.5em;
        display: inline-block;
        color: red;
      }
    }
  }
`;
