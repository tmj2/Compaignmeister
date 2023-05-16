import styled from "styled-components";

import { SectionContainer, CustomLink, CustomParagraph } from "components";
import { theme } from "../../styles";
import { Navigation } from "./Navigation";

export const StyledNavigationTitle = styled(({ ...props }) => <h2 {...props} />)``;

export const StyledNavigationContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))``;

export const StyledNavigationContent = styled(({ ...props }) => <p {...props} />)`
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

export const StyledNavigationContentContainer = styled(({ ...props }) => <div {...props} />)``;
