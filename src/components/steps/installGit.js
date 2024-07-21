import React, {useContext, useEffect} from "react";
import {Box, Button, Card, Heading, jsx, Text} from "theme-ui";
import {NewIntegrationContext} from "../../contexts/new-integration-context";
import {LoggedInContext, useLoggedIn} from "../../contexts/auth-context";


export default function InstallGit() {
    const value = useContext(NewIntegrationContext)
    const {user} = useLoggedIn()

    if (user !== undefined){
        if (user.installedApps !== undefined)  value.nextPage()
    }



    return (

        <Card key="install-card" sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }

        }>
            <Box sx={{
                padding: 16,
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
            }}>
                <Text sx={styles.wrapper.title}>
                    So that we can interact with your repository, you need to install our Github App.
                </Text>
                <Text sx={styles.wrapper.title}>
                    To do so just click the link below!
                </Text>

            </Box>
            <a href="https://github.com/apps/sec-hound-service/installations/new?state=loggedIn">
                <Button
                >
                    Install Github App
                </Button>
            </a>

        </Card>

    )
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