import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const buttonElement1 = screen.getByText(/1/i);
  expect(buttonElement1).toBeInTheDocument();

  const buttonElement5 = screen.getByText(/5/i);
  expect(buttonElement5).toBeInTheDocument();

  const buttonElementPlus = screen.getByText(/\+/i);
  expect(buttonElementPlus).toBeInTheDocument();
});
