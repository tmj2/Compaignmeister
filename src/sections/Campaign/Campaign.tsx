import Image from "next/image";
import {
  SpanText,
  StyledCardsContainer,
  StyledTitleCampaignContainer,
  StyledContainer,
  StyledCampaignTitle
} from "./elements";

import { Card } from "../../collections/Card";

export const Campaign = ({ cards, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitleCampaignContainer>
        <StyledCampaignTitle>
          CampaignMeisters <SpanText>building blocks </SpanText>for campaign optimisation
        </StyledCampaignTitle>
      </StyledTitleCampaignContainer>

      <StyledCardsContainer {...props}>
        {cards.map(i => (
          <Card id={i.id} image={i.image} title={i.title} content={i.content} />
        ))}
      </StyledCardsContainer>
    </StyledContainer>
  );
};
