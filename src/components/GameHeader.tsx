
interface Props {
    hits: number;
    turns: number;
}

export const GameHeader = ({ hits, turns }: Props) => {
    return (
        <section className="game-header">
            <span className="game-header-info">Aciertos { hits }</span>
            <span className="game-header-info">Turnos { turns }</span>
        </section>
    )
}
