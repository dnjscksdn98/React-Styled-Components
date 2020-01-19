import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

// separate the color styles from the main style
const colorStyles = css`
  /* color */
  /* polished library */
  ${({ theme, color }) => {
    const selectedColor = theme.palette[color];
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

// styled-component : it's possible to put an element inside an element and '&' like sass
const StyledButton = styled.button`
  /* common style */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* size */
  height: 2.25rem;
  font-size: 1rem;

  /* color */
  /* bring colorStyles function */
  ${colorStyles}

  /* others */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue"
};

export default Button;
