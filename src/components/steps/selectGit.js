import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Card, Heading, jsx, Text} from "theme-ui";
import {NewIntegrationContext} from "../../contexts/new-integration-context";
import {LoggedInContext, useLoggedIn} from "../../contexts/auth-context";

const ClickableList = ({ items, onItemClick, goBack }) => (
    <Box sx={{ padding: 3 }}>
        {items.map((item, index) => (
            <Box
                key={index}
                sx={{
                    marginBottom: 2,
                    padding: 2,
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                    borderRadius: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => onItemClick(item)}
            >
                <Text>{item.name}</Text>
            </Box>
        ))}
        {
            <Box
                key="GoBack"
                sx={{
                    marginBottom: 2,
                    padding: 2,
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                    borderRadius: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => goBack()}
            >
                <Text>Add more projects</Text>
            </Box>
        }
    </Box>
);


export default function SelectGit() {
    const value = useContext(NewIntegrationContext)
    const {user} = useLoggedIn()
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const isSlackInstalled = urlParams.get('slack');
        if (isSlackInstalled) value.nextPage()
    }, []);


    const handleItemClick = (item) => {

        sessionStorage.setItem("id",item.id);

        value.nextPage()
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            {user != undefined && <ClickableList items={user.installedApps} onItemClick={handleItemClick} goBack={value.prevPage} />}
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