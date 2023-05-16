import Image from "next/image";

import {
  StyledStepsContentContainer,
  StyledStepsImageContainer,
  StyledStepsContainer,
  StyledStepsTitle,
  StyledStepsContent,
  StyledStepsPointsContainer,
  Point,
  StyledStepsSubTitle
} from "./elements";
import Link from "next/link";

export const Steps = ({ id, title, subtitle, content, image, ...props }) => {
  return (
    <StyledStepsContainer>
      <StyledStepsImageContainer>
        <Image src={image.src} alt='icon image' width={image.width} height={image.height} />
      </StyledStepsImageContainer>
      <StyledStepsPointsContainer>
        <Point>{id}</Point>
      </StyledStepsPointsContainer>
      <StyledStepsContentContainer>
        <StyledStepsTitle>{title}</StyledStepsTitle>
        <StyledStepsSubTitle>{subtitle}</StyledStepsSubTitle>

        <StyledStepsContent>{content}</StyledStepsContent>
      </StyledStepsContentContainer>
    </StyledStepsContainer>
  );
};
