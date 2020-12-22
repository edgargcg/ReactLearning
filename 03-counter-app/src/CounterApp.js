import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState(value);

    const handleSubstract = () => {
        if (counter === 0)
        return;
        
        // setCounter(counter - 1);
        setCounter(counter - 1);
    };

    const handleReset = () => setCounter(value);

    const handleAdd = () => setCounter( (c) => c + 1 );

    return (
        <React.Fragment>
            <div className="container">
                <h1>
                    CounterApp
                </h1>
                <h2>
                    { counter }
                </h2>
                <button 
                    className="container__button container__button-substract"
                    onClick={ handleSubstract }
                >
                    -
                </button>
                <button 
                    className="container__button container__button-reset"
                    onClick={ handleReset }
                >
                    Reset
                </button>
                <button 
                    className="container__button container__button-add"
                    onClick={ handleAdd }
                >
                    +
                </button>
            </div>
        </React.Fragment>        
    );
}

CounterApp.prototype = {
    value:  PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;