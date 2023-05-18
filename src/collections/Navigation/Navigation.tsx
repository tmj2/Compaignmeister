import * as S from "./elements";
import Link from "next/link";

export const Navigation = ({ id, title, link, ...props }) => {
  return (
    <S.StyledNavigationContainer>
      <S.StyledNavigationContentContainer>
        <S.StyledNavigationContent>
          <Link href={link}>{title}</Link>
        </S.StyledNavigationContent>
      </S.StyledNavigationContentContainer>
    </S.StyledNavigationContainer>
  );
};
