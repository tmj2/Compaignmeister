import styled from "styled-components";
import { SectionContainer } from "components";
import { theme } from "styles";

export const StyledCardTitle = styled("h2")`
  line-height: 22.4px;
  color: ${theme.colors.yellow};
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 1.25rem;
`;

export const StyledCardContainer = styled("SectionContainer")`
  gap: 1.25rem;
  flex-direction: row;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 560px;
  min-width: 280px;
  display: flex;
  margin-bottom: 80px;
`;

export const StyledCardImageContainer = styled("div")`
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  display: flex;
  max-width: 89px;
  max-height: 80px;
`;

export const StyledCardContent = styled("p")`
  color: ${theme.colors.white};
  line-height: 22.4px;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledCardContentContainer = styled("div")`
  flex-direction: column;
  width: 100%;
  display: flex;
`;
