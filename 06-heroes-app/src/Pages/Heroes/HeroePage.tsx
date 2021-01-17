import { History } from 'history';
import { Hero } from '../../Interfaces/Hero';
import { Redirect, useParams } from 'react-router-dom';

import { getHeroesById } from '../../Selectors/getHeroById';

interface Props {
    history: History
}

export const HeroePage : React.FunctionComponent<Props>  = ({ history }) => {

    const { heroId } = useParams<Record<string, string>>();
    const hero : Hero = getHeroesById(heroId);
    
    if (!hero){
        return <Redirect to="/" />
    }

    const handleClick = () => {
        if (history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    return (
        <>
            <div className="row">
                <button 
                    className="btn btn-info"
                    onClick={ handleClick }
                >
                    Return
                </button>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        alt={ hero.superhero }
                        src={ `../assets/heroes/${hero.id}.jpg` } 
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>
                <div className="col-8">
                    <h3>
                        { hero.superhero }
                    </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>
                                Alter ego:
                            </b>
                            { hero.alter_ego }
                        </li>
                        <li className="list-group-item">
                            <b>
                                Publisher:
                            </b>
                            { hero.publisher }
                        </li>
                        <li className="list-group-item">
                            <b>
                                First appearance:
                            </b>
                            { hero.first_appearance }
                        </li>
                    </ul>
                    <div className="mt-3">
                        <h6>Characters</h6>
                        <p>
                            { hero.characters }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
