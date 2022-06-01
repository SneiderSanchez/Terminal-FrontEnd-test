import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Initial test', () => {
  render(<App />);
  const headerElement = screen.getByText(/players latest activities/i);
  expect(headerElement).toBeInTheDocument();
});
