import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div.logo {
    a {
      color: #242f51;

      &:hover {
        color: #fcae61;

        span {
          color: #242f51;
        }
      }

      p {
        font-weight: 700;
        font-size: 1.3em;

        span {
          color: #fcae61;
        }
      }
    }
  }
`;
