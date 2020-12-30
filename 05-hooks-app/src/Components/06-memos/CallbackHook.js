import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/MultipleCustomHooks.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = 
        useCallback(
            (factor) => {
                setCounter(c => c + factor);
            },
            [setCounter],
        )

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <div>
            <h1>
                CallBack Hook
            </h1>
            <hr />
            <div className="row">
                <h4>
                    {counter}
                </h4>
                <ShowIncrement increment={ increment }   />
            </div>
        </div>
    )
}
