import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../store/store';
import { Spinner } from '../components/Spinner';
import { CardList } from '../components/CardList';
import { getCharacters } from '../store/game/thunks';
import { Link } from 'react-router-dom';
import { resetGame } from '../store/game/gameSlice';


export const HomePage = () => {

    const { characters, isLoading } =  useSelector( (state: RootState) => state.game );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {    
        dispatch( resetGame() );
        dispatch( getCharacters() );
    }, []);
    
    return (
        <>
            <section className="information">
                <span className="information-text">Personajes</span>
            </section>

            <section className='card-container'>
                {
                    ( isLoading )
                        ? <Spinner text='Loading...' />
                        : <CardList data={ characters }/>
                }
            </section>

            <section className='home-button-container'>
                <Link to="/game">
                    <div className='home-button-play'>
                        <span className='home-button-text'>Jugar</span>
                    </div>
                </Link>
            </section>
        </>
    )
}
