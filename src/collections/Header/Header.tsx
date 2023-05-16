import * as S from "./elements";
import { StyledCardContentContainer, StyledCardImageContainer } from "../Card/elements";
import Link from "next/link";
import Image from "next/image";
import { StyledLogoContainer } from "./elements";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <StyledLogoContainer>
        <Link href='#'>
          <Image src='/imgs/logo.webp' alt='logo image' width='221' height='29' />
        </Link>
        <S.Button variant='primary' type='submit' classname='ml-auto'>
          Login
        </S.Button>
      </StyledLogoContainer>
    </S.Header>
  );
};
