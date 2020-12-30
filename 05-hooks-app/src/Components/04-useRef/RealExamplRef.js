import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './useRef.css';

export const RealExamplRef = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <div className="row">
                <div className="navbar bg-dark text-light">
                    <h1>
                        RealExampleRefHook
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="navbar navbar-expand-sm navbar-light bg-light text-center">
                    <button 
                        className="btn btn-primary"
                        onClick={ handleShow }
                    >
                        Show
                    </button>
                </div>
            </div>
            { show && <MultipleCustomHooks /> }
        </div>
    )
}
