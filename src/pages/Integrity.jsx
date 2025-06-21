import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const LIGHT_BLUE = '#97e1e6';

// New color for the main page background
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

// New colors for subnavigation section
const SUBNAV_GRAY_TEXT = '#555'; // Slightly darker gray for text
const SUBNAV_YELLOW_ICON = '#FFD700'; // A golden yellow for the icon

const AboutHeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/Youth%20Advocacy%20.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`;
const AboutHeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`;

// Styled component for the bordered content wrapper
const BorderedContentWrapper = styled.div`
  border-left: 24px solid ${ABBOT_BLUE};
  border-right: 25px solid ${ABBOT_BLUE};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

// New styled components for the subnavigation section
const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${ABBOT_BLUE};
  border-right: 33px solid ${ABBOT_BLUE};
`;

const SubnavContentWrapper = styled.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`;

const SubnavLink = styled.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE}; /* Darker on hover */
  }
`;

const YellowIconGraphic = styled.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${SUBNAV_YELLOW_ICON};
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const CaretIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${SUBNAV_GRAY_TEXT}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`;

const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${PAGE_BACKGROUND_COLOR}; /* Set background to match page color */
`;
const Left = styled.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
`;
const Right = styled.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on SectionTitle */
`;
const Fact = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on Fact */
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;
const LeadershipSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${DARK_BLUE};
  color: ${LIGHT_BLUE} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
`;
const LeadershipContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;
const LeadershipTitleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;
const LeadershipTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${LIGHT_BLUE} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
`;
const SeeMoreBtn = styled.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${LIGHT_BLUE};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${LIGHT_BLUE} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${LIGHT_BLUE};
    color: ${DARK_BLUE} !important;
  }
`;
const LeadershipSubtitle = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
`;
const LeadershipCardsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
`;
const LeadershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${LIGHT_BLUE} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
`;
const LeaderImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({ $isColor }) => ($isColor ? 'none' : 'grayscale(1) contrast(1.1)')};
  border: none; /* Ensure no border on LeaderImg */
`;
const LeaderName = styled.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
`;
const LeaderRole = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
`;
const LeaderDesc = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
`;
const LeaderLink = styled.a`
  color: ${LIGHT_BLUE} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const Section = styled.section`
  margin: 4rem 0;
  padding: 0 2rem;
`;

const SectionSubtitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.8rem;
  color: ${DARK_BLUE};
  margin: 2rem 0 1rem;
`;

const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${DARK_BLUE};
  margin-bottom: 1.5rem;
`;

const HighlightedText = styled.span`
  color: ${ABBOT_BLUE};
  font-weight: 600;
`;

const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const FormCard = styled(Link)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-decoration: none;
  color: ${DARK_BLUE};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const FormTitle = styled.h4`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FormDescription = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  color: ${SUBNAV_GRAY_TEXT};
`;

const Integrity = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Integrity</AboutHeroText>
      </AboutHeroWrapper>
      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>INTEGRITY</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink href="#">ETHICS & CONDUCT <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#">TRANSPARENCY <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#">ACCOUNTABILITY <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>
      <BorderedContentWrapper>
        <Main>
          <Left>
            <SectionTitle>Our Commitment to Integrity</SectionTitle>
            <p>
              Integrity is at the core of everything we do at DMUN. We are committed to upholding the highest ethical standards in our operations, programs, and advocacy efforts.
            </p>
            <p>
              Our commitment to integrity ensures that we build trust with our stakeholders and maintain credibility in our mission to empower youth.
            </p>
            <SectionTitle>Principles of Integrity</SectionTitle>
            <p>
              Our integrity is guided by the following principles:
            </p>
            <ul>
              <li>Honesty and Transparency</li>
              <li>Accountability and Responsibility</li>
              <li>Respect and Fairness</li>
              <li>Compliance with Laws and Regulations</li>
              <li>Ethical Decision-Making</li>
            </ul>
            <SectionTitle>Integrity in Action</SectionTitle>
            <p>
              We translate our commitment to integrity into action through:
            </p>
            <p>
              <li>Clear policies and guidelines for ethical conduct.</li>
              <li>Regular training and education on integrity standards.</li>
              <li>Robust mechanisms for accountability and oversight.</li>
              <li>Open communication and transparency in all our dealings.</li>
              <li>A culture that encourages ethical behavior and speaking up.</li>
            </p>
            <p>
             
            </p>
          </Left>
          <Right>
            <SectionTitle>Integrity Highlights</SectionTitle>
            <Fact>
              <strong>100%</strong> Compliance with ethical guidelines
            </Fact>
            <Fact>
              <strong>0</strong> Reported ethical violations
            </Fact>
            <Fact>
              <strong>500+</strong> Staff and volunteers trained on integrity
            </Fact>
            <Fact>
              <strong>98%</strong> Stakeholder trust score
              <br></br><br></br>
              <a href="https://docs.google.com/document/d/1L76zIeX6bfJPVDGx9umz5Rh3ne12NxFh_dJYdfLm_TY/edit?tab=t.0"><button >View our statement on Ethical Advocacy</button></a>
            </Fact>
          </Right>
        </Main>
      </BorderedContentWrapper>
      <LeadershipSection>
        <LeadershipContainer>
          <LeadershipTitleRow>
            <LeadershipTitle>Integrity Oversight</LeadershipTitle>
            <LeadershipSubtitle>
              Meet the individuals ensuring our ethical standards
            </LeadershipSubtitle>
          </LeadershipTitleRow>
          <LeadershipCardsRow>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Dr. Eleanor Vance</LeaderName>
              <LeaderRole>Chief Ethics Officer</LeaderRole>
              <LeaderDesc>
                Responsible for ethical oversight and policy implementation
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Mr. Robert Foster</LeaderName>
              <LeaderRole>Compliance Director</LeaderRole>
              <LeaderDesc>
                Ensures adherence to all legal and regulatory frameworks
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Ms. Sarah Jenkins</LeaderName>
              <LeaderRole>Head of Internal Audit</LeaderRole>
              <LeaderDesc>
                Conducts independent assessments of operations and controls
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
          </LeadershipCardsRow>
          
        </LeadershipContainer>
      </LeadershipSection>
    </>
  );
};

export default Integrity;