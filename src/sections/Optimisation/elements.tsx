import styled from "styled-components";
import { SectionContainer, H1, H2 } from "components";
import { theme } from "styles";
import { prop } from "dom7";
import Image from "next/dist/client/image";

export const StyledOptimisationSectionContainer = styled("SectionContainer")`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const StyledOptimisationContainer = styled("div")`
  line-height: 2.25rem;
  text-align: center;
  padding: 2.5rem;
  background-color: ${theme.colors.primary};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const StyledOptimisationContentContainer = styled("div")`
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
  background-color: ${theme.colors.primary};

  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media (min-width: 768px) {
    padding-top: 40px;
  }
  @media (min-width: 768px) {
    padding-left: 69px;
    padding-right: 69px;
  }
`;

export const StyledOptimisationCardContainer = styled("div")`
  gap: 2.5rem;
  justify-content: space-between;
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledOptimisationTitle = styled("H1")`
  color: ${theme.colors.yellow};
  font-size: 32px;
  font-weight: 500;
`;

export const StyledOptimisationTitleContainer = styled("div")`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 3.5rem;
  line-height: 48px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const StyledOptimisationLearningText = styled("div")`
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledOptimisationStartText = styled("div")`
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  @media (min-width: 768px) {
    max-width: 280px;
  }
`;

export const StyledOptimisationLearningTitle = styled("H2")`
  color: ${theme.colors.yellow};
  line-height: 34px;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 1.25rem;
`;

export const StyledOptimisationLearningDescription = styled("p")`
  color: ${theme.colors.white};
  line-height: 22.4px;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledOptimisationLearningContainer = styled("div")`
  gap: 1.25rem;
  flex-direction: column;
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    max-width: 280px;
    .order-4 {
      order: 2;
    }
  }
`;

export const StyledOptimisationStartContainer = styled("div")`
  gap: 2.5rem;
  display: flex;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: column;
    .order-2 {
      order: 3;
    }
  }
`;

export const StyledOptimisationFlightContainer = styled("div")`
  gap: 1.25rem;
  flex-direction: column;
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    max-width: 280px;
    .order-3 {
      order: 4;
    }
  }
`;

export const StyledOptimisationImageContainer = styled("div")`
  display: flex;

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;

export const Span = styled("span")`
  box-sizing: border-box;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

export const SpanText = styled(({ ...props }) => <span {...props} />)`
  export const StyledTextContainer = styled("span")\`
  color: ${theme.colors.white};
  border: 0px;
  margin: 0px;
  padding: 0px;
`;

export const SpanContainer = styled(({ ...props }) => <span {...props} />)`
  export const StyledTextContainer = styled("span")\`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
`;

export const OptimisationImage = styled(({ ...props }) => <Image {...props} />)`
  export const StyledTextContainer = styled("Image")\`
  display: block;
  max-width: 100%;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
`;
