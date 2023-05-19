
interface Props {
    text?: string;
}

export const Spinner = ({ text='' }: Props) => {
    return (
        <div className="loader-container">
            <div className="loader"></div>
            <span>{ text }</span>
        </div>
    )
}
