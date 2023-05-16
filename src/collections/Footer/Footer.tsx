import * as S from "./elements";
import {
  FooterContainer,
  FooterCopyright,
  FooterImageContainer,
  FooterLegTitle,
  FooterLogo,
  FooterLogoContainer,
  FooterLogoSimpleContainer,
  FooterMenuLegContainer,
  FooterMenuNav,
  FooterMenuNavContainer,
  FooterNavTitle,
  FooterTitle
} from "./elements";
import Link from "next/link";
import Image from "next/dist/client/image";
import { Navigation } from "../Navigation";
import { Card } from "../Card";

export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({ navigation, ...props }, { legal, ...rest }) => {
  return (
    <S.Footer {...props}>
      <FooterContainer>
        <FooterLogoContainer>
          <FooterLogoSimpleContainer>
            <FooterImageContainer>
              <FooterLogo>
                <Image src='/imgs/logo.webp' alt='logo image' width='221' height='29' />
              </FooterLogo>
            </FooterImageContainer>
            <FooterTitle>
              Boost your campaign performance with over 25% by fixing your campaign data
            </FooterTitle>
          </FooterLogoSimpleContainer>
        </FooterLogoContainer>
        <FooterMenuNav>
          <FooterMenuNavContainer>
            <FooterNavTitle>Navigation</FooterNavTitle>
            {navigation.map(i => (
              <Navigation id={i.id} title={i.title} link={i.link} />
            ))}
          </FooterMenuNavContainer>
          <FooterMenuLegContainer>
            <FooterLegTitle>Legal</FooterLegTitle>
            {navigation.map(i => (
              <Navigation id={i.id} title={i.title} link={i.link} />
            ))}
          </FooterMenuLegContainer>
        </FooterMenuNav>
      </FooterContainer>
      <FooterCopyright>
        © 2022, CampaignMeister is a product of <Link href='#'>Human Data Associates</Link>
      </FooterCopyright>
    </S.Footer>
  );
};
