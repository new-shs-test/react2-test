/** @jsx jsx */
import {Box, Container, jsx} from 'theme-ui';
import Image from 'components/image';

import Integrations from 'assets/shs-integrations.png';
import IntegrationsText from "../components/integrations-text";

const data = {
    subTitle: 'Platform Integrations',
    title: 'Software Composition Analysis through automation + integrations',
    description: 'Effortlessly and securely integrate with GitHub, Slack, Teams, Jira, Confluence, and more. Gain access to comprehensive security analysis, mitigation, and reporting systems for robust E2E protection.',
};

export default function IntegrationsSection() {
    return (
        <section sx={{variant: 'section.partner', backgroundColor: '#f2f2f2'}} id="integrations">
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <IntegrationsText
                        subTitle={data.subTitle}
                        title={data.title}
                        description={data.description}
                    />
                </Box>
                <Box sx={{px: [0, null, '40px', 0]}}>
                    <Image src={Integrations} alt="Partner"/>
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
    },
    contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%', 450, 550, '350px', '410px', '485px'],
        mx: 'auto',
        pb: ['30px', null, null, 0],
        '.description': {
            pr: [0, null, null, null, 4],
        },
    },
};
