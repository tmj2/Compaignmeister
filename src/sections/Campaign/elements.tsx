import styled from "styled-components";
import { CustomLink, H1, H2, H3, H4, H6, Paragraph, SectionContainer } from "components";
import { theme } from "../../styles";

export const StyledContainer = styled(({ ...props }) => <SectionContainer {...props} />)`
  // max-width: 1440px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-bottom: 5rem;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const StyledCampaignTitle = styled(props => <H1 {...props} />)`
  color: ${theme.colors.white};
  line-height: 38.4px;
  font-weight: 500;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const SpanText = styled(({ ...props }) => <span {...props} />)`
  color: ${theme.colors.yellow};
  border: 0px;
  margin: 0px;
  padding: 0px;
`;

export const StyledTitleCampaignContainer = styled(({ ...props }) => <div {...props} />)`
  line-height: 2.25rem;
  text-align: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background-color: ${theme.colors.primary};

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  margin-top: 2px;
  background-color: ${theme.colors.primary};

  @media (min-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 60px;
    padding-right: 60px;
    flex-direction: row;
  }
}
`;
