import styled from "styled-components";
import { theme } from "styles";

export const StyledNavigationContent = styled("p")`
  line-height: 17px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  color: #7184ab;
  margin-bottom: 17px;

  :hover {
    color: ${theme.colors.yellow};
  }
`;
