import styled from "styled-components";

interface ButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "")};
  background-color: ${(props) => (props.background ? props.background : "")};

  &:hover {
    color: #eeeeee;
  }

  &:active {
    color: #aaaaaa;
  }
`;
