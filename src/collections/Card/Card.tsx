import Image from "next/image";

import {
  StyledCardContentContainer,
  StyledCardImageContainer,
  StyledCardContainer,
  StyledCardTitle,
  StyledCardContent
} from "./elements";
import Link from "next/link";

export const Card = ({ id, title, content, image, ...props }) => {
  return (
    <StyledCardContainer>
      <StyledCardImageContainer>
        <Image src={image.src} alt='icon image' width={image.width} height={image.height} />
      </StyledCardImageContainer>

      <StyledCardContentContainer>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardContent>{content}</StyledCardContent>
      </StyledCardContentContainer>
    </StyledCardContainer>
  );
};
