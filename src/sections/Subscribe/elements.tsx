import styled from "styled-components";
import { theme } from "styles";
import { prop } from "dom7";

export const StyledSubscribeContainer = styled("div")`
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
  //max-width: 100%;
  margin-top: 3rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const StyledTitle = styled("h2")`
  color: ${theme.colors.yellow};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 3.5rem;
  line-height: 48px;
  text-align: center;
  z-index: 10;
`;

export const StyledFormContainer = styled("div")`
  color: ${theme.colors.white};
  font-family: "Barlow", Arial, sans-serif;
  width: 501px;
  //padding: 1.25rem;
  border-radius: 1rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledImageSubscribeContainer = styled("div")`
  top: -164px;
  left: calc(50% - 44px);
  position: absolute;
  z-index: 0;
`;

export const Span = styled("span")`
  color: ${theme.colors.white};
`;

export const SpanImgSubscribe = styled("span")`
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

export const SubscribeImage = styled("img")`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  //min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
