import * as S from "./elements";
import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { helloSchema } from "schemas";
import type { HelloRequest, HelloResponse } from "pages/api/hello";
import { useZodForm } from "hooks";
import { InputWrapper, SpanTitle, StyledInputContainer } from "./elements";

export interface HelloFormProps extends HTMLFormProps {}

export const HelloForm = ({ ...props }: HelloFormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useZodForm(helloSchema, { agreeToTOS: true });

  const submitHandler = handleSubmit(async ({ userName, agreeToTOS }) => {
    try {
      const response = await axios.post<
        HelloResponse,
        AxiosResponse<HelloResponse>,
        HelloRequest["body"]
      >("/api/hello", { userName, agreeToTOS });

      setSuccessfulSubmit(true);
      setMessage(response.data.message);
    } catch (error: any) {
      const axiosError = error as AxiosError<any>;
      setError(axiosError.response?.data.error || error.message);
      console.warn(axiosError.response?.data.error || error.message);
    }
  });

  return (
    <S.Form {...props} onSubmit={submitHandler}>
      {successfulSubmit ? (
        <S.Title>{message}</S.Title>
      ) : (
        <>
          <S.Title>
            <SpanTitle>Join </SpanTitle>for more information and access
          </S.Title>
          <StyledInputContainer>
            <S.InputWrapper placeholder={"Enter email"} control={} name='email' />
            <S.Actions>
              <S.Button variant='primary' type='submit'>
                Join
              </S.Button>
              {error && <S.FormError>{error}</S.FormError>}
            </S.Actions>
          </StyledInputContainer>
          <S.FormCheckbox
            label={"\n" + "I agree to the Terms & Conditions and the Privacy Policy"}
            control={control}
            name='agreeToTOS'
          />
          <S.FormCheckbox
            label={"I want to subscribe to the newsletter"}
            control={control}
            name='agreeToNewsletter'
          />
        </>
      )}
    </S.Form>
  );
};

// export {};
