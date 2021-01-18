import styled from 'styled-components';

import bgAppImage from '../../assets/images/bg-mobile-app.svg';
import bgAppImageLeft from '../../assets/images/bg-mobile-app-left.svg';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgAppImage}) no-repeat;
  background-size: cover;
  background-position: bottom center;

  .container {
    justify-content: space-between;
    align-items: center;
    background: url(${bgAppImageLeft}) no-repeat;
    background-position-x: -110px;
    background-size: 600px;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }

    .press-app--content {
      padding-left: 4em;

      @media screen and (max-width: 1024px) {
        padding-left: 2em;
      }

      @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
      }

      .editors-choice {
        background: #e2eaed;
        display: flex;
        border-radius: 50px;
        width: fit-content;

        span:first-child {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #feaa25;
          width: 28px;
          height: 28px;
          border-radius: 100%;
          color: white;

          svg {
            padding: 0.2em;
            fill: white;
          }
        }

        span:last-child {
          color: #242f51;
          padding: 0 2em 0 0.5em;

          @media screen and (max-width: 400px) {
            font-size: 0.9em;
            padding: 0.1em 0.5em 0 0.5em;
          }
        }
      }

      h2 {
        font-size: 3em;
        color: #242f51;
        margin: 0.3em 0;
        padding: 0;
        line-height: 1.5em;

        @media screen and (max-width: 960px) {
          text-align: center;
        }

        @media screen and (max-width: 460px) {
          font-size: 2.4em;
        }
      }

      p {
        color: #616368;
        margin: 0 0 1.8em;

        @media screen and (max-width: 960px) {
          text-align: center;
        }
      }
    }

    div.press-app--image {
      max-width: 500px;
      width: 100%;

      .alice-carousel {
        ul.alice-carousel__stage {
          li.alice-carousel__stage-item {
            img {
              margin: 0 auto;
              display: block;
              height: 700px;

              @media screen and (max-width: 1024px) {
                height: 600px;
                float: right;
              }

              @media screen and (max-width: 960px) {
                margin: 0 auto;
                float: none;
              }
            }
          }
        }
      }
    }
  }
`;
