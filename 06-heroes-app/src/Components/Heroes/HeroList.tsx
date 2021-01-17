import { useMemo } from "react";
import { getHeroesByPublisher } from "../../Selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

interface Props {
    publisher: string
}
export const HeroList = ({ publisher } : Props) => {
    const heroes = useMemo( 
        () =>  getHeroesByPublisher(publisher), 
        [publisher]
    );
    
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(
                    hero => 
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                )
            } 
        </div>
    )
}
