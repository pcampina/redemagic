import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  ul.main-menu {
    list-style: none;
    margin: 0 2em 0 auto;

    @media screen and (max-width: 600px) {
      margin: 1em 0;
    }

    li {
      display: inline-block;
      margin-right: 2em;

      &:last-child {
        margin-right: 0;
      }

      a {
        font-weight: 400;
        color: #242f51;

        &:hover {
          color: #fcae61;
        }
      }
    }
  }
`;
