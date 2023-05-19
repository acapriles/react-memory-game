import { Card } from "../interfaces/appInterfaces";
import { GameCard } from "./GameCard";


interface Props {
    data: Card[];
}

export const GameCardList = ({ data }: Props) => {

    return (
        <>
            {
                data.map( ({ id, name, status, species, image, active }, index) => (
                    <GameCard
                        key={ index }
                        id={ id }
                        img = { image }
                        name = { name }
                        status = { status }
                        species = { species }
                        active = { active }
                    />
                ))
            }
        </>
    )
}
