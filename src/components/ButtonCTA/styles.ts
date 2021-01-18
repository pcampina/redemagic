import styled from 'styled-components';

interface IButtonProps {
  bgcolor?: string;
}

export const Button = styled.a<IButtonProps>`
  cursor: pointer;
  background: ${(props) => (props.bgcolor ? props.bgcolor : 'transparent')};
  border: 0;
  padding: 0.6em 1.4em;
  border-radius: 50px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-weight: 700;
    color: ${(props) => (props.color ? props.color : 'white')};
  }
`;
