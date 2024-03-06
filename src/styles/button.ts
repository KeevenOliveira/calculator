import styled from "styled-components";

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};

  &:hover {
    color: #eeeeee;
  }

  &:active {
    color: #aaaaaa;
  }
`;
