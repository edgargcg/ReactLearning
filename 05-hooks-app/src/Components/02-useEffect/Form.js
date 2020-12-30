import React, { useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import './effects.css';

export const Form = () => {

    const [ formValues, handleInputChange ] = useForm(
        {
            name: '',
            email: '',
            password: ''
        }
    );
    const { name, email, password } = formValues;    

    useEffect(() => {
        console.log('Email has changed');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formValues);
    }

    return (
        <div>
            <h1>
                FormHook
            </h1>
            <div className="row">
                <form onSubmit={ handleSubmit } className="mt-5">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            maxLength="30"
                            value={ name }
                            autoComplete="off"
                            className="form-control"
                            placeholder="Type your name"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            maxLength="50"
                            value={ email }
                            autoComplete="off"
                            className="form-control"
                            placeholder="Type your email"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            value={ password }
                            autoComplete="off"
                            className="form-control"
                            placeholder="*****"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
