import { useContext, useEffect } from 'react';

import { contextTypes } from '../../Types/types';
import { AuthContext } from '../../Auth/authContext';
import { BaseProps } from '../../Interfaces/BaseProps';

export const LoginPage: React.FunctionComponent<BaseProps> = ({ history }) => {
    
    const { dispatch } = useContext(AuthContext);
    const { user: { logged }} = useContext(AuthContext);

    useEffect(() => {
        if (logged)
            history.push('/');
    }, [])

    const handleLogin = () => {
        dispatch({
            type: contextTypes.login,
            payload: {
                name: 'Edgar Campos',
                email: 'edgargcg@gmail.com'
            }
        });
        
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
