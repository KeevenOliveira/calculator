import styled from "styled-components";

interface ButtonProps {
  color?: string;
  $background?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "#FFFF")};
  background-color: ${(props) => props.$background};
  &:hover {
    color: #d1d1d1;
  }

  &:active {
    color: #aaaaaa;
  }
`;
