import { Link } from 'react-router-dom';
import { Hero } from '../../Interfaces/Hero';

interface Props {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
}

export const HeroCard = (props: Hero) => {
    return (
        <div className="card m-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="card-img-top"
                        alt={props.superhero}
                        src={`./assets/heroes/${props.id}.jpg`}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.superhero}
                        </h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {props.alter_ego}
                            </li>
                            {
                                (props.alter_ego !== props.characters)
                                &&
                                <li className="list-group-item">
                                    {props.characters}
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-footer">
                        <Link
                            to={`./hero/${props.id}`}
                            className="btn btn-primary"
                        >
                            Más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
