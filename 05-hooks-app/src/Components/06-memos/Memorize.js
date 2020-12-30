import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { Small } from './Small';

import '../03-examples/MultipleCustomHooks.css';

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <h4>
                Counter: 
                <Small value={counter} />
            </h4>
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
