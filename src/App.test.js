import { fireEvent, render, screen, getByTestId, getAllByTestId, toBeTruthy, toBeFalsy } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

 test('Renders the Reservation Form', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();

    const reservationButton = screen.getByRole("button");
    fireEvent.click(reservationButton);

    const headingElementNew = screen.getByText("Complete the table reservation form:");
    expect(headingElementNew).toBeInTheDocument();
})
 
  test('Check Reservation Form with data selected', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
  fireEvent.change(screen.getByTestId('date'), { target: { value: "3/14/2024" } })
  fireEvent.change(screen.getByTestId('select'), { target: { value: "Birthday" } })
  let options = screen.getAllByTestId('select-option')
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();

  const confirmReservationButton = screen.getByRole("button");
  fireEvent.click(confirmReservationButton);

  const headingElementNew = screen.getByText("Your reservation is complete!");
  expect(headingElementNew).toBeInTheDocument();
})