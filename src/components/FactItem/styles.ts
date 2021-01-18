import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  img {
    width: 80px;
    height: 80px;

    @media screen and (max-width: 960px) {
      margin-bottom: 1em;
    }
  }

  div {
    margin-left: 2em;

    @media screen and (max-width: 960px) {
      margin-left: 0;
    }

    p {
      color: #616368;
      text-transform: justify;
    }
  }
`;

export const Span = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5em;
  color: ${(props) => (props.color ? props.color : 'grey')};
`;
