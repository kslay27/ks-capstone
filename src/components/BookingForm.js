import {useState, useEffect} from 'react';

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const occasions = ["Birthday", "Anniversary", "Engagement", "Graduation" ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  // Updates times when date is changed
  const handleChange =(e) => {
    setDate(e);
    props.dispatch(e);
  }
  
  // Use to check if props are updated
  useEffect(() => {
   }, [props]);


    return (
      <header>
        <section>
        <h3>Complete the table reservation form:</h3>
          <form id='booking-form' aria-label="Reserve a Table" onSubmit={handleSubmit}>
            <fieldset className="formFieldset">
              <div>
                <label htmlFor='date'>Choose a Date:</label>
                <input id='date' value={date} data-testid="dateTest" onChange={(e) => handleChange(e.target.value)} type='date' required/>
              </div>

              <div>
                <label htmlFor='time'>Choose a Time:</label>
                <select id='time' data-testid="timeTest" value={time} onChange={(e) => setTime(e.target.value)} required>
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
                <input id='guests' data-testid="guestsTest" type='number' min="1" style={{width:"70px"}} value={guests} onChange={(e) => setGuests(e.target.value)} required/>
              </div>

              <div>
                <label htmlFor='occasion'>Select an Occasion:</label>
                <select id='occasion' data-testid="occasionTest" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                  <option value=''>Select an Occasion</option>
                  {
                    occasions.map( (event) => {
                      return(<option key={event} data-testid="occasionTest-option">{event}</option>);
                    })
                  }
                  </select>
                </div>
                <div>
                  <button aria-label="On Click" className="btnBooking" type="submit" form="booking-form">Make Your Reservation</button>
                </div>
            </fieldset>
          </form>
        </section>
      </header>
  );
}

export default BookingForm;
