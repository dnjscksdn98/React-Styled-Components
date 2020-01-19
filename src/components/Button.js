import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

// separate the color styles from the main style
const colorStyle = css`
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
      ${props =>
        props.outline &&
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `}
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

const sizeStyle = css`
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

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
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

  /* others */
  & + & {
    margin-left: 1rem;
  }

  /* bring Styles function */
  ${colorStyle}
  ${sizeStyle}
  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium"
};

export default Button;
