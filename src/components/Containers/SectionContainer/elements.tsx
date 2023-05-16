import styled, { css } from "styled-components";

export const Section = styled("section")(
  ({ theme: { colors } }) => css`
    display: flex;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  `
);

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => (
  <div {...props} />
))`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
