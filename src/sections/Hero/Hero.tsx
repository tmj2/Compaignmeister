import {
  StyledHeroContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  Span,
  SpanImg,
  ShaddowHeroImg,
  SpanContainer,
  HeroImage
} from "./elements";
//import { HelloForm } from "../../collections";
import Image from "next/image";

export const Hero = ({ ...props }) => {
  return (
    <StyledHeroContainer>
      <StyledTextContainer>
        <StyledTitle>
          <Span>The ugly truth:</Span> over 25% of your campaign potential is not being cashed.
        </StyledTitle>
        <StyledDescription>
          CampaignMeister is the first outcomes-driven campaign optimisation and experimentation
          platform that allows you to achieve your campaign goals against the lowest costs.
          <br />
          <br />
          We provide you and your teams with actionable insights to optimise your campaigns before,
          during and after its runtime across all channels, brands and countries.
        </StyledDescription>
      </StyledTextContainer>
      <StyledImageContainer>
        <ShaddowHeroImg></ShaddowHeroImg>
        <SpanImg>
          <SpanContainer></SpanContainer>
          <HeroImage src='/imgs/heroImage.webp' width='1495' height='1076' alt='hero image' />
        </SpanImg>
      </StyledImageContainer>
    </StyledHeroContainer>
  );
};
