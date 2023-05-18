import * as S from "./elements";

export const ThreeSteps = ({ steps, ...props }) => {
  return (
    <S.StyledContainer {...props}>
      <S.StyledTitleStepsContainer>
        <S.StyledStepsTitle>
          It only takes <S.SpanText> three easy steps </S.SpanText> to start optimising
        </S.StyledStepsTitle>
      </S.StyledTitleStepsContainer>
      <S.StyledStepsContainer {...props}>
        {steps.map(i => (
          <S.Steps
            id={i.id}
            image={i.image}
            title={i.title}
            subtitle={i.subtitle}
            content={i.content}
          />
        ))}
      </S.StyledStepsContainer>
    </S.StyledContainer>
  );
};
