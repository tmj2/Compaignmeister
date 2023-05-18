import * as S from "./elements";
import Link from "next/link";
import Image from "next/dist/client/image";
import { Navigation } from "../Navigation";

export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({ navigation, ...props }, { legal, ...rest }) => {
  return (
    <S.Footer {...props}>
      <S.FooterContainer>
        <S.FooterLogoContainer>
          <S.FooterLogoSimpleContainer>
            <S.FooterImageContainer>
              <S.FooterLogo>
                <Image src='/imgs/logo.webp' alt='logo image' width='221' height='29' />
              </S.FooterLogo>
            </S.FooterImageContainer>
            <S.FooterTitle>
              Boost your campaign performance with over 25% by fixing your campaign data
            </S.FooterTitle>
          </S.FooterLogoSimpleContainer>
        </S.FooterLogoContainer>
        <S.FooterMenuNav>
          <S.FooterMenuNavContainer>
            <S.FooterNavTitle>Navigation</S.FooterNavTitle>
            {navigation.map(i => (
              <Navigation id={i.id} title={i.title} link={i.link} />
            ))}
          </S.FooterMenuNavContainer>
          <S.FooterMenuLegContainer>
            <S.FooterLegTitle>Legal</S.FooterLegTitle>
            {navigation.map(i => (
              <Navigation id={i.id} title={i.title} link={i.link} />
            ))}
          </S.FooterMenuLegContainer>
        </S.FooterMenuNav>
      </S.FooterContainer>
      <S.FooterCopyright>
        © 2022, CampaignMeister is a product of <Link href='#'>Human Data Associates</Link>
      </S.FooterCopyright>
    </S.Footer>
  );
};
