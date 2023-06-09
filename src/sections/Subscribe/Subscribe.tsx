import {
  StyledSubscribeContainer,
  StyledTextContainer,
  StyledTitle,
  Span,
  StyledImageSubscribeContainer,
  SpanImgSubscribe,
  SubscribeImage
} from "./elements";

export const Subscribe = ({ ...props }) => {
  return (
    <StyledSubscribeContainer>
      <StyledTextContainer>
        <StyledTitle>
          <Span>Start </Span>optimising <Span>now</Span>
        </StyledTitle>

        <StyledImageSubscribeContainer>
          <SpanImgSubscribe>
            <SubscribeImage src='/imgs/lines.webp' width='88' height='373' alt='subscribe image' />
          </SpanImgSubscribe>
        </StyledImageSubscribeContainer>
      </StyledTextContainer>
    </StyledSubscribeContainer>
  );
};
