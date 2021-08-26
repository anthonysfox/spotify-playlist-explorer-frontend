import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { isLoggedIn, loginSuccess } from "./authenticationSlice";

 const SpotifyLogin = () => {
    const dispatch = useAppDispatch()
    const loggedIn = useAppSelector(isLoggedIn);

    useEffect(() => {
        window.addEventListener('message', (event) => {
            console.log(event.data);
            if(event.data.token) {
                dispatch(loginSuccess({user: event.data.user, accessToken: event.data.token, issuedAt: event.data.issuedAt}))
            }
        }, false);
    }, [])

    function openWindow() {
       const test = window.open('http://localhost:3010/auth-service/v1/login', "", "width=500,height=500");

       setInterval(() => {
           test.postMessage('hi', 'http://localhost:3010');
       }, 1000)
    }

    return (
        <div>
            <button onClick={openWindow}>Log in to spotify</button>
        </div>
    )
}

export default SpotifyLogin
