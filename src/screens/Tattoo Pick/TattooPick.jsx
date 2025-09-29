import { useNavigate } from 'react-router-dom';
import tattoo from '../../assets/tattoo.jpg';
import flashTattoo from '../../assets/flash-tattoo.png';
import coverupRework from '../../assets/coverup-rework.jpg';
import './TattooPick.css';
import MainButton from '../../components/Main Button/MainButton';
import Transition from '../../Transition';

function TattooPick() {
    const navigate = useNavigate();

    const buttons = [
        { img: tattoo, text: "Custom Tattoo", click: () => navigate("/custom-tattoo") },
        { img: flashTattoo, text: "FLASH TATTOO", click: () => navigate("/flash-tattoo") },
        { img: coverupRework, text: "COVERUP / REWORK TATTOO", click: () => navigate("/coverup-rework") }
    ]

    return (
        <div className="tattoo-pick">
            <div className='tattoo-pick-heading-container'>
                <h1>YOU'VE GOT OPTIONS</h1>
                <h2>Custom Tattoo, Flash Tattoo, Cover-Up & Re-Works</h2>
            </div>

            <div className="buttons-container">
                {
                    buttons.map((button, key) => (
                        <MainButton key={key} img={button.img} text={button.text} onClickFn={button.click}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Transition(TattooPick);