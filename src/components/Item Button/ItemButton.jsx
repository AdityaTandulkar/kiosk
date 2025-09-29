import './ItemButton.css';

export default function ItemButton({img, text, onClickFn}) {
    return (
        <div className="item-button">
            <button
                className={`service-button`}
                onClick={onClickFn ? onClickFn : ""}>
                <img src={img} alt={text} />
                <p>{text}</p>
            </button>
        </div>
    )
}