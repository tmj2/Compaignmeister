import styled, { css } from "styled-components";
import { FormInput, FormCheckbox } from "components";
import { ContactFormValues } from "schemas";

export const Form = styled("form")(({ theme: { colors } }) => css``);

export const TextInput = styled(FormInput)(({ theme: { colors } }) => css``) as typeof FormInput;

export const Checkbox = styled(FormCheckbox)(({ theme: { colors } }) => css``) as typeof FormCheckbox;
