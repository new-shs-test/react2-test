/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'SCA',
    title: 'Software Composition Analysis',
    text:
      'Instantly identify open-source components and vulnerabilities to keep your software robust and resilient.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'CI-CD',
    title: 'CI-CD Integration',
    text:
      'Seamlessly embed security checks into your CI-CD for faster, safer software releases.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'E2E Solution',
    title: 'E2E Solution',
    text:
      'Protect every stage of your software lifecycle with our end-to-end security solution.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Mitigation',
    title: 'Mitigation',
    text:
      'Stay Ahead of Threats: Continuously track security issues and automatically create actionable tasks.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Reporting',
    title: 'Reporting',
    text:
      'Maintain an up-to-date project report with a full FOSS inventory, release deltas, identified issues, and mitigation tickets.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Notifications',
    title: 'Notifications',
    text:
      'Real-Time Alerts: Stay instantly informed about security issues in your FOSS dependencies.',
  },
];

export default function FeaturesSection() {
  return (
    <section sx={{ variant: 'section.feature' }} id="features">
      <Container>
        <SectionHeader
          slogan="Platform Features"
          title="SHS platform provides the following features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
