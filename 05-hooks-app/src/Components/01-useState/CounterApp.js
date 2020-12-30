import React, { Fragment, useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });
    const { counter1, counter2 } = state;

    const handleAdd = () => {
        setState({
            ...state,
            counter1: counter1 + 1,
        });
    }

    return (
        <Fragment>
            <h1>
                Counters
            </h1>
            <hr />
            <div className="row">
                <h4>
                    Counter1: {counter1}
                </h4>
                <h4>
                    Counter2: {counter2}
                </h4>
            </div>
            <button 
                onClick={ handleAdd }
                className="btn btn-primary"
            >
                +
            </button>
        </Fragment>
    )
}
