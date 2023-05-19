import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../store/store";
import { resetGame } from "../store/game/gameSlice";


export const FinalPage = () => {
    const { turns } = useSelector( ( state: RootState) => state.game );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const redirectHome = () => {
        dispatch( resetGame() );
        navigate('/home');
    }

    const redirectGame = () => {
        dispatch( resetGame() );
        navigate('/game');
    }

    return (
        <div>
            <section className='final-container'>
                <div className="final-title">¡Felicitaciones!</div>
                <div className="final-subtitle">Terminaste el juego con { turns } turnos</div>

                <div className='final-button-container'>

                    <button className='final-button-repeat' onClick={redirectGame}>
                        <span className='final-button-text'>Repetir</span>
                    </button>

                    <button className='final-button-start' onClick={redirectHome}>
                        <span className='final-button-text'>Inicio</span>
                    </button>
                    
                </div>
            </section>
        </div>
    )
};
