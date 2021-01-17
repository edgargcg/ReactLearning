import { FormEvent, useMemo } from "react";
import { History } from 'history';
import queryString from 'querystring';

import { useForm } from "../../Hooks/Forms/useForm";
import { HeroCard } from "../Heroes/HeroCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../Selectors/getHeroesByName";


interface Props {
    history: History
}

export const Search : React.FunctionComponent<Props>  = ({ history }) => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const q = query['?q'] as string;

    const [ values, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = values;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        history.push(`?q=${searchText}`);
    }


    return (
        <div>
            <h1>
                Search
            </h1>
            <hr/>
            <div className="row mt-4">
                <div className="col-12">
                    <form onSubmit={ handleSearch }>
                        <div className="input-group">
                            <input 
                                type="text"
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                className="form-control"
                                placeholder="Find your hero"
                                onChange={ handleInputChange }
                            />
                            <button 
                                type="submit"
                                className="btn btn-outline-primary"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-4">
                    <h4>
                        Results
                    </h4>
                    <hr/>
                    {
                        (
                            q === ''
                            &&
                            <div className="alert alert-info text-center">
                                Search a hero
                            </div>
                        )
                    }

{
                        (
                            q !== '' && heroesFiltered.length === 0
                            &&
                            <div className="alert alert-warning text-center">
                                There is not hero named like { q }
                            </div>
                        )
                    }

                    {
                        heroesFiltered.map(
                            hero => 
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
