import './Sidebar.css';
import tattoo from "../../assets/tattoo.jpg";
import flashTattoo from "../../assets/flash-tattoo.png";
import coverupRework from "../../assets/coverup-rework.jpg";
import piercing from "../../assets/piercing.jpg";
import { useState } from 'react';

export default function Sidebar() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { img: tattoo, text: "Custom Tattoo", click: () => navigate("/custom-tattoo") },
        { img: flashTattoo, text: "Flash Tattoo", click: () => navigate("/flash-tattoo") },
        { img: coverupRework, text: "Coverup & Rework", click: () => navigate("/coverup-rework") },
        { img: piercing, text: "Piercing", click: () => navigate("/piercing") },
    ];

    return (
        <div className="sidebar">
            {
                services.map((service, idx) => (
                    <button
                        key={idx}
                        className={`service-button ${selectedService === idx ? "selected" : ""}`}
                        onClick={() => setSelectedService(idx)}>
                        <img src={service.img} alt={service.text} />
                        <p>{service.text}</p>
                    </button>
                ))
            }
        </div>
    )
}