import * as S from "./elements";
import { useZodForm } from "hooks";
import { contactFormSchema } from "schemas";

export interface ContactFormProps extends HTMLFormProps {}

export const ContactForm = ({ ...props }: ContactFormProps) => {
  const { control, handleSubmit } = useZodForm(contactFormSchema);
  return (
    <S.Form {...props}>
      <S.TextInput control={control} name='email' />
      <S.Checkbox control={control} name='agreeToTOS' />
      <S.Checkbox control={control} name='newsletter' />
    </S.Form>
  );
};
