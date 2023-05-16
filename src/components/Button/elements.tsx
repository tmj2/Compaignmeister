import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    font-family: "Barlow", Arial, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1.1em 2.5em;
    transition: opacity 300ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 2px solid #173158;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    padding: 0.9em 2em;
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: color 500ms ease, background-color 500ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.bg};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `
};

export const Button = styled("button")<ButtonProps>`
  font-family: "Barlow", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  outline: none;
  border-radius: 0.25rem;
  border-width: 2px;
  border-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  height: 51px;

  ${({ variant }) => buttonStyles[variant!]}
`;
