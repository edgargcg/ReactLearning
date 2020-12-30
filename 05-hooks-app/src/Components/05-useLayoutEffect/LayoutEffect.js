import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

import './LayoutEffect.css';

export const Layout = () => {
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Breaking Bad Quotes LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p ref={pTag}>
                    { quote }
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick={ () => increment(1) }
            >
                Next quote
            </button>
        </div>
    )
}
