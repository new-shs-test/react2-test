/** @jsx jsx */
import {Box, Button, Container, Flex, Heading, jsx} from 'theme-ui';
import BannerBG from 'assets/bannerBg.png';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';
import Stepper from 'react-stepper-horizontal'
import {useContext, useEffect, useState} from "react";
import {NewIntegrationContext, NewIntegrationProvider} from "../contexts/new-integration-context";
import InstallGit from "../components/steps/installGit";
import SelectGit from "../components/steps/selectGit";
import InstallSlack from "../components/steps/installSlack";
import ReadyForToken from "../components/steps/sucess";
import {useLoggedIn} from "../contexts/auth-context";
import {fetchUser} from "./integrations-page-content";

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

export default function NewIntegrationPageContent() {
    const activeStep = useContext(NewIntegrationContext)
    const {user,setUser} = useLoggedIn()
    useEffect(async () => {
        setUser(await fetchUser())
    }, []);
    return (
        <>
            <section sx={styles.banner} id="home">
                <Container sx={styles.banner.container}>
                    <Box sx={styles.banner.contentBox}>
                        <Heading as="h1" variant="heroPrimary">
                            New Integration
                        </Heading>
                    </Box>
                </Container>
            </section>


            <Stepper steps={activeStep.steps} activeStep={activeStep.page}/>
            {activeStep.page === 0 && <InstallGit/>}
            {activeStep.page === 1 && <SelectGit/>}
            {activeStep.page === 2 && <InstallSlack/>}
            {activeStep.page === 3 && <ReadyForToken/>}

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
