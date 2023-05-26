import * as S from "./elements";
import { useZodForm } from "hooks";
import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { contactFormSchema } from "schemas";
import type { HelloRequest, HelloResponse } from "pages/api/hello";

export interface ContactFormProps extends HTMLFormProps {}

export const ContactForm = ({ ...props }: ContactFormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useZodForm(contactFormSchema, { agreeToTOS: true });

  const submitHandler = handleSubmit(async ({ email, agreeToTOS }) => {
    try {
      const response = await axios.post<
        HelloResponse,
        AxiosResponse<HelloResponse>,
        HelloRequest["body"]
      >("/api/hello", { email, agreeToTOS });

      setSuccessfulSubmit(true);
      setMessage(response.data.message);
    } catch (error: any) {
      const axiosError = error as AxiosError<any>;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  });

  return (
    <S.Form {...props}>
      <S.Title>
        <S.SpanTitle>Join </S.SpanTitle>for more information and access
      </S.Title>
      <S.StyledAction>
        <S.StyledInputContainer>
          <S.TextInput placeholder={"Enter email"} control={control} name='email' />
        </S.StyledInputContainer>
        <S.Button variant='primary' type='submit'>
          Join
        </S.Button>
      </S.StyledAction>
      <S.Checkbox
        label={"I agree to the Terms & Conditions and the Privacy Policy"}
        control={control}
        name='agreeToTOS'
      />
      <S.Checkbox
        label={"I want to subscribe to the newsletter"}
        control={control}
        name='newsletter'
      />
    </S.Form>
  );
};
