/** @jsx jsx */
import {Box, Container, Grid, Heading, jsx, Text} from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.png';
import ArrowEven from 'assets/arrowEven.png';

const data = [
    {
        id: 1,
        title: 'Trigger CI-CD Workflow',
        text:
            'GitHub Actions workflow is triggered manually or upon new release, runs Dependency-Check and submits SCA report for analysis.',
    },
    {
        id: 2,
        title: 'Start Processing',
        text:
            'SHS Processing Service schedules an async operation to validate and process the report. Once processed, it will trigger the mitigation process.',
    },
    {
        id: 3,
        title: 'Trigger Mitigation',
        text:
            'SHS Mitigation Service does a diff comparing latest release with previous one, detect changes and opens, closes or update mitigation tickets.',
    },
    {
        id: 4,
        title: 'Create/Update Report',
        text:
            'SHS Reporting Service keeps the project FOSS reports up-to date (FOSS inventory and release deltas linked with mitigation tickets).',
    },
    {
        id: 5,
        title: 'Notify Code Owners',
        text:
            'Owners of the project get notified with FOSS and security information through the notifications integration.',
    },
];

export default function WorkFlowSection() {
    return (
        <section sx={styles.workflow} id="workflow">
            <Container>
                <SectionHeader
                    slogan="Workflow"
                    title="Let’s see how it works"
                    isWhite={true}
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <Box sx={styles.card} key={item.id}>
                            <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                            <Box sx={styles.wrapper}>
                                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

export const styles = {
    workflow: {
        backgroundColor: 'primary',
        backgroundImage: `url(${PatternBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        py: [8, null, 9, null, null, 10],
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            right: 0,
            background:
                'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
            width: '100%',
            backgroundSize: '350px 350px',
            height: '100%',
            opacity: 0.3,
            zIndex: 0,
        },
    },
    grid: {
        mb: -1,
        pt: 0,
        gridGap: [
            '35px 0',
            null,
            '45px 50px',
            null,
            '50px 25px',
            null,
            null,
            '50px 65px',
        ],
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(4,1fr)',
        ],
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        textAlign: ['center', null, 'left'],
        width: ['100%', '80%', '100%'],
        mx: 'auto',
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: [0, null, null, null, null, 75, null, 100],
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'center center',
            width: 215,
            height: 60,
            opacity: 0.3,
            '@media screen and (max-width:1220px)': {
                display: 'none',
            },
        },
        '&:nth-of-type(2n-1)::before': {
            backgroundImage: `url(${ArrowOdd})`,
        },
        '&:nth-of-type(2n)::before': {
            backgroundImage: `url(${ArrowEven})`,
            top: 17,
        },
        '&:last-child::before': {
            display: 'none',
        },
    },

    iconBox: {
        width: ['50px', null, '60px', null, null, '70px'],
        height: ['50px', null, '60px', null, null, '70px'],
        flexShrink: 0,
        borderRadius: [15, null, 23, null, null, 30],
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        mb: [5, null, null, null, null, 6],
        mx: ['auto', null, 0],
        fontSize: [6, null, 7, null, null, '30px'],
        fontWeight: 700,
        justifyContent: 'center',
        color: '#234582',
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mt: '-5px',
        title: {
            fontSize: [3, null, 4, null, null, 5],
            color: 'white',
            lineHeight: [1.4, null, null, null, null, 1.55],
            pr: [0, null, null, null, null, 2],
            mb: [2, 3],
        },

        subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: [1.85, null, null, 1.9, 2],
            color: 'white',
            opacity: 0.65,
            pr: [0, null, null, null, null, 5],
        },
    },
};
