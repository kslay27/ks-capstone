import { fireEvent, render, screen, getByTestId, getAllByTestId, toBeTruthy, toBeFalsy } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* Must run unit tests one at a time for whatever reason */

/*   test('Renders the Reservation Form', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();

    const reservationButton = screen.getByRole("button");
    fireEvent.click(reservationButton);

    const headingElementNew = screen.getByText("Complete the table reservation form:");
    expect(headingElementNew).toBeInTheDocument();
});  
 
test('Check Reservation Form with data selected', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
   const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton); 
  fireEvent.change(screen.getByTestId('dateTest'), { target: { value: "3/14/2024" } })
  fireEvent.change(screen.getByTestId('occasionTest'), { target: { value: "Birthday" } })
  fireEvent.change(screen.getByTestId('timeTest'), { target: { value: "10:00" } })
  fireEvent.change(screen.getByTestId('guestsTest'), { target: { value: 2 } })

  let options = screen.getAllByTestId('occasionTest-option')
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();

  const confirmReservationButton = screen.getByRole("button");
  fireEvent.click(confirmReservationButton);

  const headingElementNew = screen.getByText("Your reservation is complete!");
  expect(headingElementNew).toBeInTheDocument();
});  */


/* test('Check Reservation Form validation', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
   const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
  fireEvent.change(screen.getByTestId('dateTest'), { target: { value: "3/14/2024" } });
  fireEvent.change(screen.getByTestId('occasionTest'), { target: { value: "Birthday" } });
  fireEvent.change(screen.getByTestId('timeTest'), { target: { value: "10:00" } });

  let options = screen.getAllByTestId('occasionTest-option');
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();

  let requiredInput = screen.getByTestId('guestsTest');

  expect(requiredInput).toBeInvalid()
  fireEvent.change(screen.getByTestId('guestsTest'), { target: { value: 2 } });
  expect(requiredInput).toBeValid()

  const confirmReservationButton = screen.getByRole("button");
  fireEvent.click(confirmReservationButton);

  const headingElementNew = screen.getByText("Your reservation is complete!");
  expect(headingElementNew).toBeInTheDocument();
}); */