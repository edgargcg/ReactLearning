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
            .then( resp => resp.json()) 
            .then( data => {

                if (isMounted){
                    setState({
                        data: data,
                        error: null,
                        loading: false,
                    });
                }

            }).catch(error => {
                setState({
                    data: null,
                    error: error,
                    loading: false,
                });
            });

    }, [url]);

    return state;
}
