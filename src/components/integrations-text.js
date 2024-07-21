/** @jsx jsx */
import {Box, Button, Flex, Heading, jsx, Link, Text} from 'theme-ui';

export default function IntegrationsText(
    {
        subTitle,
        title,
        description,
    }) {

    return (
        <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
                <Text as="p" sx={styles.wrapper.subTitle}>
                    {subTitle}
                </Text>
                <Heading as="h2" sx={styles.wrapper.title}>
                    {title}
                </Heading>
            </Box>

            {description && (
                <Text as="p" className="description" sx={styles.description}>
                    {description}
                </Text>
            )}

            <Flex>
                <Link href="https://github.com/apps/sec-hound-service" target="_blank" variant="default">
                    <Button variant="primary" aria-label="GitHub App">
                        GitHub App
                    </Button>
                </Link>
                <Link href="https://slack.com/oauth/v2/authorize?client_id=7123050167140.7143401903408&scope=incoming-webhook" target="_blank" variant="default">
                    <Button variant="primary" aria-label="Slack App" sx={{marginLeft: 16}}>
                        Slack App
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}

const styles = {
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexShrink: 0,
        a: {
            m: ['0 auto', null, null, 0],
        },
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mt: '-5px',
        title: {
            fontSize: ['24px', null, '28px', '32px', '36px', '42px', null, '46px'],
            color: 'heading_secondary',
            lineHeight: [1.35, null, null, 1.3, 1.2],
            fontWeight: '700',
            letterSpacing: '-.5px',
            mb: 5,
        },

        subTitle: {
            fontSize: [0, null, '14px'],
            color: 'heading',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '700',
            mb: [2, null, null, null, 3],
            lineHeight: 1.5,
        },
    },
    description: {
        fontSize: ['15px', 2, null, null, null, '17px', null, 3],
        fontWeight: 400,
        lineHeight: [1.85, null, null, 2, null, '2.2'],
        color: 'text_secondary',
        mb: '30px',
    },
};
