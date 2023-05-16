import styled from "styled-components";
import { Button, SectionContainer, H1, H2, Button as _Button } from "components";
import { theme } from "../../styles";
import { prop } from "dom7";

export const StyledHeroContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: row;
  //max-width: 100%;
  margin-top: 3rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const StyledGetStartedBtn = styled(props => (
  <Button {...props} variant='contained' color='main' />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled(props => <H1 {...props} />)`
  color: ${theme.colors.yellow};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 3.5rem;
  line-height: 48px;
`;

export const StyledDescription = styled(props => <p {...props} />)`
  margin-bottom: 3.5rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 38px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: ${theme.colors.white};
  font-family: "Barlow", Arial, sans-serif;
  margin-right: 5rem;
  width: 544px;
  z-index: 20;
  display: flex;
  flex-direction: column;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  position: relative;
`;

export const Span = styled(({ ...props }) => <span {...props} />)`
  color: ${theme.colors.white};
`;

export const SpanImg = styled(({ ...props }) => <span {...props} />)`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
`;
export const ShaddowHeroImg = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  z-index: 0;
  transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(31, 63, 112, 0.8) 0%,
    rgba(28, 47, 76, 0) 100%
  );
  width: 700px;
  height: 700px;
  left: calc(50% - 350px);
`;
export const SpanContainer = styled(({ ...props }) => <span {...props} />)`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 71.9732% 0px 0px;
`;

export const HeroImage = styled(({ ...props }) => <img {...props} />)`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  vertical-align: middle;
`;
