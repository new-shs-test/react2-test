import {useEffect} from "react";


export default function SlackExchangePage() {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');
        const returnedState = urlParams.get('state');

        const storedState = sessionStorage.getItem('slack_oauth_state');
            if (returnedState !== storedState) {
                console.error('State parameter does not match. Possible CSRF attack.');
            } else {
                fetch('https://localhost:8084/slack/registerWorkspace', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem("shsToken")
                    },
                    body: JSON.stringify(
                        {
                            code: authorizationCode,
                            id: sessionStorage.getItem("id")
                        })
                })
                    .then(response => response.json())
                    .then(data => {
                        location.replace(data.redirect_uri)
                    })
                    .catch(error => {
                        console.error('Error fetching token:', error);
                    });
            }
        },[]
    )
    return (<div/>)

}
