import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
function Main() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/booking" element={<Booking/>}/>

        </Routes>
      </main>
  );
}

export default Main;
