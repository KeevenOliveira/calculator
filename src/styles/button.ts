import styled from "styled-components";

interface ButtonProps {
  color?: string;
  bakgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "")};
  background-color: ${(props) =>
    props.bakgroundColor ? props.bakgroundColor : ""};

  &:hover {
    color: #eeeeee;
  }

  &:active {
    color: #aaaaaa;
  }
`;
