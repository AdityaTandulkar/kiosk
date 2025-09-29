import './MainButton.css';

export default function MainButton({ img, text, onClickFn }) {
  return (
    <div className="main-button" onClick={onClickFn ? onClickFn : ""}>
      <div className="main-button-inner">
        <div className="img-text-container">
          <img className='main-button-img' src={img} alt={text} />
          <p className="main-button-text">{text}</p>
        </div>
      </div>
    </div>
  )
}