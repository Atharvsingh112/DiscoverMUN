import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PAGE_BACKGROUND_COLOR = '#E7F1FA';
const DARK_BLUE = '#002147';
const ABBOT_BLUE = '#44b8f3';

const DonatePageContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 15vw;
  min-height: 100vh;
  color: ${DARK_BLUE};

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`;

const PageTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  color: ${DARK_BLUE};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const CalloutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const CalloutItem = styled.div`
  text-align: center;
  font-family: var(--andover-font-sans);
  font-size: 1.2rem;
  color: ${DARK_BLUE};
  font-weight: bold;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${DARK_BLUE};
  opacity: 0.2;
  margin: 3rem 0;
`;

const WaysToGiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const GiveCard = styled.div`
  background-color: #fff;
  border: 1px solid ${DARK_BLUE};
  border-radius: 0;
  box-shadow: none;
  padding: 2rem;
  text-align: left;
  font-family: var(--andover-font-sans);
`;

const GiveCardTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 2.8rem;
  color: ${DARK_BLUE};
  margin-bottom: 1rem;
  font-weight: bold;
`;

const GiveCardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${DARK_BLUE};
  opacity: 1;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${DARK_BLUE};
  text-decoration: none;
  margin-top: 1rem;
  font-weight: bold;

  &:hover {
    color: ${ABBOT_BLUE};
  }
`;

const ScrollDownText = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  opacity: 0.7;
`;

const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1em;
`;

const HonoredSectionHeader = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust height as needed */
  background-image: url('/Donate-Banner.jpeg'); /* Use the same image as the header */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 3rem; /* Add margin to separate from content below */
`;

const HonoredSectionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 33, 71, 0.7); /* Dark blue overlay with 70% opacity */
`;

const HonoredSectionTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  margin-bottom: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HonoredSectionDescription = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  line-height: 1.6;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Donate = () => {
  return (
    <DonatePageContainer>
      <PageTitle>Support Our Mission</PageTitle>

      <Section>
        <SectionTitle>Your gift helps us:</SectionTitle>
        <CalloutContainer>
          <CalloutItem>Inspires youths.</CalloutItem>
          <CalloutItem>Builds changemakers.</CalloutItem>
          <CalloutItem>Represents youths.</CalloutItem>
        </CalloutContainer>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>WAYS TO GIVE</SectionTitle>
        <WaysToGiveGrid>
          <GiveCard>
            <GiveCardTitle>DIRECT ONLINE GIVING</GiveCardTitle>
            <GiveCardText></GiveCardText>
            <StyledLink to="#">DIRECT ONLINE GIVING</StyledLink>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>DONOR INTEGRITY</GiveCardTitle>
            <GiveCardText></GiveCardText>
            <StyledLink to="/donor-relations">DONOR INTEGRITY</StyledLink>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>BACK TO HOME</GiveCardTitle>
            <GiveCardText></GiveCardText>
            <StyledLink to="/">BACK TO HOME</StyledLink>
          </GiveCard>
        </WaysToGiveGrid>
      </Section>

      <ScrollDownText>scroll down to learn more</ScrollDownText>

      <Divider />

      <Section>
        <SectionTitle>How to Give</SectionTitle>
        <WaysToGiveGrid>
          <GiveCard>
            <a href="https://donorbox.org/giving-dmun">
            <GiveCardTitle>Direct Online Giving</GiveCardTitle></a>
            <GiveCardText>
              Make a quick and secure donation through our online platform. Visit our website, select the "Donate" option, and follow the prompts to make your gift. Whether it's a one-time donation or a recurring contribution, your support makes a significant difference.
            </GiveCardText>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>Institutional Giving</GiveCardTitle>
            <GiveCardText>
              Institutions, including corporations, foundations, and other organizations, can support our mission through grants, sponsorships, and partnership opportunities. Institutional giving allows for larger-scale contributions that can significantly impact our projects and advocacy efforts.
            </GiveCardText>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>Giving Assets or Securities</GiveCardTitle>
            <GiveCardText>
              Institutions, including corporations, foundations, and other organizations, can support our mission through grants, sponsorships, and partnership opportunities. Institutional giving allows for larger-scale contributions that can significantly impact our projects.
            </GiveCardText>
          </GiveCard>
        </WaysToGiveGrid>
        <Paragraph style={{ textAlign: 'center', marginTop: '2rem' }}>
         <strong> For institutional giving or assets or securities donation, please contact our development office at <a href="mailto:give@dmun.org" style={{ color: ABBOT_BLUE, textDecoration: 'none', fontWeight: 'bold' }}>give@dmun.org</a></strong>
        </Paragraph>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Why give to us?</SectionTitle>
        <Paragraph>
          Your support enables us to continue our mission of empowering youth and making quality education accessible to all. By donating to our network, you are directly contributing to global education initiatives that provide innovative and inclusive programs in politics, governance, and international relations. Your generosity helps us offer scholarships, mentorship programs, and leadership opportunities to young people from diverse backgrounds, ensuring they have the resources they need to succeed.
        </Paragraph>
        <Paragraph>
          Your contribution also amplifies our efforts in policy advocacy, enabling us to influence international platforms and drive meaningful change. We collaborate with diverse NGOs, sharing resources and expertise to tackle educational disparities and promote sustainable development. Your support strengthens these partnerships, allowing us to expand our reach and impact.
        </Paragraph>
        <Paragraph>
          Moreover, your donation is an investment in the future. By empowering today's youth, you are fostering the leaders of tomorrow who will shape a better, more inclusive world. Every contribution, no matter the size, plays a crucial role in our mission.
        </Paragraph>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Where are my funds used?</SectionTitle>
        <Paragraph>
          Your funds are used to support the different programs and opportunities provided by our Member Organizations. While the exact usage of the funds and the nature of programs offered is different by each member organization, they all contribute to the overall mission and vision of the DMUN Foundation itself.
        </Paragraph>
        <Paragraph>
          Here are some ways your funds are used by each of our Member Organizations:
        </Paragraph>
        <ul>
          <li><strong>Discover Model United Nations:</strong> Your funds will be used to fund educational programs on international relations and capacity-building for sustainable development. This could be through a sustainability forum, a Model UN conference, or a essay competition.</li>
          <li><strong>Katija Hyoungjoo Neuber Institute:</strong> Your funds will be used to fund groundbreaking policy research on youth stakeholder recognition and youth participation in global governance. Your funds will also be used to advocate for youth and youth-led civil society participation in the United Nations.</li>
          <li><strong>YouthCubed:</strong> Your funds will be used to fund programs that encourage and educate youth entrepreneurs, provide valuable opportunities for external youth representatives to participate in international policymaking venues, and recognize outstanding youth enterprises.</li>
        </ul>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>100% of all individual donations are used for programs, research or advocacy.</SectionTitle>
        <Paragraph>
          This means that every dollar you contribute goes towards making a tangible difference in the lives of young people. Your donations fund our educational programs, scholarships, global initiatives, advocacy, research and resource development, ensuring maximum impact and benefit to those we serve.
        </Paragraph>
        <Paragraph>
          By dedicating all individual donations to our programs, we guarantee that your support is directly empowering youth and providing them with the tools and opportunities they need to succeed.
        </Paragraph>
      </Section>

      <Divider />

      <Section>
<SectionTitle>How are donors honored?</SectionTitle>        
          
   

        <WaysToGiveGrid>
          <GiveCard>
            <GiveCardTitle>Naming Opportunities</GiveCardTitle>
            <GiveCardText>
              As a valued supporter of the DMUN Foundation, you have the opportunity to leave a lasting legacy through our naming opportunities. By contributing at a significant level, you can have a program, scholarship, or event named in your honor or in recognition of someone special.
            </GiveCardText>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>Personalised Reports</GiveCardTitle>
            <GiveCardText>
              To show our appreciation, we provide personalized reports to our major donors. These reports offer detailed insights into the impact of your contributions, including stories of participants who have benefited from your support and updates on the programs and initiatives you have helped fund.
            </GiveCardText>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>Exclusive Events</GiveCardTitle>
            <GiveCardText>
              Join us at exclusive events designed to honor and celebrate our top supporters. These events provide a unique opportunity to meet the young leaders you are helping to empower, connect with other like-minded donors, and hear directly from our team about the latest developments and successes at our Foundation.
            </GiveCardText>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>DONOR INTEGRITY</GiveCardTitle>
            <GiveCardText></GiveCardText>
            <StyledLink to="/donor-relations">DONOR INTEGRITY</StyledLink>
          </GiveCard>
          <GiveCard>
            <GiveCardTitle>BACK TO HOME</GiveCardTitle>
          </GiveCard>
        </WaysToGiveGrid>
        <Paragraph style={{ textAlign: 'center', marginTop: '2rem' }}>
          For specific program funding partners, we offer the opportunity to integrate their company or entity's work with our events, pending the approval of the Board of Trustees.
        </Paragraph>
        <Paragraph style={{ textAlign: 'center', fontSize: '0.9rem', opacity: '0.7', marginTop: '1rem' }}>
          Donating to the DMUN Foundation is not a legally-binding contract for the DMUN Foundation provide any services or products. These donor recognition are given by the Board of Trustees as-is and is not guaranteed.
        </Paragraph>
      </Section>
    </DonatePageContainer>
  );
};

export default Donate; 