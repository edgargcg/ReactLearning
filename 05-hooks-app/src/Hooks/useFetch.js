import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true
    });

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setState(
            {
                data: null,
                error: null,
                loading: true
            }
        );

        fetch( url )
            .then( resp => {
                if (!resp.ok){
                    throw new Error('Could not fetch data from resource');
                }

                return resp.json()
            }) 
            .then( data => {

                if (isMounted){
                    setState({
                        data: data,
                        error: null,
                        loading: false,
                    });
                }

            }).catch(error => {
                if (isMounted){
                    setState({
                        data: null,
                        error: error,
                        loading: false,
                    });
                }
            });

    }, [url]);

    return state;
}
