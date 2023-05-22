import * as S from "./elements";
import { Card } from "collections";

export const Campaign = ({ cards, ...props }) => {
  return (
    <S.StyledContainer {...props}>
      <S.StyledTitleCampaignContainer>
        <S.StyledCampaignTitle>
          CampaignMeisters <S.SpanText>building blocks </S.SpanText>for campaign optimisation
        </S.StyledCampaignTitle>
      </S.StyledTitleCampaignContainer>

      <S.StyledCardsContainer {...props}>
        {cards.map(i => (
          <Card id={i.id} image={i.image} title={i.title} content={i.content} />
        ))}
      </S.StyledCardsContainer>
    </S.StyledContainer>
  );
};
