import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { GameHeader } from "../components/GameHeader";
import { GameCardList } from "../components/GameCardList";
import { setCards } from "../store/game/gameSlice";
import { buildGameCards } from "../helpers/setGameCards";
import { useNavigate } from "react-router-dom";


export const GamePage = () => {
    const { hits, turns, characters, cards } = useSelector( ( state: RootState) => state.game );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch( setCards( buildGameCards( characters ) ) );
    }, []);

    useEffect(() => {
        if ( hits < 6) return;

        setTimeout(() => { 
            navigate('/final');
        }, 1000);
    }, [ hits ]);

    return (
        <div>
            <GameHeader hits={ hits } turns={ turns } />

            <section className='card-container'>
                <GameCardList data={ cards } />
            </section>
        </div>
    )
};
