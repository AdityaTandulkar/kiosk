import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import tattoo from "../../assets/tattoo.jpg";
import qr from "../../assets/qr.png";
import "./CustomTattoo.css";
import MainButton from "../../components/Main Button/MainButton";
import Transition from "../../Transition";

function CustomTattoo() {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);

  const buttons = [
    {
      img: tattoo,
      text: "NEW CUSTOM TATTOO BOOKING",
      click: () => navigate("/service-selection"),
    },
    {
      img: qr,
      text: "Have Booking? Show QR Code Here",
      click: () => setShowScanner(true),
    },
  ];

  return (
    <div className="custom-tattoo">
      <div className="custom-tattoo-heading-container">
        <h1>
          <span>NEW BOOKING</span> OR CHECKING IN FOR AN APPOINTMENT?
        </h1>
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <div className="buttons-container">
        {buttons.map((button, index) => (
          <MainButton
            key={index}
            img={button.img}
            text={button.text}
            onClickFn={button.click}
          />
        ))}
      </div>

      {showScanner && (
        <div className="qr-scanner-overlay">
          <div className="scanner-box">
            <Scanner
              onScan={(results) => {
                if (results && results[0]) {
                  const code = results[0].rawValue;
                  setScannedResult(code);
                  setShowScanner(false);
                  navigate(`/booking/${code}`);
                }
              }}
              onError={(error) => console.error("QR Scanner Error:", error)}
              constraints={{ facingMode: "environment" }}
              components={{ audio: true, finder: false }}
              className="qr-scanner"
            />
            <div className="custom-frame"></div>
          </div>

          <p className="scan-instruction">Align QR code inside the frame</p>

          <button
            className="cancel-button"
            onClick={() => setShowScanner(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {scannedResult && (
        <p className="scan-result">Scanned QR: {scannedResult}</p>
      )}
    </div>
  );
}

export default Transition(CustomTattoo);