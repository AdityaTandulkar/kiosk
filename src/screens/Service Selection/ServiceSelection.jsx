import { useNavigate } from 'react-router-dom';
import './ServiceSelection.css';
import Traditional from "../../assets/Traditional.png";
import ColorRealism from "../../assets/Color Realism.png";
import PortraitsRealism from "../../assets/Portraits & Realism.png";
import Watercolor from "../../assets/Watercolor.png";
import Anime from "../../assets/Anime.png";
import BlackGrey from "../../assets/Black & Grey.png";
import LetteringScript from "../../assets/Lettering & Script.png";
import FineLineMacro from "../../assets/Fine Line Macro.png";
import NeoTraditional from "../../assets/Neo-Traditional.png";
import GeometricOrnamental from "../../assets/Geometric & Ornamental.png";
import Sidebar from '../../components/Sidebar/Sidebar';
import ItemButton from '../../components/Item Button/ItemButton';
import Transition from '../../Transition';
import Footer from '../../components/Footer/Footer';

function ServiceSelection() {
    const navigate = useNavigate();

    const buttons = [
        { img: Traditional, text: "Traditional", click: () => navigate("/custom-tattoo") },
        { img: ColorRealism, text: "Color Realism", click: () => navigate("/custom-tattoo") },
        { img: PortraitsRealism, text: "Portraits & Realism", click: () => navigate("/custom-tattoo") },
        { img: Watercolor, text: "Watercolor", click: () => navigate("/custom-tattoo") },
        { img: Anime, text: "Anime", click: () => navigate("/custom-tattoo") },
        { img: BlackGrey, text: "Black & Grey", click: () => navigate("/custom-tattoo") },
        { img: LetteringScript, text: "Lettering & Script", click: () => navigate("/custom-tattoo") },
        { img: FineLineMacro, text: "Fine Line Macro", click: () => navigate("/custom-tattoo") },
        { img: NeoTraditional, text: "Neo-Traditional", click: () => navigate("/custom-tattoo") },
        { img: GeometricOrnamental, text: "Geometric & Ornamental", click: () => navigate("/custom-tattoo") },
    ];

    return (
        <>
            <div className="service-selection">
                <Sidebar />

                <div className="tatto-types-container">
                    <div className='service-selection-heading-container'>
                        <div>
                            <h1>Custom Tattoos</h1>
                            <h2>Design Your Tattoo, Your Way</h2>
                        </div>
                        
                        <button className='back-button' onClick={()=>navigate(-1)}>Back</button>
                    </div>
                    
                    <div className="item-selection">
                        {
                            buttons.map((button, idx) => (
                                <ItemButton key={idx} img={button.img} text={button.text} onClickFn={button.onClickFn} />
                            ))
                        }
                    </div>
                </div>

            </div>
            
            <Footer />
        </>
    )
}

export default Transition(ServiceSelection);