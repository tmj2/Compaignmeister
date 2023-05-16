import Image from "next/image";
import { SpanText, StyledStepsContainer } from "./elements";
import { StyledTitleStepsContainer, StyledContainer, StyledStepsTitle } from "./elements";

import { Steps } from "../../collections/Steps";

import { StyledCardsContainer } from "../Campaign/elements";

export const ThreeSteps = ({ steps, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitleStepsContainer>
        <StyledStepsTitle>
          It only takes <SpanText> three easy steps </SpanText> to start optimising
        </StyledStepsTitle>
      </StyledTitleStepsContainer>
      <StyledStepsContainer {...props}>
        {steps.map(i => (
          <Steps
            id={i.id}
            image={i.image}
            title={i.title}
            subtitle={i.subtitle}
            content={i.content}
          />
        ))}
      </StyledStepsContainer>
    </StyledContainer>
  );
};
