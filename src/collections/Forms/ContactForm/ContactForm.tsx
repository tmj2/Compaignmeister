import * as S from "./elements";
import { useZodForm } from "hooks";
import { contactFormSchema } from "schemas";

export interface ContactFormProps extends HTMLFormProps {}

export const ContactForm = ({ ...props }: ContactFormProps) => {
  const { control, handleSubmit } = useZodForm(contactFormSchema);
  return (
    <S.Form {...props}>
      <S.Title>
        <S.SpanTitle>Join </S.SpanTitle>for more information and access
      </S.Title>

      <S.StyledInputContainer>
        <S.TextInput placeholder={"Enter email"} control={control} name='email' />
      </S.StyledInputContainer>
      <S.Button variant='primary' type='submit'>
        Join
      </S.Button>
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
