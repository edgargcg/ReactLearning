import React, {  useMemo, useState } from 'react';
import { heavyProcess } from '../../Helpers/heavyProcess';
import { useCounter } from '../../Hooks/useCounter';

import '../03-examples/MultipleCustomHooks.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [ show, setShow ] = useState(true);

    
    const memoHeavyProceso = useMemo(() => heavyProcess(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />
            <h4>
                Counter: 
                <small>{ counter }</small>
            </h4>
            <p>
                { memoHeavyProceso }
            </p>
            <div className="btn-group">
                <button 
                    className="btn btn-primary"
                    onClick={ () => increment(1) }
                >
                    +1
                </button>
                <button
                    className="btn btn-dark"
                    onClick={ () => { setShow(!show) }}
                >
                    Show/Hide { JSON.stringify(show) }
                </button>
            </div>
        </div>
    )
}
