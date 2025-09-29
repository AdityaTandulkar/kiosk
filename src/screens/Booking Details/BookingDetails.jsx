import Sidebar from '../../components/Sidebar/Sidebar';
import './BookingDetails.css';
import testImg from '../../assets/tattoo.jpg';

export default function BookingDetails() {
    return (
        <div className="booking-details">
            <Sidebar />

            <div className="booking-details-container">
                <div className='booking-details-heading-container'>
                    <div>
                        <h1>Confirm Your Custom Tattoo Details & Book Your Appointment</h1>
                    </div>

                    <button className='back-button' onClick={() => navigate(-1)}>Back</button>
                </div>

                <div className="details-container">
                    <h3 className="detail-heading">Custom Tattoo Details :</h3>

                    <div className="img-info-container">
                        <img src={testImg} alt="selected-item-img" />
                        
                        <div className="info-container">
                            <h1>Custom Tattoo</h1>

                            <p>Tattoo Option : Traditional</p>
                            <p>Size of Tattoo : Large</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}