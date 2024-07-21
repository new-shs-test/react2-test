/** @jsx jsx */
import {Box, Grid, Heading, jsx, Text} from 'theme-ui';
import {styles} from "./workFlowSection";

const data = [
    {
        id: 1,
        title: 'Login With GitHub',
        text: 'Authenticate to get your user identity.',
    },
    {
        id: 2,
        title: 'Install SHS GitHub App',
        text: 'Install SHS App and provide access to GitHub projects.',
    },
    {
        id: 3,
        title: 'Install SHS Slack App',
        text: 'Install SHS Slack App into your slack workspace to get notifications.',
    },
    {
        id: 4,
        title: 'Have Fun!',
        text: 'Grab your API Key, add it to your GitHub Org secrets and start scanning.',
    }
];

export default function AccessWorkFlowSteps() {
    return (
        <Grid sx={{...styles.grid,
            marginTop: 23,
            '@media screen and (max-width: 40em)': {
                    display: 'none',
                }}}>
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
    );
}
