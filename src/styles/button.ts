import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "")};

  &:hover {
    color: #eeeeee;
  }

  &:active {
    color: #aaaaaa;
  }
`;
