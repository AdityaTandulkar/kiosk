import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './screens/Welcome/Welcome'
import Header from './components/Header/Header';
import TattooPick from './screens/Tattoo Pick/TattooPick';
import CustomTattoo from './screens/Custom Tattoo/CustomTattoo';
import ServiceSelection from './screens/Service Selection/ServiceSelection';
import { AnimatePresence } from 'framer-motion';
import SizeSelection from './screens/Size Selection/SizeSelection';
import BookingDetails from './screens/Booking Details/BookingDetails';

function App() {

  return (
    <div className='App'>
      <Header />

      <div className="screen-wrapper">
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/tattoo-pick' element={<TattooPick />} />
            <Route path='/custom-tattoo' element={<CustomTattoo />} />
            <Route path='/service-selection' element={<ServiceSelection />} />
            <Route path='/size-selection' element={<SizeSelection />} />
            <Route path='/booking-details' element={<BookingDetails />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App