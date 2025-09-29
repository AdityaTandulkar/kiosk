import { useNavigate } from 'react-router-dom';
import ItemButton from '../../components/Item Button/ItemButton';
import Sidebar from '../../components/Sidebar/Sidebar';
import tattooSmall from "../../assets/tattoo-small.jpg";
import tattooMedium from "../../assets/tattoo-medium.jpg";
import tattooLarge from "../../assets/tattoo-large.jpg";
import '../Service Selection/ServiceSelection.css';
import Footer from '../../components/Footer/Footer';

export default function SizeSelection() {
    const navigate = useNavigate();

    const buttons = [
        { img: tattooSmall, text: "Tattoo Small", click: () => navigate("/custom-tattoo") },
        { img: tattooMedium, text: "Tattoo Medium", click: () => navigate("/custom-tattoo") },
        { img: tattooLarge, text: "Tattoo Large", click: () => navigate("/custom-tattoo") },
    ];

    return (
        <>
            <div className="size-selection">
                <Sidebar />

                <div className="tatto-size-container">
                    <div className='size-selection-heading-container'>
                        <div>
                            <h1>Custom Tattoos</h1>
                            <h2>Tell Us About Your Tattoo</h2>
                            <h3>Preferred Size of Your Tattoo</h3>
                        </div>

                        <button className='back-button' onClick={() => navigate(-1)}>Back</button>
                    </div>

                    <div className="size-selection-button">
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