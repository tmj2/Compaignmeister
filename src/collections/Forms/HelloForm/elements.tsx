import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormInput as _FormInput,
  FormInputProps,
  FormTextArea as _FormTextArea,
  FormTextAreaProps,
  FormCheckbox as _FormCheckbox,
  FormCheckboxProps
} from "components";
import { theme } from "styles";
import { HelloRequest } from "pages/api/hello";

export const Form = styled("form")`
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
`;

export const FormInput = styled(_FormInput<HelloRequest["body"]>)`
  line-height: 19px;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 51px;
  margin-bottom: 1rem;
`;

export const FormTextArea = styled(_FormTextArea<HelloRequest["body"]>)``;

export const FormCheckbox = styled(_FormCheckbox<HelloRequest["body"]>)`
  line-height: 17px;
  font-size: 12px;
  align-self: center;
  color: ${theme.colors.white};
`;

export const HeaderText = styled("span")`
  font-family: "Barlow", Arial, sans-serif;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 0.4em;
  margin-top: 18px;
  text-transform: uppercase;
`;

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

export const Description = styled("p")`
  font-family: "Barlow", Arial, sans-serif;
  font-size: 1.1em;
  margin-bottom: 1.5em;
`;

export const Actions = styled("div")``;

export const InputWrapper = styled("input")`
  opacity: 70%;
  background-color: ${theme.colors.white};
  line-height: 19px;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 51px;
  margin-bottom: 1rem;

  ::-webkit-input-placeholder {
    color: #7184ab;
    font-size: 16px;
  }
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

export const ErrorMessage = styled("span")`
  color: ${theme.colors.vividRed};
  font-size: 14px;
  margin-left: 10px;
  font-weight: 700;
`;

export const FormError = styled("h2")`
  color: ${theme.colors.bg};
  margin: 2em 0.5em 1em;
  padding: 0.2em 1em;
  border: 2px solid #ffb900;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
`;

export const StyledInputContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
`;
// export {};
