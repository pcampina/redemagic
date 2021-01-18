import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  .container {
    flex-direction: column;
    align-items: center;
    padding: 3em 0;

    h4 {
      font-weight: 400;
      color: #242f51;
      margin-bottom: 1em;
    }

    .companies {
      display: flex;
      align-items: center;

      @media screen and (max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }

      a {
        margin-right: 3em;
        display: inline-block;

        @media screen and (max-width: 600px) {
          margin: 0 2em 2em 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          opacity: 0.6;
        }

        img {
          height: 100%;
          max-height: 60px;
          object-fit: contain;

          @media screen and (max-width: 960px) {
            max-height: 50px;
          }
        }
      }
    }
  }
`;
