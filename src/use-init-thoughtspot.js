import React from 'react';
import { init, AuthType, Action } from "@thoughtspot/visual-embed-sdk";

export function useInitThoughtSpot(thoughtSpotHost: string) {
    const [isInit, setIsInit] = React.useState(false);
    React.useEffect(() => {
        fetch(`${thoughtSpotHost}callosum/v1/session/demo/login`, {
            headers: {
                "x-requested-by": "ThoughtSpot",
            },
            method: "POST",
            mode: "cors",
            credentials: "include",
        })
        .then((r) => {
            return r.text();
        })
        .then((data) => {
            init({
                thoughtSpotHost,
                authType: AuthType.None,
            });
            setIsInit(true);
        });
    }, []);
    return isInit;
}