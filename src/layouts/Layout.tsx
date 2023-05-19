import { Link } from 'react-router-dom';
import Logo from '../assets/rick-and-morty.png';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children } : Props) => {
    
    return(
        <div className='layout-container'>
            <header>
                <Link to='/home'>
                    <img className='header-img' src={ Logo } alt="Rick and Morty" />
                </Link>

                <div className='header-title'>
                    <span className='header-title-text'>Juego de memoria</span>
                </div>

            </header>

            <main>
                { children }
            </main>
        </div>
    )
}
