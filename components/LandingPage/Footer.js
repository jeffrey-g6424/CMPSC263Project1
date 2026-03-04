import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} MoreFlicks
        </LeftContainer>
        <CenterContainer>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </CenterContainer>
        <RightContainer>
          <SocialIcon href="https://www.facebook.com/" aria-label="Facebook">FB</SocialIcon>
          <SocialIcon href="https://x.com/" aria-label="Twitter">TW</SocialIcon>
          <SocialIcon href="https://www.instagram.com/?hl=en" aria-label="Instagram">IG</SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #c99a6bff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const FooterContainer = styled.div`
`;

const LeftContainer = styled.div``;

const CenterContainer = styled.div``;

const RightContainer = styled.div`

`;

const Link = styled.a`

`;

const SocialIcon = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #ffffff;
  }
`;

export default Footer;