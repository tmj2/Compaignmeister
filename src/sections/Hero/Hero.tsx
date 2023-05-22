import * as S from "./elements";
//import { HelloForm } from "../../collections";
import Image from "next/image";
import { ContactForm } from "../../collections";

export const Hero = ({ ...props }) => {
  return (
    <S.StyledHeroContainer>
      <S.StyledTextContainer>
        <S.StyledTitle>
          <S.Span>The ugly truth:</S.Span> over 25% of your campaign potential is not being cashed.
        </S.StyledTitle>
        <S.StyledDescription>
          CampaignMeister is the first outcomes-driven campaign optimisation and experimentation
          platform that allows you to achieve your campaign goals against the lowest costs.
          <br />
          <br />
          We provide you and your teams with actionable insights to optimise your campaigns before,
          during and after its runtime across all channels, brands and countries.
        </S.StyledDescription>
        <S.StyledFormContainer>
          <ContactForm />
        </S.StyledFormContainer>
      </S.StyledTextContainer>
      <S.StyledImageContainer>
        <S.ShaddowHeroImg></S.ShaddowHeroImg>
        <S.SpanImg>
          <S.SpanContainer></S.SpanContainer>
          <S.HeroImage src='/imgs/heroImage.webp' width='1495' height='1076' alt='hero image' />
        </S.SpanImg>
      </S.StyledImageContainer>
    </S.StyledHeroContainer>
  );
};
