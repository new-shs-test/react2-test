import {Box, Button, Card,Text} from "theme-ui";
import {useContext, useEffect, useState} from "react";
import {serverAddress} from "../../pages";
import {NewIntegrationContext} from "../../contexts/new-integration-context";

async function fetchToken(){
    const id = sessionStorage.getItem("id")
    const response = await fetch(
        serverAddress + "/user/generateToken/" + id,{
            headers : {
                "Authorization" : "Bearer " + sessionStorage.getItem("shsToken")
            }
        }
    )
    if (!response.ok) throw new Error("Error:" + response.statusText)

    const data = await response.json()



    return data.token
}

export default function ReadyForToken() {
    const homepage = "/integrations"
    const value = useContext(NewIntegrationContext)

    useEffect(async () => {
       value.setToken(await fetchToken())
    }, [])

    return value.token !== undefined && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <Card sx={{ padding: 4, boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)', textAlign: 'center' }}>

                    <div>
                        <Text sx={styles.wrapper.title}>Here is your ready to use token!</Text>
                        <Text sx={{ fontSize: 2, mb: 3 }}>{value.token}</Text>
                        <Text sx={styles.wrapper.subTitle}>If you wish to look at your configurations, click bellow!</Text>
                        <a href={homepage}>
                            <Button>Finish </Button>
                        </a>
                    </div>

            </Card>
        </Box>
    );
}
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