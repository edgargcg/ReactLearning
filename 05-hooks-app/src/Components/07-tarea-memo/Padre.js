import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../03-examples/MultipleCustomHooks.css';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const add = 
        useCallback(
            (factor) => {
                setValor( v => v + factor )
            },
            [setValor],
        )

    return (
        <div>
            <h1>Padre</h1>
            <h5><small>Total:</small> { valor }</h5>
            <hr />
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ add }
                    />
                ))
            }
        </div>
    )
}
