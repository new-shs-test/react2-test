import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Text } from 'theme-ui';
import {NewIntegrationContext} from "../../contexts/new-integration-context";


export default function InstallSlack() {
    const value = useContext(NewIntegrationContext);
    const [state,setState] = useState(undefined)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const isSlackInstalled = urlParams.get('slack');
        if (isSlackInstalled) value.nextPage()

        function generateRandomState(length = 32) {
            const array = new Uint8Array(length);
            window.crypto.getRandomValues(array);
            return Array.from(array, (byte) => ('0' + byte.toString(16)).slice(-2)).join('');
        }
        const slackState = generateRandomState()
        sessionStorage.setItem("slack_oauth_state",slackState)
        setState(slackState)
    }, []);

    const handleSkip = () => {
        value.nextPage();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <Card sx={{ padding: 4, boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)', textAlign: 'center' }}>
                <Text sx={styles.wrapper.title}>To integrate with Slack, please install our Slack App.</Text>
                <Box>
                    <div>
                        <a href={"https://slack.com/oauth/v2/authorize?client_id=7123050167140.7143401903408&scope=incoming-webhook&state=" + state}>
                            <img
                                alt="Add to Slack"
                                height="40"
                                width="139"
                                src="https://platform.slack-edge.com/img/add_to_slack.png"
                                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                            />
                        </a>
                    </div>
                    <Button onClick={handleSkip} >
                        Skip
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

const styles = {
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
        borderRadius: 4,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        justifyContent: 'center',
        alignItems: 'center',
    }
}