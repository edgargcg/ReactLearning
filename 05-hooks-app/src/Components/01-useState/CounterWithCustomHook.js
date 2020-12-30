import React from 'react';
import { useCounter } from '../../Hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {    
    const { state: counter, increment, decrement, reset } = useCounter(100);
    return (
        <div>
            <h1>
                Counter with Hook { counter }
            </h1>
            <div className="btn-group">
                <button 
                    onClick={ () => decrement(5) }
                    className="btn btn-warning"
                >
                    -
                </button>
                
                <button 
                    onClick={ () => reset(1) }
                    className="btn btn-info"
                >
                    RESET
                </button>

                <button 
                    onClick={ () => increment(10) }
                    className="btn btn-primary"
                >
                    +
                </button>
            </div>
        </div>
    )
}
