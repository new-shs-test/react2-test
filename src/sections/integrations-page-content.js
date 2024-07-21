/** @jsx jsx */
import {Box, Button, Container, Flex, Heading, jsx} from 'theme-ui';
import BannerBG from 'assets/bannerBg.png';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';
import AccessWorkFlowSteps from "./accessWorkFlowSteps";
import ProjectsSection from "./ProjectsSection";
import {homepage, serverAddress} from "../pages";
import {useEffect, useState} from "react";
import {useCurrentUser, useLoggedIn, useSetUser} from "../contexts/auth-context";


const data = [
    {
        id: 1,
        path: '#',
        image: client1,
        title: 'paypal',
    },
    {
        id: 2,
        path: '#',
        image: client2,
        title: 'google',
    },
    {
        id: 3,
        path: '#',
        image: client3,
        title: 'dropbox',
    },
];

const appConfig = {
    gitAuthorizationUri : "https://github.com/login/oauth/authorize",
    gitClientId : "Iv23liAw8wsx66F7gdH7",
    gitRedirectUri : homepage + "/exchange",
    gitAuthScopes: "read:user"
}

export async function fetchUser(){

    console.log("FetchingUser")
    const response = await fetch(serverAddress + "/user" ,{
        headers : {
            "Authorization" : "Bearer " + sessionStorage.getItem("shsToken")
        }
    })
    if (!response.ok) {
        console.log(response.statusText)
        throw new Error("Error:" + response.statusText)
    }
    const data = await response.json()
    let user
    if (data.installedApps !== undefined) {
        user = {
            nickname: data.name,
            token: undefined,
            installedApps: data.installedApps
        }
        console.log(JSON.stringify(user))
        sessionStorage.setItem("user",JSON.stringify(user))//Switch installedApps for installationId's
    } else {
        user = {
            nickname: data.name,
            token: undefined,
            installedApps: undefined

        }
        console.log(JSON.stringify(user))
        sessionStorage.setItem("user",JSON.stringify(user))
    }
    return user
}


export default function IntegrationsPageContent() {
    const [loginUrl, setLoginUrl] = useState(undefined)
    const {user,setUser} = useLoggedIn()

    useEffect(async () => {
        function generateRandomState(length = 32) {
            const array = new Uint8Array(length);
            window.crypto.getRandomValues(array);
            return Array.from(array, (byte) => ('0' + byte.toString(16)).slice(-2)).join('');
        }
        const gitState = generateRandomState()
        sessionStorage.setItem('git_oauth_state', gitState);
        if (user == undefined){
            const token = sessionStorage.getItem("shsToken")
            if (token != undefined) {
                setUser(await fetchUser())
            }else {
                const loginFlow =  appConfig.gitAuthorizationUri +
                    "?client_id=" + appConfig.gitClientId + "&" +
                    "redirect_uri=" + appConfig.gitRedirectUri + "&" +
                    "state=" + gitState  + "&" +
                    "scope=" + appConfig.gitAuthScopes
                setLoginUrl(loginFlow)
            }
        }


    }, []);

    return (
        <>
            <section sx={styles.banner} id="home">
                <Container sx={styles.banner.container}>

                    <Box sx={styles.banner.contentBox}>
                        <Heading as="h1" variant="heroPrimary">
                            SHS Integrations
                        </Heading>
                        <AccessWorkFlowSteps />
                        <Flex>
                            {
                                user ? <a href="/new-integration">
                                    <Button variant="whiteButton" aria-label="Get Started">
                                        Configure Integration
                                    </Button>
                                </a> : <a href={loginUrl}>
                                    <Button variant="whiteButton" aria-label="Get Started">
                                        Login
                                    </Button>
                                </a>
                            }


                        </Flex>
                    </Box>
                </Container>
            </section>
            <ProjectsSection/>
        </>
    );
}

const styles = {
    banner: {
        overflow: ['hidden', 'initial', null, 'hidden'],
        backgroundImage: `url(${BannerBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        borderBottomRightRadius: [100, 150, null, null, null, 250],
        pt: ['150px', null, null, null, null, null, '140px', '130px'],
        pb: ['40px', null, null, '50px', null, 10, '50px'],
        backgroundColor: 'primary',
        container: {
            display: 'flex',
        },
        contentBox: {
            width: ['100%', null, '100%', '100%', '100%', '100%'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexShrink: 0,
            pt: [0, null, null, null, null, null, 5, 7],
        },
        imageBox: {
            display: ['none', null, null, 'block'],
            justifyContent: 'center',
            ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
            mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
            mt: [0, null, null, '40px', 4, 7, 0],
            mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
            overflow: 'hidden',
            textAlign: 'right',
            width: '100%',
        },
    },
    sponsorTitle: {
        color: 'white',
        fontSize: [1, 2],
        opacity: 0.6,
        pr: 20,
        flexShrink: 0,
        pb: [2, null, 0],
    },
    sponsorBox: {
        pt: ['35px', null, null, null, null, '45px'],
        flexDirection: ['column', null, 'row'],
        sponsor: {
            display: 'flex',
            alignItems: 'center',
            '> a': {
                mr: [5, null, null, 4, 6],
                display: 'flex',
                '&:last-of-type': {
                    mr: 0,
                },
            },
        },
    },
};
