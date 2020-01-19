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

// create a size object to delete repeated lines
const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem"
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem"
  }
};

const sizeStyles = css`
  /* size */
  /* ${props => {
    props.size === "large" &&
      css`
        height: 3rem;
        font-size: 1.25rem;
      `;
  }}
  ${props => {
    props.size === "medium" &&
      css`
        height: 2.25rem;
        font-size: 1rem;
      `;
  }}
  ${props => {
    props.size === "small" &&
      css`
        height: 1.75rem;
        font-size: 0.875rem;
      `;
  }} */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
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

  /* bring Styles function */
  ${colorStyles}
  ${sizeStyles}

  /* others */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium"
};

export default Button;
