import React from 'react';
import styled from 'styled-components';

const Hero = ({/*text*/}) => { //removed this text as of right now
  return (
    <Section>
      <Overlay>
        <Glow />
        <Container>
          <HeroTextColumn>
            <Header>Welcome to MoreFlicks!</Header>
            <SubheaderAndStarsColumn>
              <SubHeader>Spend more time watching, less time scrolling</SubHeader>
              {/*<CTAButton>Get Started</CTAButton>.   Also CTA means call to action*/}

              {/*Add a way to make slideshows for media scenes as offerings for different shows*/} 
            </SubheaderAndStarsColumn>
          </HeroTextColumn>
        </Container>
      </Overlay>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  background: #372b27ff;
  overflow: hidden;

`;

const Overlay = styled.div`
  
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 300px;
  position: relative; /* This keeps text above the background glow */
  z-index: 1; /* This makes sure that content stays above background effects */
`;

const HeroTextColumn = styled.div`
  
`;

const Header = styled.h1`
  color: #ffffff;
  font-size: 44px;
  line-height: 1.05;
  font-weight: 800;
  
  
`;

const Highlight = styled.span`
`;

const SubHeader = styled.h2`
  color: #a2a0a0ff;
  align-items: center;
  text-align: center;
`;

const SubheaderAndStarsColumn = styled.div`

`;

const CTAButton = styled.button`

`;

const Glow = styled.div`
  position: absolute;
  inset: -200px;
  background: radial-gradient(closest-side, rgba(255, 255, 255, 0.10), rgba(11, 15, 20, 0));
  filter: blur(40px);
  pointer-events: none;
`

export default Hero;
