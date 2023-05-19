
interface Props {
    id: number;
    img: string;
    name: string;
    status: string;
    species: string;
    active?: boolean;
}

export const Card = ({ img, name='', status='', species='' }: Props) => {

    return (
        <div className="card">
            <img className='card-character-img' src={ img } alt={ name } />
            <span className='card-character-name'>{ name }</span>
            <span className='card-character-type'>{ status } - { species }</span>
        </div>
    )
}
