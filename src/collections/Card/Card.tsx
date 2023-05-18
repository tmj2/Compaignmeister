import * as S from "./elements";
import Image from "next/image";

export const Card = ({ id, title, content, image, ...props }) => {
  return (
    <S.StyledCardContainer>
      <S.StyledCardImageContainer>
        <Image src={image.src} alt='icon image' width={image.width} height={image.height} />
      </S.StyledCardImageContainer>

      <S.StyledCardContentContainer>
        <S.StyledCardTitle>{title}</S.StyledCardTitle>
        <S.StyledCardContent>{content}</S.StyledCardContent>
      </S.StyledCardContentContainer>
    </S.StyledCardContainer>
  );
};
