import React, {useEffect} from 'react';
import Layout from 'components/layout';
import {ThemeProvider} from "theme-ui";
import theme from "../theme";
import {StickyProvider} from "../contexts/app/app.provider";
import IntegrationsPageContent from "../sections/integrations-page-content";
import {LoggedInProvider} from "../contexts/auth-context";

export default function IntegrationsPage() {


    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <LoggedInProvider>
                    <Layout reserved path="/" buttonTitle="Go Home">
                        <IntegrationsPageContent/>
                    </Layout>
                </LoggedInProvider>
            </StickyProvider>
        </ThemeProvider>
    );
}
