import Image from "next/image";
import {
  StyledOptimisationContainer,
  StyledOptimisationTitle,
  StyledOptimisationContentContainer,
  StyledOptimisationImageContainer,
  Span,
  SpanText,
  StyledOptimisationSectionContainer,
  StyledOptimisationCardContainer,
  StyledOptimisationLearningContainer,
  StyledOptimisationStartContainer,
  StyledOptimisationFlightContainer,
  StyledOptimisationLearningText,
  StyledOptimisationLearningTitle,
  StyledOptimisationLearningDescription,
  StyledOptimisationStartText,
  SpanContainer,
  OptimisationImage
} from "./elements";
import { HeroImage } from "../Hero/elements";

export const Optimisation = ({ ...props }) => {
  return (
    <StyledOptimisationSectionContainer>
      <StyledOptimisationContainer>
        <StyledOptimisationTitle>
          <SpanText>
            Boost your campaign performance <br /> with our
          </SpanText>
          <Span> Smart Optimisation Engine</Span>
        </StyledOptimisationTitle>
      </StyledOptimisationContainer>
      <StyledOptimisationContentContainer>
        <StyledOptimisationCardContainer>
          <StyledOptimisationLearningContainer>
            <StyledOptimisationLearningText>
              <StyledOptimisationLearningTitle>Smart Learning</StyledOptimisationLearningTitle>
              <StyledOptimisationLearningDescription>
                Gain insights about your campaign incrementality by advanced experiments across
                multiple channels.
              </StyledOptimisationLearningDescription>
            </StyledOptimisationLearningText>
          </StyledOptimisationLearningContainer>
          <StyledOptimisationStartContainer>
            <StyledOptimisationStartText>
              <StyledOptimisationLearningTitle>Smart Start</StyledOptimisationLearningTitle>
              <StyledOptimisationLearningDescription>
                Predict your Campaign Success Probability to optimise campaigns upfront.
              </StyledOptimisationLearningDescription>
            </StyledOptimisationStartText>
            <StyledOptimisationImageContainer>
              <SpanContainer>
                <Span>
                  <OptimisationImage
                    src='/imgs/wheel.webp'
                    width='640'
                    height='639'
                    alt='optimisation image'
                  />
                </Span>
              </SpanContainer>
            </StyledOptimisationImageContainer>
          </StyledOptimisationStartContainer>
          <StyledOptimisationFlightContainer>
            <StyledOptimisationLearningText>
              <StyledOptimisationLearningTitle>Smart Flight</StyledOptimisationLearningTitle>
              <StyledOptimisationLearningDescription>
                Compare tactics across all channels in real-time and proceed with your winning ones.
              </StyledOptimisationLearningDescription>
            </StyledOptimisationLearningText>
          </StyledOptimisationFlightContainer>
        </StyledOptimisationCardContainer>
      </StyledOptimisationContentContainer>
    </StyledOptimisationSectionContainer>
  );
};
