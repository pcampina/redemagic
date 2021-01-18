import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0;

  @media screen and (max-width: 600px) {
    padding: 1em 0;
  }

  .container {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
