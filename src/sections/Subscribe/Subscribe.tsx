import * as S from "./elements";

export const Subscribe = ({ ...props }) => {
  return (
    <S.StyledSubscribeContainer>
      <S.StyledTextContainer>
        <S.StyledTitle>
          <S.Span>Start </S.Span>optimising <S.Span>now</S.Span>
        </S.StyledTitle>

        <S.StyledImageSubscribeContainer>
          <S.SpanImgSubscribe>
            <S.SubscribeImage
              src='/imgs/lines.webp'
              width='88'
              height='373'
              alt='subscribe image'
            />
          </S.SpanImgSubscribe>
        </S.StyledImageSubscribeContainer>
      </S.StyledTextContainer>
    </S.StyledSubscribeContainer>
  );
};
