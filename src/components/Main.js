import { useReducer } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Header from './Header';
import BookingPage from './BookingPage';
import BookingConfirmation from './BookingConfirmation';
function Main() {

  // Make times update between two arrays if day is even?
  const evenTimes = [
    "5:00",
    "7:00",
    "7:30",
    "8:00",
    "9:00",
    "9:15",
    "9:30",
  ]

  const oddTimes = [
    "10:00",
    "10:30",
    "11:30",
    "12:00",
    "1:00",
    "1:15",
    "1:30",
  ]

   // API was not working from script given by coursera. Making own here
  const submitAPI= function(formData) {
    return true;
  }

  const fetchAPI = function(date) {
    let day = date.getDate(); // Doesn't return exact day for some reason but times/dates update appropriately
    if(day % 2 === 0 ){
      return evenTimes;
    } else {
      return oddTimes;
    }
  }

  const initialState = {availableTimes: evenTimes};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  // Reducer function that accepts state and date value from input field
  function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))}
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
