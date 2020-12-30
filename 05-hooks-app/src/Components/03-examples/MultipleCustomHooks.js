import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

import './MultipleCustomHooks.css';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                loading 
                    ?
                        (
                            <div className="alert alert-info text-center">
                                Loading..
                            </div>
                        )
                    :
                        (
                            <blockquote className="blockquote text-right">
                                <p>
                                    { quote }
                                </p>
                                <footer className="blockquote-footer">
                                    { author }
                                </footer>
                            </blockquote>
                        )
            }
            <button 
                className="btn btn-primary"
                onClick={ () => increment(1) }
            >
                Next quote
            </button>
        </div>
    )
}
