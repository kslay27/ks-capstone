import BookingForm from "./BookingForm";
import {useState, useEffect} from 'react';

function BookingPage(props) {
  useEffect(() => {
    console.log("Page Props: ", props);
   }, []);

  return (
      <header>
        <BookingForm 
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}/>
      </header>
  );
}

export default BookingPage;
