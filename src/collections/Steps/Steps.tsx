import * as S from "./elements";
import Image from "next/image";

export const Steps = ({ id, title, subtitle, content, image, ...props }) => {
  return (
    <S.StyledStepsContainer>
      <S.StyledStepsImageContainer>
        <Image src={image.src} alt='icon image' width={image.width} height={image.height} />
      </S.StyledStepsImageContainer>
      <S.StyledStepsPointsContainer>
        <S.Point>{id}</S.Point>
      </S.StyledStepsPointsContainer>
      <S.StyledStepsContentContainer>
        <S.StyledStepsTitle>{title}</S.StyledStepsTitle>
        <S.StyledStepsSubTitle>{subtitle}</S.StyledStepsSubTitle>

        <S.StyledStepsContent>{content}</S.StyledStepsContent>
      </S.StyledStepsContentContainer>
    </S.StyledStepsContainer>
  );
};
