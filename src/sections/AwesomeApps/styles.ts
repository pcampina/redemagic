import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }

    .awesome-apps--image {
      @media screen and (max-width: 1024px) {
        padding: 2em;
      }

      img {
        height: 725px;

        @media screen and (max-width: 1024px) {
          height: 625px;
        }

        @media screen and (max-width: 960px) {
          height: 325px;
        }
      }
    }

    .awesome-apps--content {
      width: 500px;
      padding: 0 2em;

      @media screen and (max-width: 1024px) {
        width: 600px;
      }

      @media screen and (max-width: 960px) {
        width: 80%;
        text-align: center;
      }

      h3 {
        font-size: 2em;
        color: #242f51;
        margin: 0 0 0.5em;
      }

      span.section-description {
        display: block;
        color: #616368;
        margin: 0 0 3em;
      }
    }
  }
`;
