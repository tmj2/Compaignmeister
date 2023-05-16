import {
  StyledNavigationContainer,
  StyledNavigationContentContainer,
  StyledNavigationContent
} from "./elements";
import Link from "next/link";
import { Card } from "../Card";

export const Navigation = ({ id, title, link, ...props }) => {
  return (
    <StyledNavigationContainer>
      <StyledNavigationContentContainer>
        <StyledNavigationContent>
          <Link href={link}>{title}</Link>
        </StyledNavigationContent>
      </StyledNavigationContentContainer>
    </StyledNavigationContainer>
  );
};
