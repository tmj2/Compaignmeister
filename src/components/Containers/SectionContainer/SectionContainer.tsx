import * as S from "./elements";
import { StyledSectionContainer } from "./elements";

//export interface SectionContainerProps extends HTMLSectionProps {
//  myprop?: string;
//}

//export const SectionContainer = ({ myprop, ...props }: SectionContainerProps) => {
// return <S.Section {...props} />;
//};
export const SectionContainer = ({ ...props }) => {
  return <StyledSectionContainer {...props} />;
};
