import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="header">
      <img className='logo' src={logo} alt="header" />
    </div>
    // Header have to make dynamic, there is three types of different headers
  )
}