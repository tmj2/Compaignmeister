import styled from "styled-components";
import { FooterProps } from "./Footer";
import { theme } from "../../styles";

export const Footer = styled("footer")<FooterProps>`
  padding: 2.5rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.footer};
  flex-direction: column;
  width: 100%;
  display: flex;

  @media (min-width: 1024px) {
    padding-right: 8rem;
  }
`;
export const FooterContainer = styled(({ ...props }) => <div {...props} />)`
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLogoContainer = styled(({ ...props }) => <div {...props} />)`
  align-items: flex-start;
  display: flex;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FooterLogoSimpleContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const FooterMenuNavContainer = styled(({ ...props }) => <ul {...props} />)`
  flex-direction: column;
  display: flex;
  @media (min-width: 768px) {
    margin-right: 3rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const FooterMenuLegContainer = styled(({ ...props }) => <ul {...props} />)`
  flex-direction: column;
  display: flex;
`;
export const FooterMenuNav = styled(({ ...props }) => <nav {...props} />)`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FooterCopyright = styled(({ ...props }) => <p {...props} />)`
  line-height: 14.4px;
  font-weight: 500;
  font-size: 12px;

  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;
export const FooterImageContainer = styled(({ ...props }) => <div {...props} />)`
  border-right: 2px solid #6b9cff36;
  @media (min-width: 1024px) {
    padding-right: 5rem;
  }
  @media (min-width: 1024px) {
    border-bottom-width: 0;
  }
  @media (min-width: 1024px) {
    border-right-width: 2px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const FooterLogo = styled(({ ...props }) => <div {...props} />)`
  cursor: pointer;
`;

export const FooterTitle = styled(({ ...props }) => <h2 {...props} />)`
  line-height: 14.4px;
  font-weight: 500;
  font-size: 12px;
  @media (min-width: 1024px) {
    padding-left: 5rem;
  }
`;
export const FooterLegTitle = styled(({ ...props }) => <h3 {...props} />)`
  line-height: 24px;
  font-size: 20px;
  margin-bottom: 2rem;
  font-weight: 500;
`;
export const FooterNavTitle = styled(({ ...props }) => <h3 {...props} />)`
  line-height: 24px;
  font-size: 20px;
  margin-bottom: 2rem;
  font-weight: 500;
`;
