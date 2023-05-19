import { Character } from "../interfaces/appInterfaces";
import { Card } from "./Card";


interface Props {
    data: Character[];
}

export const CardList = ({ data }: Props) => {
    return (
        <>
            {
                data.map( ({ id, name, status, species, image }, index) => (
                    <Card
                        key = { index }
                        id = { id }
                        img = { image }
                        name = { name }
                        status = { status }
                        species = { species }
                    />
                ))
            }
        </>
    )
}
