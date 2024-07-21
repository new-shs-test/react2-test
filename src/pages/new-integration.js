import React from 'react';
import Layout from 'components/layout';
import {ThemeProvider} from "theme-ui";
import theme from "../theme";
import {StickyProvider} from "../contexts/app/app.provider";
import NewIntegrationPageContent from "../sections/new-integration-page-content";
import {LoggedInProvider} from "../contexts/auth-context";
import {NewIntegrationProvider} from "../contexts/new-integration-context";

export default function NewIntegrationPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <LoggedInProvider>
                    <Layout reserved path="/integrations" buttonTitle="Go Back">
                        <NewIntegrationProvider>
                            <NewIntegrationPageContent/>
                        </NewIntegrationProvider>
                    </Layout>
                </LoggedInProvider>
            </StickyProvider>
        </ThemeProvider>
    );
}
