import styled from "styled-components";
import type { HeaderProps } from "./Header";
import { Button as _Button } from "../../components";
import { theme } from "../../styles";

export const Header = styled("header")<HeaderProps>`
  position: sticky;
`;

export const Button = styled(_Button)`
  margin-left: auto;
`;

export const StyledLogoContainer = styled(({ ...props }) => <div {...props} />)`
  font-family: "Barlow", Arial, sans-serif;
  display: flex;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${theme.colors.bg};
  border-bottom: 2px solid #6b9cff36;
  height: 98px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  @media (max-width: 1024px) {
    & img {
      max-width: 50px;
      max-height: 50px;
    }

    flex-basis: 25%;
  }
`;
