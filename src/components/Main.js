import { useReducer } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Header from './Header';
import BookingPage from './BookingPage';
import BookingConfirmation from './BookingConfirmation';
function Main() {
  const times = [
    "5:00",
    "7:00",
    "7:30",
    "8:00",
    "9:00",
    "9:15",
    "9:30",
  ]

  const initialState = {availableTimes: times};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const submitAPI= function(formData) {
    return true;
  }

  function updateTimes(state, date) {
    console.log("State: ", state);
    console.log("Date: ", date);
    
    return {availableTimes: times}
  }

  /* Submit Form and Navigate to Confirmation Page */
  const navigate = useNavigate();
  function submitForm(formData) {
    if(submitAPI(formData)) {
      navigate("/confirmation");
    }
  }
  return (
      <main>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
          <Route path="/confirmation" element={<BookingConfirmation/>}/>

        </Routes>
      </main>
  );
}

export default Main;
