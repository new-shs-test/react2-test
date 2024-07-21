/** @jsx jsx */
import {Button, Container, Flex, jsx, Text} from 'theme-ui';
import {keyframes} from '@emotion/core';
import {DrawerProvider} from '../../contexts/drawer/drawer.provider';
import {useEffect, useState} from "react";
import {useLoggedIn} from "../../contexts/auth-context";

export default function IntegrationsHeader({className, path, buttonTitle}) {
    const {user} = useLoggedIn()
    return (
        <DrawerProvider>
            <header sx={styles.header} className={className} id="header">
                <Container sx={styles.container}>
                    {/*<Logo src={className === 'sticky' ? LogoDark : LogoWhite} />*/}

                    <Flex
                        sx={{
                            justifyContent: 'space-between', // Distributes space between the buttons
                            width: '100%'
                        }}
                    >
                        <a href={path}>
                            <Button
                                className="donate__btn"
                                variant="secondary"
                                aria-label={buttonTitle}
                            >
                                {buttonTitle}
                            </Button>
                        </a>
                        {
                            user && <Text as="p" variant="heroSecondary">
                                Hey, {user.nickname}!
                            </Text>
                        }
                    </Flex>
                </Container>
            </header>
        </DrawerProvider>
    );
}

const positionAnim = keyframes`
    from {
        position: fixed;
        opacity: 1;
    }
    to {
        position: absolute;
        opacity: 1;
        transition: all 0.4s ease;
    }
`;

const styles = {
    header: {
        color: 'white',
        fontWeight: 'normal',
        py: 4,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'all 0.5s ease',
        animation: `${positionAnim} 0.4s ease`,
        '.donate__btn': {
            flexShrink: 0,
            mr: [15, 20, null, null, 0],
            ml: ['auto', null, null, null, 0],
        },
        '&.sticky': {
            position: 'fixed',
            backgroundColor: 'background',
            color: '#000000',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
            py: 3,
            'nev > a': {
                color: 'text',
            },
            '.donate__btn': {
                borderColor: 'primary',
                color: 'primary',
                '&:hover': {
                    boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
                    backgroundColor: 'primary',
                    color: 'white',
                },
            },
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nav: {
        mx: 'auto',
        display: 'none',
        '@media screen and (min-width: 1024px)': {
            display: 'block',
        },
        a: {
            fontSize: '16px',
            fontWeight: '400',
            px: 25,
            cursor: 'pointer',
            lineHeight: '1.2',
            '&.active': {
                color: 'secondary',
            },
        },
    },
};
