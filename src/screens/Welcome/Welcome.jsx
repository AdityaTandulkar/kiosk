import './Welcome.css';
import tattoo from '../../assets/tattoo.jpg';
import piercing from '../../assets/piercing.jpg';
import MainButton from '../../components/Main Button/MainButton';
import { useNavigate } from 'react-router-dom';
import Transition from '../../Transition';

function Welcome() {
  const navigate = useNavigate();

  const buttons = [
    {img: tattoo, text: "Tattoo", click: ()=> navigate("/tattoo-pick")},
    {img: piercing, text: "Piercing", click: ()=> navigate("/piercing-pick")}
  ]

  return (
    <div className="welcome">
      <div className='welcome-heading-container'>
        <h1>Ready To Book?</h1>
        <h2>Start With <span>Tattoo</span> or <span>Piercing</span></h2>
      </div>

      <div className="buttons-container">
        {
          buttons.map((button, key) => (
            <MainButton key={key} img={button.img} text={button.text} onClickFn={button.click} />
          ))
        }
      </div>
    </div>
  )
}

export default Transition(Welcome);