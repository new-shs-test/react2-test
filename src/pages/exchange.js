import {useEffect} from "react";


export default function ExchangePage() {

    useEffect(() => {
        console.log("RUNNING")
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');
        const returnedState = urlParams.get('state');
        const storedState = sessionStorage.getItem('git_oauth_state');
        if (returnedState !== storedState) {
            console.error('State parameter does not match. Possible CSRF attack.');
        } else {
            fetch('https://localhost:8084/login/oauth2/code/github', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: authorizationCode})
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    sessionStorage.setItem('shsToken', data.token);
                    location.replace(data.redirect_uri)
                })
                .catch(error => {
                    console.error('Error fetching token:', error);
                });
        }
    }, []);
    return (<div/>)

}
