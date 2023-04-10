import { render, screen } from '@testing-library/react';
import Profile from './pages/profile';

test('renders learn react link', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
