import styled from "styled-components";
import { SectionContainer } from "components";
import { theme } from "../../styles";

export const StyledStepsTitle = styled("div")`
  line-height: 22.4px;
  color: ${theme.colors.yellow};
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`;

export const StyledStepsSubTitle = styled("h3")`
  line-height: 22.4px;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`;

export const StyledStepsContainer = styled("SectionContainer")`
  background-color: ${theme.colors.primary};
  width: 33.3%;
  padding: 60px;
  margin-right: 2px;
  margin-top: 2px;
  margin-bottom: 0;
  margin-left: 0;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  z-index: 0;

  @media (min-width: 768px) {
    :first-child {
      border-bottom-left-radius: 1rem;
    }
  }
  @media (min-width: 768px) {
    :last-child {
      border-bottom-right-radius: 1rem;
    }
  }
`;

export const StyledStepsImageContainer = styled("div")`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  display: flex;
`;

export const StyledStepsContent = styled("p")`
  color: ${theme.colors.white};
  line-height: 22.4px;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledStepsContentContainer = styled("div")`
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  display: flex;
`;

export const StyledStepsPointsContainer = styled("div")`
  background-color: ${theme.colors.bg};
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
`;

export const Point = styled("p")`
  color: ${theme.colors.yellow};
  font-weight: 700;
  text-align: center;
`;
