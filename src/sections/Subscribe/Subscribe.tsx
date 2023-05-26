import * as S from "./elements";
import { ContactForm } from "collections";

export const Subscribe = ({ ...props }) => {
  return (
    <S.StyledSubscribeContainer>
      <S.StyledTitle>
        <S.Span>Start </S.Span>optimising <S.Span>now</S.Span>
      </S.StyledTitle>
      <S.StyledFormContainer>
        <ContactForm />
      </S.StyledFormContainer>
      <S.StyledImageSubscribeContainer>
        <S.SpanImgSubscribe>
          <S.SubscribeImage src='/imgs/lines.webp' width='88' height='373' alt='subscribe image' />
        </S.SpanImgSubscribe>
      </S.StyledImageSubscribeContainer>
    </S.StyledSubscribeContainer>
  );
};
