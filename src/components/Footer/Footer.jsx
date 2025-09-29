import './Footer.css';
import footerImg from '../../assets/sidebar-footer-img.png';

export default function Footer({img, service, type}) {
    return (
        <div className="footer">
            <div className="footer-img-container">
                <img src={footerImg} alt="footer-img" />
            </div>

            <div className="selection-container">
                <div className="selected-item-img-container">
                    <img src={img} className='selected-item-img' alt="selected-item-img" />
                </div>

                <div className="service-type-container">
                    <h1 className="service">{service}</h1>

                    <h2 className="type">{type}</h2>
                </div>
            </div>
            
            <div className="continue-button-container">
                <button className="back-button">Continue</button>
            </div>
        </div>
    )
}