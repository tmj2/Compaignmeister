import * as S from "./elements";
import Link from "next/link";
import Image from "next/dist/client/image";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <S.StyledLogoContainer>
        <Link href='#'>
          <Image src='/imgs/logo.webp' alt='logo image' width='221' height='29' />
        </Link>
        <S.Button variant='primary' type='submit'>
          Login
        </S.Button>
      </S.StyledLogoContainer>
    </S.Header>
  );
};
