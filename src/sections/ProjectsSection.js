/** @jsx jsx */
import {Box, Card, Container, Grid, Heading, jsx, Text} from 'theme-ui';

import {useLoggedIn} from "../contexts/auth-context";


export default function ProjectsSection() {
    const { user } = useLoggedIn();

    // if user is not logged in, return nothing
    if (!user) {
        return <div></div>;
    }

    console.log(user);
    return (
        <section sx={{ variant: 'section.feature' }}>
            <Container>
                <Box sx={{ variant: 'sectionHeader' }}>
                    <Heading
                        as="h3"
                        sx={{
                            variant: 'sectionHeader.title',
                            color: 'heading_secondary',
                        }}
                    >
                        Configured Projects
                    </Heading>
                </Box>

                <Grid sx={styles.grid}>
                    {user.installedApps.map((item) => (
                        <Card
                            key={item.name}
                            sx={{
                                padding: 2,
                                borderRadius: 4,
                                boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                            }}
                        >
                            <Box sx={styles.wrapper}>
                                <Heading sx={styles.wrapper.title}>{item.name}</Heading>
                                <Text sx={{ fontWeight: 'bold', mt: 2 }}>
                                    Slack: {item.slack ? 'Configured' : 'Not Configured'}
                                </Text>
                                <Text sx={{ fontWeight: 'bold', mt: 3 }}>Repositories:</Text>
                                {item.repositories.map((repo) => (
                                    <Box
                                        key={repo.fullName}
                                        sx={{
                                            border: '1px solid',
                                            borderColor: 'muted',
                                            borderRadius: 4,
                                            padding: 2,
                                            mt: 2,
                                        }}
                                    >
                                        <Text>Name: {repo.name}</Text>
                                        <Text>Visibility: {repo.private ? 'Private' : 'Public'}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
const styles = {
    grid: {
        pt: [0, null, null, null, null, null, null, 3],

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
    wrapper: {
        width: '100%',
        display: 'flex',
        padding: 16,
        flexDirection: 'column',
        title: {
            fontSize: 3,
            color: 'heading_secondary',
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, null, null, 3],
        },

        subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: [1.85, null, 2],
        },
    },
};
