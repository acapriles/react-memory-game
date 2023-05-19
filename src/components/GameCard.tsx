import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactCardFlip from 'react-card-flip';

import { Card } from './Card';
import { BackCard } from './BackCard';
import { RootState } from '../store/store';
import { checkSeletedTemp, setCardsActive, setCurrentCardId } from '../store/game/gameSlice';

 
interface Props {
    id: number;
    img: string;
    name: string;
    status: string;
    species: string;
    active?: boolean;
}

export const GameCard = ({ id, img, name='', status='', species='', active }: Props) => {

    const [ flip, setFlip ] = useState( true );
    const [ isBlocked, setIsBlocked ] = useState( true );
   
    const { turns, hits } = useSelector( ( state: RootState ) => state.game );
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setFlip( false );
            setIsBlocked( false );
        }, 3000);
    }, []);

    useEffect(() => {
        if ( turns < 1 ) return;

        setIsBlocked( true );

        setTimeout(() => {
            setIsBlocked( false );
            setFlip( false );
        }, 1000);
    }, [ turns ]);

    useEffect(() => {
        if ( hits < 1 ) return;

        setTimeout(() => {            
            dispatch( setCardsActive() );
        }, 1000);
    }, [ hits ]);


    const onClickCard = ( cardId: number) => {
        if ( isBlocked ) return;

        dispatch(setCurrentCardId( cardId ));
        dispatch( checkSeletedTemp( cardId ) );
        setFlip( !flip );
    }


    return (
        <ReactCardFlip isFlipped={ flip } flipDirection="horizontal">
            <div>
                <button
                    className='button-card'
                    onClick={ () => onClickCard( id ) }
                    style={ { visibility: ( !active ) ? 'hidden' : 'visible' }}
                >
                    <BackCard />
                </button>
            </div>

            <div>
                <button
                    className='button-card'
                    onClick={ () => onClickCard( id ) }
                    style={ { visibility: ( !active ) ? 'hidden' : 'visible' }}
                >
                    <Card
                        id = { id }
                        img = { img }
                        name = { name }
                        status = { status }
                        species = { species }
                    />
                </button>
                
            </div>
        </ReactCardFlip>
    )
}
