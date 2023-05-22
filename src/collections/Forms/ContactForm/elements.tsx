import styled, { css } from "styled-components";
import { FormInput, FormCheckbox, Button as _Button } from "components";
import { ContactFormValues } from "schemas";
import { theme } from "styles";

export const Form = styled("form")(
  ({ theme: { colors } }) => css`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    padding: 1.5rem;
    border-radius: 1rem;
    position: relative;
    background-color: ${theme.colors.primary};
    z-index: 10;

    @media (max-width: 991px) {
      flex-direction: column;
      max-width: 100%;
      margin-left: 0;
      margin-top: 4rem;
      padding: 18px 20px;
    }
  `
);

export const Title = styled("h2")`
  font-family: "Barlow", Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const SpanTitle = styled("span")`
  color: ${theme.colors.yellow};
  font-family: "Barlow", Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Button = styled(_Button)`
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.primary};
  line-height: 19px;
  height: 51px;
  margin-left: 1.25rem;

  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

export const StyledInputContainer = styled("div")`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
`;

export const TextInput = styled(FormInput)(
  ({ theme: { colors } }) => css`
    opacity: 70%;
    background-color: ${theme.colors.white};
    line-height: 19px;
    font-weight: 500;
    //padding: 1rem;
    border-radius: 0.25rem;
    width: 100%;
    height: 51px;
    margin-bottom: 1rem;

    ::-webkit-input-placeholder {
      color: #7184ab;
      font-size: 16px;
    }
  `
) as typeof FormInput;

export const Checkbox = styled(FormCheckbox)(
  ({ theme: { colors } }) => css`
    line-height: 17px;
    font-size: 12px;
    align-self: center;
    color: ${theme.colors.white};
  `
) as typeof FormCheckbox;
