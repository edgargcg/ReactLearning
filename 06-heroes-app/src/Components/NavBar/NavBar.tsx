import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import { AuthContext } from '../../Auth/authContext';
import { contextTypes } from '../../Types/types';

export const Navbar = () => {
    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: contextTypes.logout
        });

        history.replace('/login');
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link">
                        { name }
                    </span>
                    <button
                        className="nav-item nav-link btn btn-danger"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}