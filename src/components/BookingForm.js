import {useState, useEffect} from 'react';

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const occasions = ["Birthday", "Anniversary", "Engagement", "Graduation" ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange =(e) => {
    setDate(e);
    props.dispatch(e);
  }
  
  useEffect(() => {
    console.log("Props: ", props);
   }, [props.availableTimes]);


    return (
      <header>
        <section>
          <form id='booking-form' onSubmit={handleSubmit}>
            <fieldset className="formFieldset">
              <div>
                <label htmlFor='date'>Choose a Date:</label>
                <input id='date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
              </div>

              <div>
                <label htmlFor='time'>Choose a Time:</label>
                <select id='time' value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value=''>Select a Time</option>
                  {
                    props.availableTimes.map( (time) => {
                      return(<option key={time}>{time}</option>);
                    })
                  }
                </select>
              </div>

              <div>
                <label htmlFor='guests'>Number of Guests:</label>
                <input id='guests' min='1' style={{width:"70px"}} value={guests} onChange={(e) => setGuests(e.target.value)} type='number' placeholder="2"/>
              </div>

              <div>
                <label htmlFor='occasion'>Select an Occasion:</label>
                <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                  <option value=''>Select an Occasion</option>
                  {
                    occasions.map( (event) => {
                      return(<option key={event}>{event}</option>);
                    })
                  }
                  </select>
                </div>
                <div>
                  <button className="btnBooking" type="submit" form="booking-form">Make Your Reservation</button>
                </div>
            </fieldset>
          </form>
        </section>
      </header>
  );
}

export default BookingForm;
