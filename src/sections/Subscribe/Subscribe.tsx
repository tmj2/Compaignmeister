import {
  StyledSubscribeContainer,
  StyledTextContainer,
  StyledTitle,
  Span,
  StyledImageSubscribeContainer,
  SpanImgSubscribe,
  SubscribeImage
} from "./elements";
import { HelloForm } from "../../collections";
import Image from "next/image";

export const Subscribe = ({ ...props }) => {
  return (
    <StyledSubscribeContainer>
      <StyledTextContainer>
        <StyledTitle>
          <Span>Start </Span>optimising <Span>now</Span>
        </StyledTitle>
        <HelloForm />
        <StyledImageSubscribeContainer>
          <SpanImgSubscribe>
            <SubscribeImage src='/imgs/lines.webp' alt='subscribe image' width='88' height='373' />
          </SpanImgSubscribe>
        </StyledImageSubscribeContainer>
      </StyledTextContainer>
    </StyledSubscribeContainer>
  );
};
