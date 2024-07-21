import React, { useState, createContext } from "react";

export const NewIntegrationContext = createContext();

export const NewIntegrationProvider = (props) => {

    const [page, setPage] = useState(0);
    const [allowReturn,setAllowReturn] = useState(false)
    const [token, setToken] = useState(undefined)

    const nextPage = () => {
        if (allowReturn) setAllowReturn(true)
        if (!allowReturn) setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
        if (!allowReturn) setAllowReturn(true)
    };
    console.log(page, "page");

    const steps = [
        { title: "Install Github-App" },
        { title: "Select Organization" },
        { title: "Install Slack-App" },
        { title: "Success" }
    ];

    return (
        <NewIntegrationContext.Provider
            value={{
                page,
                steps,
                nextPage,
                prevPage,
               token,
                setToken
            }}
        >
            {props.children}
        </NewIntegrationContext.Provider>
    );
};
